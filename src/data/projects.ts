import type { ImageMetadata } from 'astro';
import type { Hue } from './hues';

import fcBoutique from '../assets/projects/fortune-cookie/boutique.png';
import fcCarnet from '../assets/projects/fortune-cookie/carnet.png';
import fcArbre from '../assets/projects/fortune-cookie/arbre-bonus.png';
import fcSucces from '../assets/projects/fortune-cookie/succes.png';
import fcPrix from '../assets/projects/fortune-cookie/etude-prix.png';
import ggReseaux from '../assets/projects/good-geek/page-reseaux.png';
import ggAgenda from '../assets/projects/good-geek/page-agenda.png';
import ggMaquettes from '../assets/projects/good-geek/maquette-resultat.png';
import ggBooster from '../assets/projects/good-geek/editeur-booster.png';
import btSalon from '../assets/projects/blindtest-generator/salon.png';
import btAccueil from '../assets/projects/blindtest-generator/accueil.png';
import btBuzzer from '../assets/projects/blindtest-generator/buzzer.png';
import btAToi from '../assets/projects/blindtest-generator/a-toi.png';
import tlCarte from '../assets/projects/terres-du-lion/carte.png';
import tlQuiz from '../assets/projects/terres-du-lion/stats-quiz.png';
import tlBoutique from '../assets/projects/terres-du-lion/stats-boutique.png';
import fcRapport from '../assets/projects/forme-comtoise/rapport.png';

export type Category = 'jeu' | 'web' | 'donnees' | 'devops' | 'audio';

export const categoryLabels: Record<Category, string> = {
  jeu: 'Jeu vidéo',
  web: 'Web',
  donnees: 'Données',
  devops: 'DevOps et qualité',
  audio: 'Audio',
};

export interface Shot {
  src: ImageMetadata;
  alt: string;
  caption: string;
}

export interface Track {
  src: string;
  title: string;
  text: string;
}

export interface Project {
  slug: string;
  title: string;
  kind: string;
  categories: Category[];
  featured: boolean;
  period: string;
  setting: string;
  team: string;
  tagline: string;
  summary: string;
  description: string[];
  features: string[];
  role: { intro: string; items?: string[] };
  stack: string[];
  challenges: { problem: string; solution: string }[];
  learned?: string[];
  next?: string[];
  technical?: string[];
  links?: { label: string; href: string }[];
  linkNote?: string;
  /** Couleur du projet, sur sa page et dans les listes. */
  hue: Hue;
  cover?: Shot;
  /** Objet du jeu montré à la place de la capture (src/assets/objets). */
  objet?: string;
  gallery?: Shot[];
  tracks?: Track[];
  /** Extrait de code réel, affiché dans « Détails techniques ». */
  code?: { label: string; lang: 'yaml' | 'ts' | 'js' | 'java' | 'python'; content: string };
  /**
   * Projet retiré du site sans être supprimé : la consigne demande un nombre restreint
   * de projets. Passer à false (ou supprimer la ligne) pour le republier.
   */
  archived?: boolean;
}

