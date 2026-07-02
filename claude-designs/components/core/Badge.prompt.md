Badge — Accessible solid-state status indicator for triage and state display.

```jsx
<Badge variant="success">Active</Badge>
<Badge variant="alert">Overdue</Badge>
<Badge variant="blue" outline>Pending</Badge>
<Badge variant="mint">Wellness</Badge>
<Badge variant="gold">Capital</Badge>
```

Variants: `success`, `alert`, `green`, `blue`, `mint`, `gold`, `lavender`, `neutral`.
`outline` prop applies transparent fill + 1px border in the variant's ink color.
Text is always UPPERCASE with wide tracking — auto-applied via CSS.
Never use pastel backgrounds not in this token set. Dull low-contrast strings are banned.
