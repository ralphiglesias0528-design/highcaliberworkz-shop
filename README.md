# HighCaliberWorkz Shop

Merch storefront for [HighCaliberWorkz.com](https://HighCaliberWorkz.com) — TanStack Start + React + Tailwind v4 + Zustand cart.

Dark industrial theme: gold + Puerto Rican red on charcoal. Street / NYC / PR vibe.

## Stack

- **TanStack Start** (React, file-based routes)
- **Tailwind CSS v4**
- **Zustand** cart persisted to `localStorage` (`hcw-cart`)
- No auth · checkout is dry-run only (no charges)

## Setup

```bash
npm install
npm run dev
```

Dev server: [http://localhost:3000](http://localhost:3000)

```bash
npm run build
npm run preview
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/shop` | Catalog (6 tees + 6 hoodies + optional figure/tray) |
| `/shop/$slug` | Product detail |
| `/cart` | Cart |
| `/checkout` | Dry-run order summary |
| `/character` | El Gordo Ninja |
| `/partners` | Printful, Shop3d, Makeship, trays, GS-JJ |
| `/about` | Brand |

## Catalog

**Tees** ($39.99, sizes S–5XL, multi-color Gildan 5000-style blanks):

1. `stay-blessed` — Stay Blessed Tee (default Sand)
2. `snacks-plans` — Snacks, Plans & Takeovers Tee (default Black)
3. `pr-dna` — Puerto Rico In My DNA Tee (default White)
4. `freedom-weighs-a-ton` — Freedom Weighs a Ton Tee (default Black) — Printful Bella+Canvas `107633202`
5. `bash-bros` — Bash Bros Tee (default Black) — Proverbs 27:17 — Printful `107631980`
6. `born-for-adversity` — Born for Adversity Tee (default Black) — Proverbs 17:17 — Printful Bella+Canvas `107633038`

**Hoodies** ($59.99, sizes S–5XL, same artwork, Gildan 18500-style via Printful):

1. `stay-blessed-hoodie`
2. `snacks-plans-hoodie`
3. `pr-dna-hoodie`
4. `freedom-weighs-a-ton-hoodie`
5. `bash-bros-hoodie`
6. `born-for-adversity-hoodie`

Blank colors (tees + hoodies): Black, White, Navy, Sport Grey, Sand, Red, Forest Green, Charcoal.

Optional: El Gordo Ninja Figure (Shop3d), Rolling Tray (coming soon).

## Brand rules

- Site: HighCaliberWorkz / HIGH CALIBER WORKZ in header
- Merch titles/art: **High Caliber** or **El Gordo Ninja** only — never Workz / Budzz on product labels
- Art lives in `public/images/` (copied from `high-caliber` art + Printful assets)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server (port 3000) |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run generate-routes` | Regenerate route tree |

## Node

TanStack Start packages prefer Node `>=22.12`. Use Node 22+ if the build warns on engines.
