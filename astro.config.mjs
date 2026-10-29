// @ts-check
import { defineConfig } from 'astro/config';
import { execSync } from 'node:child_process';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { SIRKY, varianta } from './src/lib/obrazky-sirky.mjs';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

// Krátký hash commitu: na Vercelu z proměnné prostředí, lokálně z gitu.
function commitHash() {
  const fromVercel = process.env.VERCEL_GIT_COMMIT_SHA;
  if (fromVercel) return fromVercel.slice(0, 7);
  try {
    return execSync('git rev-parse --short HEAD', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  } catch {
    return '';
  }
}

// Po buildu vytvoří ke každému WebP v dist/img menší varianty pro srcset (viz src/lib/obrazky.ts).
const variantyObrazku = {
  name: 'varianty-obrazku',
  hooks: {
    'astro:build:done': async ({ dir, logger }) => {
      const koren = join(fileURLToPath(dir), 'img');
      if (!existsSync(koren)) return;
      const soubory = readdirSync(koren, { recursive: true })
        .map(String)
        .filter((f) => f.endsWith('.webp') && !/-\d+w\.webp$/.test(f));
      let pocet = 0;
      for (const f of soubory) {
        const cesta = join(koren, f);
        const { width = 0 } = await sharp(cesta).metadata();
        for (const sirka of SIRKY.filter((s) => s < width)) {
          await sharp(cesta).resize({ width: sirka }).webp({ quality: 78 }).toFile(varianta(cesta, sirka));
          pocet++;
        }
      }
      logger.info(`${pocet} variant obrázků pro srcset`);
    },
  },
};

export default defineConfig({
  site: 'https://tjindrak.cz',
  trailingSlash: 'ignore',
  integrations: [variantyObrazku],
  // Malé CSS vložit přímo do stránky, ať neblokuje první vykreslení dalšími požadavky
  build: { inlineStylesheets: 'always' },
  vite: {
    define: {
      __APP_VERSION__: JSON.stringify(pkg.version),
      __APP_COMMIT__: JSON.stringify(commitHash()),
    },
  },
});
