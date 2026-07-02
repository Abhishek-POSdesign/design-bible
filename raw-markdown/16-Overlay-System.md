# Chapter 15 — Overlay System
> Status: ✅ Approved | July 2026
> Source alignment: 00-Design-Principles, 04-Layout, 07-Interactions, 13-Forms

## 1. Why This Chapter Exists

The POS requires a single overlay language across all apps.

Drawers, modals, popovers, sheets, and action bars cannot be reinterpreted per module.
If Finance opens overlays one way and Tasks opens them another, trust is broken.
This chapter defines one behavioral system for all temporary layers above the primary interface.

The goal is not visual flair.
The goal is predictable focus, clean task transitions, and zero ambiguity about where work happens.

---

## 2. Overlay Philosophy

Overlays are temporary work surfaces.
They exist to help the user act without losing spatial context.

An overlay must do one of four jobs only:

- Trigger a lightweight contextual choice
- Create a new record or item
- Edit or review an existing record
- Confirm a destructive or high-risk action

If a screen does not need temporary layered focus, it should not become an overlay.

The POS overlay system must feel:

- Fast
- Calm
- Structured
- Safe
- Unambiguous

The user must instantly understand:
- what opened,
- why it opened,
- how to dismiss it,
- and whether leaving will lose work.

---

## 3. Approved Overlay Types

The POS overlay family is limited to five approved types:

| Type | Purpose | Typical Use |
|---|---|---|
| Dropdown / Popover | Lightweight contextual actions or selection | Sort menu, row actions, date trigger, filter options |
| Drawer | Add / create flows while preserving page context | Add transaction, add task, create item |
| Center Modal | Edit, review, confirm, or destructive decisions | Edit item, confirm delete, approval dialogs |
| Bottom Sheet (Mobile) | Short/simple mobile overlays | Quick select, short form, date selection |
| Full-Screen Sheet (Mobile) | Long or complex mobile create/edit workflows | Add transaction, edit task details, multi-field forms |

No other overlay type is approved.
Floating custom hybrids, oversized tooltip-panels, and improvised half-modal half-drawer constructs are rejected.

---

## 4. Overlay Selection Rules

Overlay choice is behavioral, not decorative.

Use the following decision logic:

- **Popover / Dropdown** for quick actions that require minimal input and should remain anchored to the trigger.
- **Drawer** for add / create flows where the user benefits from still sensing the page behind.
- **Center Modal** for editing, reviewing, and confirming decisions that deserve focused interruption.
- **Bottom Sheet (Mobile)** for short/simple mobile tasks.
- **Full-Screen Sheet (Mobile)** for longer create/edit workflows where a bottom sheet would feel cramped or fragile.

Canonical rule:

- Add → drawer
- Edit → modal
- Inline small field update → inline
- Destructive confirmation → modal
- Mobile short/simple → bottom sheet
- Mobile long/complex → full-screen sheet

Never choose overlay type based on visual preference alone.

---

## 5. Drawer System

Drawers are right-docked flyovers.
They slide in from the right edge of the screen and preserve the visible presence of the underlying page.

### Approved Drawer Widths

Only two desktop drawer widths are allowed:

- **Default Drawer:** `400px`
- **Extended Drawer:** `480px`

Use `400px` for standard quick-entry flows.
Use `480px` only when form complexity genuinely requires extra breathing room.

No third drawer width is allowed.
No app may invent its own drawer sizing.

### Drawer Use Cases

Approved drawer use cases:

- Add transaction
- Add task
- Add note
- Create lightweight records
- Secondary contextual workspace tied to the current page

Drawers are not for destructive confirmations.
Drawers are not for full-detail editing if the task is review-heavy or decision-heavy.
Those belong in a modal or full-screen mobile sheet.

---

## 6. Modal System

Modals are always centered.

The POS does not use side-mounted edit modals, floating edge modals, or oversized theatrical dialog windows.
A modal is a focused decision surface, not a second page.

### Modal Rules

- Center aligned only
- Maximum width: `480px`
- Must always include a clear title
- Must always include an explicit close action
- Must always preserve clear primary and secondary actions
- Must not become a scrolling page replacement unless absolutely necessary

### Approved Modal Use Cases

- Edit existing records
- Confirm destructive actions
- Review changes before commit
- Focused secondary flows needing direct attention

If the content becomes too large, too form-heavy, or too process-heavy, it is no longer a modal problem.
It should become a dedicated surface or a mobile full-screen sheet.

---

## 7. Popover and Dropdown System

Popovers and dropdowns are the lightest overlay class.
They must feel immediate and anchored.

Approved usage:

- Row action menus
- Sort controls
- Filter menus
- Date picker trigger on desktop
- Small option groups

Rules:

- Must originate visually from the trigger
- Must open instantly or near-instantly
- Must remain compact
- Must not contain long forms
- Must not become mini-pages
- Must dismiss easily without friction

A popover should never make the interface feel layered for the sake of layering.

---

## 8. Mobile Overlay Adaptation

Desktop overlay logic does not copy directly to mobile.

The POS uses a responsive overlay conversion model:

- **Short/simple flows** become bottom sheets
- **Longer create/edit flows** become full-screen mobile sheets

This is mandatory.
Do not force desktop drawers into cramped mobile side panels.

### Bottom Sheet Use Cases

Bottom sheets are approved for:

- Date selection
- Short option selection
- Quick filters
- Small confirmations
- One- or two-step lightweight input tasks

Bottom sheets should feel compact, reachable, and thumb-friendly.

### Full-Screen Mobile Sheet Use Cases

