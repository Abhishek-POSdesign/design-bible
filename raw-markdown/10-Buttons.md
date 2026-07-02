# 10. Button System & Interactive States

## 10.1 Button Hierarchy Law
The POS ecosystem must use a restrained Stripe-like button hierarchy. Buttons should feel premium, calm, crisp, and authoritative — never playful, candy-like, or noisy.
Approved button classes:
1. **Primary Action Button (`.btn-primary`)**
   Used for the main action in a given context.
2. **Secondary Action Button (`.btn-muted`)**
   Used for supporting actions that remain clearly clickable but visually quieter than the primary action.
3. **Outline Context Button (`.btn-outline`)**
   Used for low-emphasis contextual actions, filters, utility controls, and secondary toolbars.
4. **Destructive Action Button (`.btn-danger`)**
   Used only for destructive or irreversible actions.
5. **Ghost / Text Button (`.btn-ghost`)**
   Used sparingly for low-priority inline actions where a full container would create visual noise.
No additional button classes may be introduced without explicit approval.

---

## 10.2 Matte-Scale Feedback Physics
- **Surface Constraint**: Complex animated color drops, neon glow tracking box-shadows, and ambient background flashes are explicitly prohibited.
- **Tactile Micro-Scaling**: Buttons must use a precise, accelerated desktop hover response:
  `transform: translateY(-3px) scale(1.015);`
- **Snappy Timing Profile**: Sluggish or generic transition curves are banned. Controls must use:
  `transition: transform 150ms cubic-bezier(0.16, 1, 0.3, 1), background-color 150ms ease, border-color 150ms ease, color 150ms ease;`
- **Active Click State**: On press, apply a restrained downward deflection:
  `transform: translateY(-1px) scale(0.99);`
Buttons must feel tactile and premium, never bouncy or toy-like.

---

## 10.3 Geometric Integration
- **Unified Radius Law**: All buttons and control targets must enforce an exact `border-radius: 12px`.
- Sharp or legacy 8px button geometries are prohibited.
- Oversoft pill behavior is prohibited unless explicitly justified by a specific component pattern.

---

## 10.4 Size & Padding Rules
Buttons must follow a strict size system to maintain visual rhythm.

### Standard Heights
- **Small Button**: `36px`
- **Default Button**: `44px`
- **Large Button**: `52px`

### Horizontal Padding
- **Small**: `12px`
- **Default**: `16px`
- **Large**: `20px`

### Typography
- Button labels must use the execution typography system, never display typography.
- Labels must remain crisp, medium-to-semibold, and highly legible.
- Tiny under-scaled button labels are prohibited.

---

## 10.5 Programmatic Hierarchy Tokens
All button classes must inherit from active canvas variables rather than hardcoded hex values.

### Primary Action Button (`.btn-primary`)
- Reserved for the single most important action in a local context.
- Base Layer: `--btn-primary-bg`
- Font Layer: `--btn-primary-text`
- Must feel confident and high-contrast.

### Secondary Action Button (`.btn-muted`)
- Used for important but non-dominant actions.
- Base Layer: `--btn-muted-bg`
- Font Layer: inherits the appropriate high-contrast text token.
- Must remain visibly clickable, never faded into passivity.

### Outline Context Button (`.btn-outline`)
- Body: transparent
- Border: `1px solid var(--border-hairline)`
- Font Layer: inherits `--text-primary`
- Used for toolbars, filters, and utility control clusters.

### Destructive Action Button (`.btn-danger`)
- Must remain restrained and controlled.
- No screaming red fills or theatrical error styling.
- Use destructive color logic with premium contrast and clear seriousness.

### Ghost / Text Button (`.btn-ghost`)
- Must remain visually quiet.
- Used only when a filled or outlined container would create unnecessary clutter.
- Must still provide clear hover and focus feedback.

---

## 10.6 Width Behavior
- Buttons inside dense toolbars, card headers, and inline action zones should default to **auto width**.
- Buttons in form completion zones, mobile confirmation surfaces, and bottom action regions may use **full width** when clarity and tap confidence improve.
- Full-width buttons must not be used casually in desktop dashboards.

---

## 10.7 Icon Rules
- Icons inside buttons must support the label, never replace it by default.
- Approved icon positions:
  - left-leading action icon
  - right-side directional chevron
- Icon-only buttons must be used only for utility actions where the meaning is already obvious from context.
- Icon-only buttons must still preserve accessible labeling in implementation.

### Icon Spacing
- Icon and label spacing must follow the approved spacing token system.
- Icon scale must remain optically balanced with button text.
- Oversized decorative button icons are prohibited.

---

## 10.8 Disabled State Rules
- Disabled buttons must remain visibly inactive without becoming muddy or broken-looking.
- Disable behavior must reduce emphasis through contrast and interaction removal, not opacity collapse alone.
- Disabled buttons must not retain active hover lift behavior.
- A disabled primary button should still preserve layout stability and readable label structure.

---

## 10.9 Destructive Behavior Rules
- Destructive actions must be rare and deliberate.
- Delete, reset, purge, remove, and irreversible actions must never visually resemble neutral actions.
- However, destructive buttons must remain restrained and premium — not bright alert banners disguised as controls.
- If destructive risk is high, the button should be paired with confirmation logic at the interaction layer.

---

## 10.10 Rejected Treatments
The following are banned across the button system:
- neon glow hover effects
- multi-color CTA gradients
- muddy low-contrast secondary buttons
- playful oversized pill buttons used without hierarchy reason
- icon-only primary CTAs without clear justification
- weak disabled states that still look clickable
- bright screaming red destructive buttons
- toy-like hover bounce behavior

---

## 10.11 System Intent
Buttons must communicate confidence, order, and product maturity.
- The primary button should feel authoritative.
- The secondary button should feel available but quieter.
- The outline button should feel precise.
- The destructive button should feel serious without becoming loud.

If every button demands attention, none of them provide hierarchy.
