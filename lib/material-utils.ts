import type { MaterialItem } from './data-generated';

const WIX_BASE = 'https://adoratore.wixsite.com/senzamisura';

/** Maps a material category to the corresponding Wix page URL */
export function getWixUrl(category: string): string {
  const map: Record<string, string> = {
    Musica: `${WIX_BASE}/musica`,
    Lezioni_iChurch: `${WIX_BASE}/ichurch`,
  };
  // Predicazioni 2014–2019 have dedicated pages on Wix
  if (category.startsWith('Predicazioni_')) {
    const year = category.replace('Predicazioni_', '');
    const y = parseInt(year, 10);
    if (y >= 2014 && y <= 2019) {
      return `${WIX_BASE}/predicazioni-${year}`;
    }
  }
  return map[category] || `${WIX_BASE}/predicazioni`;
}

/** Decodes URL-encoded characters in a material title */
export function decodeTitle(raw: string): string {
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

/**
 * Cleans a material filename into a human-readable title.
 * Removes date prefix, file extension, replaces underscores with spaces.
 */
export function cleanTitle(raw: string): string {
  let t = decodeTitle(raw);
  t = t.replace(/\.(mp3|avi|pdf|doc|wmv|mpg|mpeg)$/i, '');
  t = t.replace(/_/g, ' ');
  // Remove leading date like "2011.11.08 " but NOT "1. Introduction"
  t = t.replace(/^\d{4}\.\d{2}\.\d{2}\s+/, '');
  t = t.trim();
  return t;
}

/** Extracts YYYY.MM.DD from the beginning of a title string */
export function parseDate(raw: string): Date | null {
  const decoded = decodeTitle(raw);
  const match = decoded.match(/^(\d{4})\.(\d{2})\.(\d{2})/);
  if (!match) return null;
  const [_, year, month, day] = match;
  const date = new Date(+year, +month - 1, +day);
  return isNaN(date.getTime()) ? null : date;
}

/** Formats a date into Italian locale, e.g. "8 novembre 2011" */
export function formatDate(date: Date | null): string {
  if (!date) return '';
  return date.toLocaleDateString('it-IT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/** Category display labels */
export const categoryLabels: Record<string, string> = {
  'Predicazioni_2011': 'Predicazioni 2011',
  'Predicazioni_2012': 'Predicazioni 2012',
  'Predicazioni_2013': 'Predicazioni 2013',
  'Musica': 'Musica',
  'Libri': 'Libri',
  'Produzioni_Speciali': 'Produzioni Speciali',
  'Fire_Generation_-_Insegnamenti_2011_2012': 'Fire Generation',
  'Lezioni_iChurch': 'Lezioni iChurch',
};

/** Type display labels */
export const typeLabels: Record<string, string> = {
  audio: 'Audio',
  video: 'Video',
  pdf: 'PDF',
  doc: 'Documento',
};

/** Tailwind gradient classes per category (static map for full class strings) */
export const categoryGradient: Record<string, string> = {
  'Predicazioni_2011': 'bg-gradient-to-br from-amber-900/25 to-amber-950/10',
  'Predicazioni_2012': 'bg-gradient-to-br from-amber-900/25 to-amber-950/10',
  'Predicazioni_2013': 'bg-gradient-to-br from-amber-900/25 to-amber-950/10',
  'Musica': 'bg-gradient-to-br from-gold/20 to-yellow-950/10',
  'Libri': 'bg-gradient-to-br from-stone-700/25 to-stone-950/10',
  'Produzioni_Speciali': 'bg-gradient-to-br from-orange-900/25 to-orange-950/10',
  'Fire_Generation_-_Insegnamenti_2011_2012': 'bg-gradient-to-br from-red-900/25 to-red-950/10',
  'Lezioni_iChurch': 'bg-gradient-to-br from-sky-900/20 to-slate-950/10',
};

/** Default gradient fallback */
export const defaultGradient = 'bg-gradient-to-br from-foreground/10 to-foreground/5';

/** Returns the appropriate gradient for a category */
export function getCategoryGradient(category: string): string {
  return categoryGradient[category] || defaultGradient;
}

/** Returns a display label for a category */
export function getCategoryLabel(category: string): string {
  return categoryLabels[category] || category.replace(/_/g, ' ');
}

/** Returns a display label for a type */
export function getTypeLabel(type: string): string {
  return typeLabels[type] || type;
}

/** Extracts a short excerpt from a title for card display */
export function excerptTitle(raw: string, maxLength = 65): string {
  const title = cleanTitle(raw);
  if (title.length <= maxLength) return title;
  return title.slice(0, maxLength).trim() + '…';
}
