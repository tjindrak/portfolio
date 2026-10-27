// Vyrobí PDF životopisu z tiskové stránky /cv/<jazyk> (src/pages/cv/[lang].astro).
// Použití: npm run cv (nejdřív sestaví web, PDF pak uloží do public/ a commitne se s webem).
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { createRequire } from 'node:module';

// Playwright stačí mít nainstalovaný globálně (npm i -g playwright && npx playwright install chromium)
const { chromium } = createRequire(import.meta.url)('playwright');

const dist = join(process.cwd(), 'dist');
const typy = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.otf': 'font/otf', '.ttf': 'font/ttf' };

const server = createServer(async (req, res) => {
  let cesta = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname));
  if (!extname(cesta)) cesta = join(cesta, 'index.html');
  try {
    const data = await readFile(join(dist, cesta));
    res.writeHead(200, { 'content-type': typy[extname(cesta)] ?? 'application/octet-stream' }).end(data);
  } catch {
    res.writeHead(404).end();
  }
}).listen(0);
const port = server.address().port;

const prohlizec = await chromium.launch();
const stranka = await prohlizec.newPage();
for (const [lang, soubor] of [['cs', 'cv.pdf'], ['en', 'cv-en.pdf']]) {
  await stranka.goto(`http://localhost:${port}/cv/${lang}`, { waitUntil: 'networkidle' });
  await stranka.evaluate(() => document.fonts.ready);
  await stranka.pdf({ path: join('public', soubor), format: 'A4', printBackground: true, preferCSSPageSize: true });
  console.log(`public/${soubor}`);
}
await prohlizec.close();
server.close();
