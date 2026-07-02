DataRow — Component B: Flat utility row for history logs and execution arrays.

```jsx
<DataRow
  label="S&P 500 ETF Purchase"
  meta="Jun 12 · Equities"
  value="$4,200"
  badge={<Badge variant="green">Executed</Badge>}
  onClick={() => openFlyover(row)}
/>

<DataRow label="Morning Run" meta="Today · Fitness" value="5.2 km" />
<DataRow label="Essay Draft" meta="Writing" badge={<Badge variant="neutral">Draft</Badge>} />
```

Zero shadow — the surface must remain completely flat.
Padding is locked: 8px top/bottom, 16px left/right — do not adjust.
No zebra-striping. Rows are separated by hairline border-bottom only.
`onClick` adds a pointer cursor and a subtle hover tint — triggers the FlyoverPanel.
Icons: 16px, stroke 1.5, color: inherit. Always adjacent to a text label.
