Tag — Compact categorization label for entries, filters, and inline annotations.

```jsx
<Tag>Equities</Tag>
<Tag onRemove={() => removeTag('Health')}>Health</Tag>
<Tag>Q2 2024</Tag>
```

Tags sit inline with data rows or in a flex wrap filter strip.
Pass `onRemove` to enable a × dismiss button — color transitions on hover.
Background inherits the muted button surface token; border is the hairline token.
