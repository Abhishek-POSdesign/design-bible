# Chapter 17 — Loading, Skeleton & Progress States
> Status: ✅ Approved | July 2026
> Source alignment: 00-Design-Principles, 04-Layout, 07-Interactions, 16-Overlay-System

## 1. Why This Chapter Exists

A loading state is not empty time.
It is part of the product.

When the POS is fetching data, saving records, refreshing dashboards, or opening overlays,
the interface must remain calm, legible, and trustworthy.
A missing or poorly designed loading state makes the system feel broken, slow, or unfinished.

This chapter defines one unified loading language for the entire POS ecosystem.

---

## 2. Loading Philosophy

Loading states must reassure the user that the system is working without demanding attention.

They must feel:

- Quiet
- Predictable
- Fast
- Informative
- Non-theatrical

The goal is never to entertain the user while they wait.
The goal is to preserve confidence, maintain spatial continuity, and reduce perceived uncertainty.

Loading must never feel like a visual event.
It is a temporary operational state.

---

## 3. Approved Loading Types

The POS uses four approved loading types only:

| Type | Purpose | Use Case |
|---|---|---|
| Skeleton | Structural placeholder for known layouts | Cards, tables, dashboards, form sections |
| Inline Spinner | Small localized activity indicator | Button save state, compact field refresh, tiny async action |
| Progress Bar | Measurable ongoing process | File import, sync, export, longer multi-step operation |
| Deferred Empty Hold | Very short delay before empty state appears | Prevent false empty flashes during initial fetch |

No other loading type is approved by default.

Full-screen spinners, bouncing loaders, branded mascots, animated illustrations,
and decorative waiting experiences are rejected.

---

## 4. Selection Rules

Choose the loading type based on how much is known about the incoming content.

- **Skeleton** when layout structure is known
- **Inline Spinner** when only one local element is busy
- **Progress Bar** when measurable completion exists
- **Deferred Empty Hold** when the system may briefly appear empty before data arrives

Canonical rule:

- Known structure → skeleton
- Local async action → inline spinner
- Long tracked process → progress bar
- Uncertain first load → deferred empty hold

If the product knows what shape the content will take,
it must not fall back to a generic spinner.

---

## 5. Skeleton System

Skeletons are the primary loading pattern in the POS.

They preserve layout continuity and prevent jarring shifts when real data appears.
A skeleton should mirror the final structure closely enough that the user already understands what is loading.

### Skeleton Principles

- Match the geometry of the final content
- Preserve spacing and layout rhythm
- Use neutral surfaces only
- Avoid dramatic shimmer or pulse
- Never use skeletons as decoration
- Remove them immediately when real content is ready

A skeleton must look like a temporary scaffold, not a second design style.

---

## 6. Skeleton Anatomy

Approved skeleton primitives:

- Text line
- Title line
- Circle / avatar block
- Rectangular media block
- Table row
- Input field block
- Button block
- Chart placeholder block

All skeleton pieces must inherit the same radius logic as live components.

### Base Rules

- Use the same border radius family as the real component
- Use surface-based neutral fills only
- Keep contrast low but visible
- Respect existing card and layout boundaries
- Do not invent extra placeholder elements that do not exist in the final UI

A fake loading structure that differs from the real structure is a design failure.

---

## 7. Skeleton Motion

Skeleton motion must remain extremely restrained.

Approved treatments:

- Static skeleton
- Very soft shimmer
- Very subtle opacity drift only if needed

Rejected treatments:

- Fast shimmer
- Flashing pulse
- Sweeping gradient spectacle
- Multi-color shimmer
- Infinite obvious motion that pulls visual focus

If motion draws more attention than the actual content would,
the loading state is too loud.

### Timing Rule

Skeleton shimmer, if used at all, must be slow, soft, and low-contrast.
It should suggest activity without becoming a visual distraction.

Reduced motion users must receive static skeletons or near-static fades only.

---

## 8. Skeleton Use Cases

### Cards and Dashboards

Cards must load with card-shaped skeletons that preserve final height and spacing.
Do not replace an entire dashboard with one giant generic placeholder block.

Metric cards should show:
- title line
- value block
- optional secondary line

Chart cards should show:
- title line
- chart area block
- optional legend row placeholders

### Tables

Tables must load as table rows, not as unrelated card placeholders.
Preserve header position, row height, and column rhythm.

Rules:
- Keep column widths believable
- Use 5–8 placeholder rows depending on viewport
- Maintain zebra or divider rhythm only if the live table uses it
- Do not collapse the table shell while data is loading

### Forms

Forms load differently depending on context:

- If opening a known form shell quickly, show the actual shell with field skeletons
- If field labels and structure are known, preserve them
- If the user is editing existing data, never blank the whole surface if partial content can remain visible

