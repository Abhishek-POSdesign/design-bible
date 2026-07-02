# Toast / ToastStack

Passive, lightweight confirmation only (Bible Ch.18 §5). Never validation, never a destructive confirmation.

```jsx
const [toasts, setToasts] = React.useState([]);
function notify(t) {
  const id = Date.now();
  setToasts(s => [...s, { id, ...t }]);
  setTimeout(() => setToasts(s => s.filter(x => x.id !== id)), 3500);
}

notify({ variant: 'success', message: 'Transaction saved' });
notify({ variant: 'error', message: 'Sync failed', action: { label: 'Retry', onClick: retry } });

<ToastStack toasts={toasts} onDismiss={(id) => setToasts(s => s.filter(t => t.id !== id))} />
```

Must render inside a `position: relative` app-shell container (it positions
itself `absolute` top-right, matching FlyoverPanel/Modal).

## Rules
- One sentence, plain language: "Transaction saved" — not "Success! Everything worked perfectly!"
- Auto-dismiss: ~3–4s for success/info, ~5–6s if the copy needs more reading time. No manual cleanup burden.
- Max 3 visible at once (`ToastStack` enforces this) — new ones push old ones out, never pile unbounded.
- At most one secondary action (Undo / Retry / View / Open). Never a form, dropdown, or multiple buttons.
- Never use a toast for field validation (use `Input`'s `error` prop) or destructive confirmation (use `Modal` with `tone="danger"`).
