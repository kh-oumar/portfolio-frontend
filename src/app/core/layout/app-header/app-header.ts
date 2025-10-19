import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, MenuIcon, XIcon } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './app-header.html'
})
export class AppHeaderComponent {
  mobileOpen = false;

  readonly Menu = MenuIcon;
  readonly X = XIcon;

  nav = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Compétences', href: '/skills' },
    { name: 'Réalisations', href: '/projects' },
    { name: 'Parcours', href: '/experience' },
    { name: 'Contact', href: '/contact' },
  ];
}
