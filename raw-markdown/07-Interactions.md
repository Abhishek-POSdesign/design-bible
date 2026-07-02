# 07. Interaction & Motion System

## 1. Interaction Philosophy
Interactions within the POS ecosystem must feel fast, calm, precise, premium, and unobtrusive. Motion is never deployed as visual entertainment; its sole purpose is to support spatial clarity, provide immediate tactile confirmation, and reduce cognitive load during workflow execution.

---

## 2. Motion Restraint Law
- **Controlled & Purposeful**: All motion must be short, highly controlled, and serve a clear structural transition. 
- **No Theatricality**: Default interactive events must completely avoid theatrical animation, multi-step sequences, or complex staging.
- **Crisp over Expressive**: Hover, focus, press, expand, sort, select, open, and dismiss transitions should feel crisp, dry, and clean rather than expressive or organic.
- **Banned Behaviors**: We strictly ban:
  - Bouncy motion or springy, toy-like physics.
  - Long cinematic delay tracks.
  - Decorative, perpetual idle animations.

---

## 3. Timing & Easing Rules
The system enforces a standardized timing profile mapped directly to native CSS variables to ensure interaction-wide harmony:

* **Hover Transitions & Interactive States**: `150ms ease` / `150ms cubic-bezier(0.16, 1, 0.3, 1)`
* **Press States (Tactile Deflection)**: `100ms cubic-bezier(0.16, 1, 0.3, 1)`
* **In-Page Reveals & Micro-Expansions**: `200ms cubic-bezier(0.16, 1, 0.3, 1)`
* **Panel Opens/Closes (Flyover Side Drawers)**: `175ms cubic-bezier(0.16, 1, 0.3, 1)` (High-Velocity Interface Physics)
* **Toast / Passive Notification Transitions**: `200ms cubic-bezier(0.16, 1, 0.3, 1)`

Transitions must consume the premium acceleration curve (`cubic-bezier(0.16, 1, 0.3, 1)`) to feel responsive and fast.

---

## 4. Hover, Press, and Focus Rules
- **Hover Lift**: Desktop hover lift must remain extremely subtle. Elevation increases should be minimal (typically limited to a `translateY(-3px) scale(1.015)` for buttons and flat card panels).
- **Press States**: Pressed states must feel tactile and grounded, collapsing the scale back to a centered deflection (`translateY(-1px) scale(0.99)`) to verify input.
- **Focus States**: Keyboard focus indicators must remain highly visible (minimum 2px outline width) using a clean, non-glowing high-contrast color token, avoiding fuzzy glowing shadows.
- **Static Integrity**: Non-interactive elements must never mimic interactive visual affordances (such as pointer cursors, hover backgrounds, or shadow shifts).

---

## 5. Panel, Modal, and Sheet Behavior
- **Drawers (Flyovers)**: Side panels must slide in directly from the right edge of the screen glass using high-velocity metrics.
- **Modals**: Modals must appear instantly, using a clean fade accompanied by an extremely subtle vertical scale transformation (e.g. from `scale(0.98)` to `scale(1)`).
- **Dropdowns**: Dropdown context menus must open instantly (`transition: none` or `< 100ms ease`) aligned directly to their trigger coordinates.
- **Overlay Limit**: Nested overlays must be strictly limited to a single level. Multi-stacked overlays and nested drawers are prohibited.
- **Dismissal Logic**: All overlays must support immediate, frictionless dismissal via an explicit close icon, pressing the `Escape` key, or tapping the backdrop overlay.

---

## 6. Feedback States
Feedback must be immediate, clear, and localized to the point of action:
- **Success Feedback**: Surfaced using localized badge status changes or inline check indicators utilizing the flat success color palette.
- **Destructive Confirmations**: Irreversible actions must trigger a modal confirmation before execution.
- **Loading Indicators**: Standard loading states must use flat, static layout skeletons or quiet, low-contrast progress bars. Flashing or spinning loading icons are prohibited.
- **Inline Validation**: Form errors must be anchored immediately to the affected input field with readable, slate-red descriptive strings.
- **Passive Notifications (Toasts)**: Must slide in from the screen edge, remain for a fixed duration, and dismiss silently.
- **Empty States**: Displayed using flat icons and simple typography inside the standard card layout.

---

## 7. State Change Behavior
When layout tables or dashboards refresh, the transition must preserve the user's spatial context:
- **Sorting & Filtering**: Data rows and table elements must update instantly.
- **Tab Changes**: Content switching must be instantaneous or use a quiet cross-fade (`150ms`).
- **Row Expansion**: Accordion or row-expansion cells must slide down smoothly using the standard in-page reveal timing (`200ms`).
- **Selected States**: Selected rows or options must transition smoothly to their active states using a crisp, localized color transition.

---

## 8. Reduced Motion Principle
For users who prefer minimized motion or have system-level reduced-motion settings enabled:
- The system must respect the `prefers-reduced-motion` media query.
- When enabled, all sliding, scaling, and panning transitions must immediately fall back to instantaneous state changes or simple, rapid opacity fades (`transition: opacity 100ms ease-in-out`).

---

## 9. Rejected Treatments
The following interaction treatments are banned across the POS system:
* Playful bounce, spring overshoot, or elastic bounce physics.
* Slow, glossy fade transitions that artificially delay user input.
* Decorative, non-functional parallax effects.
* Floating UI wobble, tilt, or cursor-tracking hover distortions.
* Dramatic, cinematic modal zooms or full-screen spins.
* Shimmer overload or excessive infinite pulsing patterns.
* Animating transitions on every surface (causing layout-wide visual noise).

---

## 10. System Intent
Interactions must make the interface feel engineered, trustworthy, fast, and silent. Every hover reaction, drawer slide, and tactile click must confirm execution cleanly and immediately, allowing the user to operate the software with absolute confidence.
