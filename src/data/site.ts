export const site = {
  name: 'tjindrak',
  fullName: 'Tomáš Jindrák',
  description: 'Tomáš Jindrák, grafický a UI/UX designer. Weby, aplikace, UX výzkum a vizuální identity.',
  email: 'tomasjindrak@seznam.cz',
  phone: '+420 775 038 062',
  ico: '21680078',
  // Doplň skutečné odkazy na profily.
  linkedin: 'https://www.linkedin.com/',
  instagram: 'https://www.instagram.com/',
};

export const nav = [
  { href: '/projekty', label: 'Projekty' },
  { href: '/o-mne', label: 'O mně' },
  { href: '/zivotopis', label: 'Životopis' },
  { href: '/kontakt', label: 'Kontakt' },
];

// Verze webu se doplní při buildu (viz astro.config.mjs).
export const version = __APP_VERSION__;
export const commit = __APP_COMMIT__;
