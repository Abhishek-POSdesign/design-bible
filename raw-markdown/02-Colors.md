# 02. Color System & Themes

## 1. Unified Base Canvas
We enforce a single, unified base canvas identity for all applications across the POS ecosystem:
* **Unified Base Canvas**: `#f5f4f1`
* This creates a warm, calm, minimal aesthetic foundation. No application-level canvas variation is permitted. Every app and module must inherit the same unified base canvas `#f5f4f1`. Category-based background theming is banned.

---

## 2. Shared Canvas Geometry Colors
* **Card Surface**: `#ffffff` (Opaque white)
* **Hairline Borders**: `#e2e0d8` (Unified warm hairline border to isolate components cleanly)

---

## 3. Calibrated Accessible State Palette (Flat States)
We strictly utilize accessible, solid state badges. Dull pastels or low-contrast text strings are banned.

### Success Badges
* **Light Mode**: Background `#e2f4e8` | Text `#1b5232`
* **Dark Mode**: Background `#1b3822` | Text `#a3e635`

### Alert/Error Badges
* **Light Mode**: Background `#fbeceb` | Text `#7f231c`
* **Dark Mode**: Background `#3f1d19` | Text `#fca5a5`

---

## Section 2.4: Active State Theme Shifting (The Localized Jewel Shift)

### 2.4.1 Core Structural Governance
- Card Surface Neutrality: Standard active cards, metric nodes, and dashboard priority plates must NEVER change their overall surface background color when toggling states. They remain permanently locked to core system neutrals to maintain layout cohesion.
- The Localized Shift Law: State tracking and high-priority visual signaling must occur strictly within localized component wrappers (e.g., status badges, pill pills, micro-borders).

### 2.4.2 Calibrated State Token Variables
Enforce these strict, low-intensity utility tokens to completely eliminate text vibration and neon glare across canvas state flips:

- Active Green State:
  * Light Mode Canvas: Badge Fill `#e2f4e8` | Text/Icon Ink `#113a24`
  * Dark Mode Canvas: Badge Fill `#0f3118` | Text/Icon Ink `#a1e3bd`

- Active Blue State:
  * Light Mode Canvas: Badge Fill `#e3f2fd` | Text/Icon Ink `#0d47a1`
  * Dark Mode Canvas: Badge Fill `#0a2540` | Text/Icon Ink `#9ecaff`
