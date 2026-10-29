// Sdílené mezi astro.config.mjs (generování variant) a src/lib/obrazky.ts (srcset).
export const SIRKY = [480, 800, 1200, 1600];

export function varianta(src, sirka) {
  return src.replace(/\.webp$/i, `-${sirka}w.webp`);
}
