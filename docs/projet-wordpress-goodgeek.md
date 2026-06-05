# Documentation du stage WordPress Good Geek

## Contexte réel du stage

Le stage s'est déroulé du 7 avril 2026 au 5 juin 2026 chez Good Geek.

Good Geek est une boutique spécialisée dans les produits de pop culture : figurines, épicerie, TCG, achat-revente d'occasion, mangas et objets dérivés. L'entreprise avait besoin d'un site WordPress de communication pour publier des articles, présenter des événements, afficher des contenus multimédias, relayer les réseaux et indiquer les lives Twitch ou YouTube.

La mission initiale devait porter sur l'amélioration du site de la boutique. Elle a changé au début du stage, car le site boutique était déjà trop avancé pour permettre de vraies modifications intéressantes. La mission réelle est donc devenue la création d'un nouveau site WordPress de communication, avec un thème créé de zéro.

## Organisation du travail

Le projet a commencé par un débrief avec les attentes de l'entreprise. Les demandes ont été notées, puis transformées en liste de tâches.

Le travail a été réalisé seul sur le site. La référente était la responsable informatique de l'entreprise, développeuse. Les validations avaient lieu ponctuellement lorsque l'avancement était montré aux membres de Good Geek. L'équipe étant composée de trois personnes, les retours pouvaient venir de plusieurs interlocuteurs.

## Parties réalisées

- Création du thème WordPress.
- Création et mise en forme de toutes les pages principales.
- Page d'accueil.
- Page Actualités.
- Modèle d'article.
- Page Événements.
- Partie Multimédia.
- Page Réseaux.
- Champs personnalisés pour rendre certaines pages plus modifiables depuis l'administration WordPress.
- Détection automatique des lives Twitch et YouTube.
- Responsive et style des pages.

## Technologies utilisées

- WordPress.
- PHP.
- CSS.
- JavaScript.
- XAMPP pour le développement local.
- Administration WordPress.
- Requêtes WordPress avec `WP_Query`.
- Fonctions WordPress comme `get_post_meta`, `get_the_category`, `get_the_post_thumbnail_url`.
- Fonctions de sécurisation comme `esc_html`, `esc_url`, `esc_attr`.

## Difficultés principales

La difficulté la plus importante a été la partie multimédia, car il fallait trouver une logique claire pour répartir les articles et afficher les contenus sans créer une page désordonnée.

Une autre difficulté venait du fait que WordPress était nouveau au début du stage. Il fallait apprendre à l'utiliser tout en construisant un site complet.

Avec du recul, l'organisation globale aurait pu être meilleure. Les choses simples ont été faites en premier pour apprendre WordPress, mais cela a fait perdre du temps sur les parties plus complexes.

## Schémas conseillés

### Trace 1 : création du thème WordPress

Mettre :

- `WordPress` au centre ;
- `Accueil`, `Actualités`, `Articles`, `Événements`, `Multimédia`, `Réseaux` ;
- `PHP + CSS + JavaScript` ;
- `Administration WordPress`.

Objectif du schéma : montrer que le site complet a été créé, pas seulement une page.

### Trace 2 : partie multimédia

Mettre :

- `Articles WordPress` ;
- `Données utilisées` : catégorie, image, extrait, date, média ;
- `Logique de répartition` ;
- `Affichage multimédia`.

Objectif du schéma : expliquer la logique de présentation des articles dans la partie la plus difficile du stage.

### Trace 3 : détection live Twitch et YouTube

Mettre :

- `Site WordPress` ;
- `Twitch` ;
- `YouTube` ;
- `Requête API ou vérification du live` ;
- `Résultat : en live / hors ligne` ;
- `Bouton ou lien affiché`.

Objectif du schéma : montrer comment le site récupère une information externe pour adapter l'affichage.

### Trace 4 : liste de tâches

Mettre :

- `Débrief initial` ;
- `Notes prises` ;
- `Liste de tâches` ;
- `À faire`, `En cours`, `À montrer`, `Validé`.

Objectif du schéma : montrer comment les attentes ont été transformées en tâches.

### Trace 5 : validations

Mettre :

- `Travail réalisé seul` ;
- `Présentation à l'équipe` ;
- `Retour` ;
- `Correction ou validation`.

Objectif du schéma : montrer le fonctionnement des validations ponctuelles.

### Trace 6 : communication

Mettre :

- `Travail seul` ;
- `Question à la référente` ;
- `Retour de l'équipe` ;
- `Correction` ;
- `Validation`.

Objectif du schéma : montrer que le travail était autonome mais pas isolé.

### Trace 7 : environnement local

Mettre :

- `XAMPP` ;
- `WordPress local` ;
- `PHP`, `CSS`, `JavaScript` ;
- `Administration WordPress` ;
- `Champs personnalisés` ;
- `Tests navigateur`.

Objectif du schéma : montrer l'environnement utilisé pour créer et tester le site.

## Savoir-faire à valoriser

Savoir-faire techniques :

- créer un thème WordPress complet ;
- organiser des contenus dynamiques ;
- utiliser les fonctions WordPress ;
- créer des champs personnalisés ;
- connecter le site à Twitch et YouTube ;
- rendre les pages responsive.

Savoir-faire de suivi :

- écouter un besoin ;
- transformer un débrief en tâches ;
- prioriser malgré la découverte d'un nouvel outil ;
- faire valider l'avancement.

Savoir-faire d'intégration :

- travailler seul ;
- demander des retours ;
- présenter son avancement ;
- progresser dans un environnement technique inconnu au départ.
