# DESIGN.md — Facility Booking App (Design Analysis)

Source screenshots (iPhone, 2x scale):
- `booking-1.jpeg` (785×1600) — Page 1: **My Activity** list
- `booking-1-detail.jpeg` (628×1280) — Page 2: **Facility Booking Detail**
- `booking-1-detail-clickhere.jpeg` (785×1600) — Page 3: **Additional Info**

All measurements below are converted to logical (1x) points. Screenshot is 2x, so divide px by 2.

---

## 1. Global

- App shell: max-width **420px**, centered, full-height mobile layout.
- Page background: **#F5F7FA** (measured gap `#eff4f7`–`#f3f4f8`; using the standard iOS grouped gray `#F5F7FA`).
- Cards / header / bottom nav: **white #FFFFFF**.
- Primary text: **#3A3F4A** (measured darks `#454753`, `#40434a`).
- Secondary text (ref numbers, meta): **#6B7280** (measured `#797979`–`#686868`).
- Muted labels on detail: **#9CA3AF**-ish (measured `#9b9b9b` on inactive tab).
- Accent blue (icons, active nav, back arrow, links): **#1DA1F2 → #0EA5E9** family. Measured: header icons `#11aafa`, back arrow `#1ab3ff`, active nav `#2ba3e0`, "Click Here" text teal `#3b7c90`–`#488daa`. Use **`#0EA5E9` (sky-500)** for icons/nav/back and **`#0E7490`-teal / measured `#3B7C90`** for the Click Here text.
- Font: **Inter**. Title weights 600–700, body 400–500.
- Radius: cards **rounded-2xl (16px)**; badges **rounded-full**; buttons **rounded-xl (12px)**.
- Card shadow: very soft — `0 1px 3px rgba(16,24,40,0.06), 0 1px 2px rgba(16,24,40,0.04)`.
- Animations: Framer Motion — fade+slide-up on page/card entry (staggered), `whileTap={{scale:0.98}}` press feedback on cards/buttons.

---

## 2. Page 1 — My Activity (`/`)

### Header (sticky, white)
- Height ~64px (plus iOS status bar).
- Title **"My Activity"** left-aligned, x=22px, y=20px, font **20px / 700**, color #3A3F4A.
- Top-right icons (measured blue `#11aafa`): **Filter (sliders)** then **Bell**, ~22px, spaced ~16px apart, right padding 20px.

