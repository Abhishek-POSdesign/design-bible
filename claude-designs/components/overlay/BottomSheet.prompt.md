BottomSheet — mobile-only overlay for short/simple flows (Bible Ch.16 §8): date
selection, quick filters, small confirmations, one/two-step lightweight input.

For longer mobile create/edit workflows, use a Modal sized to full viewport
width instead (Full-Screen Sheet) — a bottom sheet must never absorb a
multi-section form.

```jsx
<BottomSheet
  open={open}
  onClose={() => setOpen(false)}
  title="Filter by category"
  footer={<Button variant="primary" onClick={apply}>Apply</Button>}
>
  {/* short option list */}
</BottomSheet>
```

Must render inside a `position: relative` mobile viewport container.
Motion: direct upward arrival only — no spring, no bounce, no stagger.
