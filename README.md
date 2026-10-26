# Rosa Vidal Peluquería

Website for **Rosa Vidal Peluquería**, a one-person hair salon in Alquerías del Niño Perdido (Castellón).
Spanish only. React + Vite, one page plus the legal pages.

Based on design **B · Atelier** from the PajaroLeck demos (calm, magazine-style), which is the one the
client picked. It's adapted to what the client asked for:

- **Their work comes first.** Four featured photos sit right under the headline, then the full gallery
  with filters (Novias · Madrinas e invitadas · Comuniones · Del día a día). Clicking a photo opens
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
  config.js       contact details, hours, prices, event steps, history texts
  trabajos.js     the photo gallery (how to add a photo is explained at the top of the file)
  styles.css      colours and fonts (variables at the top)
  pages/          Home, legal pages (aviso legal, privacidad, cookies), 404
  components/     Layout (header, footer, phone bar), Gallery, Zebra stripes, WhatsApp/call buttons
public/trabajos/  the salon's own photos go here
```

### Adding a new photo of their work

1. Put the photo in `public/trabajos/`, for example `boda-marta.jpg` (portrait, about 1200 px wide).
2. Add a line **at the top** of the list in `src/trabajos.js`:
   ```js
   { src: foto('boda-marta.jpg'), type: 'novias', caption: 'Recogido bajo con flores' },
   ```
3. Add `featured: true` to show it in the big row at the top of the page.

The client wants to add photos "now and then" by themself, from their phone. Once the site is live, this
can move to a small editing panel (e.g. Decap CMS or PocketBase) so they don't need us for every photo.

## ⚠ To confirm with the client before publishing

Everything marked `PENDIENTE` in `src/config.js`:

- **Opening hours** (made up) and whether they open outside those hours for weddings.
- **Prices** (made-up "desde" amounts).
- **Event steps**: whether there's a trial run for brides, opening early on the day, etc.
- **History**: year they opened and real details for "Nuestra historia" and "Lo que viene".
- **Tax name and NIF** for the legal pages, and an email if they want one shown.
- **Photos**: all of them are placeholders from [Pexels](https://www.pexels.com/license/). The salon
  has no photos yet, so they need to be taken. Clients who appear in them must give permission.
- **WhatsApp number**: we assumed the mobile number on the card (686 741 872) is the WhatsApp one.
- Whether to sell **gift cards or products** (still under discussion).

The legal texts in `src/pages/Legal.jsx` are a template and should be reviewed by the client's advisor.

## Deployment

**GitHub Pages:** `.github/workflows/deploy.yml` builds and deploys on every push to `main`.
One-time setup: *Settings → Pages → Build and deployment → Source: GitHub Actions*.

**Own domain (recommended, the client asked us to handle it):** run `npm run build` and upload `dist/`
to any static host (Netlify, Vercel, Cloudflare Pages…). Configure the host to serve `index.html` for
unknown paths (Netlify `_redirects`: `/* /index.html 200`; Vercel does this automatically).
