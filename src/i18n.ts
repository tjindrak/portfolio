// Dvě jazykové verze: čeština v kořeni webu, angličtina pod /en.
export type Lang = 'cs' | 'en';

export const jazyky: Lang[] = ['cs', 'en'];

// Stránky a jejich adresy v obou jazycích
const stranky = {
  domu: { cs: '/', en: '/en' },
  projekty: { cs: '/projekty', en: '/en/projects' },
  omne: { cs: '/o-mne', en: '/en/about' },
  zivotopis: { cs: '/zivotopis', en: '/en/resume' },
  kontakt: { cs: '/kontakt', en: '/en/contact' },
} as const;

export type Stranka = keyof typeof stranky;

export function jazykZUrl(url: URL): Lang {
  return url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'cs';
}

export function odkaz(lang: Lang, stranka: Stranka): string {
  return stranky[stranka][lang];
}

export function odkazProjektu(lang: Lang, id: string): string {
  return `${stranky.projekty[lang]}/${id}`;
}

/** Stejná stránka ve druhém jazyce (pro přepínač CZ / EN a hreflang). */
export function prelozitCestu(cesta: string, cil: Lang): string {
  const c = cesta.replace(/\/$/, '') || '/';
  for (const s of Object.values(stranky)) {
    for (const l of jazyky) {
      if (c === s[l]) return s[cil];
      if (s !== stranky.domu && c.startsWith(s[l] + '/')) return s[cil] + c.slice(s[l].length);
    }
  }
  return stranky.domu[cil];
}

/** Text podle jazyka: t(lang, 'Česky', 'English'). */
export function t<T>(lang: Lang, cs: T, en: T): T {
  return lang === 'en' ? en : cs;
}
