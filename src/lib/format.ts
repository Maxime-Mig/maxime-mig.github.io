import { frenchText } from './remark-french.mjs';

/** Applique les espaces insécables de la typographie française. */
export const fr = (text: string): string => frenchText(text);

const escapeHtml = (text: string): string =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Comme fr(), mais met en gras les passages entourés de **…** pour faire ressortir
 * l'essentiel d'un paragraphe. Renvoie du HTML échappé : à utiliser avec set:html.
 */
export const rich = (text: string): string => escapeHtml(fr(text)).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

/** Retire les marques **…** (pour les attributs, le SEO et les données structurées). */
export const plain = (text: string): string => text.replace(/\*\*(.+?)\*\*/g, '$1');
