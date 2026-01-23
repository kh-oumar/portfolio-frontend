import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

type SkillAnecdote = {
  title: string;
  description: string;
  result: string;
  valueAdded: string;
  projectId: string;
};

type SkillCritique = {
  mastery: string;
  importance: string;
  acquisition?: string;
  advice: string;
};

type SkillEvolution = {
  goals: string;
  training: string;
};

type SkillDetail = {
  name: string;
  category: 'tech' | 'human';
  level: number; // 0..10
  logo?: string;

  // Section 2: Définition
  definition: string;
  context: string;
  actuality?: string;  // Optionnel: lien avec actualité

  // Section 3: Anecdotes détaillées
  anecdotes: SkillAnecdote[];

  // Section 4: Autocritique structurée
  critique: SkillCritique;

  // Section 5: Évolution structurée
  evolution: SkillEvolution;

  // Section 6: Projets associés
  relatedProjects: string[];
};

// Mock data (on extraira plus tard en JSON/service)
const skillsData: Record<string, SkillDetail> = {
  angular: {
    name: 'Angular',
    category: 'tech',
    level: 7,
    logo: 'assets/logos/angular.png',

    definition: "Framework TypeScript pour créer des applications web structurées, performantes et scalables.",
    context: "Utilisé pour le développement de mon portfolio, avec une attention particulière portée à l’architecture modulaire, à la maintenabilité et à la performance.",

    anecdotes: [
      {
        title: "Portfolio en Standalone Components",
        description: "Création du portfolio avec Angular en utilisant standalone components et signals. Architecture pensée pour être simple et évolutive.",
        result: "Excellentes performances, chargement optimisé via lazy loading.",
        valueAdded: "Application concrète des dernières features Angular avec une architecture moderne et maintenable.",
        projectId: "portfolio"
      },
    ],

    critique: {
      mastery: "Bonne maîtrise d’Angular (composants, services, routing). À l’aise avec son architecture modulaire.",
      importance: "Compétence clé de mon profil. Framework privilégié pour les applications métier robustes et maintenables.",
      acquisition: "Montée en compétence rapide grâce à TypeScript et à une bonne compréhension du réactif.",
      advice: "Soigner l’architecture dès le départ et intégrer les tests tôt pour éviter une dette technique coûteuse."
    },

    evolution: {
      goals: "Partager mon expertise et approfondir d'avantage mes connaissances sur Angular.",
      training: "Veille active sur les nouveautés Angular."
    },

    relatedProjects: ['portfolio']
  },

  typescript: {
    name: 'TypeScript',
    category: 'tech',
    level: 7,
    logo: 'assets/logos/typescript.png',

    definition: "Superset de JavaScript apportant un typage statique fort pour un code plus sûr et maintenable.",
    context: "Langage central de tous mes projets frontend et backend. Utilisé quotidiennement pour fiabiliser le code et améliorer la lisibilité.",

    anecdotes: [
      {
        title: "Architecture TypeScript stricte du Portfolio",
        description: "Mise en place d’un TypeScript en mode strict sur l’ensemble du portfolio. Modélisation précise des compétences, projets et relations.",
        result: "Aucune erreur TypeScript, autocomplétion complète et détection anticipée de nombreux bugs.",
        valueAdded: "Capacité à concevoir une base de types solide qui sécurise le projet dès la compilation.",
        projectId: "portfolio"
      },
      {
        title: "Modélisation métier avec types avancés",
        description: "Conception de types avancés pour des transactions crypto (génériques, conditional types, branded types).",
        result: "API totalement type-safe, impossible de confondre les IDs ou les entités.",
        valueAdded: "Expertise en modélisation métier via le typage pour rendre les erreurs impossibles à la compilation.",
        projectId: "venalabs"
      },
    ],

    critique: {
      mastery: "Forte maîtrise de TypeScript, du typage quotidien aux patterns avancés.",
      importance: "Compétence clé de mon profil. TypeScript est la base de tous mes projets modernes.",
      acquisition: "Montée en compétence progressive sur plusieurs années, renforcée par la pratique quotidienne.",
      advice: "Activer le mode strict dès le départ et investir dans les génériques et utility types."
    },

    evolution: {
      goals: "Approfondir le type-level programming et partager cette expertise.",
      training: "Pratique régulière de Type Challenges."
    },

    relatedProjects: ['portfolio', 'venalabs', 'wedriv']
  },

  communication: {
    name: 'Communication',
    category: 'human',
    level: 7,
    logo: 'assets/logos/communication.png',

    definition: "Capacité à expliquer des sujets techniques clairement, en adaptant le discours à l’interlocuteur.",
    context: "Rôle d’interface entre équipes techniques et métiers : cadrage, démos, réunions et partage de connaissances.",

    anecdotes: [
      {
        title: "Présentations techniques aux parties prenantes",
        description: "Animation de démos chez VenaLabs pour le reste de l'équipe, avec vulgarisation.",
        result: "Validation rapide des features et retours très positifs sur la clarté des explications.",
        valueAdded: "Traduction efficace de sujets techniques complexes en langage business, appuyée par des supports visuels.",
        projectId: "venalabs"
      },
      {
        title: "Documentation et onboarding développeurs",
        description: "Rédaction de documentation technique et de guides de contribution chez MacWay.",
        result: "Onboarding divisé par deux et documentation devenue référence interne pour l’équipe.",
        valueAdded: "Structuration claire du savoir technique et approche pédagogique orientée équipe.",
        projectId: "macway"
      },
      {
        title: "Communication en équipe distribuée",
        description: "Adaptation des pratiques de communication en remote.",
        result: "Collaboration fluide, sans blocage ni malentendu malgré la distance.",
        valueAdded: "Maîtrise des codes du travail à distance et maintien d’une bonne cohésion d’équipe.",
        projectId: "venalabs"
      }
    ],

    critique: {
      mastery: "Très bonne capacité d’adaptation du discours, avec un fort accent sur la clarté et l’écoute.",
      importance: "Compétence clé pour faire le lien entre la tech et le métier et sécuriser les projets.",
      acquisition: "Développée au fil des expériences et renforcée par les retours des équipes.",
      advice: "Aller à l’essentiel d’abord, puis détailler si nécessaire. Toujours valider la compréhension."
    },

    evolution: {
      goals: "Gagner en aisance en prise de parole publique.",
      training: "Participation à des évenements de présentation projet."
    },

    relatedProjects: ['venalabs', 'macway']
  },

  nextjs: {
    name: 'Next.js',
    category: 'tech',
    level: 5,
    logo: 'assets/logos/nextjs.png',

    definition: "Framework React full-stack intégrant SSR, SSG, API routes et optimisations automatiques.",
    context: "Utilisé sur VenaLabs pour une plateforme Web3 performante et orientée SEO.",

    anecdotes: [
      {
        title: "Backend via API Routes",
        description: "Développement d’API routes pour l’authentification, les données utilisateur et les interactions blockchain.",
        result: "Backend intégré, déploiement simplifié et API rapide.",
        valueAdded: "Capacité à concevoir une architecture full-stack simple et efficace avec Next.js.",
        projectId: "venalabs"
      }
    ],

    critique: {
      mastery: "Bonne maîtrise de Next.js : routing, API routes et optimisations natives.",
      importance: "Framework privilégié pour les projets React orientés performance et SEO.",
      acquisition: "Montée en compétence grâce à React et à une excellente documentation.",
      advice: "Choisir la bonne stratégie de rendering par page."
    },

    evolution: {
      goals: "Approfondir les Server Components et Server Actions, et l’optimisation des Core Web Vitals.",
      training: "Exploration avancée du nouveau modèle de rendering."
    },

    relatedProjects: ['venalabs']
  },

  java: {
    name: 'Java',
    category: 'tech',
    level: 7,
    logo: 'assets/logos/java.png',

    definition: "Langage orienté objet robuste et performant, largement utilisé pour les applications backend d’entreprise.",
    context: "Utilisé sur VenaLabs pour le backend Spring Boot, avec une logique métier complexe liée à la crypto et à la blockchain. Mise en place d’architectures propres et maintenables.",

    anecdotes: [
      {
        title: "Backend Spring Boot en Clean Architecture",
        description: "Développement du backend VenaLabs avec Spring Boot et une architecture hexagonale.",
        result: "API REST scalable, testable et clairement structurée, capable de gérer une forte charge.",
        valueAdded: "Maîtrise des architectures enterprise appliquées à un domaine métier complexe.",
        projectId: "venalabs"
      },
    ],

    critique: {
      mastery: "Bonne maîtrise de Java moderne et des architectures backend robustes.",
      importance: "Stack privilégiée pour les APIs complexes nécessitant performance et typage fort.",
      acquisition: "Progression continue via Spring Boot et des projets concrets comme VenaLabs.",
      advice: "Se concentrer sur les patterns d’architecture et privilégier la composition."
    },

    evolution: {
      goals: "Approfondir les éléments de performance accrue.",
      training: "Veille active et la programmation réactive."
    },

    relatedProjects: ['venalabs']
  },

  php: {
    name: 'PHP',
    category: 'tech',
    level: 9,
    logo: 'assets/logos/php.png',

    definition: "Langage serveur mature, largement utilisé pour le web et les applications backend.",
    context: "Utilisé intensivement pendant 3 ans chez MacWay et sur WeDriv avec Symfony.",

    anecdotes: [
      {
        title: "Modernisation d’un e-commerce legacy",
        description: "Refactoring progressif de modules PHP legacy vers PHP 8 avec typage strict, enums et attributs.",
        result: "Code plus performant, moins de bugs et maintenance facilitée, sans interruption du service.",
        valueAdded: "Capacité à moderniser une grosse codebase en production sans régression.",
        projectId: "macway"
      },
      {
        title: "Optimisation des performances e-commerce",
        description: "Optimisation SQL, mise en cache (Redis).",
        result: "Temps de chargement fortement réduits et amélioration de l’expérience utilisateur.",
        valueAdded: "Approche méthodique de l’analyse et de l’optimisation des performances.",
        projectId: "macway"
      },
      {
        title: "Backend Symfony pour WeDriv",
        description: "Développement d’une API backend avec Symfony et API Platform (réservations, paiements, Google Maps).",
        result: "API robuste, documentée et évolutive, avec gestion sécurisée des paiements.",
        valueAdded: "Maîtrise de Symfony moderne et intégration de services tiers.",
        projectId: "wedriv"
      }
    ],

    critique: {
      mastery: "Très bonne maîtrise de PHP moderne et expertise avancée en Symfony.",
      importance: "Compétence structurante de mon parcours professionnel.",
      acquisition: "Progression continue du PHP vers le PHP moderne en contexte de production.",
      advice: "Adopter PHP 8+ et utiliser des outils d’analyse statique."
    },

    evolution: {
      goals: "Rester à jour sur PHP et Symfony et explorer les modèles asynchrones.",
      training: "Veille technique continue et exploration des architectures."
    },

    relatedProjects: ['macway', 'wedriv']
  },

  python: {
    name: 'Python',
    category: 'tech',
    level: 5,
    logo: 'assets/logos/python.png',

    definition: "Langage lisible et polyvalent, très utilisé pour l’IA, la data et l’automatisation.",
    context: "Utilisé sur Klaridoc pour le traitement de documents par IA et pour des scripts d’automatisation et de data processing.",

    anecdotes: [
      {
        title: "Traitement IA de documents",
        description: "Création de pipelines Python pour analyser et simplifier des documents administratifs (PDF).",
        result: "Extraction fiable des informations clés et automatisation de tâches longues et répétitives.",
        valueAdded: "Capacité à combiner parsing de documents et modèles de langage dans des pipelines cohérents.",
        projectId: "klaridoc"
      },
      {
        title: "Automatisation et data processing",
        description: "Développement de scripts Python pour automatiser migrations, nettoyages de données et rapports.",
        result: "Gain de temps significatif et scripts réutilisables pour l’équipe.",
        valueAdded: "Approche pragmatique de l’automatisation et écriture de Python clair et maintenable.",
        projectId: "klaridoc"
      }
    ],

    critique: {
      mastery: "Maîtrise des bases Python et des outils data.",
      importance: "Compétence complémentaire clé pour l’IA, l’automatisation et le data processing.",
      acquisition: "Montée en compétence récente via des projets concrets orientés IA.",
      advice: "S’appuyer sur l’écosystème existantet surveiller les performances."
    },

    evolution: {
      goals: "Approfondir le machine learning et les frameworks backend modernes.",
      training: "Formation continue sur les architectures IA."
    },

    relatedProjects: ['klaridoc']
  },

  postgresql: {
    name: 'PostgreSQL',
    category: 'tech',
    level: 6,
    logo: 'assets/logos/postgresql.png',

    definition: "Base de données relationnelle robuste et extensible, reconnue pour sa fiabilité.",
    context: "Utilisée sur Klaridoc pour stocker utilisateurs, documents et métadonnées.",

    anecdotes: [
      {
        title: "Schéma de base de données Klaridoc",
        description: "Conception d’un schéma hybride SQL / JSONB pour gérer données structurées et métadonnées flexibles.",
        result: "Base évolutive, requêtes rapides et recherche full-text efficace.",
        valueAdded: "Capacité à exploiter PostgreSQL comme un SGBD relationnel flexible et performant.",
        projectId: "klaridoc"
      },
      {
        title: "Optimisation de requêtes SQL",
        description: "Analyse de requêtes lentes avec EXPLAIN ANALYZE et ajout d’index adaptés.",
        result: "Temps de réponse fortement réduits et meilleure réactivité applicative.",
        valueAdded: "Méthodologie claire pour diagnostiquer et corriger les problèmes de performance SQL.",
        projectId: "klaridoc"
      }
    ],

    critique: {
      mastery: "Bonne maîtrise du SQL et des fonctionnalités clés.",
      importance: "SGBD relationnel de référence pour mes projets modernes.",
      acquisition: "Progression continue via des cas concrets et orientés performance.",
      advice: "Indexer intelligemment et utiliser pour chaque requête critique."
    },

    evolution: {
      goals: "Approfondir l’administration et le tuning de PostgreSQL, et explorer les extensions avancées.",
      training: "Formation en administration PostgreSQL."
    },

    relatedProjects: ['klaridoc']
  },

  mongodb: {
    name: 'MongoDB',
    category: 'tech',
    level: 7,
    logo: 'assets/logos/mongodb.png',

    definition: "Base de données NoSQL orientée documents, flexible et adaptée aux schémas évolutifs.",
    context: "Utilisée sur VenaLabs pour les données utilisateurs, wallets crypto et transactions, dans un contexte Web3 en évolution rapide.",

    anecdotes: [
      {
        title: "Modélisation MongoDB pour VenaLabs",
        description: "Conception de collections adaptées au domaine crypto avec embedded documents et références selon les usages.",
        result: "Schéma flexible, performant et prêt pour la montée en charge.",
        valueAdded: "Bonne maîtrise de la modélisation NoSQL selon les patterns d’accès.",
        projectId: "venalabs"
      },
      {
        title: "Optimisation des requêtes et agrégations",
        description: "Analyse des requêtes et mise en place d’index et d’aggregation pipelines.",
        result: "Temps de réponse fortement réduits sur les dashboards et statistiques.",
        valueAdded: "Capacité à exploiter MongoDB pour des requêtes analytiques complexes.",
        projectId: "venalabs"
      }
    ],

    critique: {
      mastery: "Bonne maîtrise de MongoDB, de la modélisation aux agrégations et à l’indexation.",
      importance: "NoSQL de référence pour les projets nécessitant flexibilité et évolution rapide.",
      acquisition: "Montée en compétence via des cas concrets liés au Web3.",
      advice: "Concevoir le schéma selon les usages réels et indexer systématiquement les champs critiques."
    },

    evolution: {
      goals: "Approfondir le sharding et les architectures distribuées.",
      training: "Formation sur MongoDB Atlas, le sharding et les patterns NoSQL avancés."
    },

    relatedProjects: ['venalabs']
  },

  docker: {
    name: 'Docker',
    category: 'tech',
    level: 6,
    logo: 'assets/logos/docker.png',

    definition: "Outil de conteneurisation pour exécuter des applications de manière isolée et reproductible.",
    context: "Utilisé sur VenaLabs pour containeriser backend, frontend et bases de données via Docker Compose.",

    anecdotes: [
      {
        title: "Dockerisation de l’application",
        description: "Création d’images optimisées et orchestration de plusieurs services avec Docker Compose.",
        result: "Environnement reproductible en une commande et onboarding développeur fortement accéléré.",
        valueAdded: "Maîtrise de Docker Compose et optimisation des images avec multi-stage builds.",
        projectId: "venalabs"
      },
    ],

    critique: {
      mastery: "Maîtrise de Docker et Docker Compose, avec de solides bases en optimisation.",
      importance: "Compétence clé pour garantir la reproductibilité et simplifier le déploiement.",
      acquisition: "Apprentissage progressif consolidé par des projets full-stack containerisés.",
      advice: "Utiliser les multi-stage builds, exploiter le cache et ne jamais embarquer de secrets."
    },

    evolution: {
      goals: "Approfondir Kubernetes et les architectures cloud native.",
      training: "Formation Kubernetes et exploration des bonnes pratiques de sécurité Docker."
    },

    relatedProjects: ['venalabs']
  },

  tailwind: {
    name: 'Tailwind CSS',
    category: 'tech',
    level: 9,
    logo: 'assets/logos/tailwind.png',

    definition: "Framework CSS utility-first permettant de construire des interfaces rapidement avec des classes atomiques réutilisables.",
    context: "Utilisé sur le portfolio pour un développement rapide et une maintenance facilitée.",

    anecdotes: [
      {
        title: "Développement Rapide du Portfolio",
        description: "Utilisation de Tailwind CSS pour construire l'interface du portfolio. Configuration du design system (couleurs, espacements, typographie) dans tailwind.config.js. Création de classes custom pour les patterns récurrents.",
        result: "Développement de l'interface 3x plus rapide qu'avec CSS traditionnel.",
        valueAdded: "Maîtrise de l'approche utility-first et de la configuration Tailwind pour des projets sur mesure.",
        projectId: "portfolio"
      },
    ],

    critique: {
      mastery: "Excellente maîtrise de Tailwind CSS. Niveau avancé en configuration et extension du framework. Bonne compréhension des performances CSS.",
      importance: "Compétence frontend centrale pour mes nouveaux projets. Tailwind CSS est devenu mon approche CSS de prédilection, remplaçant les méthodologies traditionnelles pour la plupart des cas d'usage.",
      acquisition: "Apprentissage rapide favorisé par ma maîtrise préalable de CSS et SCSS. Le changement de paradigme vers utility-first a nécessité un ajustement mental mais les bénéfices en productivité sont indéniables.",
      advice: "Embrasser l'approche utility-first sans résistance - ça paraît bizarre au début mais c'est extrêmement productif. Configurer le design system dès le début (couleurs, espacements)."
    },

    evolution: {
      goals: "Explorer Tailwind CSS et ses nouveautés. Approfondir les patterns avancés.",
      training: "Veille continue sur l'écosystème Tailwind et les nouveaux plugins."
    },

    relatedProjects: ['portfolio', 'wedriv', 'venalabs']
  },

  'google-maps': {
    name: 'Google Maps API',
    category: 'tech',
    level: 7,
    logo: 'assets/logos/google-maps.png',

    definition: "API de cartographie pour afficher des cartes, calculer des itinéraires et gérer la géolocalisation.",
    context: "Utilisée sur WeDriv pour afficher les trajets VTC, calculer les distances et estimer les prix.",

    anecdotes: [
      {
        title: "Cartes et calcul d’itinéraires",
        description: "Intégration de Google Maps avec affichage interactif et calcul d’itinéraires en temps réel.",
        result: "Visualisation fluide des trajets et calcul précis des distances et des prix.",
        valueAdded: "Intégration d’APIs cartographiques complexes avec gestion des erreurs et des coûts.",
        projectId: "wedriv"
      },
      {
        title: "Autocomplete et géocodage",
        description: "Mise en place de l’autocomplete d’adresses et du géocodage pour faciliter la saisie utilisateur.",
        result: "Saisie plus rapide et fortement moins d’erreurs d’adresses.",
        valueAdded: "Amélioration notable de l’UX grâce à une saisie d’adresses fiable et intuitive.",
        projectId: "wedriv"
      }
    ],

    critique: {
      mastery: "Bonne maîtrise des principales APIs Google Maps et de leurs usages.",
      importance: "Compétence utile pour les projets liés à la mobilité et à la géolocalisation.",
      acquisition: "Montée en compétence via un projet concret nécessitant une intégration avancée.",
      advice: "Limiter et mettre en cache les appels API pour contrôler les coûts et améliorer les performances."
    },

    evolution: {
      goals: "Approfondir la visualisation géographique.",
      training: "Formation l’optimisation des coûts."
    },

    relatedProjects: ['wedriv']
  },


  'product-design': {
    name: 'Product Design',
    category: 'tech',
    level: 7,
    logo: 'assets/logos/product-design.png',

    definition: "Conception de produits numériques centrée utilisateur, de l’idée au prototype testé.",
    context: "Pratiqué sur Klaridoc pour concevoir l’expérience utilisateur complète : problématique, parcours, wireframes, maquettes et tests.",

    anecdotes: [
      {
        title: "Conception UX de Klaridoc",
        description: "Démarche complète de product design : recherche utilisateur, idéation, prototypage et tests itératifs.",
        result: "Parcours utilisateur simplifié et produit validé avant développement.",
        valueAdded: "Vision user-centric permettant de réduire les risques produit dès la phase de conception.",
        projectId: "klaridoc"
      },
    ],

    critique: {
      mastery: "Bonne compréhension du product design et des méthodes centrées utilisateur.",
      importance: "Compétence complémentaire clé pour concevoir des produits cohérents et utiles.",
      acquisition: "Montée en compétence récente via un projet concret et de la pratique itérative.",
      advice: "Partir du problème utilisateur, prototyper tôt et tester régulièrement."
    },

    evolution: {
      goals: "Approfondir la recherche utilisateur, l’accessibilité et les design systems.",
      training: "Formations en design thinking, accessibilité et design systems de référence."
    },

    relatedProjects: ['klaridoc']
  },


  react: {
    name: 'React',
    category: 'tech',
    level: 7,
    logo: 'assets/logos/react.png',

    definition: "Bibliothèque JavaScript pour créer des interfaces utilisateur basées sur des composants.",
    context: "Utilisée sur VenaLabs, WeDriv et Klaridoc pour construire des interfaces modernes et interactives.",

    anecdotes: [
      {
        title: "Architecture frontend avec React et Next.js",
        description: "Développement d’interfaces React structurées avec hooks avancés et React Query.",
        result: "UI fluide, code plus lisible et logique métier largement réutilisable.",
        valueAdded: "Capacité à structurer une architecture React moderne sans complexité inutile.",
        projectId: "venalabs"
      },
      {
        title: "State management",
        description: "Mise en place d’un state global simple.",
        result: "Bundle allégé et maintenance facilitée.",
        valueAdded: "Choix pragmatique des outils selon la complexité réelle du projet.",
        projectId: "wedriv"
      }
    ],

    critique: {
      mastery: "Bonne maîtrise de React moderne et de son écosystème.",
      importance: "Compétence frontend centrale de mon profil.",
      acquisition: "Montée en compétence progressive à travers plusieurs projets concrets.",
      advice: "Bien maîtriser les hooks et éviter l’over-optimisation prématurée."
    },

    evolution: {
      goals: "Approfondir les Server Components et le nouveau modèle de rendering.",
      training: "Veille active sur React."
    },

    relatedProjects: ['venalabs', 'wedriv']
  },

  symfony: {
    name: 'Symfony',
    category: 'tech',
    level: 8,
    logo: 'assets/logos/symfony.png',

    definition: "Framework PHP robuste pour construire des applications web structurées et scalables.",
    context: "Utilisé pendant 3 ans chez MacWay et sur WeDriv pour des APIs backend. Maîtrise de Doctrine, Twig et des principaux composants Symfony.",

    anecdotes: [
      {
        title: "Maintenance e-commerce avec Symfony",
        description: "Évolution et maintenance d’une plateforme e-commerce Symfony en production.",
        result: "Application stable, performante et facilement maintenable.",
        valueAdded: "Expérience solide sur des applications Symfony complexes en production.",
        projectId: "macway"
      },
      {
        title: "API REST avec API Platform",
        description: "Création d’une API REST avec API Platform, validation des données et sécurité JWT.",
        result: "API standardisée, documentée automatiquement et rapide à faire évoluer.",
        valueAdded: "Maîtrise d’API Platform pour développer des APIs robustes rapidement.",
        projectId: "wedriv"
      },
      {
        title: "Intégration des paiements Stripe",
        description: "Mise en place des paiements Stripe avec webhooks et traitement asynchrone.",
        result: "Système de paiement fiable et fluide pour l’utilisateur.",
        valueAdded: "Gestion rigoureuse des paiements et des cas d’erreur via Symfony Messenger.",
        projectId: "wedriv"
      }
    ],

    critique: {
      mastery: "Très bonne maîtrise de Symfony et de son écosystème.",
      importance: "Compétence backend clé, consolidée par plusieurs années en production.",
      acquisition: "Montée en compétence progressive via des projets e-commerce et API.",
      advice: "Bien maîtriser l’injection de dépendances et éviter l’over-engineering."
    },

    evolution: {
      goals: "Rester à jour sur Symfony et approfondir les architectures event-driven.",
      training: "Veille continue et formations sur Messenger et Symfony UX."
    },

    relatedProjects: ['macway', 'wedriv']
  },


  'spring-boot': {
    name: 'Spring Boot',
    category: 'tech',
    level: 7,
    logo: 'assets/logos/spring-boot.png',

    definition: "Framework Java pour créer rapidement des applications backend robustes et prêtes pour la production.",
    context: "Utilisé sur VenaLabs pour le backend avec une architecture hexagonale. Usage de Spring Data, Security (JWT) et traitements asynchrones.",

    anecdotes: [
      {
        title: "API REST Spring Boot",
        description: "Développement du backend VenaLabs avec Spring Boot et Clean Architecture.",
        result: "API robuste, testable et sécurisée avec authentification JWT.",
        valueAdded: "Bonne maîtrise de l’architecture hexagonale avec Spring Boot.",
        projectId: "venalabs"
      },
    ],

    critique: {
      mastery: "Bonne maîtrise de Spring Boot et de ses modules principaux.",
      importance: "Framework Java de référence pour mes projets backend.",
      acquisition: "Montée en compétence rapide via un projet concret en production.",
      advice: "Bien comprendre l’auto-configuration et limiter les dépendances inutiles."
    },

    evolution: {
      goals: "Approfondir le réactif et les architectures microservices.",
      training: "Veille active sur Spring."
    },

    relatedProjects: ['venalabs']
  },


  mysql: {
    name: 'MySQL',
    category: 'tech',
    level: 8,
    logo: 'assets/logos/mysql.png',

    definition: "Base de données relationnelle fiable, largement utilisée pour les applications web.",
    context: "Utilisée pendant 3 ans chez MacWay et sur WeDriv pour des bases e-commerce et réservation VTC. Forte expérience en requêtes complexes et optimisation.",

    anecdotes: [
      {
        title: "Optimisation de base e-commerce",
        description: "Analyse et optimisation de requêtes MySQL sur une base à fort volume.",
        result: "Temps de réponse fortement réduits et meilleures performances globales.",
        valueAdded: "Expertise en optimisation MySQL sur des bases de grande taille.",
        projectId: "macway"
      },
      {
        title: "Transactions et intégrité des données",
        description: "Mise en place de transactions MySQL pour garantir la cohérence métier.",
        result: "Données fiables même en cas de forte concurrence.",
        valueAdded: "Bonne compréhension des transactions et niveaux d’isolation.",
        projectId: "wedriv"
      }
    ],

    critique: {
      mastery: "Très bonne maîtrise de MySQL, de la modélisation à l’optimisation.",
      importance: "Compétence backend clé consolidée par une forte expérience en production.",
      acquisition: "Progression continue sur des bases à fort trafic.",
      advice: "Indexer intelligemment et analyser systématiquement les requêtes."
    },

    evolution: {
      goals: "Approfondir l’administration et la haute disponibilité MySQL.",
      training: "Veille active sur les dernières fonctionnalités MySQL."
    },

    relatedProjects: ['macway', 'wedriv']
  },

  'agile-scrum': {
    name: 'Agile (Scrum)',
    category: 'human',
    level: 8,
    logo: 'assets/logos/agile.png',

    definition: "Méthodologie agile basée sur des itérations courtes, la collaboration et l’amélioration continue.",
    context: "Pratiquée au quotidien chez VenaLabs et MacWay : sprints, cérémonies Scrum et travail en équipe.",

    anecdotes: [
      {
        title: "Mise en place de Scrum chez VenaLabs",
        description: "Participation active à l’adoption de Scrum : sprints, backlog, user stories et suivi via Jira.",
        result: "Meilleure visibilité projet et livraisons régulières toutes les 2 semaines.",
        valueAdded: "Implication au-delà du développement : estimation, priorisation et amélioration des process.",
        projectId: "venalabs"
      },
      {
        title: "Travail en équipe agile",
        description: "Collaboration étroite avec Product Owner, Designer et développeurs.",
        result: "Meilleur alignement tech / produit et moins de retours en arrière.",
        valueAdded: "Communication proactive et capacité à anticiper les contraintes techniques.",
        projectId: "venalabs"
      },
      {
        title: "Rétrospectives et amélioration continue",
        description: "Participation active aux rétrospectives et suivi des actions d’amélioration.",
        result: "Process d’équipe plus fluides et climat de travail sain.",
        valueAdded: "Culture du feedback et démarche d’amélioration continue.",
        projectId: "macway"
      }
    ],

    critique: {
      mastery: "Bonne maîtrise pratique de Scrum et du travail en équipe agile.",
      importance: "Compétence clé pour livrer régulièrement de la valeur en équipe.",
      acquisition: "Apprise et consolidée par la pratique quotidienne.",
      advice: "Adapter Scrum au contexte plutôt que l’appliquer de façon rigide."
    },

    evolution: {
      goals: "Approfondir d’autres méthodes agiles et développer des compétences de facilitation.",
      training: "Formation Scrum Master."
    },

    relatedProjects: ['venalabs', 'macway']
  },


  autonomie: {
    name: 'Autonomie',
    category: 'human',
    level: 8,
    logo: 'assets/logos/autonomie.png',

    definition: "Capacité à travailler de manière indépendante, prendre des initiatives et résoudre des problèmes.",
    context: "Pratiquée sur tous mes projets, notamment en remote : prise de décisions techniques, apprentissage autonome et organisation du travail.",

    anecdotes: [
      {
        title: "Projet Klaridoc mené en autonomie",
        description: "Conception et développement complet de Klaridoc en autonomie (produit, tech, IA, déploiement).",
        result: "MVP fonctionnel livré rapidement et validé par les utilisateurs.",
        valueAdded: "Capacité à mener un projet de bout en bout sans supervision.",
        projectId: "klaridoc"
      },
      {
        title: "Résolution autonome de problèmes",
        description: "Approche méthodique face aux bugs et problématiques techniques.",
        result: "Résolution de la majorité des problèmes et montée en compétence continue.",
        valueAdded: "Autonomie efficace basée sur la recherche et l’expérimentation.",
        projectId: "venalabs"
      },
      {
        title: "Autonomie en travail remote",
        description: "Organisation autonome du travail en remote avec communication proactive.",
        result: "Productivité élevée et respect constant des délais.",
        valueAdded: "Auto-organisation et fiabilité sans management direct.",
        projectId: "venalabs"
      }
    ],

    critique: {
      mastery: "Très forte autonomie sur les aspects techniques et organisationnels.",
      importance: "Compétence centrale permettant d’être efficace dans tous les contextes.",
      acquisition: "Développée par la pratique sur des projets personnels et en remote.",
      advice: "Être autonome sans s’isoler : communiquer et demander de l’aide au bon moment."
    },

    evolution: {
      goals: "Trouver le bon équilibre entre autonomie et collaboration, et transmettre cette compétence.",
      training: "Veille sur les méthodes d’apprentissage et développement de compétences en mentorat."
    },

    relatedProjects: ['venalabs', 'klaridoc', 'portfolio', 'macway', 'wedriv']
  },


  'ux-ui': {
    name: 'UX/UI',
    category: 'human',
    level: 7,
    logo: 'assets/logos/ux-ui.png',

    definition: "Conception d’expériences utilisateur et d’interfaces claires, accessibles et centrées sur l’utilisateur.",
    context: "Pratiquée sur Klaridoc et le portfolio : recherche utilisateur, wireframes, maquettes, design system et implémentation frontend.",

    anecdotes: [
      {
        title: "UX/UI de Klaridoc",
        description: "Conception complète de l’interface Klaridoc, de la recherche utilisateur aux prototypes testés.",
        result: "Interface intuitive validée par les utilisateurs et parcours simplifié.",
        valueAdded: "Approche user-centric combinant design, tests et implémentation.",
        projectId: "klaridoc"
      },
      {
        title: "Design system du portfolio",
        description: "Création d’un design system cohérent avec composants réutilisables et dark mode.",
        result: "Cohérence visuelle et développement frontend plus rapide.",
        valueAdded: "Capacité à traduire un design en code propre et maintenable.",
        projectId: "portfolio"
      },
      {
        title: "Accessibilité et responsive design",
        description: "Implémentation d’interfaces accessibles et responsive sur tous les projets.",
        result: "Interfaces utilisables sur tous les devices avec excellente accessibilité.",
        valueAdded: "Vision inclusive du design et maîtrise des bonnes pratiques d’accessibilité.",
        projectId: "portfolio"
      }
    ],

    critique: {
      mastery: "Bonne maîtrise des principes UX/UI et des outils de design.",
      importance: "Compétence clé pour concevoir des produits cohérents de bout en bout.",
      acquisition: "Développée par la pratique sur des projets concrets.",
      advice: "Penser utilisateur avant design, tester tôt et intégrer l’accessibilité dès le départ."
    },

    evolution: {
      goals: "Approfondir les animations, les micro-interactions et l’accessibilité avancée.",
      training: "Formations en animation web, accessibilité et design systems avancés."
    },

    relatedProjects: ['klaridoc', 'portfolio']
  },


  teamwork: {
    name: "Esprit d'équipe",
    category: 'human',
    level: 8,
    logo: 'assets/logos/teamwork.png',

    definition: "Capacité à collaborer efficacement, partager ses connaissances et contribuer à une dynamique d’équipe positive.",
    context: "Pratiqué au quotidien chez VenaLabs et MacWay en équipes.",

    anecdotes: [
      {
        title: "Collaboration cross-fonctionnelle",
        description: "Travail en équipe distribuée avec développeurs, Product Owner et Designer.",
        result: "Bonne cohésion d’équipe et qualité de code élevée.",
        valueAdded: "Communication claire et collaboration bienveillante favorisant la performance collective.",
        projectId: "venalabs"
      },
      {
        title: "Dynamique d’équipe positive",
        description: "Participation active aux rétrospectives et soutien des collègues.",
        result: "Ambiance de travail saine et équipe résiliente.",
        valueAdded: "Leadership informel et attitude orientée solution.",
        projectId: "venalabs"
      }
    ],

    critique: {
      mastery: "Excellente capacité à travailler en équipe et à collaborer avec des profils variés.",
      importance: "Compétence humaine clé pour maximiser l’impact collectif.",
      acquisition: "Développée et renforcée par des expériences en équipe.",
      advice: "Être à l’écoute, favoriser l’entraide et maintenir des échanges bienveillants."
    },

    evolution: {
      goals: "Renforcer les compétences en leadership et en gestion des situations complexes.",
      training: "Se Former sur la communication, la résolution de conflits et le leadership d’équipe."
    },

    relatedProjects: ['venalabs', 'macway']
  },

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

  // Map des IDs de projets vers leurs noms et logos
  private projectsInfo: Record<string, { name: string; logo?: string }> = {
    'portfolio': { name: 'Portfolio', logo: 'assets/logos/portfolio.png' },
    'venalabs': { name: 'VenaLabs', logo: 'assets/logos/venalabs.png' },
    'macway': { name: 'MacWay', logo: 'assets/logos/macway.png' },
    'wedriv': { name: 'WeDriv', logo: 'assets/logos/wedriv.png' }
  };

  // Accessibilité / styles
  badgeClass = (cat: 'tech' | 'human') =>
    cat === 'tech' ? 'bg-accent/10 text-accent border-accent/20'
      : 'bg-secondary text-secondary-foreground border-border';

  getProjectName(projectId: string): string {
    return this.projectsInfo[projectId]?.name ?? projectId;
  }

  getProjectLogo(projectId: string): string | undefined {
    return this.projectsInfo[projectId]?.logo;
  }
}
