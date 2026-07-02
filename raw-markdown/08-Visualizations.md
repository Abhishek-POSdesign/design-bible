# 08. Visualizations

## 1. Visualization Philosophy
Data visualization in the POS ecosystem must be clear, quiet, compact, premium, and analytical. Charts exist strictly to support high-priority user decisions and track historical trends. They must never function as decorative page filler or low-value dashboard graphics.

---

## 2. Color Restraint Rule
To prevent visual fatigue, charts must conform strictly to the global color system limits:
- **Neutral Structure First**: Default grids, axis indicators, tick marks, and background tracks must utilize quiet structural neutrals (`--border-hairline`, `--bg-subtle`).
- **Semantic Accents Second**: Colors are reserved exclusively for active data series or state mapping.
- **Sparse Distribution**: We explicitly ban rainbow palettes, neon analytic fills, and gradient-heavy chart sweeps. Fills must use flat, solid matte tokens mapped to the system.

---

## 3. Approved Chart Types
Only the following structured chart formats are approved for use inside the ecosystem. Visual formats outside these specifications are prohibited:
- **Line Charts**: Used for tracking single-series numeric metrics over time. Plots must use fine lines (`1.5px` or `2px` stroke-width) with small, sharp node indicators.
- **Bar Charts**: Used for categorical comparison. Bars must use flat matte fills, standard spacing gaps, and sharp layout corners matching standard grid rhythm.
- **Area Charts**: Reserved for cumulative values. Area fills must use solid low-opacity tints (max 10% opacity) of the semantic color.
- **Donut / Ring Charts**: Used for goals or category totals. Rings are locked to a vector-drawn SVG structure with a tight `12px` stroke width and transparent center masks.
- **Progress Bars**: Flat progress markers with a `6px` vertical height and flat tracks.
- **Sparklines**: Ultra-compact, axis-free line graphs embedded directly inside tables or inline logs to show micro-trends without layout disruption.
- **Comparison Metric Blocks**: High-impact text blocks displaying primary totals paired with small trend indicators.

*Rare/Avoided*: Multi-series stacked bar charts or multi-line comparative overlays are avoided to prevent layout confusion.

---

## 4. Axis & Label Rules
- **Typography Behavior**: Axis labels and category texts must strictly utilize execution typography (`Instrument Sans`) at small sizes (`11px` to `12px`).
- **Muted Color**: All labels must use muted slate-gray (`--text-muted`) to recede behind the primary data series.
- **Gridline Restraint**: Horizontal and vertical gridlines must be kept to a minimum, using fine dashed borders (`1px dashed var(--border-hairline)`).
- **Axis Density Control**: Major axis ticks must be spaced generously to prevent label overlapping under fluid screen resizing.
- **Abbreviation Logic**: Large values must truncate cleanly using standard engineering prefixes (e.g. `10k`, `1.2M`) to keep the axis clean.

---

## 5. Data Ink Rule
Charts must maximize the ratio of active data ink to non-functional styling:
- Fills, vectors, and nodes must represent actual database values.
- We strictly ban heavy border boxes around charts, glowing shadow indicators behind trend lines, decorative drop shadows, and ornamental grid lines.

---

## 6. Semantic Highlighting
Color must be deployed systematically to call out critical shifts:
- **Growth (Positive)**: Mapped to the flat green success indicator badge fill and text.
- **Decline (Negative)**: Mapped to the flat red warning error indicator badge fill and text.
- **Warning (Attention)**: Mapped to a quiet amber indicator.
- **Target Progress**: Highlights the active series while keeping completed series in muted gray.
- **Selected Series**: Focused chart lines may use a slightly heavier stroke (`2px` vs `1.5px`) while background tracks fade dynamically to `30%` opacity.

---

## 7. Empty / Sparse / Loading Data States
Visualizations must handle database loading delays and missing series gracefully:
- **Loading State**: Render a clean skeleton chart wireframe matching the dimensions of the final layout.
- **Empty State**: Show a flat background track grid with a centered, quiet text label (e.g. "No records logged for this period").
- **Sparse Data**: When only one or two data points exist, render isolated plot nodes rather than connecting them with arbitrary diagonal lines that imply false trends.

---

## 8. Dashboard Embedding Rules
- **Padding**: Charts must sit inside standard Class A or Class B cards, inheriting a minimum `--space-5` (20px) inner padding to isolate the chart from card border edges.
- **Titles**: Embedded charts must be preceded by a clear, uppercase H3 section title outlining the metric context.
- **Supporting Metrics**: Primary totals and percentages must sit above the chart canvas rather than overlaying the data lines.
- **Card-to-Chart Hierarchy**: Visualizations must remain subservient to the surrounding dashboard grid. No single chart should become so visually heavy that it overpowers the reading hierarchy of adjacent text tables.

---

## 9. Rejected Treatments
The following chart treatments are banned across the system:
* Rainbow color configurations or multi-colored categorical series.
* Glossy, multi-stop chart gradients that clash with the flat base canvas.
* 3D charts, simulated volume columns, or isometric visual perspectives.
* Decorative drop shadows or glow effects behind trend lines.
* Chartjunk (including background patterns, grid illustrations, and decorative symbols).
* Overloaded legends containing more than three series.
* Rendering too many lines or bars inside a single card viewport.
* Using color changes alone to convey data without supporting tooltips, labels, or shape differences.

---

## 10. System Intent
Charts must feel calm, intelligent, and operational. They are designed to let the user track goals, monitor trends, and verify records with zero friction. Every line, ring, and sparkline exists to make data readable and actionable.
