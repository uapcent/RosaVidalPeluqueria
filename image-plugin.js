// Vite plugin: makes smaller WebP copies of every photo in public/trabajos/
// (sizes in src/lib/photoSizes.js), so phones don't download the full photo.
//   · build: the copies are written to dist/trabajos/w480/, w800/, w1200/
//   · dev:   each copy is made the first time the browser asks for it
// Copies are cached in node_modules/.cache/trabajos, so only new or changed
// photos are resized again. Nothing to do by hand: just add the photo.
import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { widths } from './src/lib/photoSizes.js';

const folder = 'trabajos';
const isPhoto = (file) => /\.(jpe?g|png)$/i.test(file);
const cacheDir = path.resolve('node_modules/.cache', folder);

async function webp(file, width) {
  const { mtimeMs, size } = await stat(file);
  const cached = path.join(cacheDir, `w${width}`, `${path.parse(file).name}-${Math.round(mtimeMs)}-${size}.webp`);
  try {
    return await readFile(cached);
  } catch {
    const data = await sharp(file).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 75 }).toBuffer();
    await mkdir(path.dirname(cached), { recursive: true });
    await writeFile(cached, data);
    return data;
  }
}

export default function imagePlugin() {
  let photosDir;

  return {
    name: 'rosa-vidal-photos',

    configResolved(config) {
      photosDir = path.join(config.publicDir, folder);
    },

    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const m = decodeURIComponent(req.url.split('?')[0]).match(new RegExp(`/${folder}/w(\\d+)/([^/]+)\\.webp$`));
        if (!m || !widths.includes(Number(m[1]))) return next();
        try {
          const original = (await readdir(photosDir)).find((f) => isPhoto(f) && path.parse(f).name === m[2]);
          if (!original) return next();
          const data = await webp(path.join(photosDir, original), Number(m[1]));
          res.setHeader('Content-Type', 'image/webp');
          res.setHeader('Cache-Control', 'no-cache');
          res.end(data);
        } catch (err) {
          next(err);
        }
      });
    },

    async generateBundle() {
      const photos = (await readdir(photosDir).catch(() => [])).filter(isPhoto);
      await Promise.all(
        photos.flatMap((file) =>
          widths.map(async (width) => {
            this.emitFile({
              type: 'asset',
              fileName: `${folder}/w${width}/${path.parse(file).name}.webp`,
              source: await webp(path.join(photosDir, file), width),
            });
          }),
        ),
      );
    },
  };
}
