# tjindrak – portfolio

Osobní web Tomáše Jindráka postavený v [Astro](https://astro.build) jako statický web. Hostovaný na Vercelu, ale dá se nasadit kamkoliv, kde jde servírovat složku `dist/`.

## Spuštění

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # statický web do dist/
npm run preview   # náhled buildu
```

Potřeba je Node 22.

## Přidání projektu

1. Zkopíruj `src/content/projekty/_sablona.md` jako `src/content/projekty/<adresa>.md` (bez podtržítka). Název souboru je adresa stránky `/projekty/<adresa>`.
2. Vyplň texty. Popis každého pole je přímo v šabloně.
3. Obrázky dej do `public/img/projekty/<adresa>/` (seznam názvů je v `public/img/README.md`).
4. Commit a push. Vercel web sám přebuildí.

Projekt se `stav: brzy` dostane stránku „Detaily už brzy“. Filtry na stránce Projekty se počítají z pole `kategorie`. Ve „Vybraných projektech“ na hlavní stránce se objeví projekty s vyplněným `vybrany`.

## Verze v patičce

V patičce je verze z `package.json` a krátký hash commitu (na Vercelu z `VERCEL_GIT_COMMIT_SHA`, lokálně z gitu).

- `npm run release` zvedne verzi o minor (0.1.0 → 0.2.0), vytvoří commit a tag `v0.2.0`.
- `npm run release:patch` pro drobné opravy (0.2.0 → 0.2.1).
- Pak `git push --follow-tags`.

## Nasazení na Vercel

1. Na [vercel.com/new](https://vercel.com/new) importuj repozitář `tjindrak/portfolio`.
2. Framework se rozpozná jako Astro. Build `npm run build`, výstup `dist`. Nic dalšího není potřeba nastavovat.
3. Každý push do `main` se nasadí do produkce, každý pull request dostane náhledovou adresu.
4. Vlastní doménu přidáš v Settings → Domains (v `astro.config.mjs` je `site: 'https://tjindrak.cz'`, uprav podle skutečné domény).

## Fonty

Nohemi a Delight (Rajesh Rajput) jsou v `public/fonts/` beze změny, protože licence nedovoluje soubory upravovat (ani převádět do woff2) a Delight se nesmí dál šířit. Proto je repozitář soukromý.

## Kde co je

- `src/pages/` stránky (hlavní, projekty, O mně, Životopis, Kontakt, 404)
- `src/content/projekty/` projekty v Markdownu
- `src/components/` navigace, patička, dlaždice, formulář, časová osa, intro
- `src/data/site.ts` kontakty, odkazy na sítě, navigace
- `src/styles/global.css` barvy, typografie, tlačítka, světlý motiv
