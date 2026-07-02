Button — Primary interactive control for the Personal OS ecosystem.

```jsx
<Button variant="primary" onClick={() => {}}>Save Entry</Button>
<Button variant="muted" size="sm">Cancel</Button>
<Button variant="outline" icon={<PlusIcon size={16} strokeWidth={1.5} />}>Add Row</Button>
<Button disabled>Sync Pending</Button>
```

Variants: `primary` (dark fill), `muted` (soft tint), `outline` (hairline border).
Sizes: `sm`, `md` (default), `lg`.
Icons: pass a Lucide icon at 16px stroke 1.5 via the `icon` prop; it auto-positions left of label.
Hover physics: translateY(-3px) scale(1.015); Press: translateY(-1px) scale(0.99).
Never apply glow, color drops, or neon box-shadows on hover — these are banned.
