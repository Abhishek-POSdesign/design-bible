# Chapter 14 — Dark Mode
> Status: ✅ Approved | July 2026

## Philosophy
Dark mode is functional, not aesthetic. Every app must deliver
identical quality in both modes. Dark mode is NOT light mode
inverted — it is a separately tuned surface system.

## Approved Token System

### Light Mode
```css
:root, [data-appearance="light"] {
  --surface-0: #f5f4f1;
  --surface-1: #ffffff;
  --border: #e2e0d8;
  --border-strong: #cbd5e1;
  --text-primary: #121110;
  --text-secondary: #4b5563;
  --text-muted: #6b7280;
  --bg-success: #e2f4e8;   --text-success: #113a24;
  --bg-danger:  #fbeceb;   --text-danger:  #7f231c;
  --bg-accent:  #e3f2fd;   --text-accent:  #0d47a1;
  --fill-accent: #1a1a1a;  --on-accent: #f5f4f1;
  --shadow: 0 10px 25px -5px rgba(0,0,0,0.04),
            inset 0 1.5px 0 0 rgba(255,255,255,0.8);
}
```

### Dark Mode
```css
[data-appearance="dark"] {
  --surface-0: #121110;
  --surface-1: #1a1917;
  --border: #2e2a26;
  --border-strong: #3e3a34;
  --text-primary: #f7f5f2;
  --text-secondary: #d1d5db;
  --text-muted: #9ca3af;
  --bg-success: #0f3118;   --text-success: #a1e3bd;
  --bg-danger:  #3f1d19;   --text-danger:  #fca5a5;
  --bg-accent:  #0a2540;   --text-accent:  #9ecaff;
  --fill-accent: #f7f5f2;  --on-accent: #111111;
  --shadow: 0 20px 35px -10px rgba(0,0,0,0.4),
            inset 0 1.5px 0 0 rgba(255,255,255,0.08);
}
@media (prefers-color-scheme: dark) {
  :root:not([data-appearance="light"]) {
    /* duplicate all dark mode values above */
  }
}
```

## The Three Rules
**Rule 1 — Surface elevation, not color.**
Depth = lightness difference. --surface-0 darkest, --surface-1 one
step lighter. Never colored surfaces for elevation in dark mode.

**Rule 2 — Semantic colors shift, they do not disappear.**
Success/Danger/Accent remain but use softer, higher-luminance versions.
Green stays clearly green — not aggressive.

**Rule 3 — Shadow becomes ambient.**
Light mode: warm-tinted rgba directional shadow.
Dark mode: high-opacity black (0.4) + faint inner glow
(inset 0 1.5px 0 rgba(255,255,255,0.08)) replaces white highlight.

## The Toggle — Three-State System
Every POS app. No exceptions.
- data-appearance="light"  → forced light
- data-appearance="dark"   → forced dark
- No attribute             → respects prefers-color-scheme

Placement: sidebar footer on desktop / header on mobile (34×34px btn)
Icons: Lucide `sun` (light mode) / `moon` (dark mode), stroke-width 1.5
Storage: in-memory variable only — no localStorage

## Component Checklist
Both modes verified before any component ships:

| Component        | Light                           | Dark                             |
|------------------|---------------------------------|----------------------------------|
| Cards            | White surface, warm shadow      | #1a1917 surface, ambient shadow  |
| Inputs           | #f5f4f1 bg, #e2e0d8 border      | #121110 bg, #2e2a26 border       |
| Focus ring       | Blue glow                       | Same — never suppress in dark    |
| Badges           | Soft semantic backgrounds       | Darkened semantic backgrounds    |
| Amount field     | #121110 text                    | #f7f5f2 text                     |
| Sidebar          | --surface-1                     | #1a1917                          |
| Dividers         | #e2e0d8                         | #2e2a26                          |
| Hero card        | Warm gold gradient              | Deep amber (already defined)     |
| Trophy cards     | Mint / gold / danger gradient   | Shift luminance down 15%         |

## Prohibited
- ❌ Pure black (#000000) as any surface — minimum #121110
- ❌ Colored card surfaces — semantic badges inside neutral cards only
- ❌ Mode toggle buried in settings — always one tap away
- ❌ CSS filter:invert() — breaks images and colored elements
- ❌ Different shadow values per-app — always use canonical token
