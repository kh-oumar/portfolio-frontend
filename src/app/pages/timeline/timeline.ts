import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

type ItemType = 'experience' | 'education' | 'certification';

interface TimelineItem {
  type: ItemType;
  date: string;
  title: string;
  organization: string;
  description: string;
  tags?: string[];
}

@Component({
  selector: 'app-timeline',
  imports: [LucideAngularModule],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss'
})
export class TimelineComponent {
  items: TimelineItem[] = [
    {
      type: 'experience',
      date: '2022 - Présent',
      title: 'Développeur Frontend Senior',
      organization: 'TechCorp Solutions',
      description:
        'Lead technique sur projets Angular complexes. Mentorat, revue de code, architecture.',
      tags: ['Angular', 'TypeScript', 'Leadership'],
    },
    {
      type: 'certification',
      date: 'Nov. 2023',
      title: 'Google Cloud Professional Developer',
      organization: 'Google Cloud',
      description:
        'Certification sur les pratiques de développement cloud-native GCP.',
    },
    {
      type: 'experience',
      date: '2020 - 2022',
      title: 'Développeur Full-Stack',
      organization: 'Digital Agency Pro',
      description:
        'Projets clients en stack MEAN, APIs et front Angular.',
      tags: ['Angular', 'Node.js', 'MongoDB'],
    },
    {
      type: 'certification',
      date: 'Juin 2021',
      title: 'Certified Scrum Developer',
      organization: 'Scrum Alliance',
      description: 'Pratiques Scrum et dev agile.',
    },
    {
      type: 'experience',
      date: '2019 - 2020',
      title: 'Développeur Frontend Junior',
      organization: 'StartupLab',
      description:
        "Interfaces réactives, bases des frameworks modernes.",
      tags: ['React', 'JavaScript', 'CSS'],
    },
    {
      type: 'education',
      date: '2016 - 2019',
      title: 'Licence Informatique',
      organization: 'Université Paris-Sud',
      description:
        "Dev logiciel, algo, BDD, réseaux. PFE : app mobile de suivi sportif.",
    },
    {
      type: 'education',
      date: '2014 - 2016',
      title: 'DUT Informatique',
      organization: 'IUT de Villetaneuse',
      description:
        'Programmation, web, gestion de projet. Stage 3 mois en entreprise.',
    },
  ];

  iconName(t: ItemType) {
    switch (t) {
      case 'experience': return 'briefcase';
      case 'education': return 'graduation-cap';
      case 'certification': return 'award';
    }
  }
  typeLabel(t: ItemType) {
    switch (t) {
      case 'experience': return 'Expérience';
      case 'education': return 'Formation';
      case 'certification': return 'Certification';
    }
  }
}
