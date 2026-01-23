import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BadgeChipComponent } from '../badge-chip/badge-chip';


export interface Skill {
  id: string;
  name: string;
  category: 'tech' | 'human';
  level: number;
  logo?: string;
}

@Component({
  selector: 'app-skill-card',
  imports: [RouterLink, BadgeChipComponent],
  template: `
  <a [routerLink]="['/skills', id]" class="block h-full">
    <div class="group hover:shadow-lg transition-shadow cursor-pointer h-full border rounded-2xl bg-card">
      <div class="p-5">
        <div class="flex items-start justify-between gap-4">
          <div class="flex items-center gap-3">
            @if (logo) {
              <img [src]="logo" [alt]="name" class="w-8 h-8 object-contain flex-shrink-0" />
            }
            <h3 class="text-lg group-hover:text-primary transition-colors m-0">{{ name }}</h3>
          </div>
          <app-badge-chip [variant]="category === 'tech' ? 'tech' : 'human'">
            {{ category === 'tech' ? 'Technique' : 'Humaine' }}
          </app-badge-chip>
        </div>

        <div class="mt-4 space-y-2">
          <div class="flex items-center justify-between text-sm">
            <span class="text-muted-foreground">Niveau</span>
            <span class="font-medium">{{ level }}/10</span>
          </div>
          <div class="w-full bg-secondary rounded-full h-2" role="presentation">
            <div
              class="bg-primary h-2 rounded-full transition-all"
              [style.width.%]="level * 10"
              role="progressbar"
              [attr.aria-valuenow]="level"
              aria-valuemin="0"
              aria-valuemax="10">
            </div>
          </div>
          <div class="text-[11px] text-muted-foreground">Échelle : 1 → 10</div>
        </div>
      </div>
    </div>
  </a>
  `,
  styleUrl: './skill-card.scss'
})
export class SkillCardComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) category!: 'tech' | 'human';
  @Input({ required: true }) level!: number;
  @Input() logo?: string;
}
