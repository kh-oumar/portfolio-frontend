import { Component, computed, signal } from '@angular/core';
import { SkillCardComponent, Skill } from '../../shared/skill-card/skill-card';


type SkillCategory = 'all' | 'tech' | 'human';

@Component({
  selector: 'app-skills',
  imports: [SkillCardComponent],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent  {
  filter = signal<SkillCategory>('all');

  skills = signal<Skill[]>([
    // COMPÉTENCES TECHNIQUES

    // Languages
    { id: 'typescript',     name: 'TypeScript',               category: 'tech',  level: 7, logo: 'assets/logos/typescript.png' },
    { id: 'java',           name: 'Java',                     category: 'tech',  level: 7, logo: 'assets/logos/java.png' },
    { id: 'php',            name: 'PHP',                      category: 'tech',  level: 9, logo: 'assets/logos/php.png' },
    { id: 'python',         name: 'Python',                   category: 'tech',  level: 5, logo: 'assets/logos/python.png' },

    // Frontend Frameworks
    { id: 'angular',        name: 'Angular',                  category: 'tech',  level: 7, logo: 'assets/logos/angular.png' },
    { id: 'react',          name: 'React',                    category: 'tech',  level: 7, logo: 'assets/logos/react.png' },
    { id: 'nextjs',         name: 'Next.js',                  category: 'tech',  level: 5, logo: 'assets/logos/nextjs.png' },

    // Backend Frameworks
    { id: 'symfony',        name: 'Symfony',                  category: 'tech',  level: 8, logo: 'assets/logos/symfony.png' },
    { id: 'spring-boot',    name: 'Spring Boot',              category: 'tech',  level: 7, logo: 'assets/logos/spring-boot.png' },

    // Databases
    { id: 'mysql',          name: 'MySQL',                    category: 'tech',  level: 8, logo: 'assets/logos/mysql.png' },
    { id: 'mongodb',        name: 'MongoDB',                  category: 'tech',  level: 7, logo: 'assets/logos/mongodb.png' },
    { id: 'postgresql',     name: 'PostgreSQL',               category: 'tech',  level: 6, logo: 'assets/logos/postgresql.png' },

    // CSS & Styling
    { id: 'tailwind',       name: 'Tailwind CSS',             category: 'tech',  level: 9, logo: 'assets/logos/tailwind.png' },

    // DevOps
    { id: 'docker',         name: 'Docker',                   category: 'tech',  level: 6, logo: 'assets/logos/docker.png' },

    // APIs
    { id: 'google-maps',    name: 'Google Maps API',          category: 'tech',  level: 7, logo: 'assets/logos/google-maps.png' },

    // AI & Design
    { id: 'product-design', name: 'Product Design',           category: 'tech',  level: 7, logo: 'assets/logos/product-design.png' },

    // COMPÉTENCES HUMAINES
    { id: 'agile-scrum',    name: 'Agile (Scrum)',            category: 'human', level: 8, logo: 'assets/logos/agile.png' },
    { id: 'autonomie',      name: 'Autonomie',                category: 'human', level: 8, logo: 'assets/logos/autonomie.png' },
    { id: 'ux-ui',          name: 'UX/UI',                    category: 'human', level: 7, logo: 'assets/logos/ux-ui.png' },
    { id: 'communication',  name: 'Communication',            category: 'human', level: 7, logo: 'assets/logos/communication.png' },
    { id: 'teamwork',       name: "Esprit d'équipe",          category: 'human', level: 8, logo: 'assets/logos/teamwork.png' },
  ]);

  filtered = computed(() => {
    const f = this.filter();
    return this.skills().filter(s => f === 'all' || s.category === f);
  });

  setFilter(f: SkillCategory) { this.filter.set(f); }
}
