# Chapter 18 — Notifications & Toasts
> Status: ✅ Approved | July 2026
> Source alignment: 00-Design-Principles, 07-Interactions, 13-Forms, 16-Overlay-System, 17-Loading-Skeleton-Progress

## 1. Why This Chapter Exists

The POS must communicate outcomes clearly without becoming noisy.

A serious product cannot rely on random browser alerts, inconsistent toast styling,
or decorative success messages scattered differently across apps.
Feedback must be governed with the same discipline as forms, overlays, and loading states.

This chapter defines one unified notification system for the entire POS ecosystem.

---

## 2. Notification Philosophy

Notifications exist to confirm, warn, guide, or protect.

They must never compete with the user's actual work.
They must feel:

- Immediate
- Precise
- Quiet
- Contextual
- Trustworthy

The purpose of a notification is not to create delight.
It is to remove ambiguity.

A user should instantly understand:

- what happened,
- whether action is needed,
- where the issue belongs,
- and whether the system is waiting for them.

---

## 3. Approved Feedback Types

The POS uses five approved feedback types:

| Type | Purpose | Use Case |
|---|---|---|
| Inline Validation | Field-level correction | Invalid amount, missing required input |
| Inline Status Message | Localized non-blocking outcome or warning | Saved filter, partial sync note, retry hint |
| Toast | Lightweight passive confirmation or background event | “Task created”, “Copied”, “Sync complete” |
| Banner / Section Alert | Surface-level warning or persistent context | Offline mode, account warning, partial system issue |
| Confirmation Modal | Blocking high-risk decision | Delete, archive, irreversible destructive action |

No other notification pattern is approved by default.

Browser `alert()`, floating success confetti, chat-style assistant pop-ins,
and decorative announcement panels are rejected.

---

## 4. Selection Rules

Choose feedback based on scope, urgency, and required user action.

- **Inline Validation** when a field itself is wrong
- **Inline Status Message** when a local area needs explanation or feedback
- **Toast** when a passive acknowledgment is enough
- **Banner / Section Alert** when a broader surface or session state needs attention
- **Confirmation Modal** when the user must explicitly approve a risky action

Canonical rule:

- Field issue → inline validation
- Local surface issue → inline status
- Passive success/info → toast
- Persistent contextual warning → banner
- Risky irreversible action → confirmation modal

Never use a toast when the user needs to fix something immediately.

---

## 5. Toast System

Toasts are passive notifications.
They confirm lightweight outcomes without interrupting flow.

Approved toast use cases:

- Item created successfully
- Settings saved
- Copied to clipboard
- Sync completed
- Background retry succeeded
- Non-urgent informational confirmation

Toasts are not mini-dialogs.
They are not miniature dashboards.
They are not replacements for validation, warnings, or destructive confirmations.

---

## 6. Toast Placement and Stack Rules

Toasts must appear in one consistent location across the POS.

### Approved Placement

- Desktop: top-right of the active app shell
- Mobile: top inset or bottom-safe area depending on native comfort, but one system choice only

The chosen location must remain consistent across every app.

### Stack Rules

- Maximum 3 visible toasts at one time
- New toasts push older ones away in a controlled stack
- Old toasts must dismiss before the stack becomes visually heavy
- Do not allow unbounded piling

If more than 3 events occur rapidly, collapse or replace intelligently.
A notification stack must not become a second interface.

---

## 7. Toast Anatomy

A toast should contain only what is needed:

- Optional status icon
- Short message
- Optional lightweight action when truly useful
- Dismiss control only if needed by the pattern

### Message Rules

- One sentence preferred
- Plain language
- No hype
- No exclamation abuse
- No vague phrases like “Success!” without context

Good:
- Transaction saved
- Task moved to Today
- Budget updated
- Sync completed

Bad:
- Great job! Everything worked perfectly!
- Success!
- Done!!!
- Your action has been processed successfully

The tone must feel operational, not celebratory.

---

## 8. Toast Timing

Toasts must dismiss automatically unless they contain a meaningful secondary action
or communicate something the user may need time to read.

Approved timing guidance:

- Short success/info toast: ~3–4 seconds
- Slightly longer warning/info with context: ~5–6 seconds
- Actionable toast: may remain longer, but must not linger indefinitely without reason

Toasts must disappear quietly.
No dramatic exit motion.
No manual cleanup burden for normal passive messages.

---

## 9. Toast Styling Rules

Toasts must follow the same neutral, restrained POS surface language.

Rules:

- Neutral card-like surface
- Thin border or restrained elevation only
- Clear text hierarchy
- Semantic color used sparingly, never flooding the entire component
- No loud gradients
- No heavy blur spectacle
- No oversized radius deviation from the system

Status indication should come from:
- icon,
- small accent strip or dot if needed,
- text clarity,
not from bathing the whole toast in saturated color.

