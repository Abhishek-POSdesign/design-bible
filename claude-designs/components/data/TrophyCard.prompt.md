TrophyCard — Component C: High-priority goal achievement and celebration card.

```jsx
<TrophyCard
  theme="mint"
  title="Wellness Streak"
  value="47"
  unit="days"
  description="Consecutive workout days — personal best"
  progress={78}
/>

<TrophyCard
  theme="gold"
  title="Net Worth Goal"
  value="$284K"
  unit="/ $350K"
  description="Capital accumulation target — Q4 2024"
  progress={81}
/>

<TrophyCard theme="lavender" title="Reading Goal" value="38" unit="books" />
```

Themes map to Component C matte pastel tokens: `mint` (wellness), `gold` (capital), `lavender` (knowledge).
The 32px inner cushion (--space-2xl) is mandatory — never reduce.
Ambient shadow color matches the theme token and is applied automatically.
Do NOT apply full pastel backgrounds to Component A MetricCards — that is a design violation.
