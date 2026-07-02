# 04. Layout & Physical Depth

## 1. Layout Architecture Law
The POS ecosystem leverages a highly structured, stable application shell to host utility modules. Standard page grids must follow a predictable, multi-zone structural blueprint:
- **Navigation Sidebar (Left Rail)**: Locked vertically edge-to-edge (`height: 100vh;`). Serves as the global routing anchor.
- **Top Toolbar / Header Zone**: Hosts contextual module labels, primary filter switches, and state status tags.
- **Primary Content Region**: The central grid where active data sheets, forms, or visualizations reside.
- **Secondary Panel (Optional Flyover)**: Summoned exclusively on demand for localized context (e.g., detail logs) using the absolute right-dock parameters.

Every app and page must feel engineered, not floating on the page glass.

---

## 2. Page Width Hierarchy
To maintain scanning speed across screen formats, layouts are constrained to one of three conceptual page widths:
- **Narrow Reading Width (`640px` to `800px`)**: Used for text-heavy feeds, documentation, settings panels, or single-form workflows to prevent eye fatigue.
- **Standard Dashboard Width (`1200px` to `1400px`)**: The default scale for multi-card dashboards, progress wheels, task calendars, and standard grids.
- **Full Data Width (Fluid up to `1600px` max)**: Reserved exclusively for dense spreadsheet databases, tables, and complex analytic viewports requiring maximum horizontal room.

---

## 3. Column Strategy
Visual layouts organize information cleanly based on content density:
- **Single-Column Layouts**: Default configuration for simple journals, linear checklist feeds, and onboarding sequences.
- **Split Layouts (Two-Column)**: Standard structure for Master-Detail modules (e.g. navigation list on the left, detail content on the right).
- **Modular Dashboard Grids**: Flexible grids (CSS Grid) mapping multi-metric cards and charts. Column blocks must follow functional content priority, never decorative spacing.

---

## 4. Section Rhythm
Vertical spacing between core page blocks is strictly governed using spacing tokens to enforce consistent eye-tracking:
- **Page Header to Body**: Locked to `--space-6` (24px) to separate navigation context from operational inputs.
- **Dashboard Blocks**: Consecutive dashboard modules or block grids are separated by `--space-6` (24px).
- **Grouped Modules**: Inner cards or sub-group elements are separated by `--space-4` (16px).
- **Utility Rows**: Tabular text lists or secondary inputs stack vertically with a gap of `--space-2` (8px).

---

## 5. Card Grouping Law
Cards must be clustered systemically to indicate functional relationships:
- **Related Cards**: Placed in tight proximity within a shared container border using a gap of `--space-3` (12px) or `--space-4` (16px).
- **Unrelated Groups**: Separated by larger gaps of at least `--space-6` (24px) or distinct section dividers.
- **Surface Restriction**: To prevent visual fatigue, not every content snippet should become an isolated, floating card. Group related items within a single Class A container using flat border separators instead of stacking multiple individual cards.

---

## 6. Scroll & Sticky Behavior
Rhythm and navigation locks must remain predictable under scroll:
- **One Primary Vertical Scroll**: Pages must default to a single vertical scroll viewport (`overflow-y: auto`) on the right content region.
- **Sticky Headers**: Pinned top headers are permitted only when keeping global control panels (like search filters) in view directly improves data scanning efficiency.
- **Sticky Side Panels**: Left navigation rails and flyovers remain frozen against the screen glass. 
- **Restraint**: Avoid multi-scroll viewport intersections or over-sticky interfaces that hijack normal browser scrolling.

---

## 7. Elevation & Border Restraint
The system prioritizes clean structural borders over excessive drop shadows:
- **Borders over Shadows**: Thin hairline borders (`1px solid var(--border-hairline)`) are preferred for isolating card surfaces and grids.
- **Restrained Shadows**: Shadows are restricted to Class B (Accent) and Class C (Trophy) cards to preserve depth hierarchy. Class A (Neutral) cards remain completely flat.
- **12px Radius Standard**: All content containers, cards, and interactive blocks must strictly conform to the global `border-radius: 12px` geometry to maintain layout cohesion.

---

## 8. Rejected Treatments
The following layout treatments are banned across the system:
* "Cards Everywhere" layouts that wrap every minor text label in an individual card container.
* Floaty dashboard islands that float detached from the app shell boundaries.
* Over-layered, nested shadow stacks that create a muddy, heavy interface look.
* Decorative layout asymmetry that misaligns data baselines.
* Fragmented, nested scroll regions that conflict with the primary vertical scroll flow.
* Oversized empty hero banners or unnecessary decorative margins inside utility modules.

---

## 9. System Intent
Layout exists strictly to help the user scan, prioritize, and act with minimum cognitive load. Every structural box, width boundary, and column boundary must serve an operational purpose.
