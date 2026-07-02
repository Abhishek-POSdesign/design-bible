# Chapter 15 — Empty States
> Status: ✅ Approved | July 2026
> Applies to: Finance App, Task Manager, Biz Research

## Philosophy
An empty state is a first impression — never just the absence of data.
Every view that can have zero items must have a designed empty state.
Rule: if the user can see it, it must look intentional.

## Structure — Three Parts, Always
1. A visual — Lucide icon, 48px container, --text-muted. Never emoji.
2. A message — headline + one sub-line. Warm, plain language.
3. A primary action — resolves the emptiness.

```html
<div class="empty-state">
  <div class="empty-icon"><!-- Lucide icon 24-28px stroke --></div>
  <h3 class="empty-title">No transactions yet</h3>
  <p class="empty-sub">Add your first income or expense to get started.</p>
  <button class="btn full">Add Transaction</button>
</div>
```

```css
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 48px 24px;
  color: var(--text-secondary);
}
.empty-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
  color: var(--text-muted);
}
.empty-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}
.empty-sub {
  font-size: 13px;
  color: var(--text-secondary);
  max-width: 28ch;
  line-height: 1.5;
  margin-bottom: 24px;
}
```

## Animation
First mount only — not every render. Respect prefers-reduced-motion.
```css
.empty-state {
  animation: emptyFadeUp 280ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes emptyFadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
.empty-icon {
  animation: emptyFadeUp 280ms cubic-bezier(0.16, 1, 0.3, 1) forwards,
             emptyFloat 3s ease-in-out 280ms infinite;
}
@keyframes emptyFloat {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-4px); }
}
@media (prefers-reduced-motion: reduce) {
  .empty-state, .empty-icon { animation: none; }
}
```

## Empty State Library

### Finance App
| View         | Icon      | Title                      | Sub                                          | Action          |
|--------------|-----------|----------------------------|----------------------------------------------|-----------------|
| Transactions | receipt   | No transactions this month | Add your first income or expense to start.   | Add Transaction |
| Budgets      | pie-chart | No budgets set             | Create spending limits to stay on track.     | Set Budget      |
| Goals        | target    | No goals yet               | Define what you're saving for.               | Add Goal        |
| Split bills  | split     | No splits recorded         | Track shared expenses with others.           | Add Split       |

### Task Manager
| View            | Icon         | Title                 | Sub                                      | Action   |
|-----------------|--------------|-----------------------|------------------------------------------|----------|
| Task list       | check-circle | No tasks here         | Add your first task to get moving.       | Add Task |
| Completed       | trophy       | Nothing completed yet | Finish a task and it appears here.       | —        |
| Checklist items | list-checks  | No checklist items    | Break this task into smaller steps.      | Add Item |

### Biz Research
| View               | Icon        | Title             | Sub                                               | Action       |
|--------------------|-------------|-------------------|---------------------------------------------------|--------------|
| Research list      | folder-open | No research yet   | Start documenting a business idea.                | New Research |
| Notes in research  | file-text   | No notes added    | Write your first observation or finding.          | Add Note     |
| Updates feed       | activity    | No updates logged | Track progress and decisions here.                | Log Update   |

## Prohibited
- ❌ Emoji as visuals (📂 ✅ 🎯) — Lucide icons only, always
- ❌ "No data found" — too technical, no warmth, no action
- ❌ Empty state without a primary action (unless genuinely N/A)
- ❌ absolute positioning inside scroll containers — flexbox on parent
- ❌ Different icon sizes per-app — always 48px container
