import type { APIRoute } from 'astro';
import { projects } from '../data/projects';
import { profile } from '../data/profile';

// Plan du site pour les moteurs de recherche (pages publiques uniquement).
export const GET: APIRoute = () => {
  const pages: { path: string; priority: string }[] = [
    { path: '/', priority: '1.0' },
    { path: '/projets/', priority: '0.9' },
    ...projects.map((project) => ({ path: `/projets/${project.slug}/`, priority: project.featured ? '0.8' : '0.6' })),
    { path: '/competences/', priority: '0.7' },
    { path: '/a-propos/', priority: '0.7' },
    { path: '/contact/', priority: '0.6' },
    { path: '/cv/', priority: '0.5' },
    { path: '/confidentialite/', priority: '0.2' },
  ];

  const urls = pages
    .map(
      (page) => `  <url>
    <loc>${profile.site}${page.path}</loc>
    <priority>${page.priority}</priority>
  </url>`,
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
