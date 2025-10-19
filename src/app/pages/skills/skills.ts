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
    { id: 'angular',        name: 'Angular',                  category: 'tech',  level: 9 },
    { id: 'typescript',     name: 'TypeScript',               category: 'tech',  level: 9 },
    { id: 'tailwind',       name: 'Tailwind CSS',             category: 'tech',  level: 8 },
    { id: 'git-ci',         name: 'Git & CI/CD',              category: 'tech',  level: 8 },
    { id: 'react',          name: 'React',                    category: 'tech',  level: 8 },
    { id: 'communication',  name: 'Communication',            category: 'human', level: 9 },
    { id: 'teamwork',       name: "Esprit d'équipe",          category: 'human', level: 9 },
    { id: 'adaptability',   name: 'Adaptabilité',             category: 'human', level: 8 },
    { id: 'problem-solving',name: 'Résolution de problèmes',  category: 'human', level: 9 },
    { id: 'leadership',     name: 'Leadership',               category: 'human', level: 7 },
  ]);

  filtered = computed(() => {
    const f = this.filter();
    return this.skills().filter(s => f === 'all' || s.category === f);
  });

  setFilter(f: SkillCategory) { this.filter.set(f); }
}
