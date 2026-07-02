# Abhishek Sikka — Personal OS Design System

## Overview

**Brand:** [abhisheksikka.com](https://abhisheksikka.com) — Investor, Writer & Health Coach  
**Product:** Personal Operating System (POS) — a multi-module productivity ecosystem  
**Domain:** pos.abhisheksikka.com  
**Author:** Abhishek Sikka

The Personal OS is a PWA-deployed, multi-app ecosystem built on a strict "Simplicity Over Complexity" and "Function Before Beauty" design mandate. It is organized into distinct functional modules — Finance, Health, Research, and Writing — each optimized for dense data scanning and high-ROI decision-making workflows.

---

## Sources

This design system was built from:
- **Design Bible:** [`Abhishek-POSdesign/POS-Design-Bible`](https://github.com/Abhishek-POSdesign/POS-Design-Bible) (19 Markdown chapters, synced July 2026)
  - 00-Design-Principles.md through 15-Empty-States.md + 16-Overlay-System.md, 17-loading-states.md, 18-notifications.md + 99-Archive-Backfiles.md
  - Covers: philosophy & governance, typography, colors, spacing, layout, tables, cards, interactions, visualizations, iconography, buttons, grid strategy, navigation, forms & inputs, dark mode, empty states, the overlay system (drawer/modal/popover/sheets), loading & skeleton states, notifications & toasts, and archived/rejected patterns

No Figma file or external codebase was provided. Design decisions are sourced entirely from the design bible above. This is a living sync — re-pull the repo and re-run this update whenever the bible changes.

---

## Content Fundamentals

**Voice & Tone:**
- Functional, direct, and data-first. Copy exists to label and clarify — never to decorate or pad.
- No marketing language inside the app. Module names are clean nouns ("Finance", "Health", "Research").
- Uppercase labels serve as structural anchors — "TOTAL ASSETS", "HABIT STREAK", "NET WORTH".

**Casing:**
- UI labels and badge text: `UPPERCASE` with wide tracking (`letter-spacing: 0.06em`)
- Body text and data values: sentence case or numeric — never all-caps for long-form content
- Section headings (H2): Title Case, Source Serif 4 Bold

**Tone:**
- No emoji in functional interfaces — decorative emojis are banned from active lists and tracking lines
- No pun-y or clever microcopy — everything earns its place through clarity
- Numbers are primary; copy exists to provide context, not enthusiasm

**I vs. You:** The system is personal and first-person by nature (Abhishek's own OS). Labels describe *his* data — no user-facing marketing copy.

---

## Visual Foundations

**Color System:**
The design enforces a **Unified Base Canvas `#f5f4f1`** — one background surface across every app and module. The former Dual Pillar Canvas (Linen `#f7f5f2` / Concrete `#eae7df` split by module context) is retired; category-based background theming is banned (see 99-Archive §15).

Cards always surface on pure **white `#ffffff`** regardless of canvas. Text uses a three-tier ink system: `--text-primary` (#121110, near-black), `--text-secondary` (#4b5563, supporting structural text), `--text-muted` (#6b7280, timestamps/metadata floor).

**Typography — Three-Role Law:**
- **Display Domain (H1 only):** Inter Black 900, 48px, tracking -0.05em, line-height 1.05 — "thick section pen" imprint
- **Distinction Domain (H2 only):** Source Serif 4, 600–700, 20px — a premium contrast layer between title and execution reading; never used for body, tables, or numeric data
- **Execution Domain (H3, body, metrics, tables, buttons, controls):** Instrument Sans — elegant, open geometric
  - H3: 600, 14px
  - Body: 400, 15px, 1.6 line-height
- Numeric values always use `font-variant-numeric: tabular-nums` to prevent layout jitter
- Functional labels are UPPERCASE with 0.06em tracking
- Roles never blur — mixing fonts across roles is a rejected treatment

**Spacing:** Strict 9-step mathematical scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48px. No arbitrary values.

**Border Radius:** All cards, buttons, and containers: **12px**. Inner micro-elements (badges, tags): 6px.

**Shadows:**
- Floating panels (light): `0 10px 25px -5px rgba(0,0,0,0.04), inset 0 1.5px 0 0 rgba(255,255,255,0.8)`
- Floating panels (dark): `0 20px 35px -10px rgba(0,0,0,0.4), inset 0 1.5px 0 0 rgba(255,255,255,0.08)`
- Tables and data lists: zero shadow (completely flat)

**Animation & Interactions:**
- Button hover: `translateY(-3px) scale(1.015)` — tactile lift
- Button press: `translateY(-1px) scale(0.99)` — downward deflection
- Transition: `150ms cubic-bezier(0.16, 1, 0.3, 1)` — snappy, not sluggish
- Flyover panel slide: `175ms cubic-bezier(0.16, 1, 0.3, 1)` — high-velocity
- Sidebar collapse: `280ms cubic-bezier(0.25, 1, 0.5, 1)` — fluid
- Slow `300ms ease` transitions are explicitly banned

**Backgrounds & Cards:**
- No full-bleed images or gradient backgrounds
- No decorative animated backgrounds or shimmer effects (banned)
- Floating cards use the elevated shadow + white surface system
- Trophy cards (Component C) use flat matte pastels: mint `#ccebda`, gold `#fdf0cd`, lavender `#dcd6f7`

**Hover States:** Subtle background tint (`rgba(0,0,0,0.018)`) on data rows; lift transform on buttons
**Press States:** Scale down + downward deflection on buttons
**Borders:** Hairline `1px` at `#e2e0d8` — unified across all modules; `#cbd5e1` reserved for `--border-strong` emphasis (today markers, dividers) — never heavy 2px
**Blur:** `backdrop-filter` is banned for performance. Overlays use flat solid `rgba(0,0,0,0.14)` tint.
**Corner Radii:** 12px globally; 6px for badges/tags; no 20px (banned/archived)
**Card Surface:** Always opaque white `#ffffff`. Pastel full-container fills on metric cards: banned.
**Imagery:** No decorative imagery or illustrations — pure data interfaces
**Dark Mode:** Full token inversion via `[data-theme="dark"]` or `[data-appearance="dark"]` on root element — a separately tuned surface system, not an inverted light mode. Three-state toggle: light / dark / respects `prefers-color-scheme`. Pure black is banned — dark canvas floors at `#121110`.
**Forms:** One canonical input spec system-wide — 12px radius, focus ring is a `--text-accent` border + 3px `--bg-accent` glow. Amount fields use Indian digit grouping (`12,34,560`) and a static ₹ prefix, never `type="number"`. Native `<input type="date">` is retired in favor of a custom popover/bottom-sheet picker. Errors render below the field — never a toast.
**Empty States:** Every zero-item view needs a designed empty state — Lucide icon (48px, muted) + headline + one sub-line + a primary action. Never "No data found", never emoji.
**Overlays:** One overlay language system-wide (Bible Ch.16) — Popover/Dropdown, Drawer, Center Modal, Bottom Sheet, Full-Screen Sheet. Add → Drawer; edit/confirm/destructive → Modal. Drawers are 400px (default) or 480px (extended) only. Modals center at max 480px with a title and explicit close. No nested drawers, no drawer-in-modal, no blur-heavy backdrops.
**Loading:** One loading language system-wide (Bible Ch.17) — Skeleton for known layouts, Inline Spinner for local actions, Progress Bar for measurable processes, Deferred Empty Hold to prevent false-empty flashes. No full-screen spinners, mascots, or fast shimmer.
**Notifications:** One feedback language system-wide (Bible Ch.18) — Inline Validation, Inline Status, Toast (passive, max 3 stacked, top-right), Banner (persistent/section), Confirmation Modal (destructive only). Success is the quietest semantic state; no confetti, no browser `alert()`.

---

## Iconography

**System:** Lucide Icons (outline) — CDN: `https://unpkg.com/lucide@latest/dist/umd/lucide.js`  
**Stroke:** Locked at exactly **1.5px** — no other values permitted  
**Fill:** Outline rendering only — fills are banned  
**Color:** Always `color: inherit` from parent text container  
**Sizes:**
- Scale 01 — Inline logs, table rows: **16px** bounding box
- Scale 02 — Component headers, section titles: **20px** bounding box

**Pairing Law:** Icons MUST be adjacent to an explicit text label at all times — never standalone navigational icons. `gap: var(--space-sm)` (8px) between icon and text.

**Emoji:** Banned from active functional interfaces. Not used in the Personal OS.  
**Unicode chars:** Not used as icon substitutes.

---

## Components

| Component | Directory | Description |
|---|---|---|
| Button | `components/core/` | Primary / muted / outline — 3 variants, 3 sizes |
| Badge | `components/core/` | Solid-state status indicator — 8 calibrated variants |
| Tag | `components/core/` | Categorization label with optional dismiss |
| Avatar | `components/core/` | User identity mark with sync status micro-dot |
| Input | `components/core/` | Text field with label, prefix/suffix, validation |
| MetricCard | `components/data/` | Component A: Elevated KPI display |
| TrophyCard | `components/data/` | Component C: Goal achievement card (mint/gold/lavender) |
| DataRow | `components/data/` | Component B: Flat utility row for logs and arrays |
| DonutChart | `components/data/` | SVG stroke-based categorical ring visualization |
| Sidebar | `components/navigation/` | Collapsible left nav rail (240px / 72px), 4 fixed zones |
| FlyoverPanel | `components/navigation/` | The POS Drawer — right-dock add/create overlay, 400px/480px widths only |
| Modal | `components/overlay/` | Center decision surface — edit, review, confirm, destructive (max 480px) |
| Popover / PopoverItem | `components/overlay/` | Anchored dropdown — row actions, sort, filters, date trigger |
| BottomSheet | `components/overlay/` | Mobile short-flow overlay — date select, quick filters |
| EmptyState | `components/feedback/` | Icon + message + primary action for zero-item views |
| Skeleton / SkeletonGroup | `components/feedback/` | Structural loading placeholder mirroring final layout geometry |
| Spinner | `components/feedback/` | Small localized activity indicator — button/row-level only |
| ProgressBar | `components/feedback/` | Measurable process bar — import/export/sync, determinate or indeterminate |
| Toast / ToastStack | `components/feedback/` | Passive top-right confirmation, max 3 stacked |
| Banner | `components/feedback/` | Section-level warning or persistent context alert |

---

## UI Kits

- **Personal OS Dashboard** — `ui_kits/personal-os/index.html`  
  Full Finance module view: sidebar, metric card grid, donut chart, transaction log, trophy cards, flyover panel. Interactive dark mode and sidebar collapse.

---

## Guidelines Cards

Located in `guidelines/` — loaded in the Design System tab:
- Canvas & surfaces, semantic states, trophy palette
- Display typography, type hierarchy (incl. the H2 serif Distinction Domain), label system
- Spacing scale (9 steps), shadows & radius
- Forms & inputs — canonical spec, amount field, custom date trigger
- Governance — the three Bible stability tiers and the reference standard (Ch.00)

## Overlay, Loading & Notification Systems (Bible Ch.16–18)

Three governed systems, one behavioral language across every module:

- **Overlays:** five approved types only — Popover/Dropdown, Drawer (`FlyoverPanel`), Center Modal (`Modal`), Bottom Sheet (`BottomSheet`, mobile), Full-Screen Sheet (mobile — a full-viewport `Modal`). Canonical rule: Add → Drawer, Edit/confirm/destructive → Modal. Only two drawer widths exist: 400px default, 480px extended.
- **Loading:** four approved types only — Skeleton (known layout), Inline Spinner (local action), Progress Bar (measurable process), Deferred Empty Hold (uncertain first load — a pattern, not a component). No full-screen spinners or mascots.
- **Notifications:** five approved types only — Inline Validation (`Input`'s `error` prop), Inline Status (plain text near the surface), Toast (passive), Banner (persistent/broader context), Confirmation Modal (`Modal` with `tone="danger"`). Validation never lives only in a toast; destructive actions never confirm via toast.

---

## Banned Patterns (Archived)

See the design bible's `99-Archive-Backfiles.md` for the full rejection list. Key banned items:
- Outfit font family
- 20px corner radius
- Animated CSS shimmer / gradient drift loops
- Zebra-striped table rows
- `backdrop-filter` on overlays
- Full pastel backgrounds on metric cards
- Persistent top-status sync banners
- `300ms ease` transition curves
- Heavy `2px` structural borders
- Horizontal sidebar carousel on tablet breakpoints
- **Dual Pillar Canvas** — the Linen/Concrete category-based background split (retired in favor of the Unified Base Canvas)
- Native `<input type="date">` and Western number formatting on amount fields
- "No data found" copy or emoji visuals in empty states
- Nested drawers, stacked modals, drawer-in-modal, or modal-in-drawer
- Random per-app overlay/drawer sizing outside the two approved drawer widths
- Full-screen blocking spinners, mascot loaders, bouncing dots, fake progress percentages
- Validation shown only in a toast, browser `alert()` dialogs, success confetti, toast used for destructive confirmation
