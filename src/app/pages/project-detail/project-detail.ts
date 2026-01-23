import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

type MajorTask = {
  title: string;
  context: string;
  steps: string[];
  result: string;
  learning?: string;
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  year: string;
  logo?: string;
  presentation: string;
  objectives: { context: string; goals: string; challenges: string; risks: string };
  steps: string[];
  actors: string;
  results: { personal: string; business: string };
  future: string;
  critique: string;
  relatedSkills?: string[];
  majorTasks?: MajorTask[];
};

// Données maquettes (on branchera du JSON plus tard)
const projectsData: Record<string, Project> = {
  'portfolio': {
    title: 'Portfolio - Site Vitrine Technique',
    description: "Portfolio technique présentant mes projets et compétences avec une architecture Angular moderne.",
    tags: ['Angular', 'TypeScript', 'Tailwind CSS', 'SCSS', 'Signals', 'Standalone Components', 'GitHub Pages'],
    year: '2025-2026',
    logo: 'assets/logos/portfolio.png',
    presentation: "Ce portfolio est un projet technique à part entière. Il montre ma façon de travailler avec Angular et les bonnes pratiques frontend modernes.\n\nLe site est construit from scratch avec Angular et une architecture claire. Les composants sont réutilisables, le design est cohérent et le site est rapide. J’ai enrichi chaque page projet progressivement pour créer une structure réutilisable et facile à maintenir.",
    objectives: {
      context: "Besoin d’un portfolio différent des sites vitrines classiques, capable de montrer mes vraies compétences techniques.",
      goals: "Présenter mes projets de façon claire. Montrer ma maîtrise d’Angular, du frontend moderne et d’une architecture propre.",
      challenges: "Trouver l’équilibre entre design et performance. Garder une architecture simple et facile à maintenir.",
      risks: "Passer trop de temps sur le design ou complexifier inutilement le projet."
    },
    steps: [
      "Conception de la structure et du contenu",
      "Mise en place de l’architecture Angular",
      "Création du design system",
      "Développement des pages principales",
      "Ajout et enrichissement des pages projets",
      "Optimisations SEO et performances",
      "Mise en ligne automatique"
    ],
    actors: "Projet réalisé seul avec retours de développeurs pour améliorer la clarté et la structure.",
    results: {
      personal: "Très bonne maîtrise d’Angular moderne, de Tailwind CSS et de l’architecture frontend. Amélioration de mes compétences en UX et en structuration de projet.",
      business: "Portfolio utilisé dans toutes mes candidatures. Retours positifs sur la qualité technique, la clarté et le design."
    },
    future: "Ajout d'un système plus simple pour gérer le contenu. Amélioration continue des performances et du SEO.",
    critique: "J’aurais dû séparer les données du code dès le début pour faciliter les mises à jour. J’ai aussi passé beaucoup de temps sur le design alors qu’une version plus simple aurait suffi.",
    relatedSkills: ['angular', 'typescript', 'tailwind', 'autonomie', 'ux-ui'],
    majorTasks: [
      {
        title: "1. Architecture Angular moderne",
        context: "Créer une base propre et moderne avec Angular.",
        steps: [
          "Mise en place d’Angular",
          "Utilisation des standalone components",
          "Routing avec lazy loading",
          "Gestion simple de l’état"
        ],
        result: "Architecture claire, performante et facile à faire évoluer.",
        learning: "Une bonne architecture fait gagner du temps sur le long terme."
      },
      {
        title: "2. Design system",
        context: "Créer un design cohérent et moderne.",
        steps: [
          "Définition des couleurs et typographies",
          "Création de composants réutilisables",
          "Responsive mobile et desktop",
          "Accessibilité de base"
        ],
        result: "Design homogène sur tout le site.",
        learning: "Le design doit rester lisible avant d’être esthétique."
      },
      {
        title: "3. Pages projets réutilisables",
        context: "Présenter chaque projet de façon structurée.",
        steps: [
          "Création d’une structure commune",
          "Styles réutilisables",
          "Ajout progressif des projets"
        ],
        result: "Ajout rapide de nouveaux projets.",
        learning: "Investir au début permet d’aller plus vite ensuite."
      },
      {
        title: "4. SEO et accessibilité",
        context: "Rendre le site visible et accessible.",
        steps: [
          "Balises SEO par page",
          "Structure HTML claire",
          "Optimisation des performances"
        ],
        result: "Site rapide et accessible.",
        learning: "SEO et accessibilité doivent être pensés dès le départ."
      },
      {
        title: "5. Déploiement automatique",
        context: "Mettre le site en ligne facilement.",
        steps: [
          "Configuration GitHub Pages",
          "Automatisation du build",
          "Déploiement à chaque mise à jour"
        ],
        result: "Site toujours à jour en production.",
        learning: "L’automatisation évite les erreurs manuelles."
      }
    ]
  },

  'venalabs': {
    title: 'VenaLabs - Plateforme Crypto Learning',
    description: "Plateforme pour apprendre le Web3 et suivre des airdrops crypto avec un système de gamification.",
    tags: ['Java', 'Spring Boot', 'React', 'Next.js', 'PostgreSQL', 'REST API', 'Amplitude', 'Web3'],
    year: '2025-2026',
    logo: 'assets/logos/venalabs.png',
    presentation: "VenaLabs est une startup Web3 spécialisée dans l’apprentissage de la crypto et des airdrops. Pendant mon alternance d’un an en 2025, j’ai travaillé comme développeur fullstack. J’ai développé des fonctionnalités clés comme un système de Custom Airdrop, un leaderboard, une map de cours et un back office. J’ai aussi intégré des outils d’analytics avec Amplitude.\n\nLe Web3 et la blockchain étaient des sujets nouveaux pour moi. J’ai dû apprendre rapidement les bases de la crypto, des wallets et des transactions. Cette expérience m’a permis de progresser vite sur un domaine technique complexe.",
    objectives: {
      context: "Alternance dans une petite équipe de 2 à 3 développeurs au sein d’une startup Web3. La plateforme s’adresse surtout aux débutants qui veulent apprendre la crypto simplement tout en gagnant leurs premiers tokens.",
      goals: "Créer une plateforme Web3 simple à utiliser avec des cours, des airdrops personnalisés et de la gamification. Mettre en place un back office pour l’équipe et des outils d’analytics pour suivre le comportement des utilisateurs.",
      challenges: "Apprendre rapidement le Web3. Rendre des concepts complexes simples pour les utilisateurs. Gérer des classements et des progressions sans perdre en performance.",
      risks: "Complexité du Web3. Sécurité des données utilisateurs. Adoption par les utilisateurs débutants."
    },
    steps: [
      "Apprentissage des bases du Web3 et de la blockchain",
      "Développement du système de Custom Airdrop",
      "Création de composants sur le back office pour l’équipe",
      "Intégration des analytics avec Amplitude",
      "Mise en place de la gamification et du leaderboard"
    ],
    actors: "Équipe de 3 développeurs fullstack et l’équipe marketing. Travail en sprints avec réunions régulières, revues de code et démos.",
    results: {
      personal: "Montée en compétence en Java, Spring Boot, React et Next.js. Découverte du Web3 et de la blockchain. Amélioration de ma capacité à expliquer des sujets techniques de manière simple. Expérience concrète en analytics et gamification.",
      business: "Mise en production d’un système de Custom Airdrop, de composant sur le back office, d’un leaderboard et d’une map de cours interactive. Amélioration de l’engagement et de la rétention des utilisateurs."
    },
    future: "Les fonctionnalités développées sont toujours utilisées et maintenues par l’équipe. Cette expérience m’a donné de solides bases en fullstack et m’a ouvert au Web3, compétences utiles pour tout projet web moderne.",
    critique: "Le Web3 avait une courbe d’apprentissage très forte au début. Certains choix UX étaient trop complexes et ont dû être simplifiés après des tests utilisateurs. J’aurais dû tester plus tôt et ajouter des tests automatisés dès le départ.",
    relatedSkills: ['java', 'spring-boot', 'react', 'nextjs', 'postgresql', 'autonomie', 'teamwork'],
    majorTasks: [
      {
        title: "1. Custom Airdrop",
        context: "Permettre aux utilisateurs de créer et suivre leurs propres airdrops.",
        steps: [
          "Conception du système",
          "Création de l’API backend",
          "Développement de l’interface React",
          "Validation automatique de la progression",
          "Simplification de l’UX après tests utilisateurs"
        ],
        result: "Fonctionnalité efficace et appréciée par les utilisateurs.",
        learning: "L’UX doit être testée avant de coder pour éviter les refontes coûteuses."
      },
      {
        title: "2. Back Office",
        context: "Donner plus d’autonomie aux équipes marketing et produit.",
        steps: [
          "Analyse des besoins",
          "Création des composant admin",
          "Gestion des cours et airdrops",
          "Sécurisation des accès"
        ],
        result: "Réduction forte des demandes côté développeurs.",
        learning: "Former les utilisateurs est aussi important que développer l’outil."
      },
      {
        title: "3. Analytics avec Amplitude",
        context: "Comprendre comment les utilisateurs utilisent la plateforme.",
        steps: [
          "Définition des événements",
          "Intégration du tracking",
          "Création de dashboards"
        ],
        result: "Décisions produit basées sur les données.",
        learning: "Le tracking doit être pensé dès le début du projet."
      },
      {
        title: "4. Leaderboard",
        context: "Motiver les utilisateurs grâce à la compétition.",
        steps: [
          "Création du système de points",
          "Calcul du classement",
          "Affichage côté frontend"
        ],
        result: "Augmentation de l’engagement et de la rétention.",
        learning: "La gamification doit rester motivante pour tous les niveaux."
      },
      {
        title: "5. Map de cours",
        context: "Visualiser le parcours d’apprentissage.",
        steps: [
          "Conception de la map",
          "Gestion des prérequis",
          "Édition via le back office"
        ],
        result: "Meilleur taux de complétion des cours.",
        learning: "Les dépendances entre contenus doivent être bien contrôlées."
      }
    ]
  },

  'macway': {
    title: 'MacWay - Site E-commerce',
    description: "Site e-commerce Apple et high-tech avec comparateur produits, promotions automatiques et marketplaces.",
    tags: ['Symfony', 'PHP', 'Twig', 'MySQL', 'SCSS', 'jQuery', 'API REST'],
    year: '2022-2025',
    logo: 'assets/logos/macway.png',
    presentation: "MacWay est un site e-commerce spécialisé dans les produits Apple et high-tech. Pendant mon alternance de 2 ans, j’ai travaillé sur le développement et la maintenance du site sous Symfony. J’ai développé de nouvelles fonctionnalités, corrigé des bugs en production et intégré des services externes. J’ai travaillé en lien direct avec le chef de projet et les équipes métier.",
    objectives: {
      context: "Alternance de 2 ans dans une équipe de 2-3 développeurs sur un site e-commerce en production avec beaucoup de trafic.",
      goals: "Ajouter des fonctionnalités utiles au business, améliorer l’expérience utilisateur et assurer la stabilité du site en production.",
      challenges: "Travailler sur un projet existant, gérer les priorités entre nouvelles fonctionnalités et corrections, éviter les bugs en production.",
      risks: "Bugs impactant les ventes, erreurs de prix, problèmes de performance et dépendance aux APIs externes."
    },
    steps: [
      "Développement d’un comparateur de produits",
      "Création d’un système de promotions automatiques",
      "Mise en place de flux produits vers des marketplaces",
      "Correction de bugs critiques en production",
      "Intégration des promotions vendeurs Mirakl"
    ],
    actors: "Équipe de 2-3 développeurs, un chef de projet et les équipes marketing et commerciales. Travail quotidien avec revues de code et validations métier.",
    results: {
      personal: "Bonne maîtrise de Symfony et MySQL. Amélioration de mes compétences en débogage, performance et intégration d’APIs. Apprentissage du travail sur un site e-commerce en production.",
      business: "Nouvelles fonctionnalités en production, amélioration du taux de conversion et gain de temps pour les équipes internes."
    },
    future: "Les fonctionnalités développées sont toujours utilisées en production. Cette expérience m’a donné de solides bases en e-commerce et en développement Symfony.",
    critique: "Au début, j’utilisais une seule branche Git, ce qui posait des problèmes. J’ai appris l’importance d’un bon workflow Git et des tests sur les règles métier.",
    relatedSkills: ['symfony', 'php', 'mysql', 'autonomie', 'teamwork', 'agile-scrum'],
    majorTasks: [
      {
        title: "1. Comparateur de produits",
        context: "Permettre aux utilisateurs de comparer plusieurs produits, même de catégories différentes.",
        steps: [
          "Analyse des besoins",
          "Développement Symfony et Twig",
          "Optimisation mobile",
          "Tests et mise en production"
        ],
        result: "Comparateur utilisé par les utilisateurs et mis en avant sur le site.",
        learning: "Le mobile est prioritaire pour l’expérience utilisateur."
      },
      {
        title: "2. Promotions automatiques",
        context: "Vendre les produits peu demandés sans action manuelle.",
        steps: [
          "Définition des règles métier",
          "Calcul automatique des promotions",
          "Mise en place de tâches automatiques",
          "Tests et suivi"
        ],
        result: "Système automatique utilisé en continu.",
        learning: "Les règles métier doivent être validées avec les équipes concernées."
      },
      {
        title: "3. Flux produits marketplaces",
        context: "Diffuser les produits sur Pinterest, Meta et Awin.",
        steps: [
          "Analyse des formats attendus",
          "Génération de fichiers CSV",
          "Automatisation quotidienne",
          "Surveillance des erreurs"
        ],
        result: "Produits visibles sur plusieurs plateformes externes.",
        learning: "Une bonne organisation Git est indispensable."
      },
      {
        title: "4. Bug paniers abandonnés",
        context: "Correction d’un bug déclenchant des emails trop tôt.",
        steps: [
          "Analyse du problème",
          "Correction de la logique",
          "Tests",
          "Mise en production"
        ],
        result: "Moins d’emails inutiles et meilleure expérience client.",
        learning: "Un bon diagnostic évite des corrections inutiles."
      },
      {
        title: "5. Promotions vendeurs Mirakl",
        context: "Synchroniser les promotions avec les vendeurs tiers.",
        steps: [
          "Intégration de l’API Mirakl",
          "Calcul des promotions",
          "Gestion des erreurs",
          "Validation métier"
        ],
        result: "Promotions cohérentes sur toute la marketplace.",
        learning: "Les APIs externes doivent être gérées avec prudence."
      }
    ]
  },

  'wedriv': {
    title: 'WeDriv - Réservation VTC',
    description: "Site de réservation VTC avec calcul du prix en temps réel et paiement en ligne.",
    tags: ['React', 'TypeScript', 'Symfony', 'PHP', 'MySQL', 'Stripe', 'Google Maps API'],
    year: '2025-2026',
    logo: 'assets/logos/wedriv.png',
    presentation: "WeDriv est un site de réservation VTC que j’ai développé seul de A à Z. Il permet aux clients de réserver une course facilement : saisie des adresses, calcul du prix, choix du véhicule et paiement par carte bancaire. Un back office permet de gérer les réservations, les chauffeurs, les véhicules et les paiements.\n\nLe frontend est développé en React avec TypeScript et le backend en Symfony. Google Maps est utilisé pour calculer les distances et Stripe pour les paiements. Le site est en production et mis à jour automatiquement.",
    objectives: {
      context: "Projet personnel réalisé seul pour créer une solution VTC simple et moderne. Le site est en ligne et fonctionnel.",
      goals: "Permettre aux clients de réserver une course rapidement avec un prix clair. Donner aux administrateurs un outil complet pour gérer l’activité.",
      challenges: "Calculer le prix en temps réel avec Google Maps. Gérer les paiements Stripe de façon sécurisée. Créer une API fiable pour les réservations.",
      risks: "Erreurs d’adresses, paiements refusés, bugs en production sur de vraies réservations."
    },
    steps: [
      "Création du backend Symfony et de la base de données",
      "Intégration de Google Maps pour les distances",
      "Ajout du paiement en ligne avec Stripe",
      "Développement du back office",
      "Mise en ligne et automatisation du déploiement"
    ],
    actors: "Projet réalisé seul : conception, développement, tests et mise en production. Validation des fonctionnalités avec des professionnels du VTC.",
    results: {
      personal: "Création complète d’une application web moderne. Apprentissage des paiements en ligne, des APIs externes et du déploiement en production.",
      business: "Site en ligne avec réservation fonctionnelle, prix automatique, paiement sécurisé et back office complet. Compatible mobile, tablette et ordinateur."
    },
    future: "Le projet peut évoluer avec des abonnements, un système de fidélité ou un chat chauffeur. Cette expérience m’a permis de comprendre tout le cycle d’un site en production.",
    critique: "J’aurais dû ajouter des tests automatiques plus tôt. L’intégration Stripe a été plus complexe que prévu. La gestion du multilangue aurait dû être pensée dès le départ.",
    relatedSkills: ['react', 'typescript', 'symfony', 'php', 'mysql', 'google-maps', 'autonomie', 'ux-ui'],
    majorTasks: [
      {
        title: "1. API backend Symfony",
        context: "Gérer les réservations, les prix, les chauffeurs et les paiements.",
        steps: [
          "Conception de la base de données",
          "Création de l’API Symfony",
          "Gestion des réservations",
          "Sécurisation de l’administration",
          "Validation des données"
        ],
        result: "API stable utilisée par le site React pour toutes les actions.",
        learning: "Une bonne structure de base de données est essentielle dès le début."
      },
      {
        title: "2. Calcul des distances avec Google Maps",
        context: "Afficher le prix dès la saisie des adresses.",
        steps: [
          "Connexion à l’API Google Maps",
          "Calcul de la distance",
          "Calcul du prix selon les règles",
          "Gestion des erreurs d’adresses"
        ],
        result: "Prix affiché instantanément et saisie d’adresses plus fiable.",
        learning: "Il faut limiter les appels API pour éviter des coûts inutiles."
      },
      {
        title: "3. Paiement en ligne Stripe",
        context: "Permettre le paiement sécurisé par carte bancaire.",
        steps: [
          "Intégration Stripe côté backend",
          "Création du paiement",
          "Gestion des confirmations",
          "Gestion des erreurs de paiement"
        ],
        result: "Paiements sécurisés et réservations mises à jour automatiquement.",
        learning: "Les webhooks Stripe demandent beaucoup de tests."
      },
      {
        title: "4. Back office",
        context: "Donner aux admins un outil simple pour gérer le site.",
        steps: [
          "Création des pages admin",
          "Gestion des réservations",
          "Gestion des chauffeurs et véhicules",
          "Suivi des paiements"
        ],
        result: "Back office simple et utilisé au quotidien.",
        learning: "Les outils admin doivent être rapides et clairs."
      }
    ]
  },

  'klaridoc': {
    title: 'Klaridoc - Simplification Administrative',
    description: "Application web pour aider à comprendre facilement des documents administratifs.",
    tags: ['Python', 'React', 'TypeScript', 'AI', 'PostgreSQL', 'UX Design', 'Product Design'],
    year: '2025-2026',
    logo: 'assets/logos/klaridoc.png',
    presentation: "Klaridoc est une application en cours de conception qui aide à comprendre des documents administratifs complexes. L’objectif est de transformer des courriers et formulaires difficiles en explications simples et claires.\n\nLe projet est pensé produit avant code. J’ai travaillé sur la compréhension du problème, l’expérience utilisateur, le modèle économique et l’architecture technique avant de commencer le développement. L’application permettra d’importer un document et d’obtenir une version expliquée en langage simple avec les points importants.",
    objectives: {
      context: "Projet personnel en phase de conception. Beaucoup de personnes ont du mal à comprendre les documents administratifs, ce qui crée du stress et des erreurs.",
      goals: "Créer une application simple et rassurante pour expliquer les documents administratifs. Concevoir une bonne expérience utilisateur avant le développement.",
      challenges: "Rendre le contenu plus simple sans changer le sens. Concevoir une interface adaptée à des utilisateurs stressés.",
      risks: "Erreurs d’interprétation du texte. Complexité technique liée à l’IA. Difficulté à toucher les bonnes personnes."
    },
    steps: [
      "Recherche utilisateur et définition du besoin",
      "Conception UX et maquettes sur Figma",
      "Définition de l’architecture technique",
      "Tests et choix des outils IA",
      "Définition du modèle économique et de la roadmap"
    ],
    actors: "Projet réalisé seul. Interviews de particuliers et échanges avec des professionnels de l’accompagnement social pour valider le besoin.",
    results: {
      personal: "Montée en compétence en conception produit, UX/UI et réflexion business. Découverte des outils IA pour le traitement du texte. Apprentissage de l’importance de la phase de conception.",
      business: "Concept validé par des recherches utilisateurs. Maquettes et prototypes réalisés. Architecture technique définie. Projet prêt pour le développement."
    },
    future: "Le projet passera en phase de développement avec un MVP simple : import du document, analyse et explication en langage clair. De nouvelles fonctionnalités pourront être ajoutées ensuite.",
    critique: "J’ai appris à ne pas me précipiter dans le code. La définition du MVP a été difficile car je voulais trop de fonctionnalités. Le choix du nom et du domaine a aussi pris plus de temps que prévu.",
    relatedSkills: ['python', 'react', 'typescript', 'postgresql', 'product-design', 'ux-ui', 'autonomie'],
    majorTasks: [
      {
        title: "1. Recherche utilisateur",
        context: "Comprendre les difficultés liées aux documents administratifs.",
        steps: [
          "Questionnaires et interviews",
          "Analyse des retours",
          "Création de personas",
          "Définition des parcours utilisateurs"
        ],
        result: "Problème utilisateur clairement identifié et validé.",
        learning: "La recherche utilisateur est essentielle pour créer un produit utile."
      },
      {
        title: "2. UX et design",
        context: "Créer une interface claire et rassurante.",
        steps: [
          "Création des wireframes",
          "Design system",
          "Maquettes détaillées",
          "Tests utilisateurs"
        ],
        result: "Interface validée comme simple et compréhensible.",
        learning: "Tester l’UX avant de coder fait gagner beaucoup de temps."
      },
      {
        title: "3. Architecture technique",
        context: "Préparer une base solide pour le développement.",
        steps: [
          "Choix de la stack technique",
          "Séparation frontend et backend",
          "Définition de la base de données",
          "Préparation du déploiement"
        ],
        result: "Architecture claire et évolutive définie.",
        learning: "Il faut penser évolution sans trop complexifier."
      },
      {
        title: "4. IA et analyse de documents",
        context: "Simplifier le contenu des documents avec l’IA.",
        steps: [
          "Tests de solutions IA",
          "Création d’un prototype",
          "Amélioration des résultats"
        ],
        result: "Analyse et reformulation de documents réussies.",
        learning: "La qualité dépend beaucoup de la façon de poser la demande à l’IA."
      },
      {
        title: "5. Business model et roadmap",
        context: "Rendre le projet viable sur le long terme.",
        steps: [
          "Analyse de la concurrence",
          "Définition du modèle freemium",
          "Définition du MVP",
          "Création de la roadmap"
        ],
        result: "Vision produit claire et plan de développement défini.",
        learning: "Un projet doit être utile mais aussi viable."
      }
    ]
  },

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

  // Map des IDs de compétences vers leurs noms et logos
  private skillsInfo: Record<string, { name: string; logo?: string }> = {
    'agile-scrum': { name: 'Agile (Scrum)', logo: 'assets/logos/agile.png' },
    'angular': { name: 'Angular', logo: 'assets/logos/angular.png' },
    'autonomie': { name: 'Autonomie', logo: 'assets/logos/autonomie.png' },
    'communication': { name: 'Communication', logo: 'assets/logos/communication.png' },
    'google-maps': { name: 'Google Maps API', logo: 'assets/logos/google-maps.png' },
    'java': { name: 'Java', logo: 'assets/logos/java.png' },
    'mysql': { name: 'MySQL', logo: 'assets/logos/mysql.png' },
    'nextjs': { name: 'Next.js', logo: 'assets/logos/nextjs.png' },
    'php': { name: 'PHP', logo: 'assets/logos/php.png' },
    'postgresql': { name: 'PostgreSQL', logo: 'assets/logos/postgresql.png' },
    'product-design': { name: 'Product Design', logo: 'assets/logos/product-design.png' },
    'python': { name: 'Python', logo: 'assets/logos/python.png' },
    'react': { name: 'React', logo: 'assets/logos/react.png' },
    'spring-boot': { name: 'Spring Boot', logo: 'assets/logos/spring-boot.png' },
    'symfony': { name: 'Symfony', logo: 'assets/logos/symfony.png' },
    'tailwind': { name: 'Tailwind CSS', logo: 'assets/logos/tailwind.png' },
    'teamwork': { name: "Esprit d'équipe", logo: 'assets/logos/teamwork.png' },
    'typescript': { name: 'TypeScript', logo: 'assets/logos/typescript.png' },
    'ux-ui': { name: 'UX/UI', logo: 'assets/logos/ux-ui.png' }
  };

  tags(p: Project) { return p.tags ?? []; }

  getSkillName(skillId: string): string {
    return this.skillsInfo[skillId]?.name ?? skillId;
  }

  getSkillLogo(skillId: string): string | undefined {
    return this.skillsInfo[skillId]?.logo;
  }
}