Full-screen mobile sheets are approved for:

- Add transaction
- Edit task details
- Long forms
- Multi-section create/edit workflows
- Any flow where keyboard + scrolling + actions would make a bottom sheet unstable

On mobile, usability beats visual similarity to desktop.

---

## 9. Header, Body, Footer Anatomy

Every major overlay must use a stable internal structure:

- **Header**
- **Body**
- **Footer** (when actions require explicit commitment)

### Header

The header must contain:

- Title
- Optional supporting label or short context
- Explicit close control

The close action must be visually obvious but restrained.
Do not hide closure behind ambiguous icons or gesture assumptions alone.

### Body

The body contains the working content:

- Form fields
- Confirmation copy
- Menus
- Selection lists
- Review content

The body must maintain clean vertical rhythm and respect the single-scroll principle.

### Footer

Use a footer action bar when the overlay contains explicit commit actions such as:

- Save
- Create
- Delete
- Apply
- Confirm

Footer bars are not mandatory in every overlay.
They are structural tools, not decorative chrome.

---

## 10. Footer Action Bar Rules

Approved decision: sticky footer bars are conditional.

### Use Sticky Footer Bars Only When:

- The form is long enough that actions may scroll out of view
- The task is high-importance and the primary action must remain persistently reachable
- Mobile keyboard interaction makes bottom actions harder to recover

### Do Not Use Sticky Footer Bars When:

- The overlay is short and actions remain visible naturally
- The modal is lightweight and brief
- The stickiness would create unnecessary visual heaviness

A sticky footer must feel like a functional anchor, not a giant persistent slab.

Rules:

- Border-top separator only
- Same surface language as the overlay
- No dramatic elevation
- Primary action visually dominant
- Secondary action quiet but clear

---

## 11. Backdrop Rules

The backdrop exists to lower background noise and clarify active focus.

It is not decorative darkness.
It is a functional focus curtain.

### Approved Backdrop Behavior

- Lightweight overlays may dismiss on outside click
- Important data-entry overlays must not dismiss on accidental outside click
- Escape must dismiss overlays where safe
- Explicit close control must always exist

### Safe Dismissal Rule

If dismissing the overlay risks losing meaningful input or interrupting a high-attention task, outside-click dismissal must be disabled or protected.

This is especially important in:

- Finance entry
- Multi-field task creation
- Any form with unsaved user effort

Backdrop behavior must protect trust before convenience.

---

## 12. Motion Rules for Overlays

Overlay motion must follow the approved interaction timing system.

### Drawer Motion

- Slides from the right edge
- Uses high-velocity, premium acceleration
- No bounce
- No elastic overshoot
- No theatrical staging

### Modal Motion

- Clean fade
- Extremely subtle scale transition
- No zoom theatrics
- No cinematic delay

### Bottom Sheet Motion

- Direct upward arrival from the bottom edge
- Short, controlled movement
- No springiness
- No layered stagger effects

### Dropdown / Popover Motion

- Instant or near-instant
- Anchored to trigger
- No showy animation

Motion exists only to preserve spatial clarity.

---

## 13. Scroll Rules

Overlays must respect the POS single-scroll philosophy.

Rules:

- One clear scrollable content area only
- Do not create nested scroll traps inside overlay content unless absolutely unavoidable
- Long overlay bodies may scroll
- Headers may remain pinned when needed
- Sticky footers may remain pinned when justified
- Do not let the overlay become a chaotic stack of independent scroll regions

The user must always know what is scrolling.

---

## 14. Dismissal and Safety Rules

All overlays must support safe, obvious dismissal.

Approved dismissal methods:

- Explicit close icon
- Escape key on desktop
- Backdrop click where safe
- Cancel action where appropriate

If the user has entered meaningful data, the system must behave responsibly.

Rules:

- Unsaved work should not vanish casually
- High-effort forms deserve protected dismissal
- Destructive actions must always confirm before execution
- Validation errors must remain inline, never hidden in a toast

Dismissal is a product trust decision, not a convenience shortcut.

---

## 15. Mobile Sheet Layout Rules

For mobile overlays:

- Respect the safe area
- Preserve clear top handle or top bar structure where helpful
- Keep titles visible
- Keep primary actions reachable
- Avoid compressed multi-column layouts
- Stack fields vertically
- Do not force desktop density onto handheld screens

Bottom sheets should cap complexity.
Full-screen sheets should absorb complexity cleanly.

---

## 16. Prohibited Patterns

The following overlay treatments are banned across the POS:

- ❌ Nested drawers
- ❌ Stacked multi-level modals
- ❌ Drawer inside modal
- ❌ Modal inside drawer
- ❌ Random per-app drawer widths
- ❌ Bottom sheets for long, complex multi-field workflows
- ❌ Desktop-style side drawers on small mobile screens
- ❌ Full-screen desktop modals used as lazy page replacements
- ❌ Dramatic blur-heavy backdrops
- ❌ Excessive shadow stacks
- ❌ Decorative overlay animation
- ❌ Hidden dismissal logic
- ❌ Validation errors shown in toast instead of inline
- ❌ Overlays used only because a designer wants “more depth”

If an overlay pattern adds spectacle, ambiguity, or risk, it is wrong for this system.

---

## 17. System Intent

The POS overlay system exists to make temporary work feel precise, safe, and predictable.

An overlay must never feel like a surprise.
It must never feel ornamental.
It must never feel like a different product invented a different behavior.

The correct overlay is the one that lets the user act quickly, remain oriented, and return to the underlying workflow without friction or doubt.
