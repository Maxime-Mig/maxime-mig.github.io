import type { IconName } from '../lib/icons';

export type Level = 1 | 2 | 3;

export const levelLabels: Record<Level, string> = {
  1: 'Notions',
  2: 'Pratiqué en projet',
  3: 'Maîtrisé',
};

export interface Skill {
  name: string;
  icon: IconName;
  level: Level;
  proof: string;
  projects?: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  intro: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'jeu-video',
    title: 'Jeu vidéo',
    intro: 'Surtout avec Godot, pour mon jeu Fortune Cookie.',
    skills: [
      {
        name: 'Godot 4 et GDScript',
        icon: 'godot',
        level: 3,
        proof: 'Fortune Cookie : jeu complet en 3D, interface, sauvegardes, traductions.',
        projects: ['fortune-cookie'],
      },
      {
        name: 'Game design et équilibrage',
        icon: 'casino',
        level: 2,
        proof: 'Boucle de jeu, économie exponentielle, rebirth, et un joueur automatique pour tester l’équilibrage.',
        projects: ['fortune-cookie'],
      },
      {
        name: 'Steamworks (GodotSteam)',
        icon: 'steam',
        level: 1,
        proof: 'Succès et langue récupérés depuis Steam, sans rendre le jeu dépendant du client.',
        projects: ['fortune-cookie'],
      },
      {
        name: 'Blender',
        icon: 'blender',
        level: 1,
        proof: 'Préparation et rendu des modèles de cookies utilisés dans le jeu.',
        projects: ['fortune-cookie'],
      },
      {
        name: 'IA de jeu',
        icon: 'smart_toy',
        level: 2,
        proof: 'ConditionAI, une IA à règles pour un Puissance 4 paramétrable, en Java.',
        projects: ['puissancex'],
      },
    ],
  },
  {
    id: 'web',
    title: 'Développement web',
    intro: 'Sites, interfaces et API, en stage et en projets universitaires.',
    skills: [
      {
        name: 'HTML et CSS',
        icon: 'html',
        level: 3,
        proof: 'Thème WordPress Good Geek écrit de zéro, pages responsives, accessibilité.',
        projects: ['stage-good-geek'],
      },
      {
        name: 'JavaScript et TypeScript',
        icon: 'typescript',
        level: 2,
        proof: 'Front Vue et API Express en TypeScript, serveur temps réel Socket.IO.',
        projects: ['terres-du-lion', 'blindtest-generator'],
      },
      {
        name: 'Vue 3',
        icon: 'vue',
        level: 2,
        proof: 'Terres du Lion (Pinia, Tailwind CSS) et BlindTest Generator.',
        projects: ['terres-du-lion', 'blindtest-generator'],
      },
      {
        name: 'Node.js et Express',
        icon: 'nodejs',
        level: 2,
        proof: 'L’API de Terres du Lion et le serveur du blind test.',
        projects: ['terres-du-lion', 'blindtest-generator'],
      },
      {
        name: 'PHP et WordPress',
        icon: 'wordpress',
        level: 2,
        proof: 'Thème sur mesure, champs personnalisés, appels aux API Twitch et YouTube.',
        projects: ['stage-good-geek'],
      },
      {
        name: 'Python et Flask',
        icon: 'flask',
        level: 2,
        proof: 'Deux sites en 1re année, avec Jinja et MySQL : une boutique en ligne et une location de vélos.',
        projects: ['boutique-skins', 'velocampus'],
      },
    ],
  },
  {
    id: 'donnees',
    title: 'Données',
    intro: 'Bases relationnelles, MongoDB et cache.',
    skills: [
      {
        name: 'SQL (MySQL, MariaDB)',
        icon: 'mysql',
        level: 2,
        proof: 'Contraintes, jointures, totaux et requêtes d’administration dans mes projets universitaires.',
        projects: ['boutique-skins', 'velocampus', 'terres-du-lion'],
      },
      {
        name: 'Modélisation MCD et MLD',
        icon: 'schema',
        level: 2,
        proof: 'Conception de la base d’une boutique en ligne avant le code.',
        projects: ['boutique-skins'],
      },
      {
        name: 'Prisma',
        icon: 'prisma',
        level: 2,
        proof: 'Schéma, évolutions de tables et données de démonstration de Terres du Lion.',
        projects: ['terres-du-lion'],
      },
      {
        name: 'MongoDB',
        icon: 'mongodb',
        level: 2,
        proof: 'En cours de 3e année : migration depuis SQLite et pipelines d’agrégation avec $lookup.',
      },
      {
        name: 'Redis',
        icon: 'redis',
        level: 1,
        proof: 'En cours de 3e année : cache avec invalidation et file d’attente pour un worker.',
      },
    ],
  },
  {
    id: 'devops',
    title: 'Qualité et DevOps',
    intro: 'Versions, intégration continue, conteneurs et tests.',
    skills: [
      {
        name: 'Git et GitHub',
        icon: 'git',
        level: 3,
        proof: 'Branches, pull requests et fusions sur tous mes projets, seul ou en équipe.',
        projects: ['fortune-cookie', 'terres-du-lion'],
      },
      {
        name: 'GitLab CI/CD',
        icon: 'gitlab',
        level: 2,
        proof: 'En cours de 3e année : pipelines enfants, Package Registry, GitLab Pages et release sur tag.',
      },
      {
        name: 'Docker Compose',
        icon: 'docker',
        level: 2,
        proof: 'Base MySQL de Terres du Lion, et en cours une API, sa base, son cache et un worker lancés en une commande.',
        projects: ['terres-du-lion'],
      },
      {
        name: 'Tests (JUnit 5, Cucumber, node:test)',
        icon: 'junit',
        level: 2,
        proof: 'Tests d’acceptation du véhicule autonome, tests unitaires de PuissanceX, et tests branchés sur une CI en cours de 3e année.',
        projects: ['vehicule-autonome', 'puissancex'],
      },
      {
        name: 'Mesure de performance',
        icon: 'speed',
        level: 1,
        proof: 'En cours de 3e année : benchmark avec échauffement, p95, débit, et comparaison avec et sans cache.',
      },
    ],
  },
  {
    id: 'langages',
    title: 'Langages',
    intro: 'Les autres langages vus en cours de BUT.',
    skills: [
      {
        name: 'Java',
        icon: 'java',
        level: 2,
        proof: 'Traitement du son et IA de Puissance 4 en 1re année, modèle et tests du véhicule autonome en 3e année.',
        projects: ['pauvocodeur', 'puissancex', 'vehicule-autonome'],
      },
      {
        name: 'Python',
        icon: 'python',
        level: 2,
        proof: 'Flask en 1re année, puis scripts de migration, worker Celery et analyse de données en 3e année.',
        projects: ['boutique-skins', 'velocampus'],
      },
      {
        name: 'C',
        icon: 'c',
        level: 1,
        proof: 'Pointeurs et mémoire en 1re année, puis processus (fork, signaux, threads) et serveurs avec sockets en 2e année.',
      },
      {
        name: 'C++',
        icon: 'cplusplus',
        level: 1,
        proof: 'Interfaces Qt en 2e année, avec une carte et des routes à dessiner, puis capteurs et LED sur ESP32 en 3e année.',
      },
      {
        name: 'C# et Unity',
        icon: 'csharp',
        level: 1,
        proof: 'En cours de 2e année : TD Unity et un jeu multijoueur en réseau avec FishNet (monstres, points d’apparition, serveur dédié).',
      },
      {
        name: 'Kotlin',
        icon: 'kotlin',
        level: 1,
        proof: 'Applications Android en Jetpack Compose en 2e année : ViewModel, appel d’API avec Retrofit, base locale Room.',
      },
      {
        name: 'Swift',
        icon: 'swift',
        level: 1,
        proof: 'Application iOS en SwiftUI en 2e année, pour suivre son temps de jeu par plateforme, avec des statistiques.',
      },
      {
        name: 'Bash',
        icon: 'bash',
        level: 1,
        proof: 'Scripts de lancement et d’installation de mes projets, et étapes de pipelines CI.',
      },
    ],
  },
];

