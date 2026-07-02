FlyoverPanel — Master-Detail side panel (right-dock, non-destructive overlay).

```jsx
const [open, setOpen] = React.useState(false);

<div style={{ position: 'relative', overflow: 'hidden' }}>
  {/* ...main content... */}
  <DataRow label="Apple Inc." onClick={() => setOpen(true)} />

  <FlyoverPanel open={open} onClose={() => setOpen(false)} title="Apple Inc. — AAPL">
    <MetricCard label="Current Price" value="$187.42" delta="+1.2%" deltaPositive />
    <DataRow label="Purchase Date" value="Mar 14, 2024" />
    <DataRow label="Shares Held" value="12" />
    <DataRow label="Cost Basis" value="$178.30" />
  </FlyoverPanel>
</div>
```

Must be rendered inside a `position: relative; overflow: hidden` container.
Backdrop: rgba(0,0,0,0.14) flat overlay — backdrop-filter is banned.
Slide transition: right 175ms cubic-bezier(0.16, 1, 0.3, 1) — high-velocity physics.
Width: `size="default"` → 400px, `size="extended"` → 480px (form-heavy cases only). No third width is allowed anywhere in the POS (Bible Ch.16 §5). Dismiss on backdrop click or ✕.
Content: padded, scrollable. Style inner cards/rows with 12px border-radius per spec.

Canonical overlay rule (Bible Ch.16 §4): **Add → this Drawer. Edit/confirm/destructive → `Modal`.**
