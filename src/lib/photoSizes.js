// Smaller WebP copies of the photos in public/trabajos/, made automatically
// by image-plugin.js. A photo trabajos/coleta.jpg gets trabajos/w480/coleta.webp,
// trabajos/w800/coleta.webp and trabajos/w1200/coleta.webp.
// Shared by the plugin (Node) and the Photo component (browser): no imports here.
export const widths = [480, 800, 1200];

const local = /^(.*\/trabajos\/)([^/]+)\.(jpe?g|png)$/i;

// 'srcset' for a local photo, or undefined for anything else (e.g. Pexels).
export function srcSetFor(src) {
  const m = src.match(local);
  if (!m) return undefined;
  return widths.map((w) => `${m[1]}w${w}/${m[2]}.webp ${w}w`).join(', ');
}
