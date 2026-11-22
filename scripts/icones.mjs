// Extrait des polices d'icônes les seuls caractères utilisés par le site (src/data/icons.json) et
// les enregistre dans src/assets/icons/. À relancer après avoir ajouté une icône :
//   npm i --no-save material-symbols devicon @fortawesome/fontawesome-free subset-font
//   node scripts/icones.mjs
// Les codes se trouvent sur fonts.google.com/icons, devicon.dev et fontawesome.com (marques).
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const root = path.resolve(import.meta.dirname, '..');
// Dossier où les paquets sont installés (par défaut, celui du projet).
const base = path.resolve(process.argv[2] ?? root);
const subsetFont = createRequire(path.join(base, 'package.json'))('subset-font');
const icons = JSON.parse(fs.readFileSync(path.join(root, 'src/data/icons.json'), 'utf8'));

const sources = {
  // Formes pleines et angles droits.
  material: ['material-symbols/material-symbols-sharp.woff2', { FILL: 1, wght: 400, GRAD: 0, opsz: 24 }],
  devicon: ['devicon/fonts/devicon.ttf'],
  fontawesome: ['@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2'],
};

const out = path.join(root, 'src/assets/icons');
fs.mkdirSync(out, { recursive: true });

for (const [set, [file, variationAxes]] of Object.entries(sources)) {
  const text = Object.values(icons[set])
    .map((code) => String.fromCodePoint(parseInt(code, 16)))
    .join('');
  const font = fs.readFileSync(path.join(base, 'node_modules', file));
  const subset = await subsetFont(font, text, { targetFormat: 'woff2', variationAxes });
  fs.writeFileSync(path.join(out, `${set}.woff2`), subset);
  console.log(`${set} : ${Object.keys(icons[set]).length} icônes, ${(subset.length / 1024).toFixed(1)} Ko`);
}
