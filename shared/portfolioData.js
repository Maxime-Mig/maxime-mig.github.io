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
            "Toutes les pages du site ont été créées ou travaillées : accueil, actualités, événements, réseaux et blog.",
            "La partie multimédia / blog a été la plus complexe, car il fallait trouver une logique claire pour répartir et présenter les articles.",
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
          image: '/images/traces/trace-react-components.jpg',
          caption:
            "Trace 1 : schéma de l'organisation générale du site de communication Good Geek créé avec WordPress.",
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
            "j'ai créé et relié les templates PHP",
            [
              "j'ai séparé l'en-tête, la navigation et le pied de page",
              "j'ai réparti les fonctionnalités dans des fichiers réutilisables",
              "j'ai créé des fonctions communes pour préparer les médias et les cartes",
            ],
            [
              "j'ai relié les pages aux contenus enregistrés dans WordPress",
              "j'ai adapté les contenus récupérés au rôle de chaque page",
            ],
            "j'ai protégé les textes, les attributs et les adresses affichés",
            "j'ai repris l'univers visuel jaune, noir et blanc de Good Geek",
            [
              "j'ai adapté les grilles, les images, les textes et la navigation",
              "j'ai corrigé les débordements et les problèmes de lecture sur mobile",
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
          title: 'Organisation des articles du blog et de leur affichage',
          image: '/images/traces/trace-data-model.jpg',
          caption:
            "Trace 2 : organisation des données d'un article, puis utilisation de ces informations pour filtrer, trier et optimiser leur affichage dans le blog.",
          skills: ['organiser-contenus', 'creer-theme-wordpress'],
          elementarySkills: [
            'Savoir récupérer des articles avec WordPress',
            'Savoir afficher des contenus dynamiques',
            'Savoir normaliser des contenus différents',
            'Savoir filtrer et trier une liste de contenus',
            'Savoir choisir une répartition visuelle lisible',
            'Savoir gérer plusieurs médias dans une carte',
          ],
          skillPassages: [
            "j'ai récupéré les articles publiés avec les requêtes WordPress",
            [
              "j'ai relié le blog aux publications WordPress",
              "j'ai construit l'affichage à partir des informations enregistrées",
            ],
            [
              "j'ai regroupé les données de chaque article dans une structure commune",
              "j'ai préparé les images et les vidéos sous une forme commune",
            ],
            "j'ai utilisé la catégorie et la date pour filtrer et trier",
            [
              "j'ai réparti l'espace entre la description et le média",
              "j'ai ajusté la largeur des cartes et le nombre de colonnes",
            ],
            "j'ai amélioré la répartition de l'espace après plusieurs essais",
          ],
          description:
            "La trace 2 ci-dessus représente la logique utilisée pour organiser les publications du blog avant leur affichage. Le premier bloc indique que le blog rassemble plusieurs articles enregistrés dans WordPress. Chaque article est ensuite décrit par cinq informations principales visibles dans le schéma : sa catégorie, sa date, sa description, son image ou sa vidéo et son titre. Ces données ne jouent pas toutes le même rôle dans la page. La catégorie et la date sont utilisées par le système de filtre et de tri. Elles permettent au visiteur de réduire la liste des publications et de modifier leur ordre sans parcourir l'ensemble du blog. Le titre identifie immédiatement le sujet de l'article, tandis que la description apporte un résumé de son contenu. L'image ou la vidéo forme la partie visuelle de la carte. La description et le média influencent directement la répartition de l'espace, car leur taille et leur proportion peuvent varier d'une publication à l'autre. J'ai donc préparé une structure commune avant l'affichage afin que le template puisse construire les cartes de manière cohérente à partir des données récupérées dans WordPress. Le bloc Répartition de l'espace correspond au travail réalisé sur la largeur des cartes, la place accordée au visuel, la quantité de texte visible et le nombre de colonnes. Le filtre et le tri influencent également cette répartition, puisque la grille doit rester lisible lorsque le nombre de résultats change. Enfin, la flèche entre Répartition de l'espace et Optimisation représente les différents essais effectués pendant le développement. Après avoir observé le résultat dans le navigateur, je revenais sur la mise en page pour corriger un déséquilibre, améliorer les alignements ou mieux adapter les cartes aux différentes tailles d'écran. Ce fonctionnement progressif m'a permis d'associer la récupération des articles WordPress, l'organisation de leurs données et la recherche d'une présentation visuelle claire.",
          remarkablePoints: [
            "Le filtrage repose principalement sur la catégorie et la date enregistrées avec chaque article.",
            "La présentation a demandé plusieurs essais pour équilibrer la description, les médias et l'espace disponible.",
          ],
        },
        {
          number: 3,
          title: 'Détection automatique des lives Twitch et YouTube',
          image: '/images/traces/trace-node-api.jpg',
          caption:
            "Trace 3 : circulation des requêtes entre le site WordPress, Twitch et YouTube pour déterminer si un direct doit être mis en avant.",
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
            "j'ai configuré les identifiants Twitch, la clé YouTube et les chaînes",
            [
              "j'ai obtenu un jeton d'accès auprès de Twitch",
              "j'ai réutilisé le jeton pendant sa durée de validité",
            ],
            [
              "j'ai envoyé des requêtes HTTP vers Twitch et YouTube",
              "j'ai construit les paramètres propres à chaque plateforme",
            ],
            [
              "j'ai décodé les réponses JSON",
              "j'ai extrait la plateforme et le lien du direct",
            ],
            "j'ai mis en cache le statut du direct",
            [
              "j'ai contrôlé les erreurs, les réponses vides et les identifiants absents",
              "j'ai conservé l'état hors ligne lorsqu'un service échouait",
            ],
          ],
          description:
            "La trace 3 ci-dessus représente le parcours suivi pour détecter automatiquement un direct. Le bloc Site, placé à gauche, correspond au thème WordPress : c'est lui qui déclenche la vérification au moment où le statut doit être affiché. Il envoie une requête par l'intermédiaire des interfaces de programmation vers YouTube et Twitch ; les plateformes ne transmettent donc pas spontanément l'information au site. Pour Twitch, WordPress commence par obtenir un jeton d'accès à partir des identifiants de l'application, puis utilise ce jeton pour interroger la chaîne de Good Geek. Pour YouTube, il emploie la clé configurée et l'identifiant de la chaîne afin de rechercher une vidéo actuellement diffusée en direct. Les deux chemins rejoignent ensuite le bloc Réponse API. Le code décode les données reçues et les transforme en un résultat commun, quelle que soit la plateforme interrogée. Si la réponse confirme qu'un direct est disponible, le chemin Si oui conduit à la mise en avant : le site affiche alors la plateforme concernée et un lien permettant d'accéder à la diffusion. Si aucun direct n'est trouvé, le chemin Si non ramène vers le site avec l'état Pas de live, sans afficher d'information incorrecte au visiteur. Ce même résultat hors ligne est utilisé lorsqu'un identifiant manque, qu'une requête dépasse le délai prévu ou qu'une réponse est invalide, afin que le reste du site continue de fonctionner. Le schéma simplifie volontairement un dernier mécanisme : après la vérification, WordPress conserve le statut obtenu pendant 30 secondes. Ce cache évite de contacter Twitch et YouTube à chaque affichage de page tout en actualisant rapidement l'information lorsqu'un direct commence ou se termine.",
          remarkablePoints: [
            "La fonctionnalité ne dépend pas seulement du thème : elle doit aussi gérer des réponses venant de plateformes externes.",
            "Il faut prévoir les cas où la plateforme ne répond pas, où les identifiants ne sont pas configurés ou où aucun live n'est en cours.",
          ],
        },
        {
          number: 4,
          title: "Configuration d'un booster depuis l'administration",
          image: '/images/traces/trace-wordpress-administration.png',
          caption:
            "Trace 4 : interface permettant de composer un booster, de régler ses calques et de contrôler immédiatement son apparence.",
          skills: ['creer-theme-wordpress', 'organiser-contenus'],
          elementarySkills: [
            "Savoir créer des interfaces de réglage dans l'administration",
            "Savoir rendre les boosters administrables",
            "Savoir organiser la superposition des calques",
            "Savoir proposer une prévisualisation des modifications",
            "Savoir enregistrer et restituer des réglages complexes",
          ],
          skillPassages: [
            [
              "j'ai créé une interface d'administration sous forme de tableau",
              "j'ai affiché les réglages de l'élément sélectionné",
            ],
            [
              "j'ai rendu modifiables les textes, leurs positions et leurs styles",
              "j'ai permis d'ajouter ou de remplacer les textes et les images",
            ],
            [
              "j'ai associé un numéro de calque à chaque élément",
              "j'ai permis de déplacer les calques vers le haut ou vers le bas",
            ],
            [
              "j'ai ajouté une prévisualisation immédiate des réglages",
              "j'ai rendu visible la correspondance entre le tableau et le booster",
            ],
            [
              "j'ai vérifié les autorisations et le jeton de sécurité",
              "j'ai reconstruit les calques à partir des données enregistrées",
            ],
          ],
          description:
            "La trace 4 ci-dessus présente l'interface d'administration utilisée pour composer l'apparence d'un booster. Dans ce projet, un booster est une animation inspirée d'un paquet de cartes à collectionner qui révèle plusieurs articles du site lorsqu'il est ouvert sur la page d'accueil. Tout d'abord, le cadre rouge met en avant les réglages détaillés de l'élément « PIOCHE ». Il est important de montrer cette zone, car elle prouve que l'entreprise ne peut pas seulement remplacer un texte : elle peut adapter précisément sa présentation à l'illustration choisie. Lorsque l'utilisateur ouvre une ligne du tableau, l'interface affiche les paramètres correspondant à cet élément. Le premier champ modifie son contenu, tandis que les coordonnées X et Y déterminent sa position sur le paquet. D'autres commandes permettent également de choisir sa taille, sa couleur, sa police et ses effets. Par exemple, les options de gras, d'italique, d'ombre et de lueur servent à maintenir une bonne lisibilité sur des images différentes. En complément, le réglage « Au-dessus des bords scellés » indique si le texte doit apparaître devant ou derrière les bandes décoratives situées en haut et en bas du booster. Ensuite, le cadre violet met en évidence la colonne « Actions ». Son intérêt est de montrer que la composition n'est pas figée et que les éléments peuvent être réorganisés après leur création. Les boutons comportant une flèche vers le haut ou vers le bas changent leur ordre, la corbeille permet de les supprimer et la dernière commande ouvre ou referme leurs paramètres. Par ailleurs, le numéro de calque définit la profondeur de chaque composant : un élément placé sur un niveau supérieur apparaît devant ceux des niveaux inférieurs. Grâce à ce fonctionnement, les textes, l'illustration et les décorations peuvent être correctement superposés sans modifier leur ordre directement dans le code. Le cadre vert, quant à lui, met en avant la prévisualisation. Cette zone est essentielle, car elle affiche immédiatement le résultat produit par les réglages avant son utilisation sur la page d'accueil. Elle reprend l'image, les textes, leurs positions, leur apparence et leur ordre de superposition. Ainsi, l'utilisateur peut repérer un texte mal placé, une couleur peu lisible ou un ordre de calques incorrect, puis ajuster directement le paramètre concerné. De leur côté, les flèches colorées indiquent globalement que les éléments choisis et organisés dans le tableau sont ensuite disposés sur le booster. Elles relient les trois textes et le fichier image à leur résultat dans la prévisualisation, ce qui rend compréhensible la correspondance entre les données administrées à gauche et leur affichage à droite. Enfin, le reste de l'interface permet d'ajouter un texte ou une image afin de faire évoluer cette composition sans toucher aux fichiers PHP, JavaScript ou CSS. Après l'enregistrement, WordPress conserve les propriétés des différents éléments ; le thème les récupère alors pour reconstruire le même booster sur la page d'accueil.",
          remarkablePoints: [
            "Ces réglages permettent à l'entreprise de faire évoluer le contenu, l'apparence et l'organisation des pages sans modifier le thème.",
            "Les valeurs sont sécurisées, enregistrées par WordPress puis récupérées automatiquement par les templates publics.",
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
          title: 'Comparaison entre les maquettes et les pages développées',
          image: '/images/traces/trace-project-board.png',
          caption:
            "Trace 5 : comparaison entre les maquettes que j'ai conçues et le résultat développé pour les pages Réseaux et Agenda.",
          skills: ['recueillir-besoin', 'prioriser-taches', 'suivre-projet'],
          elementarySkills: [
            'Savoir concevoir une maquette à partir du besoin',
            'Savoir identifier les éléments essentiels à conserver',
            'Savoir adapter une conception aux contenus réels',
            "Savoir faire évoluer l'interface pendant le développement",
            'Savoir vérifier la conformité avec le besoin initial',
          ],
          skillPassages: [
            [
              "j'ai conçu les maquettes des pages Réseaux et Agenda",
              "j'ai traduit les besoins recueillis en composants visuels",
            ],
            [
              "j'ai conservé l'identité noire et jaune et les structures principales",
              "j'ai maintenu les actions principales prévues",
            ],
            [
              "j'ai remplacé les contenus génériques par les données réelles",
              "j'ai adapté les dimensions et la hiérarchie des cartes",
            ],
            [
              "j'ai rendu la navigation plus compacte",
              "j'ai transformé les cartes d'événements en billets visuels",
            ],
            [
              "j'ai comparé le résultat final aux maquettes",
              "j'ai vérifié le respect du rôle et des parcours de chaque page",
            ],
          ],
          description:
            "La trace 5 ci-dessus compare les maquettes que j'ai moi-même conçues, placées dans la colonne de gauche, avec les pages réellement développées, visibles dans la colonne de droite. Les deux lignes séparent la page Réseaux de la page Agenda. Cette organisation permet de constater rapidement comment j'ai d'abord traduit les besoins de Good Geek en propositions visuelles, puis comment ces propositions ont évolué pendant leur intégration dans WordPress. Tout d'abord, la partie supérieure concerne la page Réseaux. Lors de la conception de sa maquette, j'ai prévu un bandeau jaune présentant la communauté, puis six cartes consacrées à Discord, Instagram, Twitch, YouTube, TikTok et Facebook. J'ai ensuite conservé cette structure ainsi que les boutons permettant de rejoindre ou de suivre chaque plateforme. Cependant, les textes génériques ont été remplacés par de courtes descriptions adaptées à l'utilisation réelle de chaque réseau. Dans le même temps, les grandes images colorées prévues au départ ont laissé place à des pictogrammes jaunes plus homogènes avec l'identité visuelle du site. Par ailleurs, j'ai rendu la navigation plus compacte afin de laisser davantage d'espace au contenu. Malgré cette réduction, elle conserve le logo, les pages principales, la recherche, l'accès à la boutique et l'état du direct. Ensuite, la partie inférieure présente la page Agenda. Dès la création de la maquette, j'ai imaginé une frise verticale alternant les événements à gauche et à droite afin de représenter clairement leur succession. Cette idée a été maintenue dans le résultat développé. En revanche, les cartes provisoires ont été transformées en billets plus détaillés. Désormais, chaque événement affiche son titre, une description, son lieu, sa date et ses horaires. En complément, des actions permettent de l'ajouter à un agenda ou de consulter l'article associé. Ainsi, le résultat reste fidèle à la conception initiale tout en répondant mieux aux besoins réels de publication. Cette comparaison montre donc l'ensemble de ma démarche : j'ai conçu une première solution graphique à partir des attentes de l'entreprise, puis j'ai ajusté sa taille, son contenu et sa présentation lorsque les données réelles ou la lisibilité l'exigeaient. En définitive, les différences visibles témoignent du suivi du projet et de ma capacité à faire évoluer mes propres choix sans perdre les objectifs initiaux des deux pages.",
          remarkablePoints: [
            "Les structures principales des maquettes ont été conservées dans les deux pages développées.",
            "Les adaptations apportées répondent aux contenus réels et améliorent la lisibilité sans modifier le besoin initial.",
          ],
        },
        {
          number: 6,
          title: "Cycle de vérification et de validation d'une réalisation",
          image: '/images/traces/trace-validation-note.png',
          caption:
            "Trace 6 : cycle suivi pour présenter une réalisation, contrôler son résultat, apporter des corrections et obtenir sa validation.",
          skills: ['recueillir-besoin', 'suivre-projet'],
          elementarySkills: [
            'Savoir présenter une version suffisamment avancée',
            'Savoir contrôler plusieurs aspects du résultat',
            'Savoir déterminer si une réalisation répond au besoin',
            'Savoir transformer un problème en modification',
            'Savoir tester de nouveau après une correction',
            'Savoir valider une réalisation conforme',
          ],
          skillPassages: [
            [
              "j'ai présenté une page ou une fonctionnalité assez avancée",
              "j'ai préparé des contenus représentatifs avant la présentation",
            ],
            [
              "j'ai contrôlé le besoin, l'organisation et l'identité visuelle",
              "j'ai vérifié la navigation, les contenus administrables et le fonctionnement",
            ],
            "j'ai déterminé si le résultat présenté était conforme au besoin",
            "j'ai transformé les problèmes constatés en modifications précises",
            [
              "j'ai testé de nouveau le résultat après les corrections",
              "j'ai renvoyé la nouvelle version vers le contrôle du résultat",
            ],
            "j'ai considéré la réalisation comme validée lorsqu'elle répondait au besoin",
          ],
          description:
            "La trace 6 ci-dessus représente le cycle utilisé pour contrôler et valider les différentes réalisations du site. Comme je travaillais seul sur le développement, ces étapes me permettaient de vérifier régulièrement que mes choix correspondaient toujours aux attentes de Good Geek. Tout d'abord, le bloc bleu « Version présentée » correspond à une page ou à une fonctionnalité suffisamment avancée pour être comprise et évaluée. Je préparais des contenus représentatifs, puis je montrais principalement le résultat dans le navigateur plutôt que le détail du code. Cette présentation donnait ainsi une base concrète pour observer le comportement de la réalisation. Ensuite, le grand bloc jaune « Contrôle du résultat » rassemble les aspects examinés. Le respect du besoin permettait de vérifier que la fonction demandée était réellement remplie. L'organisation des informations servait à contrôler que les contenus importants étaient faciles à trouver. L'identité visuelle concernait la cohérence des couleurs, des formes et de la présentation avec l'univers de Good Geek. La navigation permettait de s'assurer que les parcours et les boutons restaient compréhensibles. Par ailleurs, le contrôle des contenus administrables confirmait que l'entreprise pourrait modifier les informations nécessaires depuis WordPress. Enfin, le fonctionnement général portait sur les liens, les médias, les interactions et le comportement visible de la page. Après ces observations, le losange « Résultat conforme ? » représente la décision prise à partir de l'ensemble des contrôles. Lorsque le résultat ne répondait pas encore complètement au besoin, le chemin « Non » conduisait au bloc rouge « Modifications ». Je transformais alors le problème observé en changement précis dans le template, la feuille de style, le script ou les réglages WordPress. Le bloc gris « Nouvelle vérification » indique qu'une correction n'était pas considérée comme suffisante uniquement parce qu'elle avait été écrite dans le code. Je testais de nouveau la page, puis la nouvelle version revenait dans le bloc de contrôle afin de vérifier les mêmes critères. Cette boucle pouvait donc être répétée jusqu'à obtenir un résultat satisfaisant. À l'inverse, lorsque les contrôles confirmaient que la réalisation remplissait le besoin, le chemin « Oui » menait au bloc vert « Validation ». La page ou la fonctionnalité pouvait alors être considérée comme terminée et intégrée à la suite du projet. Ainsi, ce schéma montre que la validation ne reposait pas seulement sur l'absence d'erreur technique : elle prenait également en compte le besoin, la lisibilité, l'identité visuelle, l'administration des contenus et l'utilisation réelle du site.",
          remarkablePoints: [
            "Chaque validation reposait sur plusieurs critères techniques, visuels et fonctionnels.",
            "Une correction était systématiquement suivie d'une nouvelle vérification avant la validation.",
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
            "j'ai adapté mon vocabulaire à chaque interlocuteur",
            [
              "j'ai expliqué les fonctionnalités par leur usage",
              "j'ai montré le parcours du visiteur et les contenus modifiables",
            ],
            "j'ai demandé un avis au moment où le résultat devenait évaluable",
            "j'ai écouté les avis et noté les changements demandés",
            [
              "j'ai recherché et testé mes solutions seul entre les présentations",
              "j'ai demandé une validation pour les choix engageant l'entreprise",
            ],
            [
              "j'ai vérifié les pages avec plusieurs contenus et tailles d'écran",
              "j'ai reproduit dans le navigateur les situations signalées",
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
              "j'ai utilisé Apache et MySQL avec XAMPP",
              "j'ai testé les modifications dans un environnement local",
            ],
            "j'ai séparé les fichiers PHP, CSS et JavaScript",
            [
              "j'ai créé des champs personnalisés dans WordPress",
              "j'ai adapté l'affichage des métadonnées selon leur type",
            ],
            "j'ai vérifié les autorisations, les jetons et les valeurs reçues",
            "j'ai créé des contenus de test variés",
            [
              "j'ai contrôlé les pages sur plusieurs largeurs d'écran",
              "j'ai testé les cas sans résultat, sans image ou avec une donnée incomplète",
            ],
            [
              "j'ai recherché et corrigé les problèmes dans l'environnement local",
              "j'ai poursuivi le développement seul entre les validations",
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