const allProjects: Project[] = [
  {
    slug: 'fortune-cookie',
    hue: 'corail',
    title: 'Fortune Cookie',
    kind: 'Projet personnel, Studio Fortune Cookies',
    categories: ['jeu'],
    featured: true,
    period: 'Depuis septembre 2026',
    setting: 'Premier jeu du Studio Fortune Cookies, le studio que je prépare pour ma dernière année de BUT',
    team: 'Seul',
    tagline: 'Mon premier jeu, un jeu incrémental en 3D où l’on casse des fortune cookies.',
    summary:
      'Jeu incrémental en 3D que je développe seul avec Godot 4. On casse des fortune cookies pour gagner des pièces et acheter des outils de plus en plus puissants.',
    description: [
      'Fortune Cookie est le premier jeu que je développe pour mon futur studio. Le joueur casse des fortune cookies posés sur une table. Chaque cookie rapporte des pièces et libère un papier de fortune, qui peut l’aider ou au contraire le gêner.',
      'Avec les pièces, on achète des outils de plus en plus absurdes : le doigt, les baguettes, le rouleau à pâtisserie, puis le dauphin, la baleine et enfin le trou noir. Quand la progression ralentit, le rebirth remet la partie à zéro en échange de bonus permanents, choisis dans un arbre.',
      'Je veux le vendre sur Steam, sans publicité ni microtransaction. Avant de commencer à coder, j’ai donc fait une étude de marché, avec des chiffres, pour choisir le prix et le contenu à prévoir.',
    ],
    features: [
      'Table en 3D avec cookies cliquables, miettes et papiers qui sortent à chaque cassure',
      '8 types de cookies (doré, arc-en-ciel, fossile, cosmique…) aux comportements différents',
      '15 outils à débloquer, chacun avec sa chaîne d’améliorations',
      '224 papiers de fortune, bons, neutres, mauvais ou vides, qui modifient la partie',
      '7 lieux (cuisine, restaurant chinois, bureau, pique-nique, casino, autel, bloc opératoire) avec leurs propres règles',
      'Rebirth et arbre de 23 bonus permanents répartis en 6 branches',
      'Boutique en ticket de caisse, carnet d’histoire à spirale, 38 succès rangés par thème',
      'Sauvegardes multiples et jeu traduit en français, anglais et chinois simplifié',
    ],
    role: {
      intro:
        'Je fais tout seul : le game design, la programmation en GDScript, l’intégration des modèles 3D, l’interface, l’équilibrage, la traduction et l’étude de marché. Même seul, je travaille avec des branches et des pull requests pour garder un historique propre.',
    },
    stack: ['Godot 4', 'GDScript', 'Blender', 'GodotSteam', 'Steamworks', 'Git et GitHub'],
    challenges: [
      {
        problem: 'Les cookies sont en 3D et ont des formes irrégulières, et le clic touchait parfois la table au lieu du cookie.',
        solution: 'J’ai changé la zone de clic pour qu’elle suive le volume de chaque cookie au lieu du plan de la table.',
      },
      {
        problem: 'Le jeu ne devait pas planter quand Steam n’est pas lancé, pour pouvoir le tester facilement et le vendre ailleurs plus tard.',
        solution:
          'J’ai écrit un petit autoload, SteamBridge, qui ne charge Steam que si le module GodotSteam est présent. Sinon, les appels sont ignorés sans erreur et les succès débloqués sont mis en attente.',
      },
      {
        problem: 'Choisir le prix de vente du jeu.',
        solution:
          'J’ai construit un modèle qui estime les ventes et le revenu net selon le prix, en comptant la part de Steam, la TVA et les remboursements, à partir de jeux comparables. Il conseille un prix entre 3,99 € et 4,99 €.',
      },
      {
        problem: 'Tester l’équilibrage demande des heures de jeu, et il faut recommencer à chaque modification.',
        solution:
          'J’ai programmé un joueur automatique de débogage. Il joue une partie accélérée (clics, achats, papiers, rebirths) et prend des captures, sans toucher à la sauvegarde du joueur.',
      },
    ],
    learned: [
      'Réfléchir au jeu comme à un produit, avec un prix, un public et un contenu, et pas seulement comme à du code.',
      'Isoler une dépendance externe comme Steam derrière une petite interface.',
      'Écrire mes propres outils de test quand le jeu devient trop long pour être testé à la main.',
    ],
    next: [
      'Créer la page Steam, préparer une démo et faire tester le jeu à des joueurs.',
      'Sortir le jeu avec le Studio Fortune Cookies, si j’obtiens le statut d’étudiant-entrepreneur.',
      'Commencer les recherches pour le deuxième jeu, un RPG roguelite en 2D jouable à plusieurs.',
    ],
    technical: [
      'Godot 4.7, GDScript typé, scènes séparées pour chaque élément d’interface.',
      'Données du jeu (cookies, outils, lieux, papiers, succès, arbre de bonus) dans des fichiers JSON, textes dans des CSV de traduction.',
      'Succès et langue récupérés via GodotSteam, appelé par Engine.get_singleton pour compiler même sans le module.',
      'Export Windows avec préréglage et icône du jeu.',
    ],
    linkNote: 'Le dépôt est privé car le jeu n’est pas encore sorti. Je peux montrer le code et une démo en entretien.',
    cover: {
      src: fcBoutique,
      alt: 'Capture du jeu Fortune Cookie : une table avec des cookies et la boutique ouverte en forme de ticket de caisse',
      caption: 'La table de jeu, avec la boutique rangée dans son tiroir en forme de ticket de caisse.',
    },
    gallery: [
      {
        src: fcCarnet,
        alt: 'Carnet d’histoire à spirale ouvert sur deux pages',
        caption: 'Le carnet d’histoire, avec un chapitre sur deux pages.',
      },
      {
        src: fcArbre,
        alt: 'Arbre des bonus de rebirth en forme de fortune cookies reliés entre eux',
        caption: 'L’arbre des bonus de rebirth, avec une bulle d’aide au survol.',
      },
      {
        src: fcSucces,
        alt: 'Page des succès du jeu, rangés par thème dans le carnet',
        caption: 'Les succès, rangés par thème et synchronisés avec Steam.',
      },
      {
        src: fcPrix,
        alt: 'Graphique de l’étude de marché : courbes de ventes et de revenu net selon le prix du jeu',
        caption: 'Étude de prix : ventes et revenu net estimés selon le prix de vente.',
      },
    ],
  },
  {
    slug: 'stage-good-geek',
    hue: 'soleil',
    title: 'Stage chez Good Geek',
    kind: 'Stage de 2e année',
    categories: ['web'],
    featured: true,
    period: '7 avril – 5 juin 2026 (9 semaines)',
    setting: 'Good Geek, boutique de pop culture : figurines, cartes à collectionner, mangas, occasion',
    team: 'Seul sur le site, suivi par la responsable informatique, dans une équipe de 3 personnes',
    tagline: 'Création d’un site WordPress de communication pour une boutique de pop culture, pendant mon stage de deuxième année.',
    summary:
      'En stage, j’ai créé seul le site WordPress d’une boutique de pop culture, avec un thème sur mesure, un agenda et la détection des lives Twitch et YouTube.',
    description: [
      'Good Geek est une boutique de pop culture qui vend des figurines, des jeux de cartes à collectionner, des mangas, de l’épicerie et des produits d’occasion. Elle voulait un site de communication, séparé de sa boutique en ligne, pour publier ses actualités, ses événements et ses vidéos, et pour relayer ses réseaux.',
      'Au départ, ma mission portait sur le site boutique, mais il était déjà trop avancé pour de vraies évolutions. Après le premier point avec l’équipe, elle est devenue la création complète d’un nouveau site WordPress, avec un thème écrit de zéro.',
      'J’ai d’abord fait les maquettes à partir des attentes de l’équipe, puis je les ai intégrées page par page en montrant régulièrement l’avancement pour faire valider chaque étape.',
    ],
    features: [
      'Thème WordPress sur mesure : accueil, actualités, modèle d’article, agenda, multimédia, réseaux',
      'Indicateur « en direct / hors ligne » dans l’en-tête, alimenté par les API Twitch et YouTube',
      'Boosters façon cartes à collectionner : on ouvre le paquet sur l’accueil pour découvrir des articles',
      'Éditeur de boosters dans l’administration : calques, positions, polices, effets et aperçu en direct',
      'Agenda en frise avec des billets détaillés : lieu, date, horaires, ajout au calendrier',
      'Champs personnalisés pour que l’équipe modifie les pages sans toucher au code',
      'Pages responsives, du téléphone au grand écran',
    ],
    role: {
      intro: 'J’étais le seul développeur sur le site, du premier point avec l’équipe jusqu’aux dernières corrections. Je me suis occupé de :',
      items: [
        'transformer les demandes de l’équipe en liste de tâches classées par priorité ;',
        'concevoir les maquettes et les faire évoluer avec les retours ;',
        'écrire le thème (PHP, CSS, JavaScript) et les réglages d’administration ;',
        'connecter le site à Twitch et YouTube ;',
        'présenter l’avancement à l’équipe et faire les corrections demandées.',
      ],
    },
    stack: ['WordPress', 'PHP', 'JavaScript', 'CSS', 'API Twitch', 'API YouTube Data', 'XAMPP'],
    challenges: [
      {
        problem: 'La partie multimédia devait réunir vidéos, images et articles de formats différents sans devenir une page désordonnée.',
        solution:
          'J’ai défini des règles de répartition à partir des catégories, des images et des extraits, avec un affichage de secours quand un contenu manque.',
      },
      {
        problem: 'Twitch et YouTube ne répondent pas de la même façon, et une panne de leur côté ne doit pas casser le site.',
        solution:
          'Les deux réponses sont converties dans un même format. Si un identifiant manque, si la requête prend trop de temps ou si la réponse est invalide, le site affiche simplement « hors ligne ». Le statut est gardé en cache 30 secondes pour ne pas appeler les API à chaque page vue.',
      },
      {
        problem: 'Je ne connaissais pas WordPress au début du stage.',
        solution:
          'J’ai commencé par les pages simples pour comprendre le fonctionnement des modèles de page. Avec le recul, j’aurais dû tester plus tôt les parties dont je n’étais pas sûr, et c’est ce que je fais maintenant.',
      },
    ],
    learned: [
      'Comprendre ce que veut un client et le découper en tâches concrètes.',
      'Faire un site que des personnes qui ne codent pas peuvent modifier elles-mêmes.',
      'Montrer mon travail tôt et souvent, pour avoir les retours avant qu’il soit trop tard pour changer.',
    ],
    technical: [
      'Requêtes WordPress avec WP_Query, données d’articles via get_post_meta, get_the_category, get_the_post_thumbnail_url.',
      'Échappement systématique des sorties avec esc_html, esc_url et esc_attr.',
      'Twitch : jeton d’application obtenu à partir des identifiants, puis interrogation de la chaîne. YouTube : clé d’API et identifiant de chaîne pour chercher une diffusion en direct.',
      'Développement local sous XAMPP, tests dans plusieurs navigateurs et tailles d’écran.',
    ],
    linkNote: 'Le code appartient à l’entreprise, je ne peux donc montrer que des captures.',
    cover: {
      src: ggReseaux,
      alt: 'Page Réseaux du site Good Geek avec l’indicateur de live « hors ligne » dans l’en-tête',
      caption: 'La page Réseaux développée. En haut à droite, l’indicateur de live affiche « hors ligne ».',
    },
    gallery: [
      {
        src: ggMaquettes,
        alt: 'Comparaison entre mes maquettes et les pages développées pour les pages Réseaux et Agenda',
        caption: 'Mes maquettes (à gauche) et les pages développées (à droite). La structure est restée la même, les contenus ont été précisés.',
      },
      {
        src: ggAgenda,
        alt: 'Page Agenda du site Good Geek : frise verticale d’événements présentés comme des billets',
        caption: 'L’agenda, une frise d’événements présentés comme des billets.',
      },
      {
        src: ggBooster,
        alt: 'Éditeur de booster dans l’administration WordPress : tableau des calques, réglages et aperçu',
        caption: 'L’éditeur de boosters. Chaque calque se règle dans le tableau et s’affiche tout de suite dans l’aperçu.',
      },
    ],
  },
  {
    slug: 'terres-du-lion',
    hue: 'menthe',
    title: 'Terres du Lion',
    kind: 'SAÉ de 2e année',
    categories: ['web', 'donnees'],
    featured: true,
    period: 'Septembre 2025 – avril 2026',
    setting: 'SAÉ de BUT2 à l’IUT Nord Franche-Comté',
    team: 'Équipe de 5 étudiants',
    tagline: 'Une application web pour un événement médiéval, réalisée à cinq en deuxième année.',
    summary:
      'Application web faite à cinq pour un événement médiéval (carte, quêtes, boutique). Je me suis occupé des quiz, des statistiques et de la gestion de compte.',
    description: [
      'Terres du Lion est une application web pour un événement médiéval. Les visiteurs, appelés aventuriers, trouvent les lieux sur une carte, réservent des animations, achètent dans les échoppes et font des quêtes. Les prestataires gèrent leurs produits et leurs événements, et les administrateurs suivent l’ensemble.',
      'Nous étions cinq sur un monorepo Nx, avec un front Vue 3 et une API Express en TypeScript, Prisma et MySQL. Chacun avait ses propres services, les miens sont détaillés plus bas. Sur les sept mois du projet, j’ai fait 108 commits.',
    ],
    features: [
      'Carte interactive des lieux et des événements (Leaflet)',
      'Quêtes avec suivi de progression et quiz',
      'Échoppes, panier, commandes et retrait par QR code',
      'Réservation d’événements, avec types et caractéristiques (accès PMR, point d’eau…)',
      'Espaces aventurier, prestataire et administrateur',
      'Interface en français et en anglais, API documentée avec Swagger',
    ],
    role: {
      intro: 'Mes contributions principales :',
      items: [
        'le service de quiz complet et ses statistiques ;',
        'les statistiques de la boutique, des utilisateurs, des lieux, et la refonte des statistiques globales ;',
        'la gestion de compte : routes, services et middleware (mot de passe, e-mail, nom), réinitialisation du mot de passe par e-mail ;',
        'la gestion des événements, leurs types et leurs caractéristiques ;',
        'le service de contact, des traductions, la documentation Swagger et l’équilibrage de l’économie du site.',
      ],
    },
    stack: ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind CSS', 'Node.js', 'Express', 'Prisma', 'MySQL', 'Swagger', 'Nx', 'Docker'],
    challenges: [
      {
        problem: 'Travailler à cinq sur le même dépôt sans se gêner.',
        solution:
          'Nous avons séparé les services côté API et créé une branche par fonctionnalité (par exemple pour les quiz), fusionnée une fois terminée. Un mode « mock » permettait aussi de développer le front sans lancer le back-end.',
      },
      {
        problem: 'Permettre de modifier son mot de passe ou son e-mail de façon sécurisée.',
        solution:
          'Un middleware vérifie l’utilisateur connecté avant chaque route de compte, et la réinitialisation du mot de passe passe par un e-mail de confirmation.',
      },
      {
        problem: 'Proposer des statistiques utiles à chaque rôle.',
        solution:
          'Les calculs sont faits par l’API, puis affichés selon le rôle. Un prestataire voit ses ventes et ses événements, un administrateur voit l’ensemble du site.',
      },
    ],
    learned: [
      'Lire et compléter le code des autres dans un projet qui grandit.',
      'Penser à la sécurité dès l’écriture des routes (authentification, vérifications, messages d’erreur).',
    ],
    technical: [
      'Monorepo Nx : front Vue 3 (Vite, Pinia, Tailwind CSS 4) et API Express en TypeScript.',
      'Prisma avec MySQL (base lancée avec Docker Compose), données de démonstration par scripts de seed.',
      'Authentification par jeton, mots de passe hachés, routes de compte protégées par middleware.',
      'Documentation de l’API avec Swagger UI.',
    ],
    links: [{ label: 'Dépôt GitHub', href: 'https://github.com/gh-Constant/SAE_Project_BUT2' }],
    cover: {
      src: tlCarte,
      alt: 'Carte isométrique de Terres du Lion : château, village, forêt et repères des lieux',
      caption: 'La carte de l’événement, avec les échoppes et les services.',
    },
    gallery: [
      {
        src: tlQuiz,
        alt: 'Statistiques des quiz côté administrateur : nombre de quiz, de tentatives et score moyen',
        caption: 'Les statistiques des quiz, que j’ai faites. Les chiffres viennent des données de démonstration.',
      },
      {
        src: tlBoutique,
        alt: 'Statistiques de la boutique côté administrateur : commandes, chiffre d’affaires et panier moyen',
        caption: 'Les statistiques de la boutique, avec les mêmes données de démonstration.',
      },
    ],
  },
  {
    slug: 'forme-comtoise',
    hue: 'ciel',
    title: 'Forme Comtoise',
    kind: 'Projet de module, BUT3',
    categories: ['donnees', 'devops'],
    featured: true,
    period: 'Septembre – octobre 2026',
    setting: 'Module « Nouvelles bases de données », 3e année de BUT',
    team: 'Seul',
    tagline: 'Un projet de module en troisième année : migration d’une base SQLite vers MongoDB, API, cache Redis et rapports PDF.',
    summary:
      'Back-end d’un réseau fictif de salles de sport. J’ai migré la base SQLite vers MongoDB, puis ajouté une API, un cache Redis et des rapports PDF sous Docker.',
    description: [
      'Forme Comtoise est un réseau fictif de clubs de sport. Sa base SQLite ne suffisait plus. Il fallait la migrer vers MongoDB, proposer une API pour les plannings, les adhérents et les réservations, et produire des rapports d’activité à partir de plusieurs années de passages en salle.',
      'Tout se lance avec une seule commande Docker Compose. La migration s’exécute puis s’arrête, l’API démarre et le worker attend les demandes de rapport. L’API compte 17 routes et les données sont réparties dans 5 collections.',
    ],
    features: [
      'Migration Python vers 5 collections (clubs, formules, adhérents, coachs, séances), relançable sans créer de doublons',
      'API Express et Mongoose : planning sur sept jours, réservations, administration, statistiques',
      'Statistiques calculées par des pipelines d’agrégation MongoDB avec $lookup',
      'Cache Redis de 120 secondes sur les lectures, vidé à chaque écriture, désactivable par variable d’environnement',
      'Rapports PDF asynchrones : l’API répond tout de suite, un worker Python et Celery fait le calcul',
      'Benchmark de charge : 20 clients de 20 requêtes, avec moyenne, écart-type, p95, échecs et débit',
      'Collection Postman et tests d’intégration',
    ],
    role: {
      intro: 'Projet individuel. J’ai fait la modélisation, la migration, l’API, le cache, le worker, le benchmark et la mise en conteneurs.',
    },
    stack: ['Node.js 22', 'Express', 'Mongoose', 'MongoDB', 'Redis', 'Python', 'Celery', 'Docker Compose', 'Postman'],
    challenges: [
      {
        problem: 'Après une réservation, le planning gardé en cache n’était plus à jour.',
        solution:
          'Chaque écriture supprime les clés de cache concernées. Les lectures passent par le cache, mais les données de référence restent celles de MongoDB.',
      },
      {
        problem: 'Un rapport sur plusieurs années de données ne doit pas bloquer l’API.',
        solution:
          'L’API répond 202 avec un identifiant et place la demande dans une file Redis. Le worker Celery génère le PDF, et le client suit le statut avant de le télécharger.',
      },
      {
        problem: 'Mesurer le vrai gain apporté par le cache.',
        solution:
          'J’ai ajouté des requêtes d’échauffement et des clients simultanés, regardé le p95 en plus de la moyenne, puis refait exactement la même mesure avec le cache désactivé.',
      },
    ],
    learned: [
      'Prévoir l’invalidation du cache en même temps que le cache, et pas après.',
      'Regarder le p95 et pas seulement la moyenne, qui cache les requêtes lentes.',
    ],
    next: ['Remplacer KEYS par SCAN pour l’invalidation, car KEYS bloque Redis quand le nombre de clés augmente.'],
    technical: [
      'Rapport : visiteurs et passages, durée moyenne et médiane des visites, pics de présence, taux d’occupation, cartes utilisées dans deux clubs en moins de 40 minutes, abonnés actifs sans passage, comparaison avec l’année précédente.',
      'Clés de cache construites à partir de l’URL demandée, durée de vie de 120 secondes.',
      'Données sources montées en lecture seule dans les conteneurs.',
    ],
    linkNote: 'Projet de module, je peux montrer le code sur demande.',
    cover: {
      src: fcRapport,
      alt: 'Première page du rapport de fréquentation généré : résumé chiffré, passages par club et pic de présence en barres',
      caption: 'Un rapport généré par le worker, qui résume plus d’un million de passages club par club.',
    },
  },
  {
    slug: 'pipeline-ci-cd',
    hue: 'lilas',
    objet: 'bras-robot',
    title: 'Pipeline CI/CD GitLab',
    kind: 'TP de module, BUT3',
    categories: ['devops'],
    featured: false,
    period: 'Novembre 2026',
    setting: 'Module d’automatisation, 3e année de BUT',
    team: 'Seul',
    tagline: 'Un TP de troisième année : une pipeline GitLab CI/CD pour deux services qui communiquent.',
    summary:
      'Pipeline GitLab CI/CD pour deux services, en Java et en Node.js, avec des pipelines enfants, des tests d’intégration et une release automatique sur tag.',
    description: [
      'Le dépôt contient deux services qui communiquent, une API de stock en Java et une API de commandes en Node.js qui retire du stock. Le but était qu’une modification d’un service lance sa construction et ses tests, puis vérifie que l’ensemble fonctionne toujours.',
      'La pipeline principale lance une pipeline enfant seulement pour les dossiers modifiés. Un job d’intégration déploie ensuite les versions publiées des deux services pour tester leurs API ensemble. Enfin, un site GitLab Pages est publié avec les téléchargements, la documentation et les résultats des tests.',
    ],
    features: [
      'Pipelines enfants par composant, déclenchées seulement si leur dossier a changé',
      'Étapes construction, tests, paquet, documentation et publication dans le Package Registry',
      'Tests d’intégration de bout en bout sur les versions publiées',
      'Site GitLab Pages : paquets, documentation et résultats des tests',
      'Release automatique sur un tag de version',
      'Tests d’acceptation Cucumber d’un TP précédent intégrés à la chaîne',
    ],
    role: { intro: 'TP individuel. J’ai conçu toute la chaîne et les deux services de démonstration.' },
    stack: ['GitLab CI/CD', 'Java 17', 'Maven', 'JUnit 5', 'Node.js 22', 'Express', 'Cucumber', 'GitLab Pages'],
    challenges: [
      {
        problem: 'Éviter de tout reconstruire à chaque commit.',
        solution:
          'Chaque composant a sa propre pipeline enfant, lancée par une règle sur les fichiers modifiés. Sur un tag, tout est reconstruit pour publier une version complète.',
      },
      {
        problem: 'Tester les services ensemble, et pas seulement chacun de son côté.',
        solution:
          'Le job d’intégration démarre les versions publiées des deux services puis appelle leurs API. Les tests portent donc sur ce qui sera livré, et non sur le code local.',
      },
      {
        problem: 'L’instance GitLab de l’IUT n’a pas de Container Registry.',
        solution: 'J’ai publié et récupéré les composants depuis le Package Registry, qui lui est disponible.',
      },
    ],
    technical: [
      'trigger: include pour les pipelines enfants, avec strategy: depend pour que la suite ne se lance que si l’enfant réussit.',
      'rules: changes par dossier, et rules: if $CI_COMMIT_TAG pour les versions.',
      'Tests unitaires JUnit 5 côté Java, node:test côté Node.',
    ],
    code: {
      label: 'Extrait du fichier .gitlab-ci.yml du projet : la pipeline enfant du service Java ne se lance que si son dossier a changé, ou sur un tag de version.',
      lang: 'yaml',
      content: [
        'stock-api:',
        '  stage: composants',
        '  trigger:',
        '    include: stock-api/.gitlab-ci.yml',
        '    strategy: depend',
        '  rules:',
        '    - if: $CI_COMMIT_TAG',
        '    - changes:',
        '        - stock-api/**/*',
      ].join('\n'),
    },
    linkNote: 'Dépôt hébergé sur le GitLab de l’IUT, non public.',
  },
  {
    slug: 'blindtest-generator',
    hue: 'rose',
    title: 'BlindTest Generator',
    kind: 'Projet personnel',
    categories: ['web', 'jeu'],
    featured: false,
    period: 'Novembre 2025 – mars 2026',
    setting: 'Projet personnel, pour jouer entre amis',
    team: 'Seul',
    tagline: 'Un blind test multijoueur en temps réel, fait pour jouer entre amis.',
    summary:
      'Blind test multijoueur en temps réel. On crée un salon, les autres joueurs le rejoignent avec un code, et le premier qui buzze a 15 secondes pour répondre.',
    description: [
      'J’ai créé BlindTest Generator pour organiser des blind tests entre amis sans préparer de playlist à la main. Un joueur crée un salon, les autres le rejoignent avec un code, puis la partie se joue en direct. Un extrait se lance, et le premier qui buzze a 15 secondes pour répondre.',
      'Le serveur garde l’état de chaque salon et l’envoie à tous les joueurs avec Socket.IO. Un joueur qui recharge sa page retrouve la partie là où elle en était.',
    ],
    features: [
      'Salons avec code, pseudo et avatar',
      'Buzzer verrouillé pour le premier qui appuie, 15 secondes pour répondre',
      'Réglages de partie : thème, nombre de questions, durée des extraits',
      'Morceaux classés par thème et par difficulté dans une base SQLite',
      'Volume des morceaux harmonisé avec ffmpeg',
      'Nouvelle partie dans le même salon, sans tout recréer',
    ],
    role: { intro: 'Projet personnel. J’ai fait la conception, le serveur temps réel, l’interface et les scripts qui préparent les morceaux.' },
    stack: ['TypeScript', 'Node.js', 'Express', 'Socket.IO', 'SQLite', 'Vue 3', 'Tailwind CSS', 'Vite', 'ffmpeg'],
    challenges: [
      {
        problem: 'Plusieurs joueurs buzzent presque en même temps.',
        solution:
          'C’est le serveur qui décide. Le premier événement reçu verrouille le buzzer pour tout le salon et les suivants sont ignorés. Le buzzer se réinitialise à la question suivante.',
      },
      {
        problem: 'Recharger la page ne doit pas faire perdre la partie.',
        solution:
          'L’identifiant du joueur est gardé dans le navigateur. À son retour, le serveur lui renvoie l’état du salon, le temps restant et l’état du buzzer.',
      },
    ],
    technical: [
      'Événements Socket.IO : création et entrée dans un salon, lancement, buzzer, minuteur, réglages, nouvelle partie.',
      'Normalisation du volume avec le filtre loudnorm de ffmpeg (−14 LUFS).',
      'Front Vue 3 avec Vue Router et un composable qui centralise l’état de la partie.',
    ],
    links: [{ label: 'Dépôt GitHub', href: 'https://github.com/Maxime-Mig/BlindTestGenerator' }],
    cover: {
      src: btSalon,
      alt: 'Salon de BlindTest Generator : code du salon, paramètres de la partie et trois joueurs connectés',
      caption: 'Le salon, avec le code à partager, les réglages de la partie et les joueurs déjà arrivés.',
    },
    gallery: [
      {
        src: btAccueil,
        alt: 'Accueil de BlindTest Generator : avatar en pixel art, champ du pseudo, boutons Créer une partie et Rejoindre',
        caption: 'L’accueil. On choisit un avatar en pixel art et un pseudo, puis on crée un salon ou on en rejoint un avec son code.',
      },
      {
        src: btBuzzer,
        alt: 'Écran de jeu : barre du temps restant et grand buzzer orange',
        caption: 'Pendant l’extrait, le temps restant défile et le buzzer attend le premier joueur.',
      },
      {
        src: btAToi,
        alt: 'Écran du joueur qui a buzzé : compte à rebours, bouton vert « À toi ! » et champ de réponse',
        caption: 'Le premier qui buzze a 15 secondes pour taper sa réponse, les autres sont bloqués.',
      },
    ],
  },
  {
    slug: 'puissancex',
    hue: 'soleil',
    archived: true,
    title: 'PuissanceX',
    kind: 'SAÉ de 1re année',
    categories: ['jeu'],
    featured: false,
    period: 'Avril – juin 2025',
    setting: 'SAÉ de BUT1 à l’IUT Nord Franche-Comté',
    team: 'Équipe de 5 étudiants',
    tagline: 'Un Puissance 4 paramétrable en Java, avec plusieurs intelligences artificielles.',
    summary:
      'Puissance 4 paramétrable (taille de la grille, nombre de jetons à aligner) en Java. J’ai conçu ConditionAI, une IA à règles qui cherche le coup gagnant et bloque celui de l’adversaire.',
    description: [
      'PuissanceX reprend le Puissance 4 en le rendant paramétrable : nombre de lignes et de colonnes, nombre de jetons à aligner, mode de jeu et difficulté. Le jeu se joue en console, en Java, sur le framework Boardifier imposé par la SAÉ, avec une architecture MVC.',
      'Plusieurs IA peuvent s’affronter : un Minimax avec heuristiques, et ConditionAI, l’IA à règles que j’ai écrite.',
    ],
    features: [
      'Modes humain contre humain, humain contre IA et IA contre IA',
      'Grille et condition de victoire paramétrables',
      'IA Minimax avec heuristiques',
      'ConditionAI : coup gagnant, blocage de l’adversaire, plateau simplifié',
      'Tests unitaires avec JUnit 5',
    ],
    role: {
      intro: 'J’ai écrit ConditionAI de bout en bout, puis travaillé sur le menu du jeu.',
    },
    stack: ['Java 17', 'Maven', 'Boardifier', 'JUnit 5', 'MVC'],
    challenges: [
      {
        problem: 'Une IA réactive sans explorer tout l’arbre des coups.',
        solution:
          'Des règles appliquées dans l’ordre sur une copie simplifiée du plateau : gagner si c’est possible, sinon bloquer le coup gagnant adverse, sinon jouer un coup utile.',
      },
    ],
    links: [{ label: 'Dépôt GitHub', href: 'https://github.com/gh-Constant/SAE_PuissanceX' }],
  },
  {
    slug: 'boutique-skins',
    hue: 'menthe',
    archived: true,
    title: 'Boutique de skins',
    kind: 'SAÉ de 1re année',
    categories: ['web', 'donnees'],
    featured: false,
    period: 'Janvier – avril 2025',
    setting: 'SAÉ de BUT1 : base de données, développement web et gestion de projet',
    team: 'Équipe de 4 étudiants',
    tagline: 'Une boutique en ligne Flask et MySQL, avec déclinaisons, stock et back-office.',
    summary:
      'Site e-commerce de skins de jeu vidéo en Flask et MySQL. J’ai réalisé l’affichage des articles et du panier, les déclinaisons avec gestion du stock et une partie du back-office.',
    description: [
      'Une boutique en ligne de skins du jeu Counter-Strike, construite du modèle de données (MCD, MLD) jusqu’au site : un front-office pour les clients et un back-office pour l’administration.',
    ],
    features: [
      'Catalogue avec filtres',
      'Déclinaisons d’un même article, avec affichage « rupture de stock » quand le stock est vide',
      'Panier et commandes',
      'Back-office : ajout et modification d’articles, suivi des commandes et de leur état',
      'Visualisation du stock',
    ],
    role: {
      intro: 'Mes parties :',
      items: [
        'l’affichage des articles et du panier, et les filtres ;',
        'les déclinaisons et la gestion du stock ;',
        'l’ajout et la modification d’articles côté administration ;',
        'la visualisation du stock.',
      ],
    },
    stack: ['Python', 'Flask', 'Jinja', 'MySQL', 'SQL', 'HTML', 'CSS'],
    challenges: [
      {
        problem: 'Un panier cohérent avec les déclinaisons et le stock.',
        solution:
          'Refonte de la table du panier pour enregistrer la déclinaison choisie, contrôle des quantités par rapport au stock, et affichage « rupture de stock » quand il atteint zéro.',
      },
    ],
    links: [{ label: 'Dépôt GitHub', href: 'https://github.com/amintt2/S2_SAE_345' }],
  },
  {
    slug: 'audio-java',
    hue: 'ciel',
    archived: true,
    title: 'Audio en Java : Pauvocodeur et synthétiseur',
    kind: 'SAÉ de 1re année et TD de 3e année',
    categories: ['audio'],
    featured: false,
    period: 'Novembre 2024 – janvier 2025, puis automne 2026',
    setting: 'SAÉ de BUT1 (Pauvocodeur) et TD de programmation multimédia en BUT3 (synthétiseur)',
    team: 'En binôme pour le Pauvocodeur, seul pour le synthétiseur',
    tagline: 'Traiter le son à la main : changer la hauteur d’une voix, ajouter de l’écho, fabriquer des voyelles.',
    summary:
      'Deux projets audio en Java : le Pauvocodeur, qui rend une voix plus grave ou plus aiguë sans changer sa durée, et un synthétiseur additif de voyelles avec une interface JavaFX.',
    description: [
      'Le Pauvocodeur change la hauteur d’un enregistrement sans changer sa durée. Le son est d’abord rééchantillonné, ce qui modifie la hauteur mais aussi la vitesse. Il est ensuite découpé en séquences de 100 millisecondes que l’on recolle pour retrouver la durée d’origine. Chaque version améliore les raccords, et un écho peut être ajouté.',
      'Le synthétiseur additif fabrique des voyelles à partir d’une fréquence fondamentale et de trois formants réglables, avec une interface JavaFX qui reste fluide pendant le calcul.',
    ],
    features: [
      'Rééchantillonnage pour changer la hauteur',
      'Recollage simple, puis avec chevauchement, puis avec recherche du meilleur raccord par intercorrélation',
      'Effet d’écho',
      'Synthétiseur : fréquence fondamentale et trois formants réglables, contrôle F1 < F2 < F3',
      'Calcul et lecture dans un fil d’exécution dédié : l’interface ne se fige jamais',
    ],
    role: {
      intro:
        'Pauvocodeur : j’ai écrit l’effet d’écho (trois versions), participé à l’intercorrélation et documenté le code ; mon binôme a écrit l’essentiel du cœur du vocodeur. Synthétiseur : travail individuel.',
    },
    stack: ['Java', 'JavaFX', 'Java Sound', 'FFT'],
    challenges: [
      {
        problem: 'Des clics audibles entre les séquences recollées.',
        solution:
          'Faire se chevaucher les séquences, puis chercher, dans une petite fenêtre, le décalage où les deux signaux se ressemblent le plus (intercorrélation, accélérée par FFT).',
      },
      {
        problem: 'Une interface qui se fige pendant le calcul du son.',
        solution:
          'Calcul et lecture lancés dans une tâche JavaFX exécutée par un exécuteur à un seul fil : la fenêtre reste réactive et deux lectures ne se superposent jamais.',
      },
    ],
    links: [{ label: 'Dépôt GitHub du Pauvocodeur', href: 'https://github.com/TimotheSandt/SAE1.01-1.02' }],
    tracks: [
      { src: '/audio/pauvocodeur-original.mp3', title: 'Enregistrement d’origine', text: 'Le mot « l’informatique », sans traitement.' },
      {
        src: '/audio/pauvocodeur-resampled.mp3',
        title: '1. Rééchantillonné',
        text: 'Hauteur multipliée par 0,7 : la voix est plus grave… mais aussi plus lente.',
      },
      { src: '/audio/pauvocodeur-simple.mp3', title: '2. Recollage simple', text: 'La durée d’origine revient, avec des clics entre les séquences.' },
      { src: '/audio/pauvocodeur-simpleover.mp3', title: '3. Avec chevauchement', text: 'Les séquences se fondent : moins de clics.' },
      {
        src: '/audio/pauvocodeur-simpleovercross.mp3',
        title: '4. Chevauchement et intercorrélation',
        text: 'Chaque raccord est placé là où les signaux se ressemblent le plus.',
      },
      { src: '/audio/pauvocodeur-simpleovercrossecho.mp3', title: '5. Avec écho', text: 'La version finale, avec l’écho que j’ai écrit.' },
    ],
  },
];

/** Projets publiés, dans l’ordre d’affichage. */
export const projects = allProjects.filter((project) => !project.archived);

export const featuredProjects = projects.filter((project) => project.featured);

export const projectBySlug = (slug: string): Project | undefined => projects.find((project) => project.slug === slug);
