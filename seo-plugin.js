// Vite plugin: adds what Google needs to link the website to the salon's
// Google Business Profile. All data comes from src/business.js.
//   · index.html: canonical URL, Open Graph tags and HairSalon JSON-LD
//   · sitemap.xml, robots.txt and CNAME (only when a custom domain is set)
import { company, hours, seo } from './src/business.js';

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const mondayFirst = [1, 2, 3, 4, 5, 6, 0];

// Groups days that share the same opening/closing times.
function openingHours() {
  const specs = new Map();
  for (const day of mondayFirst) {
    for (const [opens, closes] of hours[day] ?? []) {
      const key = `${opens}-${closes}`;
      if (!specs.has(key)) specs.set(key, { '@type': 'OpeningHoursSpecification', dayOfWeek: [], opens, closes });
      specs.get(key).dayOfWeek.push(dayNames[day]);
    }
  }
  return [...specs.values()];
}

const intlPhone = (number) => `+34${number.replace(/\D/g, '')}`;
const escapeAttr = (text) => text.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

function jsonLd(siteUrl, description) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    '@id': `${siteUrl}#salon`,
    name: `${company.name} ${company.tagline}`,
    alternateName: company.name,
    description,
    url: siteUrl,
    image: siteUrl + seo.image,
    telephone: intlPhone(company.phone),
    priceRange: seo.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.street,
      postalCode: company.postcode,
      addressLocality: company.town,
      addressRegion: company.province,
      addressCountry: company.country,
    },
    openingHoursSpecification: openingHours(),
  };
  if (seo.geo) data.geo = { '@type': 'GeoCoordinates', latitude: seo.geo.lat, longitude: seo.geo.lng };
  if (seo.mapsUrl) data.hasMap = seo.mapsUrl;
  const sameAs = [seo.mapsUrl, ...seo.profiles].filter(Boolean);
  if (sameAs.length) data.sameAs = sameAs;
  // "</" can't appear inside the <script> tag.
  return JSON.stringify(data, null, 2).replace(/</g, '\\u003c');
}

// siteUrl: absolute URL of the site root, ending in "/" (null = unknown, e.g. local build).
export default function seoPlugin(siteUrl) {
  return {
    name: 'rosa-vidal-seo',

    transformIndexHtml(html) {
      if (!siteUrl) return html;
      const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
      const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? company.name;
      const tags = [
        `<link rel="canonical" href="${siteUrl}" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:locale" content="es_ES" />`,
        `<meta property="og:site_name" content="${escapeAttr(company.name)}" />`,
        `<meta property="og:title" content="${escapeAttr(title)}" />`,
        `<meta property="og:description" content="${escapeAttr(description)}" />`,
        `<meta property="og:url" content="${siteUrl}" />`,
        `<meta property="og:image" content="${siteUrl}${seo.image}" />`,
        `<script type="application/ld+json">\n${jsonLd(siteUrl, description)}\n</script>`,
      ];
      return html.replace(/\s*<\/head>/, `\n    ${tags.join('\n    ')}\n  </head>`);
    },

    generateBundle() {
      if (!siteUrl) return;
      const urls = seo.pages.map((page) => `  <url><loc>${siteUrl}${page}</loc></url>`).join('\n');
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      });
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}sitemap.xml\n` });
      // Tells GitHub Pages which custom domain serves the site.
      if (seo.domain) this.emitFile({ type: 'asset', fileName: 'CNAME', source: `${seo.domain}\n` });
    },
  };
}
