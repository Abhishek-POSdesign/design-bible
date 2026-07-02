# Historical Backfiles Appendix: Phase 2 Chrome Toggle Engine

This archive securely isolates old, rejected, or obsolete styling mechanics from previous iterations of the design system. These elements are kept solely for historical context and side-by-side comparative validation. 

**DO NOT USE THESE PARAMETERS IN ACTIVE CODE REPOSITORIES.**

---

### 1. Rejected Typography
* The entire **Outfit** font family metric tree and any associated CSS variable properties (e.g., `--font-heading: 'Outfit'`) have been wiped from production and isolated here.

### 2. Rejected Container Geometries
* The bulky **`20px` corner radius** card wrappers (previously enforced globally).

### 3. Rejected Table Padding
* The loose **`12px` table item cell padding** tracks (previously `padding: 12px 20px;`).

### 4. Rejected Aesthetic Shimmer Mechanics
* All old animated CSS gradient drifts.
* The 7-second infinite background shiny grift swipe loops (`animation: shineSwipe 7s infinite`).

### 5. Component B Flyover Variant - Loose Draft Spec
* The sluggish **`0.3s` ease curve** transition cycles.
* The heavy **`2px` layout borders** for structural module edges.

### 6. Chapter 09 Variant - Full Bleed Background Overrides

```css
/* Light Mode (Base) Saturated Luxury Pastel Tokens */
:root {
  --pastel-green: #c8e6c9;
  --pastel-green-text: #1b5e20;
  
  --pastel-blue: #bbdefb;
  --pastel-blue-text: #0d47a1;
  
  --pastel-purple: #e1bee7;
  --pastel-purple-text: #4a148c;
}

/* Dark Mode Jewel Shift Overrides */
[data-theme="dark"] {
  --jewel-green: #1b5e20;
  --jewel-blue: #0d47a1;
  --jewel-purple: #4a148c;
}

/* Component Implementation */
.luxury-pastel-node-a {
  background-color: var(--pastel-green);
  color: var(--pastel-green-text);
}

[data-theme="dark"] .luxury-pastel-node-a {
  background-color: var(--jewel-green);
  color: #ffffff; /* Crisp off-white typography */
}
```

### 7. Chapter 10 Variant - Fixed Conic Background Masks

```css
.progress-ring {
  background: conic-gradient(
    var(--c-green) 0%, 
    var(--c-green) var(--progPct), 
    var(--border-hairline) var(--progPct), 
    var(--border-hairline) 100%
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.progress-ring-inner {
  /* Creates the "donut" hole */
  background-color: var(--bg-card);
  border-radius: 50%;
}
```

### 8. Chapter 11 Variant - Variable Icon Stroke and Floating Sizes
* The legacy floating **`1.5px` to `2px` stroke thickness** range for outline icons.
* Floating standalone icons without explicit, immediately adjacent text labels.

### 9. Chapter 12 Variant - Sharp 8px Buttons and Legacy Static Grays
* The legacy **`8px` border-radius** layout boundary shapes for buttons.
* Static hex overrides and custom button colors (`#4a4740`, `#ede9e3`, `#3d3a33`) mapped directly instead of context-aware canvas variables.
* The legacy `transform: translateY(-2px) scale(1.02);` hover scaling behavior.

### 10. Chapter 13 Variant - Floating Sticky sidecards and Mobile Carousels
* The legacy sticky-left sidebar configuration (`position: sticky; top: 16px;`) that does not stretch the full height of the viewport.
* The responsive sidebar layout collapse strategy under `960px` that transforms the sidebar into a full-width horizontal top carousel pinnable above main content.
* Bounded desktop maximum width at `1600px`.

### 11. Chapter 14 Variant - Unconstrained Manual Calendar Grids
* Hardcoded calendar day cell divider lines (`#3d3a33` in dark mode, `#e6e4dd` in light mode).
* Hardcoded grey parameters for off-month days (`#5a5750` in dark mode, `#8a8580` in light mode).
* Lack of aspect-ratio locks or css grid alignment controls.

### 12. Chapter 15 Variant - Full Table Overwrite and Interval Polling
* The legacy "Wipe and Rewrite" sync strategy (performing full delete-then-insert cycles of tables on local change).
* 30-second interval polling of the cloud database.
* Persistent warning banners/amber dots indicating sync state.

### 13. Chapter 16 Variant - Transparent Outline PWAs and Manual Caches
* Transparent outline vector design for manifest icons.
* Single global cache structure and manually maintained asset file list arrays.
* Static deployment paths without scoped domain partitions.

### 14. Chapter 17 Variant - Infinite LocalStorage Snapshot Arrays
* The legacy `localStorage` based auto-backup system for timestamped JSON snapshots.
* Obfuscation and security based solely on an anonymous client-side key rather than Supabase Auth.
* Manual Google Drive file snapshot sync layer backup operations.

### 15. Chapter 02 Variant - Dual-Pillar Canvas Split
* The separate app-level canvas identities: Linen Paper Canvas (`#f7f5f2`) for Business/Finance utilities, and Concrete Matrix Canvas (`#eae7df`) for Personal/Health utilities.
* The matching varying hairline borders: `#e2e0d8` for Linen, and `#cbd5e1` for Concrete.

