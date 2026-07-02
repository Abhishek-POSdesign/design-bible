# Loading Types — Selection Guide (Bible Ch.17)

Four approved loading types only. No full-screen spinners, mascots, or decorative waiting animations.

| Type | Component | Use when |
|---|---|---|
| Skeleton | `Skeleton`, `SkeletonGroup` | Layout structure is known — cards, tables, forms |
| Inline Spinner | `Spinner` | Only one local element is busy — button save, tiny refresh |
| Progress Bar | `ProgressBar` | Measurable ongoing process — import, export, sync |
| Deferred Empty Hold | (pattern, no component) | First fetch might be briefly empty — hold before rendering `EmptyState` |

```jsx
// Save button pending state — Inline Spinner
<Button disabled={saving} icon={saving ? <Spinner size={14} /> : undefined}>
  {saving ? 'Saving…' : 'Save'}
</Button>

// Long tracked process — Progress Bar
<ProgressBar value={62} label="Importing transactions…" />

// Deferred Empty Hold — never flash empty before data has a fair chance to load
const [settled, setSettled] = React.useState(false);
React.useEffect(() => { const t = setTimeout(() => setSettled(true), 400); return () => clearTimeout(t); }, []);
{!settled ? <SkeletonGroup lines={3} /> : items.length ? <List items={items} /> : <EmptyState ... />}
```

## Rules
- If the product knows the shape of the incoming content, it must use a Skeleton — never fall back to a generic spinner.
- Never show a fake stalling percentage on a ProgressBar. If progress can't be measured, use `indeterminate`.
- Overlays (Drawer/Modal/BottomSheet) open first, then show their internal loading state — never delay the open animation to wait for data.
- On refresh, preserve the current structure in place; don't collapse and rebuild the surface.
