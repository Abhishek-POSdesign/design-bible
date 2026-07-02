# 09. Iconography

## 1. Icon Philosophy
Icons inside the POS ecosystem serve exclusively as structural support elements, not decorative illustrations. They are deployed systematically to improve keyboard and visual scanning, clarify primary actions, and reduce visual ambiguity across layout grids.

---

## 2. Icon Style Law
- **Outline-First Design**: The system enforces a strict outline-first or near-outline vector configuration.
- **Geometric Construction**: Icons must follow a clean, mathematically precise geometric structure.
- **Tone Profile**: Visual style must remain calm, premium, and modern. Playful, organic, or cartoon-like styling is strictly prohibited.
- **No Mascot Language**: Character-based or mascot-like icon families are banned from functional interfaces.

---

## 3. Stroke & Weight Rules
- **Standard Stroke**: Vector stroke thickness is locked to exactly `1.5px` (consistent with Chapter 11).
- **Size Consistency**: Stroke weights must remain identical across all icons displayed on a shared layout surface to maintain uniform optical weight.
- **No Weight Mixing**: Using multiple stroke weights (e.g. mixing 1px and 2px icons) in the same grid or toolbar is prohibited.
- **Optical Clarity**: Elements must be optimized for sharp pixel-grid alignment to prevent rendering blur at small sizes.

---

## 4. Size Rules
Icon bounding boxes are constrained to a strict implementation-ready scale:
- **Tiny Metadata Support (`12px` to `14px`)**: Reserved for micro status indicators, nested list tags, and inline badge details.
- **Standard Control Icons (`16px`)**: The default scale for list entries, buttons, inline form icons, and table row parameters.
- **Toolbar / Navigation Icons (`20px`)**: Used inside main sidebar lists, header actions, and primary section titles.
- **Larger Feature Icons (`24px`)**: Reserved for focus empty states, onboarding steps, and large modal headers.

---

## 5. Placement & Spacing Rules
- **Icon-to-Label Gaps**: Spacing between an icon and adjacent text labels must adhere to the standard token gap: `gap: var(--space-2);` (8px).
- **Baseline Alignment**: Icons must align vertically with the baseline of adjacent text characters (`align-items: center` or baseline math offsets) to ensure clean eye-tracking.
- **Inside Buttons**: Icons inside button components must be placed leading (left-aligned) or trailing (right-aligned chevrons) according to Button System rules.
- **Inside Table Cells**: Table icons must sit cleanly on the left of text cells or center-aligned within dedicated status columns.
- **Inside Navigation**: Sidebar icons must center vertically within the active navigation block, keeping consistent alignment regardless of whether the sidebar is expanded or collapsed.
- **Inside Badges/Chips**: Badge icons must align on the left edge with a micro-gap (`4px`) separating them from the text label.

---

## 6. Semantic Use Rules
Icons must be mapped to distinct functional roles:
- **Actions**: Triggering operations (e.g. `Plus` for adding tasks, `Chevron` for revealing menus).
- **Navigation**: Indicating page locations (e.g. `Home` for dashboards, `Calendar` for schedule sheets).
- **Status**: Visual indicators confirming states (e.g. `Check` for success, `AlertTriangle` for warnings).
- **Empty States**: High-contrast, simple layout indicators prompting user action.
- **Alerts**: Highlighted warnings paired with descriptive validation text.
- **Utility Controls**: Compact symbols representing layout modes (e.g. `SidebarCollapse`).

*Rule*: Icons must never replace text labels in core user flows where a text description is required for clarity.

---

## 7. Accessibility & Clarity Rules
- **Accessible Labeling**: Every icon-only button or trigger must carry an explicit `aria-label` or `title` tag for screen readers.
- **No Ambiguity**: Ambiguous or custom icons are prohibited from being deployed without immediately adjacent text descriptions.
- **No Color Dependence**: Warning and destructive icons must rely on geometric symbols (e.g. exclamation marks or trash indicators) to convey danger, never color indicators alone.
- **Instant Recognition**: Icons must use highly recognizable, industry-standard symbols (e.g. a magnifying glass for search, a gear for settings).

---

## 8. Rejected Treatments
The following iconography treatments are banned across the system:
* Decorative icon backgrounds, colored backplate fills, or glowing dropshadow circles by default.
* Mixing disparate icon families (e.g. combining rounded outline icons with sharp-edged filled icons in the same viewport).
* Inconsistent vector stroke widths.
* Oversized hero illustrations inside standard utility views.
* Emoji-style graphics deployed as functional UI icons.
* Highly detailed or multi-colored illustration vector blocks inside operational sheets.

---

## 9. System Intent
Iconography must feel precise, quiet, and supportive. Icons exist to anchor focus, guide reading tracks, and confirm operations cleanly, without calling attention to themselves as decorative art.
