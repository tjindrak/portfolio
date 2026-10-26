import { getCollection, type CollectionEntry } from 'astro:content';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

export type Projekt = CollectionEntry<'projekty'>;

export async function vsechnyProjekty(): Promise<Projekt[]> {
  const items = await getCollection('projekty');
  return items.sort((a, b) => a.data.poradi - b.data.poradi);
}

export async function vybraneProjekty(): Promise<Projekt[]> {
  const items = await getCollection('projekty', (p) => p.data.vybrany !== undefined);
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
