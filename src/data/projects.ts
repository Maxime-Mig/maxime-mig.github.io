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
import pxPartie from '../assets/projects/puissancex/partie.png';
import bsDeclinaisons from '../assets/projects/boutique-skins/declinaisons.png';
import bsCatalogue from '../assets/projects/boutique-skins/catalogue.png';
import bsStock from '../assets/projects/boutique-skins/stock.png';
import vcReparations from '../assets/projects/velocampus/reparations.png';
import vcEtat from '../assets/projects/velocampus/etat.png';
import pvOndes from '../assets/projects/pauvocodeur/formes-onde.png';
import fpFinance from '../assets/projects/fortiche-production/finance.png';

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
  code?: { label: string; lang: 'gherkin' | 'yaml' | 'ts' | 'js' | 'java' | 'python'; content: string };
}

/** Dans l’ordre d’affichage. */
export const projects: Project[] = [
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
      'Sortir le jeu avec le Studio Fortune Cookies, maintenant que j’ai le statut d’étudiant-entrepreneur.',
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
    kind: 'Projet universitaire, 2e année',
    categories: ['web', 'donnees'],
    featured: true,
    period: 'Septembre 2025 – avril 2026',
    setting: 'Projet universitaire de 2e année, à l’IUT Nord Franche-Comté',
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
    slug: 'puissancex',
    hue: 'ciel',
    title: 'PuissanceX',
    kind: 'Projet universitaire, 1re année',
    categories: ['jeu'],
    featured: true,
    period: 'Avril – juin 2025',
    setting: 'Projet universitaire de 1re année, à l’IUT Nord Franche-Comté',
    team: 'Équipe de 5 étudiants',
    tagline: 'Un Puissance 4 paramétrable en Java, avec plusieurs intelligences artificielles.',
    summary:
      'Puissance 4 paramétrable en Java. J’ai conçu ConditionAI, une IA à règles qui cherche le coup gagnant et bloque celui de l’adversaire.',
    description: [
      'PuissanceX reprend le Puissance 4 en le rendant paramétrable : nombre de lignes et de colonnes, nombre de jetons à aligner, mode de jeu et difficulté. Le jeu est écrit en Java avec une architecture MVC, sur le framework Boardifier imposé par le sujet. Il a d’abord été jouable en console, puis avec une interface JavaFX.',
      'Plusieurs IA peuvent s’affronter : une qui joue au hasard, un Minimax avec heuristiques, et ConditionAI, l’IA à règles que j’ai écrite.',
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
    stack: ['Java 17', 'JavaFX', 'Maven', 'JUnit 5', 'Boardifier'],
    challenges: [
      {
        problem: 'Une IA réactive sans explorer tout l’arbre des coups.',
        solution:
          'Des règles appliquées dans l’ordre sur une copie simplifiée du plateau : gagner si c’est possible, sinon bloquer le coup gagnant adverse, sinon jouer un coup utile.',
      },
    ],
    learned: [
      'Découper une stratégie de jeu en règles simples, testées dans un ordre précis.',
      'Avancer sur une branche à soi, puis l’intégrer au travail des autres.',
    ],
    technical: [
      'ConditionAI essaie dans l’ordre : gagner, bloquer l’adversaire, éviter de lui offrir le coup suivant, aligner trois jetons, jouer au centre, et enfin jouer au hasard.',
      'La classe SimplifyBoard copie le plateau dans un tableau, pour tester un coup sans toucher à la partie en cours.',
    ],
    links: [{ label: 'Dépôt GitHub', href: 'https://github.com/gh-Constant/SAE_PuissanceX' }],
    cover: {
      src: pxPartie,
      alt: 'Plateau de PuissanceX : cinq jetons jaunes alignés sur la même ligne, entourés de jetons rouges',
      caption: 'Une partie à cinq jetons à aligner. ConditionAI (jaune) vient de gagner contre l’IA qui joue au hasard.',
    },
  },
  {
    slug: 'vehicule-autonome',
    hue: 'lilas',
    objet: 'bras-robot',
    title: 'Véhicule autonome',
    kind: 'Projet universitaire, 3e année',
    categories: ['devops'],
    featured: false,
    period: 'Depuis octobre 2026',
    setting: 'Projet universitaire de 3e année, en cours',
    team: 'En équipe',
    tagline: 'Une voiture miniature qui suit un parcours toute seule, et les tests qui vérifient son comportement.',
    summary:
      'Projet d’équipe en cours autour d’une voiture miniature autonome. Pour l’instant, j’ai surtout travaillé sur les tests d’acceptation, écrits en français avec Cucumber.',
    description: [
      'Le projet porte sur une voiture miniature qui doit suivre un couloir de scotch blanc, respecter des feux à LED et s’arrêter devant un obstacle. Un serveur Java reçoit ses mesures, enregistre les sessions d’essai et transmet les consignes de l’opérateur.',
      'Avant de passer sur la vraie voiture, nous décrivons son comportement dans des scénarios écrits en français. Ils s’exécutent sur un modèle Java du véhicule. En octobre, les 36 tests passaient.',
    ],
    features: [
      'Suivi du couloir, feux à LED, freinage d’urgence et surveillance de la batterie',
      'Session d’essai en cinq étapes, de la préparation au bilan, avec des données figées à la fin',
      'Deux chemins pour enregistrer les mesures : une API Node.js, ou MongoDB directement depuis Java',
      'Mesures de vision (écart à la ligne, balises de chronométrage) rattachées à la session',
      'Droits différents pour un observateur et un opérateur',
    ],
    role: {
      intro: 'J’ai écrit 11 scénarios et le modèle Java qu’ils testent :',
      items: [
        'l’accès aux données, avec au moins un tiers des écritures par la voie directe ;',
        'les mesures de vision, les sorties de ligne et la validation des tours ;',
        'l’analyse d’une session par l’IA : score d’anomalie et vitesse conseillée ;',
        'les droits de l’observateur et de l’opérateur.',
      ],
    },
    stack: ['Java 17', 'Cucumber', 'JUnit 4', 'Maven', 'PicoContainer'],
    challenges: [
      {
        problem: 'Tester le comportement de la voiture sans avoir la voiture.',
        solution:
          'Les scénarios tournent sur un modèle Java, avec des mesures de vitesse, de distance et de vision fournies par le test. Le matériel pourra être branché ensuite sans réécrire les scénarios.',
      },
      {
        problem: 'Enregistrer les mesures par deux chemins différents sans compliquer le reste du serveur.',
        solution:
          'Les deux voies respectent la même interface, DataDriver. Un gestionnaire choisit laquelle utiliser et répartit les écritures. Pour les tests, les deux sont simulées en mémoire.',
      },
    ],
    learned: [
      'Écrire une règle dans une phrase que tout le monde peut lire, puis en faire un test.',
      'Partager l’état d’un scénario entre plusieurs classes de test grâce à l’injection.',
    ],
    next: ['Passer du modèle à la vraie voiture et au vrai serveur.'],
    technical: [
      'Cucumber 7 avec les mots-clés français (Etant donné, Quand, Alors) et des plans de scénario pour les tableaux d’exemples.',
      'Une classe MyWorld, injectée par PicoContainer, garde l’état du scénario en cours.',
    ],
    code: {
      label: 'Un de mes scénarios : un observateur ne doit pas pouvoir commander la voiture.',
      lang: 'gherkin',
      content: [
        '# language: fr',
        'Scénario: Refus d\'envoi de consigne par un observateur non autorisé',
        '  Etant donné qu\'un utilisateur consulte l\'interface avec le profil "OBSERVATEUR"',
        '  Quand il tente d\'émettre la consigne "vitesse:15"',
        '  Alors l\'action est refusée pour motif "NON_AUTORISE"',
        '  Et la consigne n\'est pas transmise au véhicule',
      ].join('\n'),
    },
    linkNote: 'Dépôt privé pendant le projet.',
  },
  {
    slug: 'boutique-skins',
    hue: 'soleil',
    title: 'Boutique de skins',
    kind: 'Projet universitaire, 1re année',
    categories: ['web', 'donnees'],
    featured: false,
    period: 'Janvier – avril 2025',
    setting: 'Projet universitaire de 1re année, autour des bases de données, du web et de la gestion de projet',
    team: 'Équipe de 4 étudiants',
    tagline: 'Une boutique en ligne Flask et MySQL, avec déclinaisons, stock et back-office.',
    summary:
      'Boutique en ligne de skins de jeu vidéo, en Flask et MySQL. J’ai réalisé le catalogue, le panier, les déclinaisons et une partie du back-office.',
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
    learned: [
      'Prendre le temps de bien concevoir la base, car changer une table en cours de route oblige à reprendre beaucoup de code.',
      'Tenir compte des remarques reçues à chaque livraison.',
    ],
    links: [{ label: 'Dépôt GitHub', href: 'https://github.com/amintt2/S2_SAE_345' }],
    cover: {
      src: bsDeclinaisons,
      alt: 'Page de modification d’un article : image, nom, type, description, puis tableau des déclinaisons avec prix et stock',
      caption: 'La modification d’un article et de ses déclinaisons, chacune avec son prix, son stock et son état.',
    },
    gallery: [
      {
        src: bsCatalogue,
        alt: 'Catalogue de la boutique : skins présentés en grille avec prix, stock et bouton d’ajout au panier',
        caption: 'Le catalogue. Un article avec plusieurs déclinaisons propose de choisir une version.',
      },
      {
        src: bsStock,
        alt: 'Liste des articles côté administration, avec type, prix, stock, notes et nombre de déclinaisons',
        caption: 'La liste des articles côté administration, avec une alerte quand le stock devient critique.',
      },
    ],
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
    slug: 'velocampus',
    hue: 'menthe',
    title: 'VeloCampus',
    kind: 'Projet universitaire, 1re année',
    categories: ['web', 'donnees'],
    featured: false,
    period: 'Novembre – décembre 2024',
    setting: 'Projet universitaire de 1re année, à l’IUT Nord Franche-Comté',
    team: 'Équipe de 3 étudiants',
    tagline: 'Un site de location et de réparation de vélos entre étudiants, relié à une base de données.',
    summary:
      'Site de location de vélos entre étudiants, en Flask et MySQL. J’ai réalisé toute la partie réparations : liste, ajout, modification, suppression et bilan par personne.',
    description: [
      'VeloCampus permet à des étudiants de louer leurs vélos et de suivre les réparations. Nous avons commencé par le modèle de données, puis chacun a développé une partie du site : les locations, les vélos et, pour moi, les réparations.',
      'J’ai avancé par petits essais : une page à la fois, d’abord la liste, puis l’ajout, la modification, la suppression et enfin la page d’état.',
    ],
    features: [
      'Base de 10 tables : vélos, catégories, états, pièces, locations, réparations, factures…',
      'Gestion des vélos et des locations',
      'Gestion des réparations, avec une facture créée pour chacune',
      'Page d’état : réparations, vélos concernés et total de main d’œuvre pour une personne',
    ],
    role: {
      intro: 'Je me suis occupé de la partie réparations, de la requête SQL à la page :',
      items: [
        'la liste, l’ajout, la modification et la suppression d’une réparation ;',
        'la création de la facture en même temps que la réparation ;',
        'l’ajout d’un type de réparation ;',
        'la page d’état, avec ses totaux par personne et par vélo.',
      ],
    },
    stack: ['Python', 'Flask', 'MySQL', 'Jinja', 'HTML', 'CSS'],
    challenges: [
      {
        problem: 'Une réparation est reliée à un vélo, une personne, un type et une facture.',
        solution:
          'La liste rassemble ces tables avec des jointures. À l’ajout, la facture est créée en premier, puis la réparation reçoit son identifiant.',
      },
      {
        problem: 'Afficher un bilan par personne.',
        solution: 'J’ai utilisé GROUP BY, COUNT et SUM pour compter les réparations et additionner les montants, au lieu de faire les calculs en Python.',
      },
    ],
    learned: [
      'Écrire des requêtes SQL avec plusieurs jointures.',
      'Relier un formulaire, une route et une table.',
    ],
    links: [{ label: 'Dépôt GitHub', href: 'https://github.com/TimotheSandt/SAE1.03-1.04' }],
    cover: {
      src: vcReparations,
      alt: 'Liste des réparations de VeloCampus : type, date, durée, prix, facture, vélo, personne et boutons Éditer et Supprimer',
      caption: 'La liste des réparations, avec des données de démonstration.',
    },
    gallery: [
      {
        src: vcEtat,
        alt: 'Page d’état des réparations d’une personne : nombre de réparations, total et détail',
        caption: 'L’état des réparations d’une personne, avec le total de main d’œuvre et le détail.',
      },
    ],
  },
  {
    slug: 'pauvocodeur',
    hue: 'ciel',
    title: 'Pauvocodeur',
    kind: 'Projet universitaire, 1re année',
    categories: ['audio'],
    featured: false,
    period: 'Novembre 2024 – janvier 2025',
    setting: 'Projet universitaire de 1re année, à l’IUT Nord Franche-Comté',
    team: 'En binôme',
    tagline: 'Changer la hauteur d’une voix sans changer sa durée, en Java.',
    summary:
      'Programme Java qui rend une voix plus grave ou plus aiguë sans changer sa durée. J’ai écrit l’effet d’écho et participé à l’intercorrélation.',
    description: [
      'Le Pauvocodeur change la hauteur d’un enregistrement sans changer sa durée. Le son est d’abord rééchantillonné, ce qui modifie la hauteur mais aussi la vitesse. Il est ensuite découpé en séquences de 100 millisecondes que l’on recolle pour retrouver la durée d’origine. Chaque version améliore les raccords, et un écho peut être ajouté.',
    ],
    features: [
      'Rééchantillonnage pour changer la hauteur',
      'Recollage simple, puis avec chevauchement, puis avec recherche du meilleur raccord par intercorrélation',
      'Effet d’écho',
    ],
    role: {
      intro:
        'J’ai écrit l’effet d’écho (trois versions), participé à l’intercorrélation et documenté le code. Mon binôme a écrit l’essentiel du cœur du vocodeur.',
    },
    stack: ['Java', 'FFT', 'Fichiers WAV'],
    challenges: [
      {
        problem: 'Des clics audibles entre les séquences recollées.',
        solution:
          'Faire se chevaucher les séquences, puis chercher, dans une petite fenêtre, le décalage où les deux signaux se ressemblent le plus (intercorrélation, accélérée par FFT).',
      },
    ],
    learned: [
      'Écouter le résultat après chaque changement, car un défaut s’entend plus vite qu’il ne se voit dans le code.',
      'Documenter mon code pour que mon binôme puisse le reprendre.',
    ],
    links: [{ label: 'Dépôt GitHub', href: 'https://github.com/TimotheSandt/SAE1.01-1.02' }],
    cover: {
      src: pvOndes,
      alt: 'Formes d’onde du même enregistrement : original de 9,6 secondes, version grave de 13,7 secondes, version finale de 9,6 secondes',
      caption: 'Le même enregistrement à trois étapes. Le rééchantillonnage l’allonge, le recollage lui rend sa durée d’origine.',
    },
    tracks: [
      { src: '/audio/pauvocodeur-original.mp3', title: 'Enregistrement d’origine', text: 'L’enregistrement de départ, sans traitement.' },
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
  {
    slug: 'fortiche-production',
    hue: 'lilas',
    title: 'Site Fortiche Production',
    kind: 'Projet universitaire, 1re année',
    categories: ['web'],
    featured: false,
    period: 'Septembre – octobre 2024',
    setting: 'Premier projet universitaire de 1re année, à l’IUT Nord Franche-Comté',
    team: 'Équipe de 4 étudiants',
    tagline: 'Le premier projet du BUT : un site pour présenter un studio d’animation français.',
    summary:
      'Site de cinq pages en HTML et CSS pour présenter le studio d’animation Fortiche Production. J’ai fait la page Finance et les planches de style.',
    description: [
      'Il fallait présenter une entreprise française du numérique. Nous avons choisi Fortiche Production, le studio d’animation d’Arcane. Le site raconte son histoire, ses projets, son fonctionnement et ses résultats financiers.',
      'C’était notre premier projet, dès la rentrée. Avant d’écrire du HTML, nous avons fait des questionnaires, un zoning et des planches de style.',
    ],
    features: [
      'Cinq pages : accueil, histoire, projets, finance, à propos',
      'Page Finance avec graphiques et tableaux de chiffres',
      'Pages vérifiées avec le validateur du W3C',
      'Éco-conception mesurée avec EcoIndex : note A (87 sur 100) pour la page Finance',
    ],
    role: {
      intro: 'Mes parties :',
      items: [
        'la page Finance ;',
        'les planches de style, et le zoning à deux ;',
        'les questionnaires, à deux, et une partie du rapport.',
      ],
    },
    stack: ['HTML', 'CSS', 'JavaScript'],
    challenges: [
      {
        problem: 'Rendre des chiffres financiers lisibles.',
        solution: 'J’ai séparé les chiffres en plusieurs tableaux par thème, et mis les trois plus importants dans des graphiques que l’on fait défiler.',
      },
    ],
    learned: [
      'Faire une maquette avant de coder.',
      'Vérifier un site avec des outils extérieurs, pour le code comme pour son poids.',
    ],
    links: [
      { label: 'Voir le site', href: 'https://timothesandt.github.io/SAE_Fortiche_Production/' },
      { label: 'Dépôt GitHub', href: 'https://github.com/TimotheSandt/SAE_Fortiche_Production' },
    ],
    cover: {
      src: fpFinance,
      alt: 'Page Finance du site : courbe du chiffre d’affaires et tableau des performances de 2018 à 2022',
      caption: 'La page Finance, que j’ai faite : des graphiques à faire défiler, puis les tableaux de chiffres.',
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectBySlug = (slug: string): Project | undefined => projects.find((project) => project.slug === slug);
