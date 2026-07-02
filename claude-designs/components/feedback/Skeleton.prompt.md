# Skeleton

The primary loading pattern in the POS (Bible Ch.17 §5). A skeleton must
mirror the final layout closely enough that the user already understands
what's loading — never a generic placeholder block.

```jsx
{loading ? (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
    <Skeleton variant="title" width="40%" />
    <Skeleton variant="text" />
    <SkeletonGroup lines={2} />
  </div>
) : (
  <MetricCard label="Net Worth" value="₹42,18,300" />
)}
```

## Selection
- Known layout → Skeleton (this component)
- One local element busy → Spinner
- Measurable long process → ProgressBar
- Uncertain first load → hold the previous/empty view briefly before rendering an EmptyState (Deferred Empty Hold, Bible Ch.17 §11)

## Rules
- Match the real component's border-radius family — that's why `variant` maps to the system radius tokens, not custom values.
- Motion is optional and must stay soft: a slow 2.2s opacity drift, never a sweeping gradient or fast pulse. Fully static under `prefers-reduced-motion`.
- Size skeletons to the exact final height so content settles with zero layout shift when it arrives.
- Tables load as skeleton **rows** (`variant="row"`), not unrelated card placeholders.
- Never mix a Skeleton with a Spinner on the same surface for the same operation.
