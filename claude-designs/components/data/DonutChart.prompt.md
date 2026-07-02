DonutChart — Categorical ring visualization using SVG stroke (no CSS conic-gradient).

```jsx
<DonutChart
  size={140}
  strokeWidth={12}
  centerValue="84%"
  centerLabel="Equity"
  segments={[
    { value: 84, color: '#ccebda', label: 'Equities' },
    { value: 10, color: '#fdf0cd', label: 'Bonds' },
    { value: 6,  color: '#dcd6f7', label: 'Cash' },
  ]}
/>
```

Stroke approach (not path arcs) — rendering compliant with "no nested div donut holes" rule.
Background track inherits `--track-fallback` token automatically.
Segment colors: use Component C trophy palette (`--trophy-mint-bg`, `--trophy-gold-bg`, `--trophy-lavender-bg`) or any explicit solid hex.
Center value uses Inter Black with tabular-nums — never Instrument Sans for center numerics.
`strokeWidth` defaults to 12px per the Categorical Donut Ring Standard.
Pair with a legend built from DataRow components, NOT with chart tooltips.
