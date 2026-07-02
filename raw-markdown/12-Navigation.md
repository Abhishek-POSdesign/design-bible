# 16. Navigation System

## 1. Navigation Philosophy
The navigation system is the permanent skeleton of the POS ecosystem.
It is the one element the user sees in every session, every app, every
day. It must be invisible when idle and immediately legible when needed.

The sidebar is not a feature. It is infrastructure.
It must never compete with the content it hosts.

---

## 2. The POS App Ecosystem
The navigation system must accommodate the current and future POS module set:

**Current Apps:**
- POS Finance (primary — most mature)
- POS Task Manager
- POS Biz Research Hub
- POS Finance (Wife View — separate user profile, same app)

**Future Modules (3-month consolidation target):**
- Unified Dashboard (home layer across all modules)
- AI Layer (embedded assistant, not a separate app)
- Additional lifestyle modules (health, habits, calendar)

The navigation must be designed to scale from 4 modules to 10+
without requiring a structural rebuild.

---

## 3. Sidebar Anatomy

The left navigation rail is divided into four permanent zones,
stacked top to bottom:

No zone may be eliminated. No zone may be reordered.
This is the permanent structural law of the POS sidebar.

---

## 4. Sidebar Dimensions

### Expanded State
- **Width**: `240px` — fixed, never fluid
- **Background**: inherits `--color-bg` (`#f5f4f1`) — same as page canvas
- **Right Border**: `1px solid var(--border-hairline)` — separates rail from content
- **No shadow**: the sidebar is flush infrastructure, not a floating panel

### Collapsed State
- **Width**: `72px` — icons only, no labels
- **Same border rule** applies
- **Collapse trigger**: a toggle icon inside Zone 1 or Zone 3
- **Transition**: `175ms cubic-bezier(0.16, 1, 0.3, 1)` — matches drawer timing
  from Chapter 07

### Mobile State (below 768px)
- Sidebar fully hides off-screen (`transform: translateX(-240px)`)
- Replaced by a bottom tab bar for primary navigation (max 5 items)
- A hamburger/menu icon in the top toolbar reveals the full sidebar
  as a temporary overlay drawer, not a permanent fixture

---

## 5. Zone 1 — Brand

- **Expanded**: POS wordmark, left-aligned, `16px` left padding
- **Collapsed**: POS monogram or icon mark, centered
- **Height**: exactly `48px` — matches top toolbar height for horizontal
  alignment across the shell
- **No decorative backgrounds**, no gradients, no colored bars
- The collapse/expand toggle lives here as a trailing icon (right side)

---

## 6. Zone 2 — Primary Navigation Items

### Item Anatomy (Expanded)

- **Icon**: 20px, outline-first, `--text-muted` color at rest
- **Label**: `Instrument Sans`, weight `500`, size `14px`, `--text-primary`
- **Badge**: numeric count badge — only when the module has unread or
  pending items. Right-aligned. Flat, no glow.
- **Item height**: `40px`
- **Horizontal padding**: `12px` left and right
- **Item border-radius**: `8px` — applied to the hover/active background,
  not the full-width row

### Item Anatomy (Collapsed)
- Icon only, `20px`, centered in `72px` rail
- Tooltip appears on hover showing the label — positioned right of rail,
  `8px` gap, dark background, `Instrument Sans` `12px`

### Rest State
- Background: transparent
- Icon color: `--text-muted`
- Label color: `--text-primary`

### Hover State
- Background: `var(--color-surface)` — one step above canvas
- Icon color: `--text-primary`
- Transition: `150ms cubic-bezier(0.16, 1, 0.3, 1)`

### Active / Current App State
- Background: `#ffffff` (white card surface — same as card token)
- Icon color: `--text-primary` (full ink weight)
- Label color: `--text-primary`, weight `600`
- Left accent: `2px solid var(--text-primary)` on the left edge of the
  item background — the only structural use of a side border in the system,
  because it marks physical location, not status
- No glow, no shadow, no color fill on the active item

