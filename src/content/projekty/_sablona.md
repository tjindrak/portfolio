---
# ŠABLONA NOVÉHO PROJEKTU
# 1. Zkopíruj soubor a přejmenuj ho bez podtržítka, např. muj-projekt.md.
#    Název souboru = adresa stránky (/projekty/muj-projekt).
# 2. Obrázky dej do public/img/projekty/muj-projekt/ (viz README.md).
# 3. Soubory začínající "_" se na webu nezobrazí.

nazev: Název projektu
# slovo: Kratší slovo do pozadí hero (když je název dlouhý)
stav: hotovo            # hotovo | brzy (brzy = stránka "Detaily už brzy")
barva: "#E3B341"         # počáteční barva gradientu nadpisů (podle vizuálu)
typ: Web & Branding     # podtitulek na dlaždici
rok: "2026"
kategorie: [UI/UX design, Web]   # podle nich se počítají filtry na /projekty
poradi: 13              # pořadí v gridu Projekty (1 = první)
vyska: 380              # výška dlaždice v gridu (300–600)
# vybrany: 5            # když je vyplněné, objeví se ve "Vybraných projektech" na hlavní stránce
dalsi: jardova-mapa     # projekt, na který odkazuje "Další projekt"

stitky: [UI/UX design, Web]
shrnuti: Jedna až dvě věty o tom, co jsem udělal a proč.
meta:
  klient: Klient
  role: Moje role
  rok: "2026"
  vystup: Web, aplikace
  spoluprace: Kdo pomáhal
web:
  url: https://example.com
  popisek: example.com
hero:
  rozlozeni: plny       # plny | kolaz
  popisek: Popis hlavního obrázku

vyzva:
  nadpis: Jaký byl problém.
  odstavce:
    - Odstavec textu.
  # obrazek: { src: /img/projekty/muj-projekt/vyzva.webp, popisek: Popis }
  # obrazekPozice: pod  # pod | vedle

proces:
  nadpis: Jak jsem postupoval.
  odstavce:
    - Odstavec textu.
  kroky:
    - nazev: Výzkum
      popis: Krátký popis kroku.

reseni:
  nadpis: Co z toho vzniklo.
  odstavce:
    - Odstavec textu.
    - "> Odstavec začínající > je zvýrazněná citace."
  obrazky:
    - src: /img/projekty/muj-projekt/reseni-1.webp
      popisek: Popis obrázku
---
