# Chapter 22 — CFO Notebook: Persistent AI Memory Architecture

*Added July 2026 — Finance Manager v2.28 · Storage updated v2.29*

---

## The Problem: AI Amnesia

A local AI assistant (Ollama) has no native memory between sessions. Every conversation starts from zero. Chat history is session-scoped and deliberately wiped after 24 hours to keep conversations fresh and context windows lean.

For a household CFO assistant, this is a structural limitation. Meaningful financial strategy requires continuity:

- "We decided to cap food delivery at Rs 3,000 a month"
- "A home loan prepayment of Rs 50,000 is planned for August"
- "The emergency fund target is Rs 1.8 lakh — we're Rs 40,000 short"

These are standing facts. Repeating them at the start of every conversation is friction the user should not have to carry. The CFO Notebook eliminates that friction.

---

## What the CFO Notebook Is

The CFO Notebook is a **persistent, entry-based memory store** for the AI assistant. It stores compact notes — written by the AI, triggered by the user — that are automatically injected into every future conversation as context.

The AI reads its own past notes without being asked. The user does not need to recap history or say "remember when we discussed...". Memory is ambient.

The notebook is distinct from:
- **Chat history** — session-scoped, conversational back-and-forth, 24-hour wipe
- **The user's personal notebook** — the user's own notes synced to the cloud, never touched by the AI

---

## Storage Architecture

The notebook uses a two-layer storage strategy: **localStorage as the read path** (instant access, works offline) and **Supabase as the backup** (durable cloud copy, restored automatically on next sync).

**localStorage** (`financeApp_cfoNotebook`) is read on every AI message. This keeps conversations fast with no network dependency — the AI always has its notes ready immediately.

**Supabase** (`settings.cfo_notebook` TEXT column) receives a copy on every sync cycle. This happens automatically without any user action — the same pull/push cycle that syncs transactions, budgets, and goals also syncs the notebook. No manual export, no separate backup step.

**Conflict resolution:** If two devices both have notebook entries, the version with the most recently created entry (highest `ts` value) wins and overwrites the other. This is appropriate since the notebook is single-device (Ollama is local-only), so conflicts are rare and recency is the right tiebreaker.

**Durability:** A browser "Clear site data" operation wipes localStorage, but the Supabase copy is unaffected. On next app load and sync, the notebook is pulled back from Supabase and localStorage is restored. The user loses nothing.

**Why primary access is still localStorage, not Supabase:**  
The AI itself is local (Ollama). Reading notebook entries from Supabase on every chat message would add network latency to every single Q&A exchange. localStorage reads are synchronous and instant. The two-layer approach gets both: speed for reads, safety for writes.

---

## Entry Types

Three distinct entry types cover different memory timescales:

### Pin — Moment capture
Created when the user clicks the bookmark icon on an assistant message bubble.

The AI generates a 2–3 line summary of that specific Q&A exchange, focused on what is worth remembering: the insight, the decision, the specific number. The user does not write this note — they only decide the exchange was worth keeping. The AI does the writing.

If the AI is unreachable at the time of pinning, the first 350 characters of the response are saved verbatim as a fallback.

**When to use:** After any response that contains a decision, a discovered pattern, or a specific number the user wants to carry forward.

### Session — Conversation summary
Created by the "Save Session" button inside the Notebook panel.

The AI summarizes the entire current conversation (last 10 messages) into a 4–6 line brief covering: key questions asked, numbers discussed, decisions made, action items.

**When to use:** At the end of any meaningful strategic discussion — budgeting for a quarter, planning a large purchase, reviewing year-end spending.

### Compact — Memory consolidation
Created by the "Compact" button inside the Notebook panel.

The AI reads all existing notebook entries and consolidates them into a single 8–12 line brief, grouped by theme: spending patterns observed, decisions taken, active goals, standing rules. All prior entries are deleted and replaced with this one entry. A `covers` field records the date range of what was consolidated.

**When to use:** Monthly or quarterly, to keep the notebook focused and prevent context bloat.

---

## How Memory Gets Into Conversations

Every question sent to the AI is bundled with the user's full financial data package (transactions, budgets, goals, bills). The notebook entries are added to this package, capped at 1,500 characters.

The AI's standing instruction includes:
> "When the user's past decisions, standing strategies, or patterns noted in cfoNotebook are relevant — use that context."

This routing instruction is always active. The AI checks its notebook automatically on every message. The user does not manage this.

---

## The Three-Layer Memory Model

| Layer | What it holds | Duration | User action to clear |
|---|---|---|---|
| **Chat history** | Full conversation turns | 24 hours (auto-wipe) | Clear button |
| **CFO Notebook** | Key insights, decisions, standing rules | Permanent | Delete per entry; Compact to consolidate |
| **Persona** | AI role, behavioral instructions | Permanent | Settings modal (PIN-gated) |

All three layers are included in every AI conversation automatically. They work together — chat history for the current session's thread, notebook for accumulated long-term context, persona for standing behavioral configuration.

---

## User Interface

The Notebook opens as a view swap inside the AI panel (see Chapter 19). The chat messages and input footer hide; the notebook view takes their place. The panel header stays visible throughout.

**Toolbar:** Title · Save Session · Compact · Close

**Entry list:** Newest entries first. Each entry shows:
- Date
- Type badge (pin / session / compact)
- The note text
- A delete button

**Indicator dot:** The notebook button in the panel header shows a green dot when entries exist. This is ambient feedback — the user can see at a glance that the AI has accumulated context, without opening the notebook.

---

## The Writing Cycle

The intended rhythm for long-term use:

1. **During a conversation:** Pin any response that captures a useful insight or decision
2. **End of a meaningful session:** Click "Save Session" to capture the whole discussion
3. **Monthly or quarterly:** Click "Compact" to consolidate everything into a single brief

This keeps the notebook under 5–6 entries at any given time, well within the 1,500-character injection limit, and ensures the AI always has the highest-signal context from the most recent period.

---

## Design Principles Demonstrated

**AI does the writing, user does the curating.**  
The user decides what is worth keeping. The AI decides how to express it compactly. Neither does the other's job. This split prevents the notebook from becoming either too sparse (user can't be bothered to write) or too verbose (AI writes everything without judgment about importance).

**Memory is injected, not recalled.**  
The AI does not need to be asked "do you remember...". Memory is part of the context it receives on every message, like a briefing document that's always on the desk.

**Compact prevents memory rot.**  
Without consolidation, a notebook of 50 entries over a year would become unwieldy — full of outdated decisions, superseded strategies, resolved issues. The Compact feature treats the notebook as a living document that gets refined over time, not an append-only log.

**Durability without ceremony.**  
The notebook backs up to Supabase automatically on every sync — no export button to remember, no manual backup routine. The user accumulates years of strategic memory and it persists across browser reinstalls, device replacements, and Chrome data clears. The right backup is one that happens without the user thinking about it.

**Speed and safety are not a tradeoff.**  
localStorage gives instant reads (synchronous, no network). Supabase gives durable writes (cloud, survives everything). The two-layer architecture delivers both simultaneously — reads hit localStorage, writes go to both. There is no moment where the user is choosing between fast and safe.