### Grouping
- If modules exceed 5, group them under silent uppercase labels:
  `WORKSPACE`, `PERSONAL`, `TOOLS`
- Group labels: `Instrument Sans`, uppercase, `11px`, `--text-muted`,
  `letter-spacing: 0.06em`
- Group label top margin: `--space-6` (24px)
- No icons on group labels

---

## 7. Zone 3 — Utility Navigation

Reserved for system-level controls only:
- Settings
- Help / Documentation
- Feedback (during product development phase)

**Maximum 3 items.** If more are needed, consolidate into a Settings page.

Same item anatomy as Zone 2. Same hover and active rules.
Visually separated from Zone 2 by a hairline divider:
`border-top: 1px solid var(--border-hairline); margin: --space-2 0;`

---

## 8. Zone 4 — User Profile

Always pinned to the bottom of the sidebar.

### Expanded State

- **Avatar**: 28px circle, initials-based or photo, no border
- **Name**: current user's name — for multi-user apps (Finance has
  personal + wife view), this zone must reflect the active profile
- **Role/View label**: e.g. "Personal View" or "Family View" in muted text
- **Clickable**: tapping the profile zone opens a context menu for:
  switching user profiles, dark mode toggle, sign out
- **Height**: `56px` minimum
- **Bottom padding**: `--space-4` (16px) from viewport bottom edge

### Collapsed State
- Avatar only, `28px`, centered
- Tooltip on hover: user name

---

## 9. Multi-User Profile Rule

The Finance app currently serves two user profiles (personal + wife view)
[POS-Finance-App]. This pattern must be formalized:

- The active profile is always visible in Zone 4
- Profile switching happens via a context menu from Zone 4, never
  via a separate page navigation
- The sidebar itself does not change structure between profiles —
  only Zone 4 label and avatar update
- No profile-specific color theming is permitted — the canvas remains
  `#f5f4f1` for all profiles

---

## 10. Dark Mode Behavior

- Sidebar background: `--color-bg` in dark mode (`#171614`)
- Right border: `--border-hairline` dark value
- Active item background: `--color-surface` in dark mode (`#1c1b19`)
- All other rules identical — no separate dark mode sidebar logic

---

## 11. Notification Badges

Badge rules for sidebar items:
- **Shape**: pill (`border-radius: --radius-full`)
- **Size**: min `18px` height, `--space-3` horizontal padding
- **Typography**: `Instrument Sans`, `11px`, weight `600`, tabular-nums
- **Color**: flat, accessible — use notification state tokens from Chapter 02
- **Max display**: `99+` — never show raw numbers above 99
- **Position**: right-aligned inside the item row, `12px` from right edge
- **Collapsed state**: badge appears as a small `8px` dot above the icon,
  no number visible

---

## 12. Scroll Behavior

- Zone 1, Zone 3, Zone 4 are always sticky — they never scroll
- Zone 2 scrolls independently if modules exceed available height
- Scrollbar inside Zone 2: hidden by default, appears on hover
  (`scrollbar-width: thin; scrollbar-color: var(--border-hairline) transparent`)
- No scroll shadow or gradient fade overlays inside the sidebar

---

## 13. Rejected Treatments

The following navigation patterns are banned across the POS ecosystem:

* Top horizontal navigation bars as the primary navigation layer
* Colored sidebar backgrounds (app-specific themes, dark accents per module)
* Full-width active item highlights that bleed edge-to-edge
* Animated logo or brand mark in Zone 1
* More than one active item state simultaneously
* Bottom tab bars on desktop (mobile only)
* Floating, detached sidebar panels not anchored to the left edge
* Navigation items without icons in expanded state
* Navigation items without tooltips in collapsed state
* Profile zone placed anywhere other than the bottom of the rail

---

## 14. System Intent

The navigation system must feel like a fixed, trusted anchor —
present in every session, adding zero cognitive load, and
requiring zero re-learning across all POS modules.

The user must always know where they are, where they can go,
and who they are logged in as — without thinking about it.