A form should feel temporarily unavailable, not missing.

### Overlays

Drawers, modals, and sheets must open into structured loading states if content is not yet ready.
Never delay the opening animation just to wait for data.

The overlay opens first.
The loading state lives inside it.

This preserves spatial trust.

---

## 9. Inline Spinner System

Inline spinners are for localized operations only.

Approved uses:

- Save button pending state
- Tiny control refresh
- Background retry control
- Inline row-level action
- Lightweight secondary fetch

Rules:

- Spinner must remain small
- Spinner must sit next to or inside the affected control
- Spinner must not replace the whole interface
- Label should remain readable whenever possible
- Spinner must not create layout jump

Inline spinners are not a fallback for unknown loading design.
They are only for truly local work.

---

## 10. Progress Bar System

Use progress bars only when progress is real and measurable.

Approved use cases:

- Import/export
- Backup/restore
- File upload
- Multi-step sync
- Long-running generation or processing

Rules:

- Progress must map to actual progress, not fake animation
- Show percentage only when reliable
- Show current step label when useful
- Keep styling flat and operational
- Prefer top-mounted or inline progress placement over intrusive blocking states

Never show a fake 90%-stalling bar just to reassure the user.
False precision destroys trust.

### Indeterminate Progress

If the process is long but not measurable, use an indeterminate bar only when the action is meaningful enough to justify dedicated feedback.
Otherwise use a localized spinner plus explanatory text.

---

## 11. Deferred Empty Hold

The system must not flash an empty state before real data has had a fair chance to load.

Approved rule:

- On first fetch, hold the empty state briefly behind a loading placeholder
- Only show the empty state when the system is confident there is truly no content

This avoids the amateur pattern of:
empty state → sudden data pop-in → visual confusion.

Empty states are for confirmed absence, not temporary uncertainty.

---

## 12. Save and Refresh Behavior

Saving and refreshing are not the same thing and must not look the same.

### Save State

When the user submits data:

- Keep the current UI visible
- Show localized pending state
- Disable duplicate submission
- Preserve context
- Confirm completion inline or with restrained passive feedback

Do not wipe the surface and replace it with a generic loader.

### Refresh State

When dashboards, tables, or cards refresh:

- Preserve the current structure whenever possible
- Use subtle in-place loading treatment
- Avoid full collapse and rebuild
- Avoid layout flash

A refresh should feel like the system is updating, not restarting.

---

## 13. Transition from Loading to Loaded

The arrival of content must be immediate and calm.

Rules:

- No dramatic reveal animation
- No staggered theatrical entrance
- No card-by-card performance theater
- Minimal fade only if needed
- Layout shift must be minimized

The user should feel continuity, not a scene change.

If skeletons were sized correctly, content should settle into place with little or no movement.

---

## 14. Error vs Loading

Loading and error are different states and must never be visually confused.

Rules:

- Do not loop loading forever with no explanation
- If a request fails, loading must stop
- Show a clear error or retry state near the affected surface
- Preserve whatever content is still valid
- Avoid resetting the entire page for one failed subsection

A system that cannot distinguish loading from failure appears unreliable.

---

## 15. Accessibility and Reduced Motion

Loading states must remain accessible and non-disruptive.

Rules:

- Respect `prefers-reduced-motion`
- Use static skeletons or near-static fade for reduced motion users
- Do not rely on motion alone to communicate activity
- Preserve semantic labels for busy regions when needed
- Buttons in loading states must still communicate what action is in progress
- Spinners must not become the only signal of state change

Loading should reduce uncertainty for every user, not only for sighted or motion-tolerant users.

---

## 16. Prohibited Patterns

The following loading treatments are banned across the POS:

- ❌ Full-screen blocking spinner for ordinary page fetches
- ❌ Decorative mascot or illustration loader
- ❌ Bouncing dots
- ❌ Large looping branded animation
- ❌ Fast shimmer or flashing skeletons
- ❌ Spinner replacing a known layout that should use skeletons
- ❌ Fake progress percentages
- ❌ Empty state shown before fetch completes
- ❌ Whole-screen refresh flash for small local updates
- ❌ Multiple unrelated loading animations competing on one screen
- ❌ Long loading delay with no visible state change
- ❌ Card collapse and rebuild during normal refresh

If a loading treatment creates noise, spectacle, or uncertainty,
it is wrong for this system.

---

## 17. System Intent

The POS loading system exists to make waiting feel structured, trustworthy, and quiet.

The user should never wonder:
- whether the system is working,
- what is loading,
- whether their action was registered,
- or whether the interface has broken.

Good loading states do not entertain.
They preserve confidence until the real interface is ready.