### Booking cards (scrollable list)
- Container padding: 16px sides; gap between cards **~16px** (card1 bottom y≈430/2=215 → card2 top y≈462/2=231 ⇒ ~16px gap).
- Card: white, rounded-2xl, soft shadow, padding 16px. Card content layout:
  1. **Row 1**: Reference number (left, 13px / 500, #6B7280, e.g. `329394/07/26/FB`) + **StatusBadge** right-aligned.
  2. **Row 2**: Facility title (16px / 600, #3A3F4A, e.g. `Facility Booking - other`), margin-top ~10px.
  3. **Row 3**: location **MapPin** icon (gray #8B8B8B, 14px) + text `STD.35.N` (13px / 500, #6B7280), margin-top ~12px.
  4. **Row 4**: **Calendar** icon (gray, 14px) + `1 Aug 2026` (13px / 500, #6B7280) + **Clock** icon + `14:00` (13px / 500). Date and time on the same row, measured `1 Aug 2026   14:00`.
- Card heights ≈ 130px; cards tap → `/activity/[id]` with press scale animation.

### Status badges (measured)
| Status | Background | Text |
|---|---|---|
| NEW | pale green **#E8F5D6 / #D9F2C2** (measured `#c0daab` border-ish, `#e2f6d3`, `#d8f7bc`) | green **#5E9438 → #4D7C0F** (measured `#699a48`, `#89b254`) |
| RECEIVED | pale salmon **#FFE8E2 / #FFE7DB** (measured) | terracotta red **#C26A52 → #B45309-ish red** (measured `#dea68f` bg-dark, `#d9ab9b`; text darker red **#B45352/#C0392B** family — use **#C2410C→ use measured red #B91C1C? No — measured text is soft red-brown; use #C0564B**) |
| IN PROGRESS | pale blue #DBEAFE | blue #1D4ED8 |
| COMPLETED | pale gray/green #D1FAE5 | green #047857 |
| CANCELLED | pale gray #F3F4F6 | gray #6B7280 |

Final badge palette (production):
- NEW: bg **#DFF2C8**, text **#5A8F2A**
- IN PROGRESS: bg **#DBEAFE**, text **#1D4ED8**
- RECEIVED: bg **#FFE4DA**, text **#C0563F**
- COMPLETED: bg **#D1FAE5**, text **#047857**
- CANCELLED: bg **#F3F4F6**, text **#6B7280**

Badge style: `px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide`.

### Bottom navigation (fixed, white, top border #EEF0F3)
- 4 items: **Home** (house icon), **My Activity** (clipboard/list icon), **Billing** (receipt/wallet icon), **Account** (user icon).
- Icon 22px + label 10px/500 below.
- Active (My Activity): **#2BA3E0** blue (measured). Inactive: **#9AA0A6 → measured #626262** gray. Use inactive **#6B7280**, active **#2BA3E0**.
- Height ~64px + safe-area inset.

---

## 3. Page 2 — Facility Booking Detail (`/activity/[id]`)

- Header (white): **back chevron** left (blue `#1ab3ff`, 24px), centered nothing; top-right **chat icon** (message-circle, measured reddish `#95464c` — that was the chat bubble with red notification dot; use gray-700 icon with red dot badge).
- Below header, left-aligned:
  - Reference number row: `329394/07/26/FB` (16px / 600, #3A3F4A) with small copy-ish icon, margin-top ~8px.
  - `Facility Booking` subtitle (14px / 400, #6B7280).
- **Tabs** (Detail | Billing): underline tabs, active tab text #111827/600 with **blue underline 2px #0EA5E9** (measured `#207ea4`), inactive text #9CA3AF. Tab row has bottom hairline #EEF0F3.
- **Yellow alert card** (tappable → `/activity/[id]/additional-info`):
  - bg pale yellow **#FFFDE7 → measured #ffffef/#ffffea**, rounded-xl, padding 14px.
  - Left icon: **alert/info triangle in yellow #EECF15** (measured `#eecf15`), ~28px.
  - Text **"Click Here"** (measured at same baseline as icon), color teal-blue **#3B7C90** (measured), 15px / 600.
  - Chevron-right on far right (implied for affordance).
- **Detail fields** (each: small gray label 12px/500 #9CA3AF uppercase-ish + value 15px/500 #3A3F4A, ~28px row spacing, section spacing ~32px):
  - Facility Name → `Tennis Court A`
  - Event Name → `niko`
  - Time Slot → `01 August 2026, 14:00 - 15:00`
  - Description → (text)
- **Cancel Request** button pinned near bottom:
  - Full-width, height ~52px, **outlined**: border 1.5px red **#D96E78** (measured), text red **#D96B74** (measured), rounded-xl, white bg, 16px/600. Margin 20px.

---

## 4. Page 3 — Additional Info (`/activity/[id]/additional-info`)

- Page bg **#F5F7FA** (measured `#f9fafe`).
- Header (white): back chevron left (blue), **centered title "Additional Info"** (17px / 600, measured color `#515d6b` → #374151).
- Content area: blank/empty (per screenshot).

---

## 5. Bottom-nav / admin
- `/admin` — form page (same shell, header "Admin — New Booking"), fields per spec, Save → Dexie, router push `/`.
- My Activity list query sorted **newest first** (by createdAt desc).

## 6. Data model (Dexie `bookings`)
`id (auto), referenceNumber, category, facilityName, eventName, description, location, date (ISO), startTime, endTime, status, createdAt`

## 7. Seed data (matches screenshots)
1. `329394/07/26/FB` — Facility Booking - other — STD.35.N — 2026-08-01 14:00–15:00 — NEW — Tennis Court A — niko
2. `279780/12/25/HK` — Housekeeping - Grease Trap — STD.35.N — 2025-12-15 10:00 — RECEIVED
3. `129522/03/24/ENG` — Engineering - Closet — STD.35.N — 2024-03-30 10:00 — NEW
4. `127385/03/24/ENG` — Engineering - Ceiling — STD.35.N — 2024-04-06 10:00 — (status)
5. `122162/02/24/ENG` — Engineering - Ceiling — STD.35.N — RECEIVED

## 8. PWA
- `manifest.json`: name "Facility Booking", standalone, theme #FFFFFF, icons 192/512 (generated).
- next-pwa: cache pages, JS, CSS, fonts (Inter via next/font), icons. Offline fallback = app shell (client-side data via Dexie works offline).
