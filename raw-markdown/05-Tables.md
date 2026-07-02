# 05. Tables & List Systems

## 1. Table Hierarchy Law
Tables serve as core operational surfaces in the POS ecosystem. Their structure must prioritize extreme scanning speed, visual comparison, and user confidence when parsing dense records.

---

## 2. Surface & Density Rules
- **Flat Profile**: Standard tables must remain visually flat or near-flat. 
- **No Shadow Stacks**: Background row frames or individual cells are strictly prohibited from using decorative shadow stacks.
- **Rhythm Density**: The visual layout operates across two default density modes depending on database complexity:
  - *Standard Mode*: Mapped for daily checklist entries and default logs.
  - *Compact Mode*: Mapped for intensive financial sheets and audit matrices.

---

## 3. Row Height & Cell Padding
To guarantee spatial alignment, row dimensions and inner cell paddings are locked to the following bounds:
- **Compact Rows**: Height must span strictly between `36px` and `40px` (`height: 36px` to `40px`).
- **Standard Rows**: Height must span strictly between `44px` and `48px` (`height: 44px` to `48px`).
- **Cell Horizontal Padding**: Locked to exactly `16px` (`padding-left: 16px; padding-right: 16px;`). Tighter horizontal padding is permitted only in highly data-dense contexts.

---

## 4. Header Rules
Table header blocks define the structural boundaries of the data columns:
- **Visual Separation**: Headers must remain clearly distinct from body rows using transparent backgrounds with fine horizontal separator lines (`border-bottom: 1px solid var(--border-hairline)`).
- **Header Typography**: Header labels must utilize the execution typography system (`Instrument Sans`), set in uppercase with tracking enabled.
- **Sorting Indicators**: Sorting arrows or labels must remain quiet and precise, inheriting the `--text-muted` variables.
- **Sticky Headers**: Sticky layout headers (`position: sticky; top: 0;`) must be configured on long tables to maintain column labeling during scrolling.

---

## 5. Alignment Rules
Rhythm and balance across data types require strict alignment constraints:
- **Text Columns**: Left-align (`text-align: left;`) by default to match reading flows.
- **Numeric Columns**: Right-align (`text-align: right;`) to allow direct vertical comparison.
- **Status Cells**: Must remain compact and utilize centered badge alignments.
- **Numeric Font Rule**: Tabular numbers (`font-variant-numeric: tabular-nums`) are mandatory for financial values, timestamps, and metric strings to prevent layout shift. Serif faces are banned inside all cell text.

---

## 6. Row Interaction States
Interactions on table row frames must feel snappy and restrained:
- **Hover State**: Light background change to a soft gray neutral tint (`background-color: var(--bg-hover);`). 
- **Selected Row State**: Mapped to a distinct neutral tint with an active checkbox indicator.
- **Active Row State**: Soft background shift without full-bleed primary color highlights.
- **Keyboard Focus**: Focus states must expose a clean, system-native outline around the targeted row. Loud, vibrant fills or flashing row frames are prohibited.

---

## 7. Cell Content Rules
Content within data cells must degrade predictably when constraints are met:
- **Truncation**: Excessive text strings must truncate cleanly using `text-overflow: ellipsis; white-space: nowrap; overflow: hidden;`.
- **Badges**: Status or priority badges inside cell containers must be compact and utilize the flat, accessible badge palette.
- **Inline Icons**: Must anchor to adjacent text strings using `gap: var(--space-2);` (8px).
- **Secondary Metadata**: Supporting descriptions must sit below primary strings in muted gray (`--text-muted`) at a smaller font size (`13px`).
- **Actions at Row End**: Interactive row-control buttons must cluster at the far right edge of the row, hidden or muted until hover focus is triggered.

---

## 8. Bulk Actions & Selection
Bulk database operations must integrate cleanly without taking over the dashboard view:
- **Checkbox Anchor**: Standard tables support bulk selection using a left-docked checkbox column.
- **Floating Command Bar**: Triggering selection checkboxes summons a floating contextual command bar pinned near the bottom of the viewport to host bulk operations.
- **No Header Clutter**: Bulk action triggers must never clutter the primary table header rail.

---

## 9. Empty / Loading / Error States
Tables must maintain structural layout integrity during server delays or query failures:
- **Loading State**: Utilize flat skeleton loading rows that mimic the height and spacing parameters of standard data cells. Spinning graphic indicators are prohibited.
- **Empty State**: Surface a clean, centered graphic illustration, a concise message, and a primary call-to-action button aligned inside the table container limits.
- **Error State**: Display a quiet error layout with high-contrast text strings detailing the connection failure and a distinct "Retry" action button.

---

## 10. Mobile Fallback Strategy
Wide tabular grids are prohibited from shrinking or distorting text bounds on smaller screens. Approved fallback patterns include:
- **Horizontal Scroll**: Keep the table columns intact but wrap the container in a clean scroll box (`overflow-x: auto;`).
- **Card Transformation**: Below `768px`, transform individual table rows into stacked Class A card modules to preserve readability.
- **Priority-Column Collapse**: Hide lower-priority columns (e.g. secondary metadata or timestamps) dynamically while keeping primary label and status columns visible.

---

## 11. Rejected Treatments
The following practices are banned across the table system:
* Colorful, high-saturation row background highlights.
* Decorative, alternating zebra-striping rows that disrupt baseline scanning.
* Oversized, loose row heights that reduce data density.
* Muddy, low-contrast header text that impedes column scanning.
* Center-aligned numeric column values.
* Floating action control clutter scattered across every row cell.

---

## 12. System Intent
Tables must feel operational, premium, and quiet. They exist to serve clean, structured reading columns that let users compare metrics, spot anomalies, and execute tasks without UI noise.
