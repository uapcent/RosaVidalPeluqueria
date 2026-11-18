# Rosa Vidal Peluquería

Website for **Rosa Vidal Peluquería**, a one-person hair salon in Alquerías del Niño Perdido (Castellón).
Spanish only. React + Vite, one page plus the legal pages.

Based on design **B · Atelier** from the PajaroLeck demos (calm, magazine-style), which is the one the
client picked. It's adapted to what the client asked for:

- **Their work comes first.** Four featured photos sit right under the headline, then the full gallery
  with filters (Recogidos · Coletas y trenzas · Ondas y semirrecogidos · Color y cortes). Clicking a photo opens
  it large, with a **"Quiero uno así"** button that opens WhatsApp with a message naming that photo.
- **No online booking.** Appointments are made by **WhatsApp or phone**. The buttons are in the header,
  the hero, the events section and the contact section. On phones, a **Llamar | WhatsApp** bar stays
  at the bottom of the screen.
- **Prices shown as "desde X €"**, because the final price varies.
- **History and plans** ("Nuestra historia" / "Lo que viene") in place of a team section.
- **The business card's look**: black and white, zebra stripes, a dotted frame and the name in a brush
  script (Kaushan Script, close to the card's). The contact section shows a copy of the card with
  working phone links. A muted rose accent keeps it from feeling stark.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Where everything is

```
src/
  business.js     contact details, hours, custom domain and Google Maps link (also read by the build)
  config.js       prices, event steps, history texts (re-exports business.js)
  trabajos.js     the photo gallery (how to add a photo is explained at the top of the file)
  styles.css      colours and fonts (variables at the top)
  pages/          Home, legal pages (aviso legal, privacidad, cookies), 404
  components/     Layout (header, footer, phone bar), Gallery, Zebra stripes, WhatsApp/call buttons
public/trabajos/  the salon's photos used on the site (resized to 1200 px)
image-plugin.js   makes smaller WebP copies of those photos at build time (sizes in src/lib/photoSizes.js)
fotos-originales/ full-size originals from the salon, not published and not in git
```

### Adding a new photo of their work

1. Put the photo in `public/trabajos/`, for example `boda-marta.jpg` (portrait, about 1200 px wide).
2. Add a line **at the top** of the list in `src/trabajos.js`:
   ```js
   { src: foto('boda-marta.jpg'), type: 'recogidos', caption: 'Recogido bajo con flores' },
   ```
3. Add `featured: true` to show it in the big row at the top of the page.

The smaller copies for phones (WebP at 480, 800 and 1200 px) are made automatically when the site
is built, so there's nothing else to do. Photos up to ~2000 px are fine; bigger ones just make the
repository heavier.

The client wants to add photos "now and then" by themself, from their phone. Once the site is live, this
can move to a small editing panel (e.g. Decap CMS or PocketBase) so they don't need us for every photo.

## ⚠ To confirm with the client before publishing

Everything marked `PENDIENTE` in `src/business.js` and `src/config.js`:

- **Opening hours** (made up) and whether they open outside those hours for weddings.
- **Prices** (made-up "desde" amounts).
- **Event steps**: whether there's a trial run for brides, opening early on the day, etc.
- **History**: year they opened and real details for "Nuestra historia" and "Lo que viene".
- **Tax name and NIF** for the legal pages, and an email if they want one shown.
- **Photos**: the gallery uses the salon's own photos (clients gave permission). The captions and
  categories were written by looking at the photos, so the client should check them. The big photo in
  "Nuestra historia" is still a Pexels placeholder until there's one of Rosa working.
- **Phone number**: the site only shows the mobile (686 741 872), used for both calls and WhatsApp. The landline on the card was removed on request.
- Whether to sell **gift cards or products** (still under discussion).

The legal texts in `src/pages/Legal.jsx` are a template and should be reviewed by the client's advisor.

## Deployment

**GitHub Pages:** `.github/workflows/deploy.yml` builds and deploys on every push to `main`.
One-time setup: *Settings → Pages → Build and deployment → Source: GitHub Actions*.

**Own domain:** stays on GitHub Pages.
1. Buy the domain (in the client's name). Set `seo.domain` in `src/business.js`, e.g. `'rosavidalpeluqueria.es'`.
   The build then serves the site at the root and writes a `CNAME` file.
2. At the registrar, add DNS records: `A` records for the root to `185.199.108.153`, `185.199.109.153`,
   `185.199.110.153`, `185.199.111.153`, and a `CNAME` for `www` to `uapcent.github.io`.
3. *Settings → Pages → Custom domain*: enter the domain, wait for the DNS check, tick **Enforce HTTPS**.

## Google (search results and the Maps card)

The build (`seo-plugin.js`) adds a canonical URL, Open Graph tags (preview when the link is shared on
WhatsApp) and `HairSalon` structured data built from `src/business.js`, plus `sitemap.xml` and `robots.txt`.
To link the site to the salon's card on Google:

1. The client claims and verifies the salon on **Google Business Profile** and puts the website URL there.
   Name, address, phone and hours must match `src/business.js` exactly.
2. Paste the Maps share link into `seo.mapsUrl` (and any Instagram/Facebook into `seo.profiles`).
3. Verify the domain in **Google Search Console** and submit `https://<domain>/sitemap.xml`.
   Check the structured data with Google's Rich Results Test.
