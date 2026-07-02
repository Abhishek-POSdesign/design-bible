# EmptyState

An empty state is a first impression, never just the absence of data (Bible Ch.15).
Every view that can have zero items must use this component instead of a bare
"no data" string.

## Structure — three parts, always
1. **Visual** — a single Lucide outline icon, 48px container, `--text-muted`. Never emoji.
2. **Message** — headline (16px/700/`--text-primary`) + one sub-line (13px/`--text-secondary`, max 28ch).
3. **Primary action** — resolves the emptiness. Pass a `<Button variant="primary">` as the `action` prop.

## Rules
- No emoji as visuals — Lucide icons only, always.
- Never write "No data found" — too technical, no warmth, no action.
- Never omit the primary action unless it's genuinely not applicable.
- Animates in once on mount (fade + 4px rise, icon gets a slow float loop); fully
  disabled under `prefers-reduced-motion`.
- Same icon container size (48px) across every app — Finance, Task Manager, Biz Research.

## Reference library (Bible Ch.15)
| View | Icon | Title | Sub |
|---|---|---|---|
| Transactions | receipt | No transactions this month | Add your first income or expense to start. |
| Budgets | pie-chart | No budgets set | Create spending limits to stay on track. |
| Goals | target | No goals yet | Define what you're saving for. |
| Task list | check-circle | No tasks here | Add your first task to get moving. |
| Research list | folder-open | No research yet | Start documenting a business idea. |
