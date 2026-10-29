// Menší varianty obrázků pro srcset. Originály v /public/img zůstávají beze změny,
// varianty (např. foto-800w.webp) se generují až při buildu do dist/ (integrace
// v astro.config.mjs). Ve vývojovém režimu se srcset nevypisuje.
import { join } from 'node:path';
import sharp from 'sharp';
import { SIRKY, varianta } from './obrazky-sirky.mjs';

const sirkyCache = new Map<string, number>();

async function sirkaOriginalu(src: string): Promise<number> {
  if (!sirkyCache.has(src)) {
    const { width = 0 } = await sharp(join(process.cwd(), 'public', src)).metadata();
    sirkyCache.set(src, width);
  }
  return sirkyCache.get(src)!;
}

/** srcset pro obrázek z /public, nebo undefined (dev, SVG, malé obrázky). */
export async function srcset(src: string): Promise<string | undefined> {
  if (import.meta.env.DEV || !/\.webp$/i.test(src)) return undefined;
  const sirka = await sirkaOriginalu(src);
  const mensi = SIRKY.filter((s) => s < sirka);
  if (!mensi.length) return undefined;
  return [...mensi.map((s) => `${varianta(src, s)} ${s}w`), `${src} ${sirka}w`].join(', ');
}
