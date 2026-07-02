# Notifications — Selection Guide (Bible Ch.18)

Five approved feedback types. Choose by scope, urgency, and required action — never by visual preference.

| Type | Component | Use when |
|---|---|---|
| Inline Validation | `Input`'s `error` prop | A field itself is wrong |
| Inline Status Message | plain text near the surface | A local area needs explanation (e.g. "Draft saved locally") |
| Toast | `Toast` / `ToastStack` | Passive success/info acknowledgment |
| Banner / Section Alert | `Banner` | Persistent or broader-than-one-field context (offline, read-only, partial outage) |
| Confirmation Modal | `Modal` with `tone="danger"` | Risky, irreversible action needs explicit approval |

```jsx
// Field issue → inline validation (never a toast)
<Input label="Amount" error="Amount is required" />

// Passive success → toast
notify({ variant: 'success', message: 'Budget updated' });

// Persistent context → banner
<Banner variant="warning" title="You're offline" message="Changes will sync later." />

// Risky action → confirmation modal
<Modal title="Delete goal?" tone="danger" footer={<Button style={{ background: 'var(--alert-text)' }}>Delete</Button>}>
  This cannot be undone.
</Modal>
```

## Rules
- Never validate a field only inside a toast — errors render inline, below the field.
- Never use a toast for a destructive confirmation — that's a Modal's job.
- Success is the quietest semantic state — no confetti, no "Great job!" copy.
- Copy is one plain sentence: "Transaction saved", not "Success! Everything worked perfectly!"
- Color is never the only signal — pair every semantic tone with an icon or explicit label.
