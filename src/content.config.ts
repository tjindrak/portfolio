import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const obrazek = z.object({
  src: z.string().optional(),
  popisek: z.string(),
});

const sekce = z.object({
  nadpis: z.string(),
  // Odstavec začínající "> " se vykreslí jako zvýrazněná citace.
  odstavce: z.array(z.string()).default([]),
});

const projekty = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projekty' }),
  schema: z.object({
    nazev: z.string(),
    // Velké slovo v pozadí hero (když se liší od názvu)
    slovo: z.string().optional(),
    stav: z.enum(['hotovo', 'brzy']).default('hotovo'),
    typ: z.string(),
    rok: z.string(),
    kategorie: z.array(z.string()).default([]),
    poradi: z.number(),
    // Výška dlaždice v gridu na stránce Projekty (px při plné šířce)
    vyska: z.number().default(380),
    // Pořadí ve "Vybraných projektech" na hlavní stránce (1 = první, otevřená karta)
    vybrany: z.number().optional(),
    dalsi: z.string().optional(),

    stitky: z.array(z.string()).default([]),
    shrnuti: z.string().optional(),
    meta: z
      .object({
        klient: z.string().optional(),
        role: z.string().optional(),
        rok: z.string().optional(),
        vystup: z.string().optional(),
        spoluprace: z.string().optional(),
      })
      .optional(),
    // Bez url se tlačítko "Navštívit web" skryje a popisek zůstane jako text.
    web: z.object({ url: z.string().url().optional(), popisek: z.string() }).optional(),
    hero: z
      .object({
        rozlozeni: z.enum(['plny', 'kolaz']).default('plny'),
        popisek: z.string(),
        popisekMobil: z.string().optional(),
      })
      .optional(),
    vyzva: sekce
      .extend({
        obrazek: obrazek.optional(),
        // "vedle" = obrázek v levém sloupci vedle textu, "pod" = velký obrázek pod textem
        obrazekPozice: z.enum(['vedle', 'pod']).default('pod'),
      })
      .optional(),
    proces: sekce
      .extend({
        kroky: z.array(z.object({ nazev: z.string(), popis: z.string() })).default([]),
      })
      .optional(),
    reseni: sekce
      .extend({
        slovo: z.string().optional(),
        obrazky: z.array(obrazek).default([]),
        siroky: obrazek.optional(),
      })
      .optional(),
  }),
});

export const collections = { projekty };
