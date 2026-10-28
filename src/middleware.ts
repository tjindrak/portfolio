import { defineMiddleware } from 'astro:middleware';

// Jednoznakové předložky a spojky (k, s, v, z, o, u, a, i) nesmí zůstat na konci řádku:
// v českých stránkách se za ně místo mezery vloží pevná mezera. Mění se jen text,
// ne značky, atributy, skripty a styly.
const JEDNOZNAKY = /(^|[\s(„"'>])([ksvzouaiKSVZOUAI])[ \t\n\r]+(?=[^\s<])/g;

export function pevneMezery(html: string): string {
  return html
    .split(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>)/)
    .map((cast) => (cast.startsWith('<') ? cast : cast.replace(JEDNOZNAKY, '$1$2 ').replace(JEDNOZNAKY, '$1$2 ')))
    .join('');
}

export const onRequest = defineMiddleware(async (context, next) => {
  const odpoved = await next();
  const cesta = context.url.pathname;
  const cesky = !(cesta === '/en' || cesta.startsWith('/en/') || cesta === '/cv/en' || cesta.startsWith('/cv/en/'));
  if (!cesky || !odpoved.headers.get('content-type')?.includes('text/html')) return odpoved;
  const html = pevneMezery(await odpoved.text());
  return new Response(html, { status: odpoved.status, headers: odpoved.headers });
});