A toast should feel like a quiet system signal.

---

## 10. Toast Actions

A toast may include one lightweight action only when it genuinely improves flow.

Approved actions:

- Undo
- Retry
- View
- Open

Rules:

- Maximum one secondary action
- Action must be short
- Action must be obviously optional
- Do not put primary workflow decisions inside toasts
- Do not put forms, dropdowns, or multiple buttons inside a toast

If a notification needs more than one meaningful action,
it is not a toast problem anymore.

---

## 11. Inline Validation

Validation errors belong at the point of failure.

Rules:

- Show error directly below or adjacent to the affected field
- Use descriptive language
- Preserve the user's input
- Highlight the field clearly
- Resolve visually once corrected

Validation must never appear only in a toast.

Examples of correct validation:
- Amount is required
- Date cannot be in the future
- Category must be selected

Examples of incorrect validation:
- Something went wrong
- Invalid input
- Error occurred

Field feedback must be specific enough to fix immediately.

---

## 12. Inline Status Messages

Inline status messages are for local feedback that belongs to one surface,
one card, one table, one panel, or one form section.

Approved use cases:

- “3 rows failed to sync. Retry.”
- “Draft saved locally.”
- “Filters updated.”
- “No internet. Changes will sync later.”

Rules:

- Place close to the affected surface
- Use neutral structure with restrained semantic emphasis
- Do not float it disconnected from the context
- Keep copy short and informative
- Allow persistence when the condition is ongoing

Inline status is often better than a toast because it stays where the problem lives.

---

## 13. Banners and Section Alerts

Use banners when the issue is broader than one field or one tiny control,
but not serious enough to block the entire interface.

Approved use cases:

- Offline mode
- Account permission limitation
- Partial outage affecting one module
- Import completed with warnings
- Read-only state for the current page

Rules:

- Place at the top of the affected surface or section
- Must be clearly tied to scope
- Must not look like marketing promotion
- Must not dominate the page unless severity truly requires it
- May persist until dismissed or resolved

A banner is a contextual warning rail, not a billboard.

---

## 14. Confirmation and Destructive Messaging

If the user is about to do something destructive or irreversible,
feedback must move out of the passive-notification layer and into the decision layer.

Rules:

- Use a confirmation modal
- State the consequence plainly
- Name the item being affected when possible
- Make destructive action visually clear
- Keep cancel safe and obvious

Never use a toast to ask for dangerous confirmation.
Never use passive messaging for irreversible risk.

---

## 15. Success, Warning, Error, and Info Hierarchy

All semantic states must exist, but they must be used with discipline.

### Success

Use for:
- completed save
- created record
- successful sync
- finished action

Success should be the quietest semantic state.
The system working normally is not a spectacle.

### Warning

Use for:
- recoverable issue
- caution
- partial failure
- non-blocking risk

Warnings should create attention, not alarm.

### Error

Use for:
- failed action
- blocked submission
- sync failure
- invalid destructive outcome

Errors must be specific and actionable whenever possible.

### Info

Use for:
- neutral update
- contextual explanation
- passive background event

Info should guide without dramatizing.

---

## 16. Notification Motion

Notification motion must follow the POS interaction language.

Rules:

- Toasts slide or fade in quietly
- No bounce
- No spring
- No overshoot
- No confetti
- No celebratory explosion
- No loud stack choreography

Notifications should arrive clearly and leave quietly.
Motion exists only to make the state change legible.

---

## 17. Accessibility and Focus Rules

Notifications must remain accessible.

Rules:

- Do not steal focus for passive toasts
- Inline errors must remain associated with their fields
- Confirmation modals must follow proper focus rules
- Status messages must be readable without motion dependence
- Color must never be the only signal of severity
- Action labels must be explicit

A notification that is visible but not understandable is still a failure.

---

## 18. Prohibited Patterns

The following notification treatments are banned across the POS:

- ❌ Validation shown only in toast
- ❌ Success confetti
- ❌ Browser alert dialogs
- ❌ Multiple competing notification locations across apps
- ❌ Loud full-color toast backgrounds
- ❌ Long paragraphs inside toasts
- ❌ More than one optional action in a toast
- ❌ Toast used for destructive confirmation
- ❌ Passive toast for urgent blocking problem
- ❌ Marketing-style banners inside product workflows
- ❌ Repeating duplicate toasts for the same event
- ❌ Notification sound effects by default
- ❌ Persistent undismissed stack clutter
- ❌ Vague copy like “Something happened” or “Done successfully”

If a notification adds noise, ambiguity, or emotional theatrics,
it is wrong for this system.

---

## 19. System Intent

The POS notification system exists to make system feedback calm, precise, and reliable.

The user should never guess:
- what happened,
- whether something failed,
- whether action is required,
- or where they should look next.

Good notifications do not perform.
They clarify.
