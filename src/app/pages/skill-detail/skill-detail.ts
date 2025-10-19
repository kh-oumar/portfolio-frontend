import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

type SkillDetail = {
  name: string;
  category: 'tech' | 'human';
  level: number; // 0..10
  definition: string;
  context: string;
  proofs: string[];
  critique: string;
  evolution: string;
  relatedProjects?: string[];
};

// Mock data (on extraira plus tard en JSON/service)
const skillsData: Record<string, SkillDetail> = {
  angular: {
    name: 'Angular',
    category: 'tech',
    level: 9,
    definition:
      "Framework TypeScript pour des applications web robustes et scalables (DI, routing, formulaires, SSR...).",
    context:
      "Utilisé depuis la v8 sur des applis métier (admin, dashboards). Fort focus sur architecture modulaire et performance.",
    proofs: [
      "App de gestion RH pour 500+ utilisateurs",
      "Migration AngularJS → Angular 15",
      "Mise en place d'une architecture modulaire réutilisable"
    ],
    critique:
      "Je continue d'approfondir le state management (NgRx) et l'optimisation des grandes listes (CD, virtual scroll).",
    evolution:
      "Exploration des features récentes (control flow, signals). Objectif : référent Angular dans l'équipe sous 6 mois.",
    relatedProjects: ['gestion-rh', 'dashboard-analytics']
  },
  communication: {
    name: 'Communication',
    category: 'human',
    level: 9,
    definition:
      "Transmettre efficacement des idées techniques à des interlocuteurs variés en adaptant le niveau de discours.",
    context:
      "Interface entre équipe technique et parties prenantes métier (ateliers de cadrage, démos, CR).",
    proofs: [
      "Formations internes Angular pour 15 devs juniors",
      "Démos mensuelles pour stakeholders non-tech",
      "Rédaction de docs techniques claires"
    ],
    critique:
      "Tendance à trop détailler avec des profils non-tech — je vulgarise davantage et structure par niveaux.",
    evolution:
      "Meetups/présentations pour améliorer la prise de parole. Série d’articles techniques en préparation.",
    relatedProjects: ['gestion-rh', 'ecommerce-platform']
  }
};

@Component({
  selector: 'app-skill-detail',
  imports: [RouterLink, NgClass, LucideAngularModule],
  templateUrl: './skill-detail.html',
  styleUrl: './skill-detail.scss'
})
export class SkillDetailComponent {
  private readonly route = inject(ActivatedRoute);

  id = this.route.snapshot.paramMap.get('id') ?? '';
  skill: SkillDetail | null = skillsData[this.id] ?? null;

  // Accessibilité / styles
  badgeClass = (cat: 'tech' | 'human') =>
    cat === 'tech' ? 'bg-accent/10 text-accent border-accent/20'
      : 'bg-secondary text-secondary-foreground border-border';
}
