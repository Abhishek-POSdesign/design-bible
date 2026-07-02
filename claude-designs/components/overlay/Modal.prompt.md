# Modal

The center decision surface (Bible Ch.16 §6). Use for **edit**, **review**,
**confirm**, and **destructive** decisions — never for add/create flows
(those are a Drawer/FlyoverPanel) and never side-mounted or full-screen on desktop.

```jsx
const [open, setOpen] = React.useState(false);

<div style={{ position: 'relative', minHeight: 400 }}>
  <Button onClick={() => setOpen(true)}>Delete Transaction</Button>

  <Modal
    open={open}
    onClose={() => setOpen(false)}
    title="Delete transaction?"
    subtitle="This cannot be undone."
    tone="danger"
    closeOnBackdrop={false}
    footer={
      <>
        <Button variant="muted" onClick={() => setOpen(false)}>Cancel</Button>
        <Button variant="primary" style={{ background: 'var(--alert-text)' }} onClick={confirmDelete}>
          Delete
        </Button>
      </>
    }
  >
    Removing "Groceries — ₹2,340" from March cannot be reversed.
  </Modal>
</div>
```

## Rules
- Must render inside a `position: relative` container (it positions `absolute` within it, matching FlyoverPanel).
- Center aligned only, max-width 480px, always has a title and explicit close control.
- Motion: fade + subtle scale only (175ms `--ease-premium`) — no zoom, no spring.
- Destructive/high-effort forms: set `closeOnBackdrop={false}` so a stray click can't discard work.
- Canonical rule: **Add → Drawer, Edit/Confirm/Destructive → Modal.**
- Never put validation only in a toast — inline errors belong inside the modal body, next to the field.
