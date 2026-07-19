# Chapter 19 — AI Chat Panel: Sidebar Design and Content Architecture
> Status: ✅ Approved | July 2026
> Applies to: All POS apps and future standalone apps

---

## Overview

This chapter documents the design pattern for the AI assistant panel used across the POS ecosystem. The panel takes the form of a **fixed embedded sidebar** — not a modal, not a drawer, not a full-screen overlay. It physically shifts application content rather than covering it.

The core principle: the AI is a co-pilot, not an interruption. The user should be able to look at their app content and ask the AI a question at the same time.

Each app names its own AI operator instance (for example, Finance Manager's operator is called "Finn AI"). The instance name changes per app, but the panel pattern documented in this chapter is identical across every POS app.

---

## Panel Positioning and Content Shifting

The AI panel is fixed to the right edge of the viewport, full viewport height. When closed, it is translated off-screen (`translateX(100%)`). When open, it slides into position.

**No backdrop.** There is no dimming overlay behind the panel. The user can see and interact with app content while the panel is open.

**Content shifting, not content covering:**
On screens above 900px, the main app container receives `margin-right: 420px` when the panel opens. Content moves left to make room — it is never hidden behind the panel.

The critical implementation detail: the `margin-right` must target the outermost `position: static` block element (e.g. `#app`). Targeting flex items (inner layout containers) does not work — flex items ignore `margin-right` because their sizing is controlled by the flex parent, not by margins.

**Mobile:** Content shifting is disabled below 900px. The panel covers the full viewport width.

---

## Panel Width

420px on desktop. This is a deliberate number:
- Wide enough to read multi-paragraph AI responses without awkward line wrapping
- Narrow enough to leave usable app content visible on a 1280px screen (860px remaining)
- The panel and the main content feel like peers, not one dominating the other

---

## Header: One Row, Always

The panel header is a single compact row. Never tabs, never mode toggles.

```
[App AI Name]   [● model-name · local]     [📓] [📊] [🗑] [⚙] [✕]
```

Left side: small title showing the app's AI operator name, then a **live status pill** showing the active model name and provider type ("local" or "cloud") plus a connectivity dot.

Right side: icon-only action buttons, consistent sizing with the rest of the app's header icons.

**Live status dot:**
On panel open, a non-blocking 3-second request hits the local AI endpoint. If the AI responds, the dot turns green. If it times out or errors, the dot stays grey. No blocking error — the user discovers the AI is offline when they send a message. The visual state is ambient information, not a gate.

---

## Message Bubbles

User messages: accent-color background, white text, right-aligned.
Assistant messages: neutral surface, left-aligned.

Position and color convey sender. No labels, no avatars, no timestamps on every bubble.

Each assistant bubble has a **feedback row** beneath it with icon buttons:
- Accept (✓) — marks the answer as useful for learning
- Reject (✗) — marks it as not useful
- Revise — lets the user correct the answer inline (no browser `prompt()`)
- **Bookmark** — saves the Q&A to the AI Memory Notebook (see Chapter 22)

The feedback row has low default opacity. It does not interrupt the visual flow of the conversation — it is discoverable but not prominent.

---

## Empty State: Chips Only

When no chat history exists, show preset quick-action chips only. No description copy, no illustration, no "Getting started" header. The chips are the entire invitation to interact.

Chips cover the most common entry points for that app's domain. Four maximum, domain-specific only.

---

## Settings: Always in a Separate Modal

AI settings open in a dedicated modal layered above the panel (`z-index: 1100`). Settings do **not** expand inside the panel (which would push messages out of view and make the panel feel unstable).

The settings modal has two sections:
1. **Connection** — provider selector, endpoint URL, model name, Test Connection button
2. **Persona** — PIN-gated, 5–7 field form defining the AI's role and behavioral constraints (see Chapter 20)

Persona is PIN-protected because it defines the AI's identity. An accidental change silently alters every AI response.

---

## Panel-Within-Panel: The Notebook View

The AI Memory Notebook (Chapter 22) is a secondary view that lives **inside** the AI panel. It does not open as a separate modal or navigate away.

When the notebook opens:
- The message list and input footer are hidden
- The notebook panel slides into the same space
- The panel header remains visible throughout

This "panel swap" pattern keeps the notebook spatially bound to the AI. The user feels like they flipped a notepad open next to the chat — not like they navigated somewhere else.

---

## Design Principles Demonstrated

**Co-presence, not interruption.**
The panel never dims or blocks the underlying app. A user can glance at their app content while formulating a question to the AI. The AI is a tool in the room, not a room you enter.

**Spatial permanence.**
The panel is always at the same position. Once a user learns where it is, it never surprises them. Panels that animate from different directions or appear in different contexts destroy spatial memory.

**Offline-first visual state.**
The status dot makes connectivity visible at a glance, without any interaction required. The panel remains fully functional as a composer even while the AI is unreachable — the user types their question, and discovers the connectivity issue only when they need to, not before.

**No modal within modal.**
Settings are a modal above the panel. The notebook is a view swap inside the panel. Neither creates stacking context conflicts or requires the user to close one thing before opening another.

**Icon buttons, never labelled buttons, in the header.**
The header row is narrow. Labels at this scale would either truncate or crowd the row. The actions (notebook, report, trash, settings, close) are universal enough to be icon-only. Tooltip on hover for keyboard and discoverability.

**One panel pattern, many apps.**
Finance Manager, Task Manager, Learning Hub, Biz Research Hub, and every future POS app implement this identical sidebar architecture. Only the operator name, quick-action chips, and domain content differ.
