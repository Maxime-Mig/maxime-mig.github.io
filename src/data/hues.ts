// Couleurs des pages et des projets (attribut data-hue, définies dans global.css). Seuls les fonds
// sont répétés ici, pour la couleur de la barre du navigateur (theme-color).
export const hues = {
  rose: { light: '#ffb8cf', dark: '#4a1830' },
  ciel: { light: '#a9d6ff', dark: '#12345a' },
  menthe: { light: '#9fdcc6', dark: '#143f33' },
  soleil: { light: '#ffd45c', dark: '#4a370c' },
  corail: { light: '#ff9478', dark: '#592212' },
  lilas: { light: '#d3c2ff', dark: '#352563' },
  nuit: { light: '#1b1840', dark: '#1b1840' },
} as const;

export type Hue = keyof typeof hues;
