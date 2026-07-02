# 01. Typography System

## 1. The Three-Role Typography Law
The POS ecosystem must use a strict three-role typography system. Font usage is not decorative. Each font belongs to a precise structural domain and must not drift across roles.

1. **The Display Domain (H1 Only)**
   Reserved exclusively for primary dashboard titles and major top-level module headings.
   - Font: **Inter**
   - Weight: `900`
   - Role: heavy, authoritative, deliberate visual anchor
2. **The Distinction Domain (H2 Only)**
   Reserved for section headings and controlled moments of visual separation.
   - Font: **Serif accent face**
   - Role: premium contrast layer between the primary title and the functional reading system
3. **The Execution Domain (H3, Body, Metrics, Tables, Buttons, Controls)**
   Reserved for all functional reading, interface labels, data surfaces, and product interaction text.
   - Font: **Instrument Sans**
   - Role: clear, premium, smooth execution layer for everyday use

Historical references to the Outfit font family remain fully removed from active production specifications.

---

## 2. Domain Boundary Rule
Typography roles must never blur.
- **Inter Black** must never appear in body copy, tables, buttons, controls, or secondary metadata.
- **Serif** must never be used for body text, data grids, metrics, lists, controls, or numeric interfaces.
- **Instrument Sans** must remain the dominant execution layer for all functional product reading.

The system must feel intentional: one title voice, one distinction voice, one execution voice.

---

## 3. Text Crispness & Contrast Rule
Dull text is banned.
- Weak, low-opacity, or washed-out grays are prohibited for functional reading content or data labels.
- Primary body and execution text must remain locked to a commanding near-black:
  - `#111111` or `#1a1a1a`
- Secondary structural text, timestamps, and low-emphasis metadata may drop to a medium slate-gray:
  - `#6B7280`
- Secondary text must still remain clearly readable and never fall into faded decorative softness.

Readability has priority over atmosphere.

---

## 4. Typographic Hierarchy Scale

### Module Title (H1)
- Font: **Inter**
- Weight: `900`
- Size: `48px` (`3rem`)
- Tracking: `-0.05em`
- Line-height: `1.05`

### Section Heading (H2)
- Font: **Serif accent face**
- Weight: `600` to `700`
- Size: `20px` (`1.25rem`)
- Tracking: slightly tight, never decorative
- Role: separation and premium structure, not editorial indulgence

### Sub-Label / Accent (H3)
- Font: **Instrument Sans**
- Weight: `600`
- Size: `14px` (`0.875rem`)
- Tracking: normal
- Role: functional hierarchy inside cards, forms, tables, and grouped modules

### Primary Body / Data Grid
- Font: **Instrument Sans**
- Weight: `400`
- Size: `15px` (`0.9375rem`)
- Line-height: relaxed and highly readable

### Button / Control Text
- Font: **Instrument Sans**
- Weight: `500` to `600`
- Size: tied to the button size system
- Role: crisp, product-like, and interaction-safe

---

## 5. Case Isolation Rules
Functional grouping text must remain highly scannable.
- Group titles, badge labels, metadata tabs, and small structural labels must enforce uppercase styling when used as grouping devices.
- Approved tracking range:
  - `0.05em` to `0.08em`
- Mixed-case micro-label clutter is prohibited where fast scanning is the main goal.

Uppercase is a structural tool, not decoration.

---

## 6. Numeric Stability Rule
Numerical interfaces must remain stable and readable.
- Always use tabular numbers:
  - `font-variant-numeric: tabular-nums`
- This applies to:
  - metrics
  - balances
  - financial tables
  - dashboard counters
  - timestamps where visual jitter would harm readability

Serif must never be used for numeric data presentation.

---

## 7. Alignment Mechanics
Mixed interface rows must preserve visual baseline discipline.
- Text rows containing labels, badges, icons, and values must align cleanly across a shared horizontal rhythm.
- Baseline drift across custom rows is prohibited.
- Typography must feel engineered, not casually stacked.

---

## 8. Rejected Treatments
The following are banned across the POS typography system:
- dual-font drift without role separation
- serif body copy in dashboards
- serif metrics or table numerals
- washed-out low-contrast gray body text
- oversized editorial styling inside functional product surfaces
- decorative display-font usage below the H1 layer
- random font mixing across cards, tables, and controls

---

## 9. System Intent
The typography system must feel premium, calm, intelligent, and highly readable.
- Inter gives the system authority.
- Serif gives the system distinction.
- Instrument Sans gives the system execution quality.

If all three roles begin speaking at once, the interface loses discipline.
