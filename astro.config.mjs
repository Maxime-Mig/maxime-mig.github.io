// @ts-check
import { defineConfig } from 'astro/config';
import { remarkFrenchTypography } from './src/lib/remark-french.mjs';

// Site statique publié sur GitHub Pages (dépôt maxime-mig.github.io).
export default defineConfig({
  site: 'https://maxime-mig.github.io',
  trailingSlash: 'always',
  build: { format: 'directory' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  devToolbar: { enabled: false },
  markdown: {
    remarkPlugins: [remarkFrenchTypography],
    shikiConfig: { theme: 'github-dark-dimmed' },
  },
});