export interface SoftSkill {
  name: string;
  proof: string;
}

export const softSkills: SoftSkill[] = [
  {
    name: 'Autonomie',
    proof: 'Seul développeur du site Good Geek pendant neuf semaines, sur un outil que je découvrais.',
  },
  {
    name: 'Écoute du besoin',
    proof: 'Débrief, liste de tâches, puis maquettes validées avec l’équipe avant l’intégration.',
  },
  {
    name: 'Travail en équipe',
    proof: 'Projets universitaires de deux à cinq : parties réparties, branches Git, fusions régulières.',
  },
  {
    name: 'Persévérance',
    proof: 'La partie multimédia du stage a demandé plusieurs essais avant de trouver une logique claire.',
  },
  {
    name: 'Curiosité',
    proof: 'Veille sur daily.dev et dev.to, et une étude de marché avant de coder mon jeu.',
  },
  {
    name: 'Esprit d’entreprendre',
    proof: 'Dossier de création du Studio Fortune Cookies, avec étude de marché et feuille de route.',
  },
  {
    name: 'Communication',
    proof: 'Présentations régulières de l’avancement pendant le stage et documentation de mes projets.',
  },
  {
    name: 'Anglais technique (C1)',
    proof: 'Documentation et veille en anglais, et un jeu traduit en anglais.',
  },
];
