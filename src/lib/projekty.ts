import { getCollection, type CollectionEntry } from 'astro:content';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

import type { Lang } from '../i18n';

export type Projekt = CollectionEntry<'projekty'>;

// Česká verze je v src/content/projekty, anglická v src/content/projekty-en
async function nacist(lang: Lang): Promise<Projekt[]> {
  return lang === 'en' ? ((await getCollection('projektyEn')) as unknown as Projekt[]) : getCollection('projekty');
}

export async function vsechnyProjekty(lang: Lang = 'cs'): Promise<Projekt[]> {
  const items = await nacist(lang);
  return items.sort((a, b) => a.data.poradi - b.data.poradi);
}

export async function vybraneProjekty(lang: Lang = 'cs'): Promise<Projekt[]> {
  const items = (await nacist(lang)).filter((p) => p.data.vybrany !== undefined);
  return items.sort((a, b) => (a.data.vybrany ?? 0) - (b.data.vybrany ?? 0));
}

/** Cesta k obrázku projektu podle konvence /img/projekty/<id>/<soubor>. */
export function obrazekProjektu(id: string, soubor: string): string {
  return `/img/projekty/${id}/${soubor}`;
}

/** První existující soubor z výčtu (např. karta.webp, pak cover.webp). */
export function prvniExistujici(id: string, soubory: string[]): string {
  for (const soubor of soubory) {
    const src = obrazekProjektu(id, soubor);
    if (existsSync(join(process.cwd(), 'public', src))) return src;
  }
  return obrazekProjektu(id, soubory[soubory.length - 1]);
}

/** Cesty detailů projektů pro getStaticPaths (pro každý jazyk zvlášť). */
export async function cestyDetailu(lang: Lang) {
  const projekty = await vsechnyProjekty(lang);
  return projekty.map((projekt) => ({
    params: { slug: projekt.id },
    props: {
      projekt,
      dalsi: projekty.find((p) => p.id === projekt.data.dalsi) ?? projekty.find((p) => p.id !== projekt.id && p.data.stav === 'hotovo'),
    },
  }));
}
