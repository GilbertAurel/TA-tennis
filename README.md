# Facility Booking

A production-ready Progressive Web App for facility booking management, built to faithfully recreate the reference mobile UI. Fully client-side — data persists in IndexedDB via Dexie, and the app works offline after installation.

## Tech Stack

- **Next.js** (App Router) + **React** + **TypeScript** (strict)
- **TailwindCSS v4** + design tokens in `globals.css`
- **Lucide React** icons
- **React Hook Form** + **Zod** (admin form validation)
- **TanStack Query** (data layer / cache invalidation)
- **Framer Motion** (subtle fade / slide / press animations)
- **Dexie** (IndexedDB)
- **next-pwa** (service worker, offline caching)
- **date-fns**, **Inter** font

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also generates the service worker)
npm start          # serve the production build
```

## Application Flow

| Route | Screen |
|---|---|
| `/` | My Activity — scrollable booking cards, bottom navigation |
| `/activity/[id]` | Facility Booking Detail — Detail/Billing tabs, yellow "Click Here" alert, Cancel Request |
| `/activity/[id]/additional-info` | Additional Info — centered-title header, blank content |
| `/admin` | Create new bookings (saved to IndexedDB, list updates immediately, newest first) |

## Data Layer

`src/lib/db.ts` exposes `BookingDatabase` (Dexie) with `createBooking()`, `updateBooking()`, `deleteBooking()`, `getBooking()`, `getAllBookings()`, and `seedDatabase()`. On first launch the database is seeded with the bookings shown in the reference screenshots.

## PWA

- `public/manifest.json` + generated icons (`public/icons/`)
- Service worker generated at build time by `next-pwa` (disabled in development)
- Caches static assets, JS, CSS, fonts, icons and pages; the app continues to function offline after installation

## Design Reference

`DESIGN.md` documents the full design analysis (layout, spacing, typography, colors, badges) measured from the screenshots in `~/Downloads` (`booking-1*.jpeg`).
