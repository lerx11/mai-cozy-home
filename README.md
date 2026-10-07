# Hmong House Sapa — Nature, Guides & Cultural Tours

A modern, warm, and personal marketing website for **Hmong House Sapa**, a family-run Hmong homestay and trekking operator in Ta Van Village, Sapa, Vietnam. The site showcases five authentic cultural tours, a photo gallery, guest reviews, and a WhatsApp-based booking flow.

> Built as a portfolio piece. All imagery uses `https://placehold.co` placeholders with a green/cream palette — see [Replacing placeholder content](#replacing-placeholder-content) to swap in real photos.

## ✨ Features

- **Mobile-first responsive design** that works from small phones to large desktops
- **Warm, minimal aesthetic** — cream background, ink text, rice-field green and golden accents, rounded corners, soft shadows
- **Sticky header** with desktop navigation, social icons, and a slide-in mobile drawer
- **Full-screen hero** with staggered entrance animations and dual CTAs
- **Tour catalog** of 5 experiences with color-coded difficulty badges and hover-lift cards
- **Dynamic tour pages** (`/tours/[slug]`) with SSG, itinerary timeline, included/not-included lists, sticky booking sidebar, photo gallery, and similar tours
- **Masonry gallery** with hover zoom and a keyboard-navigable lightbox (Esc / ← / →)
- **Reviews** with star ratings and a rating summary
- **Contact section** with a form that composes a pre-filled WhatsApp message
- **Floating WhatsApp button** with a pulse animation, revealed after scrolling
- **Scroll-reveal animations** throughout (Framer Motion `whileInView`)
- **Smooth-scroll navigation** with anchor offset for the sticky header
- **SEO-ready** with per-page metadata and Open Graph tags

## 🧰 Tech stack

- [**Next.js 14**](https://nextjs.org/) (App Router)
- [**Tailwind CSS**](https://tailwindcss.com/) for styling
- [**Framer Motion**](https://www.framer.com/motion/) for animations
- [**Google Fonts**](https://fonts.google.com/) via `next/font` — Playfair Display (headings) + Inter (body)
- [`next/image`](https://nextjs.org/docs/app/api-reference/components/image) for optimized images

## 🚀 Getting started

### Prerequisites

- Node.js 18.17+ (or 20+)
- npm (bundled with Node)

### Install & run

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build   # create the optimized production build
npm start       # serve the production build
```

## 📁 Project structure

```
hmong-house-sapa/
├── app/
│   ├── layout.js              # Root layout: fonts, metadata, body
│   ├── page.js                # Home page (assembles all sections)
│   ├── globals.css            # Design system: palette, components, utilities
│   └── tours/
│       └── [slug]/
│           └── page.js        # Dynamic tour page (SSG)
├── components/
│   ├── Header.jsx             # Sticky nav, social icons, mobile drawer
│   ├── Hero.jsx              # Full-screen hero with CTAs
│   ├── About.jsx             # Story + values (exports `reveal` variant)
│   ├── ToursSection.jsx      # Tours grid + CTA
│   ├── TourCard.jsx          # 4:3 card, badges, hover lift
│   ├── Gallery.jsx           # Masonry grid + lightbox
│   ├── Reviews.jsx           # Star-rating review cards
│   ├── Contact.jsx           # Info + WhatsApp message form
│   ├── Footer.jsx            # Brand, links, social, copyright
│   ├── WhatsAppButton.jsx    # Floating pulse button
│   └── Icons.jsx             # Shared SVG icon set
├── data/
│   └── siteConfig.js          # ALL site content & helpers
├── public/
│   └── images/                # TODO: real photos (see below)
├── next.config.mjs
├── tailwind.config.js        # Custom palette, shadows, keyframes
└── package.json
```

## 🎨 Design system

| Token        | Hex       | Usage                                  |
| ------------ | --------- | -------------------------------------- |
| `cream`      | `#FFF8F0` | Page background                        |
| `ink`        | `#2D2D2D` | Primary text                           |
| `rice`       | `#6B8E4E` | Brand green (buttons, accents)         |
| `gold`       | `#C9A227` | Warm accent (CTAs, eyebrows, stars)    |
| `whatsapp`   | `#25D366` | WhatsApp brand green                   |

These are defined as Tailwind colors in `tailwind.config.js` and as CSS variables in `app/globals.css`, so they can be used as `bg-rice`, `text-gold`, `border-ink/10`, etc.

Reusable utility classes live in `globals.css` under `@layer components`: `.container-warm`, `.section`, `.eyebrow`, `.btn`, `.btn-gold`, `.btn-green`, `.btn-whatsapp`, `.btn-outline`, and `.card-warm`.

## 🗺️ Tours

| # | Tour                              | Duration       | Difficulty | Price (VND)   |
| - | --------------------------------- | -------------- | ---------- | ------------ |
| 1 | Hmong Village Trekking            | 1 Day          | Easy       | 750,000      |
| 2 | Herbal Trekking with Red Dao      | 1 Day          | Medium     | 850,000      |
| 3 | 2D1N Hmong & Red Dao Combo        | 2 Days 1 Night | Medium     | 1,800,000    |
| 4 | 2-Day Camping Trek                | 2 Days 1 Night | Hard       | 2,000,000    |
| 5 | Motorbike Tour                     | 1 Day          | Easy       | 1,200,000    |

Each tour has its own dynamic page at `/tours/<slug>` with a full itinerary, highlights, inclusions, and a pre-filled WhatsApp booking link.

## ✏️ Editing content

**All copy lives in a single file:** [`data/siteConfig.js`](./data/siteConfig.js).

Update business details, tours, gallery, reviews, and navigation there — no component edits required. Helper functions are also exported:

- `buildWhatsappLink(message)` — returns a `wa.me` URL with a pre-filled message
- `buildTourBookingLink(tourName)` — per-tour booking link
- `getTourBySlug(slug)` / `getSimilarTours(slug, limit)` — used by the dynamic tour page

## 🖼️ Replacing placeholder content

Images currently use `https://placehold.co` placeholders. To use real photos:

1. Drop files into `public/images/` using these subfolders:
   - `public/images/tours/` — tour cover + gallery shots
   - `public/images/gallery/` — masonry gallery photos
   - `public/images/about/` — about/homestay photo
2. Replace the `placehold.co` URLs in `data/siteConfig.js` with local paths, e.g. `/images/tours/hmong-village-1.jpg`.
3. In `next.config.mjs`, set `images.unoptimized` back to `false` (or remove it) to re-enable `next/image` optimization for the new raster photos. (It's currently `true` because `placehold.co` serves SVG, which the optimizer can't process reliably.)

Look for `TODO:` comments throughout the codebase for the remaining real-content items (email, social profile URLs, real domain in metadata, review platform sync).

## ♿ Accessibility & UX notes

- Color contrast meets WCAG AA on body text (`ink` on `cream`)
- The mobile drawer and gallery lightbox lock body scroll while open
- The lightbox supports keyboard navigation (Esc to close, ←/→ to move)
- All interactive icons have `aria-label`s
- `prefers-reduced-motion` users still get a fully functional site; animations degrade gracefully

## 📦 Deployment

The easiest path is [Vercel](https://vercel.com/new):

1. Push this repo to GitHub
2. Import the repo on Vercel
3. No environment variables are required — deploy as-is

Any Next.js 14–compatible host (Netlify, Render, a Node server) works too.

## 📄 License

This project is provided as a portfolio piece. You are welcome to use, adapt, and build on it for your own homestay or tour business. Attribution is appreciated but not required.

---

Made with care in Ta Van Village, Sapa, Vietnam 🌾
