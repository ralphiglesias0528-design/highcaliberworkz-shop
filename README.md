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
| `/shop` | Catalog (7 tees + optional figure/tray) |
| `/shop/$slug` | Product detail |
| `/cart` | Cart |
| `/checkout` | Dry-run order summary |
| `/character` | El Gordo Ninja |
| `/partners` | Printful, Shop3d, Makeship, trays, GS-JJ |
| `/about` | Brand |

## Catalog (tees)

1. `stay-blessed` — Stay Blessed Tee (sand)
2. `snacks-plans` — Snacks, Plans & Takeovers Tee (black)
3. `high-caliber` — High Caliber Tee (black) — Printful `107569047`
4. `pr-dna` — Puerto Rico In My DNA Tee (white)
5. `freedom-weighs-a-ton` — Freedom Weighs a Ton Tee (black) — Printful `107574313`
6. `bash-bros` — Bash Bros Tee (black) — Proverbs 27:17 / Iron Sharpens Iron
7. `born-for-adversity` — Born for Adversity Tee (black) — Proverbs 17:17

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
