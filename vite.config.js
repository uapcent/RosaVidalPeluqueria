import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import seoPlugin from './seo-plugin.js';
import imagePlugin from './image-plugin.js';
import { seo } from './src/business.js';

// With a custom domain (seo.domain in src/business.js) the site is served at the root.
// Without one, BASE_PATH is set by the GitHub Pages workflow (e.g. "/RosaVidalPeluqueria/")
// and the site lives at <owner>.github.io/<repo>/.
const base = seo.domain ? '/' : process.env.BASE_PATH || '/';

// Absolute URL of the site, for Google (canonical, JSON-LD, sitemap).
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const siteUrl = seo.domain ? `https://${seo.domain}/` : owner ? `https://${owner.toLowerCase()}.github.io${base}` : null;

export default defineConfig({
  base,
  plugins: [react(), seoPlugin(siteUrl), imagePlugin()],
});
