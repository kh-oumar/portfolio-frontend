import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-home',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  // Technologies principales
  mainTechnologies = [
    { id: 'angular', name: 'Angular', logo: 'assets/logos/angular.png' },
    { id: 'react', name: 'React', logo: 'assets/logos/react.png' },
    { id: 'typescript', name: 'TypeScript', logo: 'assets/logos/typescript.png' },
    { id: 'java', name: 'Java', logo: 'assets/logos/java.png' },
    { id: 'php', name: 'PHP', logo: 'assets/logos/php.png' },
    { id: 'python', name: 'Python', logo: 'assets/logos/python.png' },
    { id: 'docker', name: 'Docker', logo: 'assets/logos/docker.png' },
    { id: 'postgresql', name: 'PostgreSQL', logo: 'assets/logos/postgresql.png' }
  ];

  // Projets en vedette
  featuredProjects = [
    {
      id: 'venalabs',
      title: 'VenaLabs',
      description: 'Plateforme d\'apprentissage Web3 et optimisation d\'airdrops crypto',
      tags: ['Java', 'Spring Boot', 'Next.js', 'React', 'MongoDB'],
      logo: 'assets/logos/venalabs.png'
    },
    {
      id: 'macway',
      title: 'MacWay',
      description: 'Site e-commerce spécialisé Apple & high-tech avec gestion complète',
      tags: ['Symfony', 'PHP', 'MySQL', 'SCSS'],
      logo: 'assets/logos/macway.png'
    },
    {
      id: 'wedriv',
      title: 'WeDriv',
      description: 'Plateforme de réservation de chauffeurs VTC en ligne',
      tags: ['Symfony', 'PHP', 'React', 'Google Maps API'],
      logo: 'assets/logos/wedriv.png'
    }
  ];

  // Statistiques
  stats = [
    { value: '21', label: 'Compétences', icon: 'target' },
    { value: '5', label: 'Projets réalisés', icon: 'briefcase' },
    { value: '3+', label: 'Ans d\'expérience', icon: 'calendar' }
  ];
}
