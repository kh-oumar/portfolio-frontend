import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../shared/project-card/project-card';

type ProjectListItem = { id: string; title: string; description: string; tags: string[]; year: string };

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  projects: ProjectListItem[] = [
    {
      id: 'gestion-rh',
      title: 'Plateforme de gestion RH',
      description: "Application RH avec recrutement, formation et évaluations.",
      tags: ['Angular', 'TypeScript', 'RxJS', 'Node.js'], year: '2023'
    },
    {
      id: 'ecommerce-platform',
      title: 'Site e-commerce B2B',
      description: "Vente en ligne B2B, commandes groupées, intégration ERP.",
      tags: ['React', 'Next.js', 'Stripe', 'PostgreSQL'], year: '2023'
    },
    {
      id: 'dashboard-analytics',
      title: 'Dashboard analytique',
      description: "Visualisation de données temps réel et exports.",
      tags: ['Angular', 'D3.js', 'WebSocket', 'Node.js'], year: '2022'
    },
    {
      id: 'mobile-app',
      title: "Application mobile hybride",
      description: "Suivi d'activité sportive, géoloc, stats, partage.",
      tags: ['Ionic', 'Angular', 'Capacitor', 'Firebase'], year: '2022'
    },
    {
      id: 'design-system',
      title: 'Design System entreprise',
      description: "Lib de composants réutilisables + documentation.",
      tags: ['Storybook', 'React', 'Tailwind CSS', 'TypeScript'], year: '2024'
    },
  ];
}
