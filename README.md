# Manchester Data Hive — Event Website

A static event website built with SvelteKit and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview   # preview the built site locally
```

The built site outputs to the `build/` directory as static HTML — ready for any hosting platform (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.).

## Where to Edit Content

All event content is managed through simple config and data files. You never need to touch component code to update content.

### Event Configuration

**`src/lib/config/event.ts`** — The main config file. Edit this to change:

| Constant | What it controls |
|---|---|
| `EVENT_NAME` | Event name used everywhere |
| `EVENT_TAGLINE` | Tagline shown in the hero |
| `EVENT_DATE_TEXT` | Date displayed across the site |
| `EVENT_CITY` / `EVENT_COUNTRY` | Location details |
| `EVENT_VENUE_NAME` / `EVENT_VENUE_ADDRESS` | Venue info |
| `EVENT_VENUE_MAP_EMBED` | Google Maps embed URL for the venue |
| `TICKETS_URL` | External link for ticket registration (e.g. Eventbrite) |
| `CFS_URL` | External link for Call for Speakers form (e.g. Sessionize) |
| `SPONSOR_EMAIL` | Email address for sponsor enquiries |
| `CONTACT_EMAIL` | General contact email |
| `SOCIAL_LINKS` | Social media URLs (leave empty string to hide) |
| `SEO_*` | SEO metadata (title, description, URL, image) |

### Data Files

| File | What it controls |
|---|---|
| `src/lib/data/speakers.ts` | Speaker list (name, title, company, bio, photo path) |
| `src/lib/data/sponsors.ts` | Sponsor list with tiers, logo paths, and benefit descriptions |
| `src/lib/data/agenda.ts` | Day schedule with times, titles, speakers, and tracks |
| `src/lib/data/faq.ts` | FAQ sections for general, tickets, and speaker pages |

### Static Assets

Place images in the `static/` directory:

- `static/speakers/` — Speaker photos
- `static/sponsors/` — Sponsor logos
- `static/favicon.svg` — Site favicon
- `static/og-image.png` — OpenGraph preview image
- `static/apple-touch-icon.png` — iOS bookmark icon

### Pages

| Route | File |
|---|---|
| `/` | `src/routes/+page.svelte` |
| `/tickets` | `src/routes/tickets/+page.svelte` |
| `/sponsors` | `src/routes/sponsors/+page.svelte` |
| `/venue` | `src/routes/venue/+page.svelte` |
| `/call-for-speakers` | `src/routes/call-for-speakers/+page.svelte` |

### Brand Colours

Defined in `src/app.css` using Tailwind v4 `@theme` tokens:

- **Yellow** (accent): `#FBC802` — `brand-yellow`
- **Black** (text): `#1f1f1f` — `brand-black`
- **Background**: `#fffcf0` — `brand-bg`

## Tech Stack

- [SvelteKit](https://svelte.dev/docs/kit) — framework
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- [adapter-static](https://svelte.dev/docs/kit/adapter-static) — static site generation
- Zero runtime dependencies beyond Svelte
