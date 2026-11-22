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
        proof: 'ConditionAI, une IA à règles pour un Puissance 4 paramétrable (SAÉ de 1re année, en Java).',
        projects: ['puissancex'],
      },
    ],
  },
  {
    id: 'web',
    title: 'Développement web',
    intro: 'Sites, interfaces et API, en stage et en SAÉ.',
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
        proof: 'Trois API : Terres du Lion, Forme Comtoise et le serveur du blind test.',
        projects: ['terres-du-lion', 'forme-comtoise', 'blindtest-generator'],
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
        proof: 'Boutique en ligne avec Jinja et MySQL (SAÉ de 1re année).',
        projects: ['boutique-skins'],
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
        proof: 'Bases relationnelles des SAÉ : contraintes, jointures, requêtes du back-office.',
        projects: ['boutique-skins', 'terres-du-lion'],
      },
      {
        name: 'Modélisation MCD et MLD',
        icon: 'schema',
        level: 2,
        proof: 'Conception de la base d’une boutique en ligne avant le code (SAÉ de 1re année).',
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
        proof: 'Migration depuis SQLite et pipelines d’agrégation avec $lookup.',
        projects: ['forme-comtoise'],
      },
      {
        name: 'Redis',
        icon: 'redis',
        level: 1,
        proof: 'Cache avec invalidation et file d’attente pour un worker.',
        projects: ['forme-comtoise'],
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
        proof: 'Pipelines enfants, Package Registry, GitLab Pages et release sur tag.',
        projects: ['pipeline-ci-cd'],
      },
      {
        name: 'Docker Compose',
        icon: 'docker',
        level: 2,
        proof: 'API, base, cache et worker lancés en une seule commande.',
        projects: ['forme-comtoise'],
      },
      {
        name: 'Tests (JUnit 5, Cucumber, node:test)',
        icon: 'junit',
        level: 2,
        proof: 'Tests unitaires, d’acceptation et d’intégration branchés sur la CI.',
        projects: ['pipeline-ci-cd', 'puissancex'],
      },
      {
        name: 'Mesure de performance',
        icon: 'speed',
        level: 1,
        proof: 'Benchmark de charge : échauffement, p95, débit, comparaison avec et sans cache.',
        projects: ['forme-comtoise'],
      },
    ],
  },
  {
    id: 'langages',
    title: 'Langages',
    intro: 'Les autres langages vus en BUT.',
    skills: [
      {
        name: 'Java',
        icon: 'java',
        level: 2,
        proof: 'Traitement du son et IA de Puissance 4 en 1re année, synthétiseur JavaFX, API de stock de la pipeline CI/CD.',
        projects: ['audio-java', 'puissancex', 'pipeline-ci-cd'],
      },
      {
        name: 'Python',
        icon: 'python',
        level: 2,
        proof: 'Flask, script de migration, worker Celery.',
        projects: ['boutique-skins', 'forme-comtoise'],
      },
      {
        name: 'C',
        icon: 'c',
        level: 1,
        proof: 'Bases de programmation et de mémoire en 1re année.',
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
    proof: 'SAÉ à quatre ou cinq : services répartis, branches Git, fusions régulières.',
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
