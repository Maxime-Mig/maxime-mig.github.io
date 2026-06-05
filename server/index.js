import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { portfolioData } from '../shared/portfolioData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distPath = path.join(projectRoot, 'dist');

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'portfolio-but2' });
});

app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

app.get('/api/portfolio/pages/:slug', (req, res) => {
  const page = portfolioData.pages.find((item) => item.slug === req.params.slug);

  if (!page) {
    res.status(404).json({ error: 'Page introuvable' });
    return;
  }

  res.json(page);
});

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));

  app.use((req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Portfolio BUT 2 API listening on http://127.0.0.1:${port}`);
});
