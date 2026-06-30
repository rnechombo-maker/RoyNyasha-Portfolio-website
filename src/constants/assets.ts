import royPortrait from '@assets/roy (1).jpg';
import type { GalleryItem } from '@/types/site';

const galleryImageModules = import.meta.glob('../assets/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

export const assetRegistry = {
  royPortrait
} as const;

function getCategoryFromFilename(filename: string): string {
  const name = filename.toLowerCase();

  if (name.includes('campaign')) return 'Photography';
  if (name.includes('event')) return 'Events';
  if (name.includes('graphic')) return 'Graphic Design';
  if (name.includes('cinematic')) return 'Cinematic Color Grading';
  if (name.includes('landscape')) return 'Nature';
  if (name.includes('potrait') || name.includes('portrait') || name.includes('potraits') || name.startsWith('roy')) {
    return 'Portraits';
  }

  return 'Photography';
}

function formatGalleryTitle(filename: string): string {
  const name = filename.toLowerCase();

  if (name === 'potraits') return 'Portrait Collection';
  if (name === 'cinematic') return 'Cinematic Finishing';
  if (name === 'landscape') return 'Light & Landscape';

  const numberedMatch = filename.match(/^(.+?)\s*\((\d+)\)$/i);
  if (numberedMatch) {
    const [, base, number] = numberedMatch;
    const normalized = base.trim().toLowerCase();

    if (normalized.includes('potrait') || normalized.includes('portrait')) return `Portrait ${number}`;
    if (normalized.includes('campaign')) return `Campaign Visual ${number}`;
    if (normalized.includes('event')) return `Event Storytelling ${number}`;
    if (normalized.includes('graphic')) return `Graphic Design ${number}`;
    if (normalized.startsWith('roy')) return `Portrait Study ${number}`;

    return `${base.trim()} ${number}`;
  }

  return filename
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function galleryDescription(category: string, title: string): string {
  const descriptions: Record<string, string> = {
    Photography: 'Visual storytelling through curated imagery made for modern audiences.',
    Portraits: 'Character-led portrait work focused on mood, composition, and presence.',
    Nature: 'Nature imagery shaped by patience, framing, and attention to atmosphere.',
    Events: 'Capturing moments that feel alive, authentic, and memorable.',
    'Cinematic Color Grading': 'Color work that adds emotion, depth, and a premium visual signature.',
    'Graphic Design': 'Graphic assets designed to communicate clearly while feeling visually elevated.'
  };

  return descriptions[category] ?? `Creative work from the ${title.toLowerCase()} collection.`;
}

export const galleryItems: GalleryItem[] = Object.entries(galleryImageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([path, imageSrc]) => {
    const filename = path.split('/').pop()?.replace(/\.[^.]+$/, '') ?? 'Visual';
    const category = getCategoryFromFilename(filename);
    const title = formatGalleryTitle(filename);

    return {
      title,
      category,
      description: galleryDescription(category, title),
      imageSrc
    };
  });
