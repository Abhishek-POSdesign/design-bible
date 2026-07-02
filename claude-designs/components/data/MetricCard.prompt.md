MetricCard — Component A: Elevated floating KPI display for the Personal OS dashboard.

```jsx
<MetricCard
  label="Net Worth"
  value="$284,500"
  delta="+4.2%"
  deltaPositive={true}
  subtext="vs last month"
  badge={<Badge variant="green">On Track</Badge>}
/>

<MetricCard
  label="Resting HR"
  value="58"
  unit="BPM"
  subtext="7-day average"
/>
```

Surface always stays `--card-surface` (white). Full pastel container fills are banned.
High-priority state is shown through the `badge` slot (outline badge with 10% tint) — never via background color.
Value uses Inter Black (font-display) with tabular-nums for numerical stability.
Delta renders ▲ green or ▼ red based on `deltaPositive`.
