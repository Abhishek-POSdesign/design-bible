# 11. Grid & Composition System

## 1. Grid Philosophy
The grid strategy inside the POS ecosystem exists to establish absolute order, mathematical rhythm, visual alignment, and rapid data scanning speed. Every interface card, table container, and visualization block must anchor to this grid to eliminate layout distraction.

---

## 2. Primary Grid System
Our primary dashboard layouts use a fixed application shell structure:
- **Sidebar Integration**: The left navigation rail occupies a static horizontal block (`240px` when expanded, `76px` when collapsed).
- **Main Content Grid**: The remaining viewport width is mapped as a modular grid layout utilizing CSS Grid.
- **Module Alignment**: Content containers must fit within clean row tracks and column lines. Gutters and card margins are calculated using native spacing tokens to maintain alignment discipline.

---

## 3. Column Logic
Containers inside the CSS Grid map horizontally across standard column spans to enforce visual hierarchy:
- **Full-Width Columns (`12` cols span)**: Reserved for dense spreadsheet tables, main calendar viewports, and primary timeline logs.
- **Half-Width Columns (`6` cols span)**: Used for side-by-side comparative views, primary charts, or master input forms.
- **Third-Width Columns (`4` cols span)**: The default geometry for standard metric cards, task lists, and summary plates.
- **Mixed Column Spans**: Custom column spans (e.g. an `8` col main block paired with a `4` col sidebar block) are permitted only when functional content hierarchy explicitly justifies the asymmetry.

---

## 4. Gutter & Gap Rules
Grid gutters must bind directly to the approved mathematical spacing scale (Chapter 03):
- **Standard Grid Gaps**: Grid columns and rows default to a gutter of `--space-6` (24px).
- **Dense Grid Gaps**: Data-heavy, compact list views and spreadsheet layouts compress gutters to `--space-4` (16px) or `--space-3` (12px).
- **Section Gaps**: Major page separations and distinct section margins expand gutters to `--space-7` (32px).

---

## 5. Modular Dashboard Rules
Metric cards, visualizations, tables, and side overlays must coexist inside a single dashboard layout without creating visual chaos:
- **Unified Row Heights**: Adjacent cards in the same row track should default to uniform heights to prevent disjointed layout blocks.
- **Visual Weight Distribution**: Heavy visual elements (such as charts or tables) must anchor the bottom or left regions of the grid, while lighter metric cards sit on top.
- **Nested Card Restraint**: Placing cards inside other cards is strictly prohibited. Use flat borders (`1px solid var(--border-hairline)`) to isolate nested modules.

---

## 6. Alignment Discipline
- **Shared Top Edges**: Cards positioned side-by-side in the same grid row must share a mathematically aligned top edge.
- **Baseline Discipline**: Text labels, icons, and status badges within adjacent columns must align to a shared horizontal baseline.
- **No Random Offsets**: Random pixel margins, asymmetrical layouts, or decorative offsets are prohibited.
- **Alignment Priority**: Visual elements must feel engineered and grid-aligned, never casually stacked.

---

## 7. Responsive Collapse Strategy
When screen viewports degrade from desktop to tablet and mobile, the grid must collapse predictably to protect readability:
- **Preserve Hierarchy**: Multi-column cards must stack vertically following their read order (top-to-bottom, left-to-right).
- **No Random Stacking**: Modules must not jump ordering sequences during collapse.
- **Minimum Width Guard**: Columns must never squeeze cards below `320px` width. If a card is squeezed below this threshold, it must instantly collapse into a full-width single-column row block.

---

## 8. Rejected Treatments
The following grid treatments are banned across the POS layout system:
* Pinterest-style masonry configurations where vertical card heights fluctuate unevenly in the same column.
* Decorative masonry or visual staggered offsets for functional dashboards.
* Inconsistent card widths or columns placed without structural hierarchy reasoning.
* Broken gutters or mismatched gap values in the same grid viewport.
* Random empty holes, unused white spaces, or offset blocks in the grid.
* Visual layout asymmetry implemented without strict content priority rules.

---

## 9. System Intent
The grid system must make the interface feel engineered, trustworthy, clean, and extremely easy to scan. By aligning every visual component to a predictable grid rhythm, we ensure the application remains stable and highly operational.
