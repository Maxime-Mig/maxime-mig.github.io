export const portfolioData = {
  profile: {
    firstName: 'Maxime',
    lastName: 'Miguet',
    email: 'maxime.miguet@edu.univ-fcomte.fr',
  },
  pages: [
    {
      slug: 'accueil',
      path: '/',
      label: 'Accueil',
      title: 'Stage WordPress Good Geek',
      intro:
        "Ce travail présente mon stage réalisé du 7 avril 2026 au 5 juin 2026 chez Good Geek. Pendant ce stage, j'ai créé de zéro un site WordPress de communication pour l'entreprise, avec des articles, des événements, une partie multimédia, des pages administrables et une détection automatique des lives Twitch et YouTube.",
      company: {
        title: "Contexte de l'entreprise",
        points: [
          "Good Geek est une boutique spécialisée dans les produits de pop culture : figurines, épicerie, TCG, achat-revente d'occasion, mangas et objets dérivés de différents univers.",
          "L'entreprise avait besoin d'un site de communication séparé de la boutique, afin de publier des articles, présenter des événements, relayer des contenus multimédias et donner plus de visibilité à son activité.",
          "L'équipe est composée de trois personnes. Ma référente était la responsable de la partie informatique, qui est développeuse. Sur ce projet, je travaillais seul, avec des retours ponctuels de l'équipe.",
        ],
      },
      internship: {
        title: 'Contexte du sujet',
        points: [
          "Au départ, le stage devait porter sur l'amélioration du site de la boutique. Le projet a changé, car ce site était déjà trop avancé pour permettre de vraies modifications utiles à mon niveau.",
          "La nouvelle mission a donc été de créer un site WordPress complet pour la communication de Good Geek, en partant de zéro.",
          "Le site devait contenir toutes les pages nécessaires : accueil, actualités, articles, événements, multimédia, réseaux et pages associées.",
          "J'ai travaillé avec WordPress, PHP, CSS, JavaScript, XAMPP, l'administration WordPress, des champs personnalisés, des requêtes WordPress et des fonctions de sécurisation de l'affichage.",
        ],
      },
      highlightedSkills: [
        {
          id: 'creer-theme-wordpress',
          pageSlug: 'technique',
          name: 'Savoir créer un thème WordPress complet',
          color: '#2563eb',
        },
        {
          id: 'organiser-contenus',
          pageSlug: 'technique',
          name: 'Savoir organiser des contenus dynamiques',
          color: '#15803d',
        },
        {
          id: 'suivre-projet',
          pageSlug: 'suivi-projet',
          name: 'Savoir suivre un projet après un changement de mission',
          color: '#c2410c',
        },
        {
          id: 'integration-cadre',
          pageSlug: 'integration-entreprise',
          name: "Savoir travailler seul avec des validations d'équipe",
          color: '#be185d',
        },
      ],
      projectDocumentation: [
        {
          title: 'Mission réelle',
          points: [
            "Créer un site WordPress de communication pour Good Geek, séparé du site boutique.",
            "Mettre en place les pages principales, les articles, les événements, la partie multimédia et les réseaux.",
            "Permettre à l'entreprise de modifier certaines pages depuis l'administration grâce à des champs personnalisés.",
          ],
        },
        {
          title: 'Technologies utilisées',
          points: [
            "WordPress pour la structure du site, les articles, les pages, les médias et l'administration.",
            "PHP pour les templates, les requêtes, les champs personnalisés et la logique d'affichage.",
            "CSS et JavaScript pour le style, le responsive, les interactions et certaines fonctionnalités côté navigateur.",
            "XAMPP pour travailler et tester le site en local avant de montrer les résultats.",
          ],
        },
        {
          title: 'Parties développées',
          points: [
            "Toutes les pages du site ont été créées ou travaillées : accueil, actualités, événements, multimédia, réseaux et articles.",
            "La partie multimédia a été la plus complexe, car il fallait trouver une logique claire pour répartir et présenter les articles.",
            "Une API ou logique de détection live a été mise en place pour savoir automatiquement si Good Geek est en live sur Twitch ou YouTube.",
          ],
        },
        {
          title: 'Difficultés et progression',
          points: [
            "Je ne connaissais pas WordPress au début du stage, ce qui m'a obligé à apprendre progressivement son fonctionnement.",
            "Comme rien n'était déjà construit pour ce site, il a fallu créer la structure, les pages, le style et la logique globale.",
            "Avec du recul, j'aurais mieux organisé le projet dès le départ, car commencer par les éléments simples m'a fait perdre du temps sur les parties plus complexes.",
          ],
        },
      ],
    },
    {
      slug: 'technique',
      path: '/technique',
      label: 'Technique',
      title: 'Technique',
      summary:
        "Cette partie présente les réalisations techniques principales du stage : création du thème WordPress, organisation des contenus multimédias, détection automatique des lives Twitch et YouTube et création de réglages permettant à l'entreprise de modifier les pages, les cartes et les boosters.",
      tabs: [
        {
          id: 'description',
          label: 'Description',
          title: 'Description technique par traces',
          intro:
            'Les traces décrivent des réalisations concrètes du site WordPress et les savoir-faire élémentaires utilisés pendant le stage.',
        },
        {
          id: 'bilan',
          label: 'Bilan / Analyse',
          title: 'Bilan technique',
          intro:
            "Cette analyse évalue la progression sur les savoir-faire techniques, avec un niveau avant et après l'expérience.",
        },
      ],
      skills: [
        {
          id: 'creer-theme-wordpress',
          name: 'Savoir créer un thème WordPress complet',
          color: '#2563eb',
        },
        {
          id: 'organiser-contenus',
          name: 'Savoir organiser des contenus dynamiques',
          color: '#15803d',
        },
        {
          id: 'connecter-services',
          name: 'Savoir connecter le site à des services externes',
          color: '#6d28d9',
        },
      ],
      traces: [
        {
          number: 1,
          title: "Création d'un thème WordPress complet",
          image: '/images/traces/trace-react-components.svg',
          caption:
            "Trace 1 : schéma de l'organisation générale du site de communication Good Geek créé avec WordPress.",
          schemaItems: [
            "Un bloc WordPress au centre.",
            "Des blocs Accueil, Actualités, Articles, Événements, Multimédia et Réseaux.",
            "Un bloc Administration WordPress pour montrer que certaines pages sont modifiables.",
            "Une flèche vers Templates PHP, CSS et JavaScript pour représenter le thème créé.",
          ],
          skills: ['creer-theme-wordpress', 'organiser-contenus'],
          elementarySkills: [
            'Savoir créer des templates WordPress',
            'Savoir factoriser les éléments communs du thème',
            'Savoir afficher des contenus dynamiques',
            "Savoir protéger l'affichage des contenus administrables",
            "Savoir appliquer l'identité visuelle de Good Geek",
            'Savoir rendre les pages responsive',
          ],
          skillPassages: [
            "j'ai créé et relié les templates PHP nécessaires pour que WordPress affiche correctement l'accueil, les pages d'actualités, les articles individuels, les événements, les contenus multimédias et les réseaux de Good Geek. J'ai utilisé les fonctions natives de WordPress pour récupérer les titres, les textes, les images, les catégories et les liens, puis j'ai sécurisé les valeurs affichées afin que les contenus saisis dans l'administration soient intégrés proprement dans chaque page",
            [
              "j'ai séparé l'en-tête, la navigation et le pied de page dans des fichiers communs afin d'éviter de recopier leur code dans chaque template et de pouvoir modifier toute la structure depuis un seul emplacement",
              "j'ai aussi réparti les fonctionnalités du thème dans plusieurs fichiers du dossier inc, chargés depuis functions.php, afin de pouvoir réutiliser les traitements consacrés aux événements, au multimédia, aux directs, à l'accueil et aux réglages visuels sans les réécrire dans chaque page",
              "j'ai créé des fonctions réutilisables pour préparer les médias, choisir une image principale, construire les données des cartes et afficher un carrousel aussi bien dans les listes de contenus que dans les articles individuels",
            ],
            [
              "j'ai relié les pages aux articles, images, catégories et autres informations enregistrées dans WordPress afin que le site évolue lorsque l'entreprise publie ou modifie un contenu",
              "j'ai adapté les contenus récupérés au rôle de chaque page : l'accueil affiche une sélection choisie, la page des actualités met principalement en avant les dernières nouvelles, le blog regroupe l'ensemble des articles publiés et la page des événements rassemble les événements avec leurs dates, leurs horaires et leurs lieux",
            ],
            "j'ai protégé l'affichage des contenus provenant de l'administration avec les fonctions WordPress adaptées aux textes, aux attributs et aux adresses. Cela évite qu'une valeur saisie soit interprétée comme du code exécutable ou produise un code HTML incorrect dans la page",
            "j'ai construit les couleurs, la typographie, les espacements et la présentation des pages en reprenant l'univers visuel jaune, noir et blanc associé à Good Geek",
            [
              "j'ai adapté les grilles, les images, les textes et la navigation pour que les blocs changent de disposition lorsque la largeur de l'écran diminue",
              "j'ai contrôlé le résultat dans le navigateur sur plusieurs largeurs et corrigé les débordements ou les éléments devenus difficiles à lire sur mobile",
            ],
          ],
          description:
            "La trace 1 ci-contre présente la création complète du thème WordPress utilisé pour le site de communication de Good Geek. Au début de la mission, aucun thème adapté à ce nouveau site n'était disponible : il fallait donc construire l'organisation du projet, préparer les fichiers nécessaires et déterminer comment chaque contenu serait affiché. J'ai commencé par comprendre la logique de WordPress, notamment la manière dont le logiciel choisit un template selon la page demandée. J'ai ensuite créé les différentes vues pour l'accueil, les actualités, les articles, les événements, le multimédia et les réseaux. Les éléments communs, comme l'en-tête, la navigation et le pied de page, ont été séparés afin d'éviter de répéter le même code dans chaque fichier. Les pages ont ensuite été reliées aux contenus saisis dans l'administration WordPress. Le travail ne consistait donc pas à écrire une page HTML fixe, mais à produire un thème capable d'afficher des informations qui peuvent changer après le développement. J'ai également construit le style général en respectant l'identité visuelle de Good Geek et en conservant une cohérence entre les différentes parties. Enfin, j'ai testé le résultat dans le navigateur, corrigé les problèmes d'affichage et adapté les mises en page aux écrans plus étroits. Cette réalisation constitue la base de tout le projet, car les autres fonctionnalités dépendent de cette structure.",
          remarkablePoints: [
            "Le travail portait sur toutes les pages du site, pas seulement sur une modification isolée.",
            "Le thème devait rester administrable, car l'entreprise devait pouvoir modifier certains contenus sans toucher au code.",
          ],
        },
        {
          number: 2,
          title: 'Organisation de la partie multimédia',
          image: '/images/traces/trace-data-model.svg',
          caption:
            "Trace 2 : schéma de la logique utilisée pour répartir et afficher les articles dans la partie multimédia.",
          schemaItems: [
            "Un bloc Articles WordPress.",
            "Un bloc Données utilisées : catégorie, image, extrait, date, média.",
            "Un bloc Logique de répartition des articles.",
            "Un bloc Affichage multimédia avec cartes, tailles et contenus visibles.",
          ],
          skills: ['organiser-contenus', 'creer-theme-wordpress'],
          elementarySkills: [
            'Savoir récupérer des articles avec WordPress',
            'Savoir afficher des contenus dynamiques',
            'Savoir normaliser des contenus différents',
            'Savoir filtrer et trier une liste de contenus',
            'Savoir choisir une répartition visuelle lisible',
            'Savoir gérer plusieurs médias dans une carte',
            'Savoir prévoir les données manquantes',
          ],
          skillPassages: [
            "j'ai utilisé les requêtes et les fonctions de WordPress pour récupérer les contenus publiés ainsi que leurs titres, catégories, dates, extraits, images et informations multimédias. Les données obtenues ont été regroupées dans une structure commune afin que le template puisse traiter de manière cohérente des articles qui ne possèdent pas tous exactement les mêmes médias",
            [
              "j'ai relié la grille multimédia aux publications WordPress afin que les nouvelles entrées apparaissent sans devoir modifier manuellement le template",
              "j'ai fait dépendre les cartes des données réellement enregistrées, notamment leur titre, leur date, leur résumé, leur catégorie et les médias disponibles",
            ],
            [
              "j'ai regroupé le titre, la date, le résumé, le type de publication, le lien et les médias dans une structure commune utilisable par toutes les cartes",
              "j'ai converti les différentes sources d'images et de vidéos vers une présentation cohérente afin que le template n'ait pas à traiter chaque publication comme un cas entièrement séparé",
            ],
            "j'ai ajouté des choix de filtre et de tri, conservé la sélection active et affiché le nombre de résultats pour que l'utilisateur comprenne immédiatement l'effet de son action",
            [
              "j'ai défini la largeur des cartes, la place du média, la longueur visible du résumé et le nombre de colonnes selon l'écran",
              "j'ai réalisé plusieurs essais de répartition afin d'éviter une grille répétitive tout en conservant des alignements compréhensibles",
            ],
            "j'ai affiché les images et les vidéos dans une zone commune et ajouté une navigation uniquement lorsqu'une publication possède plusieurs médias",
            [
              "j'ai produit un résumé à partir du contenu lorsqu'aucun extrait manuel n'était disponible",
              "j'ai masqué les médias, les contrôles ou les résultats qui n'existaient pas afin qu'une information absente ne laisse pas une zone cassée dans la page",
            ],
          ],
          description:
            "La trace 2 ci-contre présente l'organisation de la page multimédia, qui a été l'une des parties les plus complexes du stage. L'objectif n'était pas uniquement de récupérer des publications WordPress et de les placer les unes sous les autres. Les contenus pouvaient comporter une image, plusieurs images, une vidéo, un extrait plus ou moins long ou parfois certaines informations manquantes. Il fallait donc définir une structure capable de présenter ces cas différents sans rendre la page irrégulière ou difficile à comprendre. J'ai commencé par identifier les données nécessaires à une carte : le titre, la date, le type de contenu, le résumé, le lien et les médias disponibles. J'ai ensuite travaillé sur une logique commune permettant de préparer ces informations avant leur affichage. La page propose aussi des possibilités de filtrage et de tri pour aider l'utilisateur à retrouver un contenu. Pour la partie visuelle, j'ai dû réfléchir à la largeur des cartes, à la proportion réservée au média et au comportement de la grille selon la taille de l'écran. Lorsqu'un contenu comporte plusieurs médias, un système de navigation permet de passer de l'un à l'autre. J'ai également prévu les cas sans résultat et les données absentes afin que l'interface reste propre. Cette partie m'a demandé plusieurs essais, car la difficulté était à la fois technique, avec la récupération des données WordPress, et visuelle, avec la recherche d'une répartition claire.",
          remarkablePoints: [
            "La difficulté principale était de comprendre comment répartir les articles sans obtenir une page désordonnée.",
            "Cette partie a demandé de manipuler des données WordPress et de réfléchir à la présentation visuelle en même temps.",
          ],
        },
        {
          number: 3,
          title: 'Détection automatique des lives Twitch et YouTube',
          image: '/images/traces/trace-node-api.svg',
          caption:
            "Trace 3 : schéma de la logique permettant de détecter automatiquement si Good Geek est en live sur Twitch ou YouTube.",
          schemaItems: [
            "Un bloc Site WordPress.",
            "Un bloc Twitch et un bloc YouTube.",
            "Un bloc Requête API ou vérification du live.",
            "Un bloc Résultat : en live ou hors ligne.",
            "Une flèche vers le bouton ou lien affiché sur le site.",
          ],
          skills: ['connecter-services', 'creer-theme-wordpress'],
          elementarySkills: [
            "Savoir configurer les accès à une interface de programmation",
            "Savoir obtenir et réutiliser un jeton d'accès",
            'Savoir interroger un service externe',
            'Savoir interpréter une réponse JSON',
            'Savoir limiter les appels avec un cache',
            "Savoir gérer les erreurs d'un service externe",
          ],
          skillPassages: [
            "j'ai prévu des constantes de configuration pour les identifiants Twitch, la clé YouTube et les noms des chaînes, sans exposer ces informations dans l'interface publique",
            [
              "j'ai envoyé les identifiants de l'application à Twitch pour recevoir un jeton autorisant les requêtes vers le service des streams",
              "j'ai conservé ce jeton temporairement et tenu compte de sa durée de validité avant de le redemander",
            ],
            [
              "j'ai utilisé les fonctions HTTP de WordPress pour contacter Twitch et YouTube avec un délai maximal afin de ne pas bloquer indéfiniment le chargement du site",
              "j'ai construit les paramètres propres à chaque plateforme, notamment le nom de la chaîne Twitch et l'identifiant de chaîne YouTube",
            ],
            [
              "j'ai décodé les réponses JSON et recherché les données indiquant qu'un stream ou une vidéo en direct était disponible",
              "j'ai transformé les résultats de plusieurs plateformes en une structure commune contenant l'état, le nom de la plateforme et le lien à afficher",
            ],
            "j'ai stocké temporairement le statut général et les autorisations obtenues afin de réduire les requêtes externes, d'accélérer les pages et de limiter l'utilisation des services",
            [
              "j'ai contrôlé les erreurs WordPress, les réponses vides, les identifiants absents et les cas où aucun direct n'était en cours",
              "j'ai retourné un état hors ligne stable plutôt qu'une erreur visible afin que l'en-tête et le reste du site restent utilisables lorsque Twitch ou YouTube ne répondent pas",
            ],
          ],
          description:
            "La trace 3 ci-contre présente la fonctionnalité qui indique automatiquement si Good Geek diffuse actuellement un direct sur Twitch ou YouTube. Le besoin était d'éviter une information saisie manuellement, qui risquait de rester affichée après la fin d'un live ou de ne pas être activée au bon moment. J'ai donc créé une logique côté WordPress capable de contacter les services externes et d'en déduire un état utilisable dans l'en-tête du site. Pour Twitch, une première requête sert à obtenir un jeton d'application. Ce jeton est ensuite utilisé avec l'identifiant du client pour interroger la chaîne de Good Geek. Pour YouTube, le site utilise la clé de l'interface de programmation afin d'identifier la chaîne et de rechercher une vidéo en cours de diffusion. Une vérification supplémentaire de la page de direct est prévue lorsque la première méthode ne retourne pas de résultat. Les réponses sont décodées puis transformées en informations simples : plateforme active, adresse du direct et état général. L'en-tête affiche alors un indicateur hors ligne ou un menu contenant les plateformes disponibles. J'ai aussi dû penser aux erreurs possibles, car le fonctionnement du site ne doit pas dépendre entièrement d'un service extérieur. En cas de clé absente, de délai dépassé ou de réponse invalide, le code retourne un état hors ligne sans provoquer d'erreur visible. Un cache temporaire réduit enfin le nombre de requêtes et améliore les performances.",
          remarkablePoints: [
            "La fonctionnalité ne dépend pas seulement du thème : elle doit aussi gérer des réponses venant de plateformes externes.",
            "Il faut prévoir les cas où la plateforme ne répond pas, où les identifiants ne sont pas configurés ou où aucun live n'est en cours.",
          ],
        },
        {
          number: 4,
          title: 'Administration des pages et de la page d’accueil',
          image: '/images/traces/trace-wordpress-administration.svg',
          caption:
            "Trace 4 : schéma des réglages créés pour modifier les pages d'articles, les cartes de l'accueil et les boosters depuis WordPress.",
          schemaItems: [
            "Un bloc Administration WordPress au centre.",
            "Une branche Pages d'articles avec profils visuels, couleurs, typographies, médias et affectation par catégorie.",
            "Une branche Page d'accueil avec choix des articles, ordre des cartes, styles et contenus affichés.",
            "Une branche Boosters avec activation, titre, thème, couleurs, image, textes et sélection des cartes.",
            "Des flèches vers le site public pour montrer que les réglages enregistrés modifient automatiquement l'affichage.",
          ],
          skills: ['creer-theme-wordpress', 'organiser-contenus'],
          elementarySkills: [
            "Savoir créer des interfaces de réglage dans l'administration",
            'Savoir factoriser les éléments communs du thème',
            "Savoir rendre les pages d'articles personnalisables",
            "Savoir associer un profil visuel à une catégorie ou un article",
            "Savoir rendre les cartes de l'accueil configurables",
            "Savoir rendre les boosters administrables",
            "Savoir enregistrer et restituer des réglages complexes",
          ],
          skillPassages: [
            [
              "j'ai ajouté des métaboxes, des sections du personnalisateur et des pages de réglage afin que l'entreprise puisse agir sur le site depuis l'administration WordPress sans modifier les fichiers PHP",
              "j'ai organisé les nombreux champs par sections compréhensibles et ajouté des aperçus lorsque le résultat visuel devait être contrôlé avant l'enregistrement",
            ],
            [
              "j'ai regroupé dans des fonctions communes la définition des profils, leurs valeurs par défaut, leur résolution et la création des variables CSS afin de réutiliser la même logique pour plusieurs pages d'articles",
              "j'ai réemployé les fonctions de préparation des cartes et des médias entre l'administration, la page d'accueil et les templates publics plutôt que de dupliquer leurs traitements",
            ],
            [
              "j'ai créé plusieurs profils visuels pour les pages d'articles avec des réglages portant sur les couleurs, les polices, les dimensions, les images, la mise en valeur du titre, les boutons, les médias et certaines animations",
              "j'ai prévu des variantes propres aux univers visuels, notamment pour les articles classiques, le cinéma, les mangas ou les cartes à collectionner, sans devoir créer un nouveau template complet pour chaque apparence",
            ],
            [
              "j'ai permis d'affecter automatiquement ou manuellement un profil à une catégorie et de choisir un profil particulier pour un article lorsque son apparence devait être différente",
              "j'ai ajouté la possibilité de créer une déclinaison à partir d'un profil existant afin de conserver sa structure tout en modifiant ses propres couleurs et images",
            ],
            [
              "j'ai rendu les cartes de la page d'accueil configurables en permettant de choisir leur source, leur contenu, leur média principal, leur style, leur couleur et leur ordre d'affichage",
              "j'ai préparé les données des cartes avant leur affichage afin que les changements enregistrés dans WordPress soient automatiquement repris par le template de l'accueil",
            ],
            [
              "j'ai conçu une interface permettant d'activer plusieurs boosters, de choisir leur titre, leur description, leur thème, leur image, leurs couleurs et les cartes qu'ils contiennent",
              "j'ai aussi rendu modifiables les textes placés sur le booster, leur position, leur taille, leur police et leurs effets, avec un aperçu facilitant les réglages",
            ],
            [
              "j'ai vérifié les autorisations et les jetons de sécurité, nettoyé chaque type de valeur puis enregistré les réglages dans les métadonnées ou les options WordPress",
              "j'ai reconstruit une structure exploitable à partir des valeurs enregistrées afin que le site public puisse afficher des listes de cartes, plusieurs médias, des profils visuels et plusieurs boosters sans ajouter ces informations directement dans le code",
            ],
          ],
          description:
            "La trace 4 ci-contre montre comment j'ai rendu une grande partie du site modifiable depuis l'administration WordPress. L'objectif n'était pas uniquement de permettre la rédaction d'un titre et d'un texte. Good Geek devait pouvoir modifier l'apparence et la composition de plusieurs pages sans intervenir dans le thème. Pour les pages d'articles, j'ai construit un système de profils visuels. Chaque profil regroupe de nombreux réglages, comme les couleurs, les typographies, la largeur du contenu, la hauteur de la zone principale, la présentation des médias, les boutons et certaines décorations. Un profil peut être associé à une catégorie, choisi directement pour un article ou dupliqué afin de créer une nouvelle déclinaison. Cette logique permet d'obtenir des pages adaptées à plusieurs univers tout en conservant un seul système de templates. La page d'accueil possède également sa propre interface de configuration. L'entreprise peut sélectionner les contenus à mettre en avant, choisir les médias utilisés, modifier l'ordre et l'apparence des cartes puis préparer les événements affichés. J'ai enfin développé une administration complète pour les boosters. Plusieurs boosters peuvent être activés et personnalisés avec un thème, une image, des couleurs, des textes positionnés sur le visuel et une sélection de cartes provenant des contenus existants. Les réglages sont contrôlés lors de leur enregistrement puis transformés en données utilisables par le site public. Cette trace montre donc que les éléments complexes du site ne sont pas figés dans le code et peuvent être adaptés plus tard par l'entreprise.",
          remarkablePoints: [
            "La personnalisation concerne à la fois le contenu, l'apparence et l'organisation des pages.",
            "Les réglages complexes sont réutilisés par les templates sans imposer une modification du code à chaque changement.",
          ],
        },
      ],
      analyses: [
        {
          skillId: 'creer-theme-wordpress',
          title: 'Savoir créer un thème WordPress complet',
          context:
            "Ce savoir-faire a été mobilisé pendant toute la création du site de communication Good Geek. Il concernait la préparation de la structure du thème, la création des templates PHP, la mise en commun de l'en-tête et du pied de page, l'affichage des contenus WordPress, la réalisation des styles et l'adaptation responsive. Il fallait également relier le résultat visible à l'administration afin que le site ne soit pas composé de pages fixes.",
          learning:
            "Je ne connaissais pas WordPress au début du stage. J'ai appris progressivement la hiérarchie des templates, les fonctions PHP fournies par WordPress, la récupération des contenus et la séparation entre les données administrées et leur présentation. Le fait de travailler sur toutes les pages m'a aussi appris à créer des éléments communs réutilisables et à conserver une cohérence dans un projet qui grandissait.",
          difficulties:
            "La principale difficulté a été de créer un site complet sans base adaptée déjà prête, tout en découvrant WordPress au fur et à mesure. Une erreur dans la structure pouvait avoir des conséquences sur plusieurs pages. Je devais donc apprendre, tester dans le navigateur, identifier l'origine d'un problème puis corriger le thème sans casser les parties déjà fonctionnelles.",
          before: 'débutant',
          after: 'moyen',
          justification:
            "Avant le stage, je ne savais pas réellement construire un site avec WordPress ni expliquer le rôle de ses fichiers. Après cette expérience, je sais créer un thème, organiser ses templates, récupérer et afficher des contenus dynamiques, intégrer des champs administrables et adapter les pages à plusieurs tailles d'écran. Je ne considère pas avoir une maîtrise complète de WordPress, mais je suis désormais capable de développer et de faire évoluer un thème fonctionnel avec davantage d'autonomie.",
          traceRefs: [1, 2, 3, 4],
        },
        {
          skillId: 'organiser-contenus',
          title: 'Savoir organiser des contenus dynamiques',
          context:
            "Ce savoir-faire a été utilisé pour afficher les articles, les événements, les contenus multimédias et les informations modifiables depuis l'administration. Chaque page ne demandait pas les mêmes données : les actualités utilisent surtout les catégories, les dates et les extraits, tandis que les événements ajoutent des horaires et des lieux et que le multimédia doit gérer plusieurs types de médias.",
          learning:
            "J'ai appris à utiliser des requêtes WordPress et des fonctions comme WP_Query ou get_post_meta pour sélectionner les publications et récupérer leurs informations. J'ai aussi appris à préparer les données avant l'affichage, à choisir une valeur de remplacement lorsqu'une information manque et à remettre correctement l'état des requêtes WordPress après leur utilisation.",
          difficulties:
            "La partie multimédia a été la plus difficile, car il fallait réunir des contenus différents dans une présentation commune. Le problème n'était pas seulement d'obtenir les données, mais de décider comment les trier, les filtrer et les répartir sans créer une page désordonnée. Les images, les vidéos et les résumés variables demandaient également plusieurs comportements de secours.",
          before: 'fragile',
          after: 'moyen',
          justification:
            "La progression est visible dans le passage d'une structure vide à plusieurs pages capables d'afficher des contenus variés et administrables. Le site sait désormais traiter des images, des vidéos, des catégories, des extraits, des dates et des métadonnées propres aux événements. Cette expérience m'a appris à ne pas mélanger directement toute la logique de récupération avec le code visuel et à anticiper les contenus incomplets.",
          traceRefs: [1, 2, 4],
        },
        {
          skillId: 'connecter-services',
          title: 'Savoir connecter le site à des services externes',
          context:
            "Ce savoir-faire a été utilisé pour détecter automatiquement si Good Geek était en direct sur Twitch ou YouTube et pour afficher cette information dans l'en-tête. La fonctionnalité devait récupérer une donnée extérieure au site, la convertir dans un format simple et rester discrète lorsqu'aucun direct n'était disponible.",
          learning:
            "J'ai appris qu'une connexion à un service externe ne se limite pas à envoyer une requête. Il faut gérer les clés et les identifiants, obtenir une autorisation lorsque la plateforme le demande, lire une réponse JSON, reconnaître une réponse valide et prévoir les erreurs. J'ai également découvert l'intérêt du cache pour éviter des appels inutiles à chaque visite.",
          difficulties:
            "La difficulté a été d'obtenir une information fiable et directement utilisable par le thème. Twitch et YouTube ne fonctionnent pas de la même manière, et une réponse vide peut signifier qu'aucun direct n'est en cours sans forcément représenter une erreur. Le code devait donc distinguer ces situations tout en empêchant une panne externe de perturber le reste du site.",
          before: 'débutant',
          after: 'moyen',
          justification:
            "Après cette expérience, je comprends mieux comment intégrer une vérification externe dans WordPress, traiter plusieurs plateformes et présenter un résultat compréhensible. Je sais également prévoir un état de secours, limiter les requêtes avec des données temporaires et garder les informations sensibles en dehors de l'affichage. Mon niveau reste intermédiaire, mais je peux désormais aborder ce type d'intégration avec une méthode plus claire.",
          traceRefs: [3],
        },
      ],
    },
    {
      slug: 'suivi-projet',
      path: '/suivi-projet',
      label: 'Suivi de projet',
      title: 'Suivi de projet',
      summary:
        "Cette partie présente la manière dont j'ai organisé le travail après le changement de mission : prise de notes du débrief, liste de tâches, priorisation et validations progressives avec l'équipe.",
      tabs: [
        {
          id: 'description',
          label: 'Description',
          title: 'Description du suivi par traces',
          intro:
            "Les traces montrent comment la mission a été transformée en tâches concrètes, puis suivie malgré la découverte de WordPress.",
        },
        {
          id: 'bilan',
          label: 'Bilan / Analyse',
          title: 'Bilan du suivi de projet',
          intro:
            "L'analyse porte sur la progression dans l'organisation, la priorisation et la validation du travail réalisé.",
        },
      ],
      skills: [
        {
          id: 'recueillir-besoin',
          name: 'Savoir recueillir et reformuler un besoin',
          color: '#c2410c',
        },
        {
          id: 'prioriser-taches',
          name: 'Savoir planifier et prioriser des tâches',
          color: '#4d7c0f',
        },
        {
          id: 'suivre-projet',
          name: 'Savoir suivre un projet après un changement de mission',
          color: '#0369a1',
        },
      ],
      traces: [
        {
          number: 5,
          title: 'Liste de tâches issue du débrief de début de stage',
          image: '/images/traces/trace-project-board.svg',
          caption:
            "Trace 5 : schéma de la liste de tâches construite après le débrief initial avec les attentes de l'entreprise.",
          schemaItems: [
            "Un bloc Débrief initial.",
            "Un bloc Notes prises pendant la réunion.",
            "Un tableau de tâches : pages, articles, événements, multimédia, réseaux, live.",
            "Des colonnes À faire, En cours, À montrer, Validé.",
          ],
          skills: ['recueillir-besoin', 'prioriser-taches', 'suivre-projet'],
          elementarySkills: [
            'Savoir prendre des notes pendant un débrief',
            'Savoir reformuler une demande en objectifs',
            'Savoir découper un projet en tâches',
            'Savoir identifier les dépendances entre les tâches',
            'Savoir ajuster les priorités selon les difficultés',
            "Savoir suivre l'avancement d'une réalisation",
          ],
          skillPassages: [
            "j'ai noté les pages, les contenus, les fonctions attendues et les contraintes présentées par l'entreprise lors du changement de mission",
            "j'ai transformé la demande générale de site de communication en objectifs vérifiables, comme publier des actualités, présenter les événements ou signaler automatiquement un direct",
            [
              "j'ai séparé le projet entre structure du thème, pages publiques, administration, contenus dynamiques, styles et services externes",
              "j'ai redécoupé les parties trop larges, notamment le multimédia, en récupération des données, préparation des cartes, filtres, médias et responsive",
            ],
            "j'ai repéré que les templates dépendaient de la structure commune et que certaines pages dépendaient d'abord de la manière dont les contenus seraient enregistrés dans WordPress",
            [
              "j'ai modifié l'ordre de certaines tâches lorsque leur complexité réelle apparaissait pendant le développement",
              "j'ai compris avec la partie multimédia qu'une fonction risquée doit être étudiée plus tôt, même lorsqu'il est plus rassurant de commencer par les pages simples",
            ],
            "j'ai utilisé les états à faire, en cours, à montrer et validé pour garder une vision du travail restant et préparer les présentations à l'équipe",
          ],
          description:
            "La trace 5 ci-contre représente l'organisation du travail mise en place après le débrief réalisé au début du stage. La mission prévue au départ concernait l'amélioration du site de la boutique, mais ce projet était déjà trop avancé pour que je puisse y apporter des changements suffisamment importants. L'entreprise m'a donc confié la création d'un nouveau site consacré à sa communication. Ce changement m'a obligé à repartir d'un besoin différent et à construire rapidement une vision globale du résultat attendu. Pendant le débrief, j'ai pris des notes sur les pages, les contenus et les fonctionnalités demandés. J'ai ensuite transformé ces informations en tâches plus précises afin de ne pas conserver une consigne trop générale comme simple repère. Le projet a été découpé entre la structure du thème, les pages publiques, les contenus administrables, les événements, la partie multimédia, les réseaux et la détection des directs. J'ai utilisé des états simples pour savoir ce qui restait à faire, ce qui était en cours, ce qui pouvait être montré à l'équipe et ce qui avait été validé. Cette organisation m'a aidé à travailler seul et à mesurer l'avancement. Elle a aussi révélé une limite dans ma première planification : comme je découvrais WordPress, j'ai commencé par des éléments simples, ce qui m'a permis d'apprendre, mais a repoussé certaines difficultés importantes. Avec du recul, j'aurais identifié plus tôt les parties risquées afin de leur réserver davantage de temps.",
          remarkablePoints: [
            "Le projet a changé au début du stage, ce qui m'a obligé à repartir sur une nouvelle mission.",
            "La liste de tâches a servi de repère pour avancer seul sans perdre de vue les attentes de l'entreprise.",
          ],
        },
        {
          number: 6,
          title: 'Validations progressives avec les membres de l’entreprise',
          image: '/images/traces/trace-validation-note.svg',
          caption:
            "Trace 6 : schéma des validations ponctuelles réalisées quand je montrais l'avancement du site à l'équipe.",
          schemaItems: [
            "Un bloc Travail réalisé.",
            "Un bloc Présentation à l'équipe.",
            "Un bloc Retour des membres de l'entreprise.",
            "Un bloc Correction ou validation.",
          ],
          skills: ['recueillir-besoin', 'suivre-projet'],
          elementarySkills: [
            'Savoir préparer une démonstration compréhensible',
            'Savoir présenter le résultat sans détailler inutilement le code',
            'Savoir recueillir plusieurs avis',
            'Savoir reformuler un retour en modification',
            'Savoir vérifier une correction',
            "Savoir suivre l'avancement d'une réalisation",
          ],
          skillPassages: [
            "j'ai attendu que la page ou la fonctionnalité soit assez complète, préparé des contenus représentatifs et vérifié son fonctionnement avant de la montrer",
            "j'ai présenté le besoin traité, le parcours visible et les éléments modifiables dans WordPress en utilisant le navigateur plutôt qu'une explication centrée sur le PHP",
            [
              "j'ai écouté les remarques de la développeuse responsable de l'informatique et celles des deux autres membres de Good Geek",
              "j'ai distingué les retours techniques, les choix liés à l'identité visuelle et les remarques portant sur l'activité de l'entreprise",
            ],
            "j'ai transformé une remarque générale sur la clarté, le style ou l'ordre des informations en changements précis à effectuer dans le template ou la feuille de style",
            [
              "j'ai testé de nouveau la page après la correction et contrôlé que le changement ne dégradait pas les autres tailles d'écran",
              "j'ai considéré la partie comme validée lorsque le résultat corrigé répondait au besoin et qu'aucune nouvelle modification n'était demandée",
            ],
            [
              "j'ai utilisé les présentations comme des étapes de suivi pour distinguer les éléments encore à corriger de ceux qui pouvaient être considérés comme validés",
              "j'ai reporté les demandes issues des échanges dans la suite des tâches afin de garder une vision à jour de l'avancement réel",
            ],
          ],
          description:
            "La trace 6 ci-contre décrit la manière dont les différentes parties du site étaient présentées et validées pendant le stage. J'étais seul à développer le projet, mais cela ne signifiait pas que je devais prendre toutes les décisions sans retour. Lorsque l'une des pages ou une fonctionnalité atteignait un niveau suffisamment complet, je la montrais aux membres de Good Geek. La présentation se faisait à partir du résultat visible plutôt qu'à partir du code, car l'objectif était de vérifier l'utilité, la compréhension et l'apparence du site. J'expliquais ce que l'utilisateur pouvait voir, comment il pouvait naviguer et quelles informations l'entreprise pourrait modifier dans l'administration. Les trois membres pouvaient donner leur avis, avec des points de vue différents selon leur connaissance de la communication, de la boutique ou de l'informatique. Je notais ensuite les remarques concernant le style, l'organisation des informations ou le comportement attendu. Après l'échange, je retournais dans le code pour effectuer les corrections puis je testais de nouveau la page. Certaines validations confirmaient directement mes choix, tandis que d'autres entraînaient une nouvelle version. Ce fonctionnement m'a permis de ne pas attendre la fin du stage pour découvrir qu'une partie ne répondait pas au besoin. Il m'a également appris à présenter un travail technique avec des mots compréhensibles et à considérer les retours comme une étape normale du développement.",
          remarkablePoints: [
            "Les validations n'étaient pas constantes, mais elles intervenaient quand je montrais une partie terminée ou suffisamment avancée.",
            "Les retours m'ont permis d'ajuster le style, les pages ou certaines priorités.",
          ],
        },
      ],
      analyses: [
        {
          skillId: 'recueillir-besoin',
          title: 'Savoir recueillir et reformuler un besoin',
          context:
            "Ce savoir-faire a été utilisé lors du débrief de début de stage, au moment où la nouvelle mission a été expliquée, puis pendant les retours ponctuels de l'équipe. Il fallait comprendre une demande générale de communication et la traduire en pages, contenus, fonctionnalités et critères visibles permettant de savoir si le résultat répondait au besoin.",
          learning:
            "J'ai appris à prendre des notes pendant une présentation du besoin, à reformuler les attentes et à les transformer en tâches concrètes. J'ai également compris que le besoin peut devenir plus précis lorsque l'équipe voit une première version. Les présentations intermédiaires servent donc aussi à compléter ou corriger la compréhension initiale.",
          difficulties:
            "La difficulté a été de comprendre rapidement ce qui était attendu alors que la mission avait changé par rapport au sujet prévu au départ. L'expression « site de communication » restait large et pouvait conduire à des interprétations différentes. Je devais donc identifier les pages attendues, leur utilité et les informations que l'entreprise souhaitait pouvoir modifier.",
          before: 'moyen',
          after: 'bon',
          justification:
            "Je suis maintenant plus capable de noter une demande, de vérifier ma compréhension et de la transformer en actions réalisables. Le découpage obtenu a servi de base à la création de toutes les pages du site et aux validations. Je dois encore progresser dans la formalisation des critères dès le départ, mais je distingue mieux une demande générale d'une tâche suffisamment précise pour être développée et testée.",
          traceRefs: [5, 6],
        },
        {
          skillId: 'prioriser-taches',
          title: 'Savoir planifier et prioriser des tâches',
          context:
            "Ce savoir-faire a été mobilisé pour organiser un projet complet comprenant plusieurs pages et fonctionnalités, alors que je découvrais WordPress en même temps. Il fallait choisir un ordre de réalisation permettant à la fois d'apprendre les bases, de produire des résultats visibles et de réserver du temps aux parties présentant davantage d'incertitudes.",
          learning:
            "J'ai compris qu'une liste de tâches ne suffit pas si elle n'est pas accompagnée d'une réflexion sur les dépendances et les risques. Les parties les plus difficiles doivent être étudiées assez tôt, même si elles ne sont pas terminées immédiatement. Un premier essai permet d'évaluer leur complexité réelle et d'éviter de découvrir un blocage à la fin du projet.",
          difficulties:
            "Avec du recul, j'ai commencé par les choses simples afin de prendre en main WordPress et d'obtenir rapidement des pages visibles. Cette décision était utile pour apprendre, mais elle m'a fait repousser des problèmes plus complexes comme la répartition des contenus multimédias. J'ai donc dû consacrer davantage de temps à ces parties dans la suite du stage.",
          before: 'fragile',
          after: 'moyen',
          justification:
            "Après le stage, je sais mieux analyser un projet avant de commencer, repérer les zones risquées et identifier les tâches qui dépendent d'autres éléments. Je conserverais une phase d'apprentissage au début, mais je réaliserais en parallèle de petits prototypes pour les fonctionnalités incertaines. Cette conclusion vient directement de l'écart observé entre la facilité des premières pages et le temps nécessaire à la partie multimédia.",
          traceRefs: [5],
        },
        {
          skillId: 'suivre-projet',
          title: 'Savoir suivre un projet après un changement de mission',
          context:
            "Ce savoir-faire a été important car la mission initiale a changé au début du stage. Je ne devais plus améliorer le site de la boutique, mais créer un nouveau site WordPress consacré à la communication de Good Geek. Il fallait accepter cette modification, redéfinir les objectifs et organiser un projet beaucoup plus large que quelques améliorations isolées.",
          learning:
            "J'ai appris à m'adapter à une nouvelle demande sans rester bloqué sur le sujet prévu avant mon arrivée. J'ai construit une liste de tâches à partir du débrief, puis j'ai suivi la réalisation des pages et des fonctionnalités. Le travail autonome était complété par des présentations permettant de confirmer que le projet restait aligné avec les attentes.",
          difficulties:
            "La difficulté était de conserver une organisation claire sur un projet très large, avec toutes les pages à créer et un outil que je ne connaissais pas encore. Certaines tâches se sont révélées plus longues que prévu, ce qui m'a obligé à ajuster mes priorités sans perdre la vision globale du site.",
          before: 'fragile',
          after: 'moyen',
          justification:
            "Je suis plus capable de repartir d'un nouveau besoin, de le découper et de garder une trace de l'avancement. Le changement de mission n'a pas empêché la création du site et m'a conduit à développer des compétences plus larges. Je sais toutefois que mon suivi gagnerait à inclure dès le départ une estimation de la difficulté et des étapes de contrôle prévues pour les fonctions les plus risquées.",
          traceRefs: [5, 6],
        },
      ],
    },
    {
      slug: 'integration-entreprise',
      path: '/integration-entreprise',
      label: 'Intégration en entreprise',
      title: 'Intégration en entreprise',
      summary:
        "Cette partie analyse mon adaptation au cadre de travail chez Good Geek : travail seul sur le site, échanges avec la développeuse responsable de l'informatique, retours de l'équipe et utilisation d'un environnement local WordPress.",
      tabs: [
        {
          id: 'description',
          label: 'Description',
          title: "Description de l'intégration par traces",
          intro:
            "Les traces montrent l'organisation des échanges, les validations et l'environnement utilisé pour développer le site.",
        },
        {
          id: 'bilan',
          label: 'Bilan / Analyse',
          title: "Bilan de l'intégration",
          intro:
            "L'analyse porte sur la posture professionnelle, l'autonomie et la progression dans un environnement WordPress inconnu au départ.",
        },
      ],
      skills: [
        {
          id: 'communiquer-equipe',
          name: 'Savoir communiquer dans un cadre professionnel',
          color: '#be185d',
        },
        {
          id: 'utiliser-outils',
          name: 'Savoir utiliser les outils et procédures de travail',
          color: '#0e7490',
        },
        {
          id: 'integration-cadre',
          name: "Savoir travailler seul avec des validations d'équipe",
          color: '#7c2d12',
        },
      ],
      traces: [
        {
          number: 7,
          title: "Circuit d'échange avec l'équipe",
          image: '/images/traces/trace-communication-flow.jpg',
          caption:
            "Trace 7 : schéma des échanges entre mon travail seul, les retours de l'équipe et les validations ponctuelles.",
          schemaItems: [
            "Un bloc Travail seul.",
            "Un bloc Question ou présentation à la référente informatique.",
            "Un bloc Retour de l'équipe.",
            "Un bloc Correction ou validation.",
            "Une flèche de retour si une modification est demandée.",
          ],
          skills: ['communiquer-equipe', 'integration-cadre'],
          elementarySkills: [
            'Savoir adapter son vocabulaire à son interlocuteur',
            'Savoir expliquer une fonctionnalité par son usage',
            'Savoir choisir le moment pertinent pour demander un avis',
            'Savoir écouter et noter une remarque',
            'Savoir conserver son autonomie entre deux validations',
            'Savoir vérifier plusieurs cas dans le navigateur',
          ],
          skillPassages: [
            "j'ai employé davantage de termes techniques avec ma référente développeuse et des explications plus visuelles avec les autres membres de l'entreprise",
            [
              "j'ai expliqué ce que la page permettait de faire avant de présenter la manière dont elle avait été construite",
              "j'ai montré les contenus modifiables et le parcours du visiteur sans demander à mes interlocuteurs de comprendre les templates ou les requêtes WordPress",
            ],
            "j'ai demandé un avis lorsque le résultat était assez avancé pour être évalué, mais avant qu'une éventuelle réorganisation ne devienne trop longue",
            "j'ai laissé chaque personne exprimer son point de vue puis noté les changements à effectuer afin de ne pas dépendre uniquement de ma mémoire après la discussion",
            [
              "j'ai continué à rechercher et tester mes solutions seul entre les présentations au lieu de solliciter l'équipe pour chaque détail",
              "j'ai néanmoins demandé une validation lorsqu'un choix concernait l'image de Good Geek ou l'utilisation future du site par l'entreprise",
            ],
            [
              "j'ai présenté des pages déjà vérifiées avec plusieurs contenus et tailles d'écran afin que les retours portent sur un résultat suffisamment stable",
              "j'ai reproduit dans le navigateur les situations signalées par l'équipe avant de corriger puis de montrer une nouvelle version",
            ],
          ],
          description:
            "La trace 7 ci-contre représente le circuit d'échange suivi pendant le stage entre mon travail autonome et les validations de l'entreprise. J'étais seul à intervenir sur ce nouveau site, ce qui me donnait une grande responsabilité sur l'organisation du code, la création des pages et les choix visuels. Ma référente était la développeuse chargée de la partie informatique ; elle pouvait donc comprendre les contraintes techniques et m'aider à vérifier la cohérence générale de certaines décisions. Les autres membres de Good Geek apportaient surtout leur connaissance de l'activité, des produits et de la communication attendue. Je devais choisir le bon moment pour demander un avis : une page trop incomplète aurait été difficile à évaluer, mais attendre trop longtemps aurait rendu une modification plus coûteuse. Lorsque je présentais une partie, je partais du besoin et du résultat visible. J'évitais de détailler un code complexe qui n'était pas nécessaire à la compréhension. Les remarques étaient ensuite traduites en modifications concrètes, par exemple sur l'ordre des informations, le style d'une page ou la manière de mettre un contenu en valeur. Après les corrections, le résultat pouvait être montré de nouveau ou intégré à la suite du projet. Ce fonctionnement m'a permis de rester autonome sans travailler de manière isolée. Il montre aussi que l'intégration en entreprise repose autant sur la communication et l'écoute que sur la capacité à produire du code.",
          remarkablePoints: [
            "Le travail seul demandait de l'autonomie, mais il ne fallait pas rester isolé quand une validation était nécessaire.",
            "Les retours étaient importants pour vérifier le style des pages et la compréhension des fonctionnalités.",
          ],
        },
        {
          number: 8,
          title: 'Environnement WordPress local',
          image: '/images/traces/trace-work-environment.png',
          caption:
            "Trace 8 : vue de l'administration WordPress, de l'environnement local XAMPP et de l'organisation des fichiers du thème dans Visual Studio Code.",
          schemaItems: [
            "À l'arrière-plan : le tableau de bord WordPress utilisé pour administrer les contenus du site.",
            "Dans l'encadré vert : XAMPP avec Apache et MySQL actifs pour exécuter WordPress localement.",
            "Dans l'encadré rouge : Visual Studio Code et l'arborescence des fichiers PHP, CSS et JavaScript du thème.",
          ],
          skills: ['utiliser-outils', 'integration-cadre'],
          elementarySkills: [
            'Savoir utiliser un environnement WordPress local',
            'Savoir distinguer le rôle de PHP, CSS et JavaScript',
            'Savoir créer et tester des champs personnalisés',
            'Savoir sécuriser un enregistrement WordPress',
            'Savoir construire des contenus de test',
            'Savoir vérifier plusieurs cas dans le navigateur',
            'Savoir conserver son autonomie entre deux validations',
          ],
          skillPassages: [
            [
              "dans l'encadré vert, XAMPP montre qu'Apache et MySQL sont actifs pour faire fonctionner WordPress localement",
              "cet environnement local me permettait de tester mes modifications sans intervenir sur un site public",
            ],
            "dans l'encadré rouge, l'arborescence de Visual Studio Code distingue les fichiers PHP, les feuilles CSS et les scripts JavaScript du thème",
            [
              "à l'arrière-plan, l'administration WordPress permet de créer les contenus et de renseigner les champs personnalisés sans modifier les fichiers du thème",
              "j'ai récupéré les métadonnées enregistrées et adapté leur affichage selon leur type, par exemple une date, une image, un texte ou un lien",
            ],
            "j'ai vérifié les autorisations et les jetons de sécurité, nettoyé les valeurs reçues puis utilisé la fonction d'enregistrement adaptée avant de conserver les métadonnées",
            "j'ai créé des articles et événements avec des titres courts ou longs, plusieurs médias, des champs remplis ou absents et des dates différentes afin d'observer le comportement réel des pages",
            [
              "j'ai contrôlé les pages sur plusieurs largeurs d'écran ainsi que les filtres, les liens, les images, les formulaires et les dates",
              "j'ai testé les cas sans résultat, sans image, avec une donnée incomplète ou avec un service externe indisponible afin que l'interface reste cohérente",
            ],
            [
              "j'ai utilisé l'environnement local pour rechercher l'origine des problèmes, essayer plusieurs corrections et contrôler leur résultat avant de solliciter un nouveau retour",
              "j'ai pu poursuivre les développements de manière indépendante entre les validations grâce aux contenus de test et aux outils disponibles sur mon poste",
            ],
          ],
          description:
            "La trace 8 ci-dessus rassemble les trois outils principaux que j'utilisais pour développer et tester le site de communication. À l'arrière-plan, le tableau de bord WordPress montre l'interface depuis laquelle je créais les articles et les événements, ajoutais les médias, modifiais les pages et renseignais les champs personnalisés. Cette partie me permettait de vérifier que les contenus enregistrés par un utilisateur pouvaient ensuite être récupérés et affichés correctement par le thème. Dans l'encadré vert, le panneau de contrôle XAMPP indique qu'Apache et MySQL sont actifs. Apache exécutait localement WordPress et les fichiers PHP, tandis que MySQL permettait de conserver les pages, les publications, les réglages et les métadonnées. Grâce à cet environnement local, je pouvais effectuer des essais, provoquer des erreurs et recommencer mes tests sans intervenir sur un site public. Dans l'encadré rouge, Visual Studio Code présente l'arborescence du thème développé pendant le stage. On y distingue notamment le dossier assets, qui regroupe les feuilles de style CSS et les scripts JavaScript, ainsi que le dossier inc, composé de plusieurs fichiers PHP consacrés à des fonctionnalités précises. Cette organisation séparait la présentation, les interactions et la logique WordPress afin de rendre le code plus lisible et de faciliter sa réutilisation. Les fichiers PHP servaient à construire les templates, récupérer les contenus et traiter les champs personnalisés. Les feuilles CSS définissaient l'identité visuelle et l'adaptation des pages aux différentes tailles d'écran, tandis que JavaScript gérait les interactions réalisées directement dans le navigateur. La réunion de ces trois zones illustre mon fonctionnement quotidien : je modifiais le code dans Visual Studio Code, je gérais les données depuis WordPress, puis j'utilisais XAMPP pour exécuter et contrôler l'ensemble sur mon poste. Après chaque modification importante, je testais plusieurs contenus et situations, comme une image absente, un titre long, une date incomplète ou l'absence de résultat. Cette méthode m'a aidé à comprendre la circulation complète d'une information, depuis son enregistrement dans l'administration jusqu'à son affichage final sur le site.",
          remarkablePoints: [
            "Le travail en local permettait de tester sans impacter un site public.",
            "L'administration WordPress était importante car plusieurs pages devaient être modifiables sans passer par le code.",
          ],
        },
      ],
      analyses: [
        {
          skillId: 'communiquer-equipe',
          title: 'Savoir communiquer dans un cadre professionnel',
          context:
            "Ce savoir-faire a été utilisé lorsque je présentais l'avancement du site, lorsque je demandais un retour sur une page et lorsque je devais expliquer une fonctionnalité à partir de son résultat visible. Les échanges concernaient aussi bien la développeuse responsable de l'informatique que les autres membres de l'entreprise.",
          learning:
            "J'ai appris à expliquer mon travail simplement, en partant de l'objectif et de l'utilisation plutôt que des détails du code. Je devais montrer ce qu'un visiteur verrait, ce que l'entreprise pourrait modifier et pourquoi certains choix avaient été faits. J'ai aussi appris à écouter une remarque jusqu'au bout avant de chercher immédiatement une solution technique.",
          difficulties:
            "La difficulté était de choisir le bon moment pour montrer l'avancement. Une version trop incomplète pouvait détourner la discussion vers des détails temporaires, tandis qu'une présentation trop tardive pouvait entraîner des corrections plus longues. Je devais également adapter mes explications au niveau technique de chaque interlocuteur.",
          before: 'fragile',
          after: 'moyen',
          justification:
            "Je suis plus capable de présenter une fonctionnalité de manière structurée, de recevoir un retour et de le traduire en modification concrète. Les validations progressives m'ont aidé à corriger certaines pages avant la fin du projet. Je peux encore améliorer la préparation de mes démonstrations, mais je sais désormais distinguer les informations utiles à l'équipe des détails techniques qui n'apportent rien à la décision.",
          traceRefs: [7],
        },
        {
          skillId: 'utiliser-outils',
          title: 'Savoir utiliser les outils et procédures de travail',
          context:
            "Ce savoir-faire a été mobilisé avec XAMPP, WordPress, l'administration, les fichiers PHP, CSS et JavaScript du thème, ainsi que le navigateur utilisé pour les tests. L'environnement local devait permettre de créer des contenus, de modifier le code et de vérifier immédiatement le résultat sans intervenir sur un site public.",
          learning:
            "Je ne connaissais pas WordPress au départ. Le stage m'a permis de comprendre le fonctionnement d'une installation locale, le lien avec la base de données, le rôle de l'administration, la différence entre pages et articles, l'utilisation des médias, des métadonnées et des templates. J'ai aussi appris à utiliser les fonctions WordPress de préférence à des solutions PHP indépendantes.",
          difficulties:
            "La difficulté a été de comprendre comment WordPress relie les informations enregistrées dans l'administration, les fichiers PHP du thème et l'affichage public. Lorsqu'un élément ne s'affichait pas, l'erreur pouvait venir du contenu, de la requête, du template ou du style. Il fallait donc apprendre à vérifier chaque niveau séparément.",
          before: 'débutant',
          after: 'moyen',
          justification:
            "Je sais maintenant installer et utiliser un environnement WordPress local, modifier un thème, créer des contenus de test et vérifier le rendu dans le navigateur. Je sais également travailler avec des champs personnalisés, des requêtes et des protections courantes lors de l'enregistrement ou de l'affichage des valeurs. Mon niveau reste à approfondir, mais je possède désormais une base pratique obtenue sur un projet complet.",
          traceRefs: [8],
        },
        {
          skillId: 'integration-cadre',
          title: "Savoir travailler seul avec des validations d'équipe",
          context:
            "Ce savoir-faire a été utilisé pendant tout le stage, car j'étais seul à développer le site tout en devant répondre aux attentes de l'entreprise. Je devais prendre des décisions quotidiennes sur la structure, l'apparence et la résolution des problèmes, puis solliciter l'équipe lorsqu'un choix nécessitait une validation.",
          learning:
            "J'ai gagné en autonomie dans la recherche de solutions, la création des pages, la créativité et le style. J'ai appris à essayer une solution, à l'observer dans le navigateur et à la corriger avant de demander de l'aide. J'ai également compris que l'autonomie ne signifie pas tout décider seul, mais savoir reconnaître les moments où l'avis de l'entreprise est nécessaire.",
          difficulties:
            "La difficulté était de garder une bonne organisation globale tout en découvrant WordPress et en créant toutes les pages. Comme personne d'autre ne développait ce site en parallèle, je devais retrouver moi-même l'origine des problèmes et éviter qu'une correction locale dégrade une autre partie du thème.",
          before: 'moyen',
          after: 'bon',
          justification:
            "Après le stage, je suis plus autonome pour créer des pages, proposer un style, organiser mes essais et tester mes choix. Je sais avancer seul sur une réalisation tout en conservant des moments de validation avec les personnes concernées. Cette progression est visible dans le fait que j'ai pris en charge l'ensemble du nouveau site, depuis sa structure jusqu'aux fonctionnalités externes, avec des retours ponctuels plutôt qu'une supervision permanente.",
          traceRefs: [7, 8],
        },
      ],
    },
  ],
};


