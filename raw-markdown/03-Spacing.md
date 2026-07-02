# 03. Spacing System

## 1. Spacing Token Scale
The POS ecosystem spacing scale is mathematically defined by the following native CSS variables. Arbitrary spacing values are strictly prohibited unless explicitly approved:

* `--space-1: 4px`
* `--space-2: 8px`
* `--space-3: 12px`
* `--space-4: 16px`
* `--space-5: 20px`
* `--space-6: 24px`
* `--space-7: 32px`
* `--space-8: 40px`
* `--space-9: 48px`

---

## 2. Token Usage Law
Each token serves a specific role within the visual hierarchy to maintain absolute rhythm:

* **4px (`--space-1`)**: Micro gaps, icon-label offsets, badge interior vertical padding.
* **8px (`--space-2`)**: Row compression, tight inline spacing, compact controls, list item gap.
* **12px (`--space-3`)**: Standard internal content gaps, sub-component groupings.
* **16px (`--space-4`)**: Default control padding, cell rhythm, card inner grouping elements.
* **20px (`--space-5`)**: Medium component breathing room, form layout vertical gaps.
* **24px (`--space-6`)**: Standard card padding and section sub-group spacing.
* **32px (`--space-7`)**: Major card padding or grouped dashboard column separation.
* **40px (`--space-8`)**: Page section spacing, large empty-state separations.
* **48px (`--space-9`)**: Major page breathing zones, system-level offsets.

---

## 3. Component Spacing Rules
All key interface elements must bind their spacing directly to the token scale:

* **Cards**: Default card padding is locked to `--space-6` (24px) on all sides. Component C (Trophy Cards) are locked to `--space-7` (32px).
* **Buttons**: Standard button padding uses `--space-2` (8px) vertically and `--space-4` (16px) horizontally.
* **Form Fields**: Labels are separated from input borders by `--space-2` (8px). Vertical gaps between consecutive form rows use `--space-5` (20px).
* **Toolbars**: Toolbar elements are aligned with horizontal gaps of `--space-3` (12px) and padded vertically by `--space-2` (8px).
* **Filter Rows**: Filter rows use `--space-2` (8px) for individual category item offsets and `--space-3` (12px) for row margins.
* **Modal Interiors**: Standard modal content containers require `--space-7` (32px) padding, with modal action bars padded by `--space-4` (16px).
* **Sidebars**: Sidebar headers use `--space-6` (24px) vertical padding. Navigation items are separated vertically by `--space-2` (8px).
* **Tables**: Default cell padding is locked to `--space-2` (8px) vertically and `--space-4` (16px) horizontally.

---

## 4. Density Modes
The system operates across three distinct density modes. Dashboards must default to Standard, while specialized tasks leverage Compact or Spacious contexts:

* **Compact Density**:
  * Row padding drops to `--space-2` (8px) vertically.
  * Internal margins drop to `--space-2` (8px) / `--space-3` (12px).
  * *Context*: Dense operational data sheets, historical tables.
* **Standard Density**:
  * Row padding is set to `--space-3` (12px) vertically.
  * Internal margins are set to `--space-4` (16px).
  * *Context*: Default dashboards, forms, and primary task feeds.
* **Spacious Density**:
  * Row padding expands to `--space-4` (16px) vertically.
  * Internal margins expand to `--space-6` (24px).
  * *Context*: Intended sparingly for focus screens, document views, and onboarding modules.

---

## 5. Mobile Compression Rule
To protect layouts from breaking on smaller viewports, spacing scales down smoothly at responsive breakpoints:
* Desktop spacing parameters `--space-6` (24px) and above collapse by exactly one step on viewports below `768px`.
* Layout margins collapse to a maximum of `--space-4` (16px) to ensure text and tables do not feel cramped while maximizing horizontal reading room.

---

## 6. Rejected Treatments
The following practices are banned across the spacing system:
* Random pixel values outside the defined spacing token engine.
* Uneven sibling padding configurations (e.g. asymmetrical horizontal paddings within the same component level).
* Oversized luxury whitespace allocations in data-dense dashboard views.
* Cramped data layouts that compress text below accessible scanning readability bounds.
* Mixing multiple distinct spacing rhythms inside the same container view.

---

## 7. System Intent
Spacing serves as the invisible rhythm engine of the product. By mapping every gap, cell, and border to the mathematical token engine, we enforce a calm, premium visual hierarchy that optimizes user scanning speed and reduces cognitive load.
