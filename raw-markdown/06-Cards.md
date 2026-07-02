# 06. Card System

## 1. Card Hierarchy Law
The POS ecosystem must use only three card classes. New card styles outside these classes are prohibited unless explicitly approved.

1. **Class A — Neutral Data Cards**
   Used for metrics, summaries, transactions, utility panels, and information blocks.
2. **Class B — Accent Feature Cards**
   Used for one highlighted insight, key CTA, important module, or spotlighted summary.
3. **Class C — Celebration / Trophy Cards**
   Used for wins, milestones, high-priority progress moments, and emotionally positive feedback surfaces.

---

## 2. Class A — Neutral Data Cards

### 2.1 Surface Rule
- Neutral Data Cards must remain visually calm.
- Full pastel or tinted full-card backgrounds are explicitly prohibited.
- Base surface must remain tied to the approved neutral canvas system:
  - Light Mode: white or near-white card surface
  - Dark Mode: dark neutral card surface

### 2.2 Contrast Rule
- Primary text must remain high-contrast and crisp.
- Weak gray-on-neutral contrast is prohibited.
- Metrics, totals, and numeric values must always retain strong legibility.

### 2.3 Color Rule
- Color may only appear in localized elements:
  - badges
  - pills
  - micro-indicators
  - progress marks
  - small icons
- Full-card color treatment is banned on Class A cards.

### 2.4 Geometry Rule
- Border radius must follow the global **12px** card radius law.
- Padding must follow the approved spacing token system.
- Utility cards must not use theatrical depth, gradient fog, or decorative glow.

---

## 3. Class B — Accent Feature Cards

### 3.1 Purpose
Accent Feature Cards create one controlled focal moment inside a dashboard without turning the full interface into a colorful grid.

### 3.2 Accent Zone Law
- A Class B card may use only one accent zone:
  - a colored inner block
  - a colored top section
  - a colored CTA slab
  - a colored chart panel
- Multiple competing accent zones inside one card are prohibited.

### 3.3 Fill Behavior
- Accent fills must use clean matte tones, never muddy mixed pastels.
- Color should feel saturated-but-soft, not loud, neon, or dirty.
- Flat matte fills are the default behavior.
- Gradients are allowed only in extremely rare, proven-premium cases.

### 3.4 Depth Rule
- Feature cards may use slightly elevated shadow treatment.
- Shadows must remain soft and premium, not blurry or muddy.
- Accent depth must support hierarchy, not decoration.

### 3.5 Content Rule
- Feature cards must remain scannable.
- They should carry one clear message, one focal metric, or one primary action.
- Overloading a feature card with too many labels, rows, and controls is prohibited.

---

## 4. Class C — Celebration / Trophy Cards

### 4.1 Purpose
Trophy Cards are reserved for milestone states, emotional reward, goal progress, and high-priority positive reinforcement.

### 4.2 Cushion Layout
- Trophy Cards may use a richer padded structure.
- Inner cushion padding is locked to **32px**.

### 4.3 Matte Accent Law
- Trophy Cards may use full-card matte accent fills.
- These fills must be clean, premium, and readable.
- Muddy or desaturated fills are prohibited.

### 4.4 Ambient Shadow Law
- Trophy Cards may use an ambient colored drop shadow matching the card token base.
- This treatment is reserved only for Class C cards and must not spread into standard utility cards.

### 4.5 Approved Token Families

#### Mint Asset
- Light Mode: Background `#ccebda`, Shadow `rgba(27, 94, 32, 0.15)`
- Dark Mode: Background `#9adeb6`

#### Gold Asset
- Light Mode: Background `#fdf0cd`, Shadow `rgba(230, 81, 0, 0.12)`
- Dark Mode: Background `#ebd07d`

#### Lavender Asset
- Light Mode: Background `#dcd6f7`, Shadow `rgba(76, 61, 139, 0.14)`
- Dark Mode: Background `#b3a7f2`

---

## 5. Rejected Treatments
The following treatments are banned across the POS card system:
- muddy pastel full-card fills
- weak gray-on-tint contrast
- glassmorphism blur cards
- decorative neon glows
- uncontrolled multi-color card gradients
- colored utility cards with no hierarchy reason
- giving all cards equal visual emphasis

---

## 6. System Intent
The card system must feel premium, calm, and intentional.
- Most cards should disappear into the workflow.
- A few cards may rise as focal surfaces.
- Only the rarest cards should feel celebratory.

This hierarchy is mandatory. If every card is loud, none of them matter.
