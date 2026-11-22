export const profile = {
  name: 'Maxime Miguet',
  role: 'Développeur jeux vidéo et web',
  degree: 'BUT Informatique',
  school: 'IUT Nord Franche-Comté',
  schoolUrl: 'https://www.iut-nfc.univ-fcomte.fr/',
  year: '3e année',
  region: 'Nord Franche-Comté (Belfort–Montbéliard)',
  email: 'maxime.miguet@edu.univ-fcomte.fr',
  github: 'https://github.com/Maxime-Mig',
  githubHandle: 'Maxime-Mig',
  site: 'https://maxime-mig.github.io',
  siteLabel: 'maxime-mig.github.io',
  cvPdf: '/cv-maxime-miguet.pdf',
  cvFileName: 'CV-Maxime-Miguet.pdf',
  studio: 'Studio Fortune Cookies',
} as const;

export const navLinks = [
  { href: '/projets/', label: 'Projets' },
  { href: '/competences/', label: 'Compétences' },
  { href: '/a-propos/', label: 'À propos' },
  { href: '/contact/', label: 'Contact' },
] as const;
