import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

type Project = {
  title: string;
  description: string;
  tags: string[];
  year: string;
  presentation: string;
  objectives: { context: string; goals: string; challenges: string; risks: string };
  steps: string[];
  actors: string;
  results: { personal: string; business: string };
  future: string;
  critique: string;
};

// Données maquettes (on branchera du JSON plus tard)
const projectsData: Record<string, Project> = {
  'gestion-rh': {
    title: 'Plateforme de gestion RH',
    description:
      "Application complète de gestion RH : recrutement, formation, évaluations.",
    tags: ['Angular', 'TypeScript', 'Material UI', 'RxJS', 'Node.js'],
    year: '2023',
    presentation:
      "Développée pour 500+ employés, centralisant les processus RH. 8 mois, équipe de 4 devs.",
    objectives: {
      context: "Outils disparates générant des erreurs et pertes de temps.",
      goals: "Solution unifiée, -40% temps administratif, UX améliorée pour RH/managers.",
      challenges: "Intégration paie, droits d'accès complexes, migration 10 ans de données.",
      risks: "Résistance au changement, performance sur gros volumes."
    },
    steps: [
      "Analyse des besoins, définition du MVP",
      "Architecture technique & choix stack",
      "Sprints de 2 semaines + démos",
      "Tests unitaires & e2e (85%)",
      "Formation utilisateurs & documentation",
      "Déploiement progressif par département"
    ],
    actors:
      "4 devs, 1 UX, 1 PO RH, collaboration avec 3 managers métier + service IT intégration.",
    results: {
      personal:
        "Montée en compétence sur archi modulaire Angular, compréhension enjeux RH, gestion complexité.",
      business:
        "Réduction 45% temps de traitement RH, satisfaction 4.2/5, économies ~120k€/an."
    },
    future:
      "Ajout d'un module formation en cours. Refonte mobile prévue.",
    critique:
      "Impliquer davantage les utilisateurs finaux en amont pour réduire les ajustements post-lancement."
  },

  // Fiches minimales pour éviter 404 lors des liens
  'ecommerce-platform': {
    title: 'Site e-commerce B2B',
    description: 'Commandes groupées, ERP, pricing spécifique.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    year: '2023',
    presentation: "Refonte B2B avec paniers multiples et intégration ERP.",
    objectives: {
      context: "Parcours acheteur éclaté, erreurs de stock.",
      goals: "Améliorer conversion et fiabilité stock.",
      challenges: "Synchro ERP, pricing multi-clients.",
      risks: "Charge trafic pics, régressions ERP."
    },
    steps: ["Audit", "MVP", "Itérations", "Recette", "Déploiement"],
    actors: "PO, 3 devs, Ops, équipe ERP.",
    results: { personal: "Stripe & SSR", business: "Conversion +18%" },
    future: "Roadmap catalogue headless.",
    critique: "Prévoir + de tests de charge."
  },

  'dashboard-analytics': {
    title: 'Dashboard analytique',
    description: 'Temps réel & exports.',
    tags: ['Angular', 'D3.js'],
    year: '2022',
    presentation: "Visualisation KPI temps réel.",
    objectives: {
      context: "Multiples sources non agrégées.",
      goals: "KPI centralisés temps réel.",
      challenges: "Perf, D3, websockets.",
      risks: "Pannes upstream."
    },
    steps: ["Schéma données", "PoC D3", "Streams", "ACL", "Exports"],
    actors: "Data + Front + Ops.",
    results: { personal: "D3 avancé", business: "Décision + rapide" },
    future: "Anomalies ML.",
    critique: "Prévoir fallback si flux HS."
  }
};

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss'
})
export class ProjectDetailComponent {
  private route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id') ?? '';
  project: Project | null = projectsData[this.id] ?? null;

  tags(p: Project) { return p.tags ?? []; }
}
