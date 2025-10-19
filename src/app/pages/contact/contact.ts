import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, LucideAngularModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  readonly apiBase = 'http://localhost:8080/api'; // centralise l’URL (on passera en env prod plus tard)

  pending = signal(false);
  success = signal<string | null>(null);
  error = signal<string | null>(null);

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  submit() {
    this.success.set(null);
    this.error.set(null);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set('Veuillez corriger les champs requis.');
      return;
    }
    this.pending.set(true);
    this.http.post(`${this.apiBase}/contact`, this.form.getRawValue())
      .subscribe({
        next: () => {
          this.success.set("Message envoyé ! Merci, je vous répondrai rapidement.");
          this.form.reset({ name: '', email: '', subject: '', message: '' });
        },
        error: (err) => {
          console.error(err);
          this.error.set("Une erreur est survenue. Réessayez plus tard.");
        }
      }).add(() => this.pending.set(false));
  }

  hasError(ctrl: string, type: string) {
    const c = this.form.controls[ctrl as keyof typeof this.form.controls];
    return c.touched && c.hasError(type);
  }
}
