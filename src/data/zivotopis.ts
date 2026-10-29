// Data životopisu: sdílí je stránka Životopis i PDF (src/pages/cv/[lang].astro).
import { t, type Lang } from '../i18n';

export function zivotopis(lang: Lang) {
  const vzdelani = t(
    lang,
    [
      { logo: '/img/zivotopis/logo-vse.webp', skola: 'VŠE, Fakulta informatiky a statistiky', obor: 'UX výzkum a design', titul: 'Ing.', roky: '2025 – dnes' },
      { logo: '/img/zivotopis/logo-vskk.webp', skola: 'Vysoká škola kreativní komunikace', obor: 'Grafický a mediální design', titul: 'BcA.', roky: '2022 – 2025' },
      { logo: '/img/zivotopis/logo-spsse.webp', skola: 'SPŠSE a VOŠ Liberec', obor: 'Technické lyceum, multimédia a web design', titul: 'Maturita', roky: '2018 – 2022' },
    ],
    [
      { logo: '/img/zivotopis/logo-vse.webp', skola: 'Prague University of Economics and Business (VŠE)', obor: 'UX research and design', titul: 'Master’s degree', roky: '2025 – present' },
      { logo: '/img/zivotopis/logo-vskk.webp', skola: 'College of Creative Communication (VŠKK)', obor: 'Graphic and media design', titul: 'Bachelor’s degree', roky: '2022 – 2025' },
      { logo: '/img/zivotopis/logo-spsse.webp', skola: 'SPŠSE a VOŠ Liberec', obor: 'Technical lyceum, multimedia and web design', titul: 'High school diploma', roky: '2018 – 2022' },
    ],
  );
  const klienti = [
    { logo: '/img/zivotopis/logo-jardova-mapa.webp', nazev: 'Jarda Havelka', rok: '2026', popis: t(lang, 'Redesign webové aplikace s mapou a plánovačem výletů do hor', 'Redesign of a web app with a map and a mountain trip planner') },
    { logo: '/img/zivotopis/logo-czechitacademy.webp', siroke: true, nazev: 'Czech IT Academy', rok: t(lang, '2025 – současnost', '2025 – present'), popis: t(lang, 'Externí UX/UI designer a grafik, tvorba aplikací a webů', 'Freelance UX/UI and graphic designer for apps and websites') },
    { logo: '/img/zivotopis/logo-laba.webp', nazev: 'Laba', rok: '2024', popis: t(lang, 'Social media specialist a content creator pro Skvot, Laba a robot_dreams', 'Social media specialist and content creator for Skvot, Laba and robot_dreams') },
    { logo: '/img/zivotopis/logo-dike.svg', nazev: 'DIKÉ', rok: '2025', popis: t(lang, 'Řízení projektu rebrandingu a redesignu webových stránek', 'Project management of the rebrand and website redesign') },
    { logo: '/img/zivotopis/logo-kreativni-kancl.webp', nazev: 'Kreativní kancl', rok: '2024', popis: t(lang, 'Tvorba obsahu pro sociální sítě', 'Social media content creation') },
  ];
  const dalsiKlienti = ['Český tenisový svaz', 'Tolion Health', 'EnMass', 'Fox&Fellows', 'Zoo Zlín'];
  // Loga dalších klientů ve stejném pořadí jako ve Figmě
  const dalsiLoga = ['logo-dalsi-1.webp', 'logo-dalsi-2.webp', 'logo-dalsi-3.webp', 'logo-dalsi-4.svg', 'logo-dalsi-5.webp'];
  const dovednosti = t(
    lang,
    [
      { nazev: 'UX výzkum a design', popis: 'Zjišťuju, co lidé opravdu potřebují. Rozhovory, testování a z nich jasná struktura produktu.' },
      { nazev: 'UI design', popis: 'Navrhuju rozhraní pro web, mobil i aplikace. Čistá, přehledná a připravená rovnou do vývoje.' },
      { nazev: 'Vizuální identita a grafika', popis: 'Od loga přes barvy a písmo až po tisk. Brand, který drží pohromadě na webu i v ruce.' },
      { nazev: 'Motion, foto a video', popis: 'Nebojím se lehce animovat, fotit a stříhat video.' },
      { nazev: 'Prezentace', popis: 'Prezentoval jsem už mnoho projektů, mimo jiné zástupcům Havas Prague, Českého tenisu, Yellowshapes a vydavatelství Albi a Dino. Umím srozumitelně vysvětlit, proč je řešení právě takové.' },
    ],
    [
      { nazev: 'UX research and design', popis: 'I find out what people really need. Interviews, testing and, out of them, a clear product structure.' },
      { nazev: 'UI design', popis: 'I design interfaces for web, mobile and apps. Clean, clear and ready to go straight into development.' },
      { nazev: 'Visual identity and graphic design', popis: 'From the logo to colours, type and print. A brand that holds together on screen and in your hands.' },
      { nazev: 'Motion, photo and video', popis: 'I’m not afraid to do some light animation, photography and video editing.' },
      { nazev: 'Presenting', popis: 'I’ve presented many projects, including to representatives of Havas Prague, Český tenis, Yellowshapes and the publishers Albi and Dino. I can explain clearly why a solution is the way it is.' },
    ],
  );
  // Software ve stejném pořadí jako ve Figmě (Software · ikony)
  const software = [
    { soubor: 'figma', nazev: 'Figma' },
    { soubor: 'indesign', nazev: 'Adobe InDesign' },
    { soubor: 'illustrator', nazev: 'Adobe Illustrator' },
    { soubor: 'lightroom', nazev: 'Adobe Lightroom' },
    { soubor: 'photoshop', nazev: 'Adobe Photoshop' },
    { soubor: 'after-effects', nazev: 'Adobe After Effects' },
    { soubor: 'premiere', nazev: 'Adobe Premiere Pro' },
    { soubor: 'slack', nazev: 'Slack' },
  ];
  const jazyky = t(
    lang,
    [
      { nazev: 'Čeština', popis: 'Rodilý mluvčí.' },
      { nazev: 'Angličtina', popis: 'Vysoká komunikační úroveň' },
    ],
    [
      { nazev: 'Czech', popis: 'Native speaker' },
      { nazev: 'English', popis: 'Fluent, high level of communication' },
    ],
  );
  // Všichni klienti jen textem (CV)
  const vsichniKlienti = ['Jarda Havelka (Jardova mapa)', 'Martin Burda (Pull Up Star)', 'Zahradní centrum DIKÉ', 'Albi', 'Dino', 'Český tenisový svaz', 'Tolion Health', 'EnMass', 'Fox&Fellows', 'Zoo Zlín'];
  // Pracovní zkušenosti v CV (ostatní jsou klienti)
  const zamestnani = ['Czech IT Academy', 'Laba', 'Kreativní kancl'];
  return { zamestnani, vsichniKlienti, vzdelani, klienti, dalsiKlienti, dalsiLoga, dovednosti, software, jazyky };
}

/** PDF životopisu ke stažení (generuje `npm run cv`). */
export const cvSoubor = { cs: '/cv.pdf', en: '/cv-en.pdf' } as const;
export const cvNazev = { cs: 'Tomas-Jindrak-zivotopis.pdf', en: 'Tomas-Jindrak-CV.pdf' } as const;
