// Génère, à partir du site construit (dist/), les fichiers que le site ne peut pas
// produire seul :
//   node scripts/captures.mjs cv   → public/cv-maxime-miguet.pdf (CV A4 avec le téléphone)
//   node scripts/captures.mjs og   → public/og-image.png (image de partage 1200 × 630)
//   node scripts/captures.mjs all  → les deux
// Le numéro de téléphone vient de cv.private.json ({ "phone": "…" }, non versionné)
// ou de la variable d'environnement CV_PHONE ; il n'apparaît jamais dans le code du site.
// Navigateur : Chrome ou Edge installés, ou le chemin donné dans BROWSER_PATH.
import { createServer } from 'node:http';
import { copyFile, mkdir, mkdtemp, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';
import os from 'node:os';
import path from 'node:path';
import sharp from 'sharp';

const run = promisify(execFile);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const publicDir = path.join(root, 'public');

const browser = [
  process.env.BROWSER_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].find((candidate) => candidate && existsSync(candidate));

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.xml': 'application/xml',
  '.pdf': 'application/pdf',
  '.mp3': 'audio/mpeg',
  '.txt': 'text/plain; charset=utf-8',
};

const escapeHtml = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Petit serveur statique : les chemins absolus du site (/_astro/…) fonctionnent comme en ligne. */
function serve(directory) {
  const server = createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url ?? '/', 'http://localhost').pathname);
      let file = path.join(directory, pathname);
      if (!file.startsWith(directory)) throw new Error('Chemin refusé');
      if ((await stat(file).catch(() => null))?.isDirectory()) file = path.join(file, 'index.html');
      const body = await readFile(file);
      response.writeHead(200, { 'Content-Type': mime[path.extname(file)] ?? 'application/octet-stream' });
      response.end(body);
    } catch {
      response.writeHead(404);
      response.end('Introuvable');
    }
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)));
}

/** Lance Chrome ou Edge sans interface, avec un profil temporaire. */
async function headless(args) {
  if (!browser) throw new Error('Chrome ou Edge introuvable : indiquez son chemin dans BROWSER_PATH.');
  const profile = await mkdtemp(path.join(os.tmpdir(), 'portfolio-capture-'));
  try {
    await run(
      browser,
      [
        '--headless',
        '--disable-gpu',
        '--no-first-run',
        '--no-default-browser-check',
        '--disable-extensions',
        '--hide-scrollbars',
        '--force-color-profile=srgb',
        `--user-data-dir=${profile}`,
        ...args,
      ],
      { timeout: 90_000 },
    );
  } finally {
    await rm(profile, { recursive: true, force: true }).catch(() => undefined);
  }
}

async function readPhone() {
  if (process.env.CV_PHONE?.trim()) return process.env.CV_PHONE.trim();
  const file = path.join(root, 'cv.private.json');
  if (existsSync(file)) {
    const { phone } = JSON.parse(await readFile(file, 'utf8'));
    if (phone) return String(phone).trim();
  }
  return '';
}

async function cv() {
  const source = path.join(dist, 'cv', 'index.html');
  if (!existsSync(source)) throw new Error('dist/cv/index.html manquant : lancez d’abord « npm run build ».');
  let html = await readFile(source, 'utf8');

  const phone = await readPhone();
  if (phone) {
    // Rend visible l'emplacement prévu et y écrit le numéro, dans une copie temporaire.
    html = html.replace(/(<li\b[^>]*?\sdata-phone-slot\b[^>]*?)\s+hidden(?:="")?(?=[\s>])/, '$1');
    html = html.replace(/(<span\b[^>]*?\sdata-phone(?=[\s>=])[^>]*>)(<\/span>)/, `$1${escapeHtml(phone)}$2`);
    if (!html.includes(escapeHtml(phone)) || /data-phone-slot[^>]*\shidden/.test(html)) {
      throw new Error('Emplacement du téléphone introuvable dans la page du CV.');
    }
  } else {
    console.warn('Aucun numéro (cv.private.json ou CV_PHONE) : le PDF est généré sans téléphone.');
  }

  const printDir = path.join(dist, 'cv-print');
  await mkdir(printDir, { recursive: true });
  await writeFile(path.join(printDir, 'index.html'), html);
  const server = await serve(dist);
  const output = path.join(publicDir, 'cv-maxime-miguet.pdf');
  try {
    const { port } = server.address();
    await headless([`--print-to-pdf=${output}`, '--no-pdf-header-footer', '--virtual-time-budget=6000', `http://127.0.0.1:${port}/cv-print/`]);
  } finally {
    server.close();
    await rm(printDir, { recursive: true, force: true });
  }

  const pdf = await readFile(output);
  const pages = (pdf.toString('latin1').match(/\/Type\s*\/Page(?![s\w])/g) ?? []).length;
  await copyFile(output, path.join(dist, 'cv-maxime-miguet.pdf'));
  console.log(`CV : ${path.relative(root, output)} (${Math.round(pdf.length / 1024)} Ko, ${pages} page${pages > 1 ? 's' : ''})`);
  if (pages !== 1) console.warn('Attention : le CV devrait tenir sur une seule page.');
}

async function og() {
  const fonts = path.join(root, 'node_modules');
  const dataUri = async (file, type) => `data:${type};base64,${(await readFile(file)).toString('base64')}`;
  const cookie = (name) => dataUri(path.join(root, 'src/assets/cookie', name), 'image/webp');

  const replacements = {
    SOURCE_SANS: await dataUri(path.join(fonts, '@fontsource-variable/source-sans-3/files/source-sans-3-latin-wght-normal.woff2'), 'font/woff2'),
    SPECIAL_ELITE: await dataUri(path.join(fonts, '@fontsource/special-elite/files/special-elite-latin-400-normal.woff2'), 'font/woff2'),
    COOKIE_LEFT: await cookie('cookie-gauche.webp'),
    COOKIE_RIGHT: await cookie('cookie-droite.webp'),
  };
  let html = await readFile(path.join(root, 'scripts/og-template.html'), 'utf8');
  html = html.replace(/\{\{(\w+)\}\}/g, (match, key) => replacements[key] ?? match);

  const work = await mkdtemp(path.join(os.tmpdir(), 'portfolio-og-'));
  const page = path.join(work, 'og.html');
  const shot = path.join(work, 'og.png');
  try {
    await writeFile(page, html);
    await headless([`--screenshot=${shot}`, '--window-size=1200,630', '--virtual-time-budget=4000', `file:///${page.replace(/\\/g, '/')}`]);
    const output = path.join(publicDir, 'og-image.png');
    // Recadre au format exact et compresse l'image finale.
    await sharp(shot).resize(1200, 630, { fit: 'cover', position: 'top' }).png({ compressionLevel: 9, palette: true, quality: 90 }).toFile(output);
    await copyFile(output, path.join(dist, 'og-image.png')).catch(() => undefined);
    console.log(`Image de partage : ${path.relative(root, output)} (${Math.round((await stat(output)).size / 1024)} Ko)`);
  } finally {
    await rm(work, { recursive: true, force: true });
  }
}

const task = process.argv[2] ?? 'all';
const tasks = { cv: [cv], og: [og], all: [og, cv] }[task];
if (!tasks) {
  console.error('Usage : node scripts/captures.mjs cv|og|all');
  process.exit(1);
}
for (const job of tasks) await job();
