# Portfolio de Maxime Miguet

Portfolio de présentation : [maxime-mig.github.io](https://maxime-mig.github.io/).

Le thème reprend l'univers de **Fortune Cookie**, mon jeu en cours de développement. Chaque page a sa couleur, son objet du jeu et son papier de fortune. Sur l'accueil, le doigt du jeu casse le cookie (rendus depuis leurs modèles 3D). Le papier qu'il contenait se déroule ensuite le long de la page au fil du défilement.

## Technologies

- [Astro](https://astro.build/) 5 en site statique : HTML généré à la construction, très peu de JavaScript côté navigateur.
- CSS écrit à la main (`src/styles/global.css`), avec un thème clair et un thème sombre : celui du navigateur par défaut, ou celui choisi avec le bouton de l'en-tête.
- Polices auto-hébergées via Fontsource : Bagel Fat One (titres), Figtree (textes) et Special Elite (papiers, la police du jeu).
- Icônes en police, réduites aux seuls caractères utilisés : Material Symbols (Google Fonts), Devicon et Font Awesome pour les logos. La liste est dans `src/data/icons.json` ; pour en ajouter une, voir `scripts/icones.mjs`.
- Images optimisées en WebP par `astro:assets` (sharp).
- Formulaire de contact envoyé par [FormSubmit](https://formsubmit.co/), sans serveur à maintenir.

## Commandes

Il faut Node.js 22 ou plus récent.

| Commande           | Rôle                                                                        |
| ------------------ | --------------------------------------------------------------------------- |
| `npm install`      | Installe les dépendances                                                    |
| `npm run dev`      | Serveur de développement sur `http://localhost:4321`                        |
| `npm run build`    | Construit le site dans `dist/`                                              |
| `npm run preview`  | Sert `dist/` en local pour vérifier le résultat construit                   |
| `npm run cv:pdf`   | Reconstruit le site puis génère `public/cv-maxime-miguet.pdf` (A4, 1 page)  |
| `npm run og:image` | Reconstruit le site puis génère `public/og-image.png` (image de partage)    |

`cv:pdf` et `og:image` utilisent Chrome ou Edge en mode sans interface. Si le navigateur n'est pas détecté, indiquez son chemin dans la variable `BROWSER_PATH`.

## Le numéro de téléphone du CV

Le téléphone figure uniquement dans le CV PDF, jamais dans les pages du site ni dans le code versionné. Avant `npm run cv:pdf`, créez à la racine un fichier `cv.private.json` (ignoré par git) :

```json
{ "phone": "06 00 00 00 00" }
```

Vous pouvez aussi utiliser la variable d'environnement `CV_PHONE`. Le script insère le numéro dans une copie temporaire de la page `/cv/`, imprime le PDF, puis supprime cette copie. Sans numéro, le PDF est généré sans téléphone.

Le PDF généré est enregistré dans `public/` et doit être commité : GitHub Actions ne connaît pas le numéro et publie le fichier tel quel.

## Structure

```text
src/
  assets/            Rendus du cookie (`cookie/`) et des objets du jeu (`objets/`), captures des projets (optimisés à la construction)
  components/        Cookie animé, ruban de papier, en-tête, objets, panneaux de projet, formulaire…
  data/
    profile.ts       Identité, liens et menu
    projects.ts      Tous les projets (textes, technologies, captures)
    skills.ts        Compétences techniques et humaines
    hues.ts          Couleurs des pages et des projets
    fortunes.ts      Phrases des papiers, reprises du jeu
  layouts/           Gabarit commun (SEO, Open Graph, thème)
  lib/               Mise en forme (typographie française)
  pages/             Une page par route : accueil, projets, compétences, à propos, contact, CV
  styles/global.css  Styles du site
public/              Fichiers copiés tels quels : favicons, CV PDF, image de partage, extraits audio
scripts/             Génération du CV PDF, de l'image de partage et des polices d'icônes
```

## Modifier le contenu

### Modifier ou ajouter un projet

Les projets sont décrits dans `src/data/projects.ts`. Le type `Project`, en haut du fichier, liste les champs disponibles. `featured: true` place le projet sur l'accueil et `hue` choisit sa couleur. Les captures vont dans `src/assets/projects/<slug>/` et sont importées en haut du fichier.

## Déploiement

Le workflow `.github/workflows/deploy-pages.yml` construit le site et le publie sur GitHub Pages à chaque push sur `main`. Dans les réglages du dépôt, la source de GitHub Pages doit être réglée sur **GitHub Actions**.

Le dossier `dist/` est un résultat de construction : il est ignoré par git.

## Formulaire de contact

FormSubmit demande de confirmer l'adresse de réception. Au premier message envoyé depuis le site en ligne, il envoie un courriel d'activation à l'adresse du formulaire. Il faut cliquer sur le lien d'activation pour recevoir les messages suivants. Sans JavaScript, le formulaire s'envoie normalement et redirige vers `/contact/merci/`.
