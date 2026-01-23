import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../shared/project-card/project-card';

type ProjectListItem = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  logo?: string;
};

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  projects: ProjectListItem[] = [
    {
      id: 'venalabs',
      title: 'VenaLabs - Crypto Learning',
      description: "Plateforme d'apprentissage Web3 et optimisation d'airdrops crypto.",
      tags: ['Java', 'Spring Boot', 'Next.js', 'React','TypeScript', 'NoSql', 'Docker'],
      year: '2025-2026',
      logo: 'assets/logos/venalabs.png'
    },
    {
      id: 'macway',
      title: 'MacWay - Site E-commerce',
      description: "Site e-commerce spécialisé Apple & high-tech avec gestion complète.",
      tags: ['Symfony', 'PHP', 'Twig', 'MySQL', 'SCSS', 'Jquery'],
      year: '2022-2025',
      logo: 'assets/logos/macway.png'
    },
    {
      id: 'wedriv',
      title: 'WeDriv - Réservation VTC',
      description: "Plateforme de réservation de chauffeurs VTC en ligne.",
      tags: ['Symfony', 'PHP', 'React', 'MySql', 'Google Maps API'],
      year: '2025-2026',
      logo: 'assets/logos/wedriv.png'
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      description: "Mon portfolio personnel pour présenter mes projets et compétences.",
      tags: ['Angular', 'TypeScript', 'Tailwind CSS', 'SCSS'],
      year: '2026',
      logo: 'assets/logos/portfolio.png'
    },
    {
      id: 'klaridoc',
      title: 'Klaridoc',
      description: "Plateforme web visant à simplifier et clarifier les documents administratifs complexes pour les utilisateurs.",
      tags: ['Python', 'React', 'TypeScript', 'AI', 'PostgreSQL', 'UX Design', 'Product Design'],
      year: '2025-2026',
      logo: 'assets/logos/klaridoc.png'
    },
  ];
}
