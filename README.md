# Portfolio BUT 2 - React + Node.js

Nouveau site autonome pour présenter le portfolio BUT 2.

## Lancement

```bash
npm install
npm run dev
```

Le client React tourne sur `http://127.0.0.1:5174`.
Le serveur Node/Express tourne sur `http://127.0.0.1:3001`.

## Structure

```text
server/
  index.js              API Express et service du build
shared/
  portfolioData.js      Contenus, traces, savoir-faire, navigation
src/
  components/           Composants réutilisables
  pages/                Accueil et pages avec sous-navigation
  styles/main.css       Design compact et responsive
public/images/traces/   Visuels temporaires pour les traces
```

## Pages imposees

- Accueil
- Technique
- Suivi de projet
- Intégration en entreprise

Les trois dernières pages utilisent une sous-navigation séparée avec deux vues :

- Description
- Bilan / Analyse

Les contenus se modifient en priorité dans `shared/portfolioData.js`.
