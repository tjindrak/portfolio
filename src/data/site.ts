export const site = {
  name: 'tjindrak',
  fullName: 'Tomáš Jindrák',
  description: {
    cs: 'Tomáš Jindrák, grafický a UI/UX designer. Weby, aplikace, UX výzkum a vizuální identity.',
    en: 'Tomáš Jindrák, graphic and UI/UX designer. Websites, apps, UX research and visual identities.',
  },
  email: 'tomasjindrak@seznam.cz',
  // Přístupový klíč Web3Forms pro kontaktní formulář (veřejný, patří do kódu stránky).
  // Bez klíče formulář jen otevře e-mail s připravenou zprávou.
  web3formsKey: '',
  phone: '+420 775 038 062',
  ico: '21680078',
  linkedin: 'https://www.linkedin.com/in/tom%C3%A1%C5%A1-jindr%C3%A1k-868535301/',
  instagram: 'https://www.instagram.com/tjindrak_design/',
  // Soukromý Instagram (O mně, Mimo práci)
  instagramOsobni: 'https://www.instagram.com/tjindrak/',
};

export const nav = [
  { stranka: 'projekty', label: { cs: 'Projekty', en: 'Projects' } },
  { stranka: 'omne', label: { cs: 'O mně', en: 'About' } },
  { stranka: 'zivotopis', label: { cs: 'Životopis', en: 'Resume' } },
  { stranka: 'kontakt', label: { cs: 'Kontakt', en: 'Contact' } },
] as const;

// Verze webu se doplní při buildu (viz astro.config.mjs).
export const version = __APP_VERSION__;
export const commit = __APP_COMMIT__;
