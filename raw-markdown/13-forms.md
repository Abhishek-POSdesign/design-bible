# Chapter 13 — Forms & Input System
> Status: ✅ Approved | July 2026
> Audit source: POS-Finance-App, POS-Task-Manager, POS-Biz-Research (real code review)

## The Problem This Chapter Solves
Every app previously defined its own input styling independently.
This chapter eliminates that. One canonical input spec. Every app.
No exceptions.

## The Five POS Input Types
| Type       | Where Used                           | Notes                             |
|------------|--------------------------------------|-----------------------------------|
| Text field | Add task, add note, research titles  | Single line, most common          |
| Amount     | Add transaction, budget targets      | Large numeral display, tabular-nums |
| Dropdown   | Category, type, priority             | Native select, uniformly styled   |
| Date       | Transaction date, task due date      | Custom picker — native RETIRED    |
| Textarea   | Research notes, task descriptions    | Multi-line, vertical resize only  |

## Canonical Input Spec
```css
.input-group { margin-bottom: 16px; }

.input-group label {
  display: block;
  font-size: 10px;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
}

.input-group input,
.input-group select,
.input-group textarea {
  width: 100%;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--surface-0);
  color: var(--text-primary);
  font-size: 14px;
  font-family: var(--font-sans);
  transition: border-color 180ms cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 180ms cubic-bezier(0.16, 1, 0.3, 1);
  -webkit-appearance: none;
  appearance: none;
}
.input-group input:focus,
.input-group select:focus,
.input-group textarea:focus {
  outline: none;
  border-color: var(--text-accent);
  box-shadow: 0 0 0 3px var(--bg-accent);
}
.input-group textarea {
  resize: vertical;
  min-height: 80px;
  line-height: 1.5;
}
```

## The Amount Field
₹ symbol is a static prefix label — never inside the input string.
Auto-formats with Indian number system (1,23,456 not 1,234,567) on
every keystroke. Color shifts live when Income/Expense toggle changes.

```html
<div class="amount-field-wrapper">
  <span class="amount-prefix">₹</span>
  <input type="text" inputmode="decimal" class="amount-input"
         placeholder="0" data-raw-value="0" autocomplete="off">
</div>
```

```css
.amount-field-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  padding: 16px;
}
.amount-prefix {
  font-size: 28px;
  font-weight: 700;
  color: var(--text-muted);
  user-select: none;
}
.amount-input {
  font-size: clamp(28px, 6vw, 40px);
  font-weight: 900;
  font-family: var(--font-sans);
  font-variant-numeric: tabular-nums;
  background: none;
  border: none;
  outline: none;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}
.amount-input.income  { color: var(--text-success); }
.amount-input.expense { color: var(--text-danger);  }
```

### Indian Number Formatting
```javascript
// ALWAYS use type="text" with inputmode="decimal" — NOT type="number"
amountInput.addEventListener('input', (e) => {
  let raw = e.target.value.replace(/[^0-9.]/g, '');
  const parts = raw.split('.');
  if (parts.length > 2) raw = parts + '.' + parts.slice(1).join('');
  amountInput.dataset.rawValue = raw;
  e.target.value = formatIndianNumber(raw);
});

function formatIndianNumber(raw) {
  if (!raw) return '';
  const [intPart, decPart] = raw.split('.');
  let result = intPart;
  if (intPart.length > 3) {
    const last3 = intPart.slice(-3);
    const rest  = intPart.slice(0, -3);
    result = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + last3;
  }
  return decPart !== undefined ? result + '.' + decPart : result;
}

// Always read raw value for DB — never the formatted string
function getAmountValue() {
  return parseFloat(amountInput.dataset.rawValue || '0');
}
```
Maximum value: 9,99,99,999. Extra digits silently dropped.

### Amount Validation
Zero or empty on submit → shake the field. Never a toast.
```css
@keyframes fieldShake {
  0%, 100% { transform: translateX(0); }
  20%       { transform: translateX(-6px); }
  40%       { transform: translateX(6px); }
  60%       { transform: translateX(-4px); }
  80%       { transform: translateX(4px); }
}
.amount-input.shake {
  animation: fieldShake 320ms cubic-bezier(0.36, 0.07, 0.19, 0.97);
}
```

## The Custom Date Picker
Native <input type="date"> is retired from all POS apps.

### Trigger Field
```css
.date-field { position: relative; }
.date-field input {
  /* inherits canonical input spec */
  padding-right: 40px;
  cursor: pointer;
  caret-color: transparent;
}
.date-field-icon {
  position: absolute;
  right: 14px; top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  pointer-events: none;
  width: 16px; height: 16px;
}
```

### Popover — Desktop
```css
.date-popover {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  z-index: 300;
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: var(--shadow);
  padding: 16px;
  width: 280px;
  animation: calendarDrop 180ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes calendarDrop {
  from { opacity: 0; transform: translateY(-6px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
```

## Bottom Sheet — Mobile
```css
@media (max-width: 600px) {
  .date-popover {
    position: fixed;
    bottom: 0; left: 0; right: 0; top: auto;
    width: 100%;
    border-radius: 16px 16px 0 0;
    padding: 20px 16px 32px;
    animation: calendarSlideUp 220ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  @keyframes calendarSlideUp {
    from { transform: translateY(100%); opacity: 0; }
    to   { transform: translateY(0);    opacity: 1; }
  }
}
```

### Day Grid
```css
.cal-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
}
.cal-day {
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  background: none;
  color: var(--text-secondary);
  transition: background 120ms ease, color 120ms ease;
}
.cal-day:hover       { background: var(--surface-0); color: var(--text-primary); }
.cal-day.today       { font-weight: 700; border: 1px solid var(--border-strong); }
.cal-day.selected    { background: var(--fill-accent); color: var(--on-accent); font-weight: 700; }
.cal-day.other-month { color: var(--text-muted); opacity: 0.4; cursor: default; }
```

### Date Picker Rules
- Default: today pre-selected on open
- Dismiss: outside click, Escape, or date selection
- Display format: DD MMM YYYY (e.g. 02 Jul 2026). Never ISO strings.
- Week always starts Monday
- Keyboard: arrows navigate days, Enter selects, Escape closes

## Segmented Toggle (Income / Expense)
```css
.toggle-group { display: flex; gap: 8px; margin-bottom: 20px; }
.toggle-btn {
  flex: 1; padding: 10px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--surface-1);
  color: var(--text-primary);
  font-size: 13px; font-weight: 600;
  cursor: pointer;
  transition: all 180ms cubic-bezier(0.16, 1, 0.3, 1);
}
.toggle-btn.income.active  { background: var(--bg-success); color: var(--text-success); }
.toggle-btn.expense.active { background: var(--bg-danger);  color: var(--text-danger);  }
```
Used for mutually exclusive type selection only. Never for navigation.

## Validation & Error States
Validate on blur. Error message below the field. Never a toast.
```css
.input-group.error input,
.input-group.error select,
.input-group.error textarea {
  border-color: var(--text-danger);
  box-shadow: 0 0 0 3px var(--bg-danger);
}
.input-error-msg {
  font-size: 11px;
  color: var(--text-danger);
  margin-top: 4px;
  font-weight: 500;
}
```

## Form Context Rules
| Context      | When to Use                             | Width      |
|--------------|-----------------------------------------|------------|
| Drawer       | Add transaction, add task — quick entry | max 400px  |
| Center modal | Edit existing records, confirm delete   | max 480px  |
| Inline       | Checklist items, research field edits   | Full width |

Rule: Add → drawer. Edit → modal. Inline edits → inline. Never mix.

## Reference Layout — Add Transaction Drawer

Two fields share a row only when both are short (dropdown + date).
Never put two text fields on the same row.

## Prohibited
- ❌ Placeholder as label substitute — labels are mandatory
- ❌ Red asterisks on required fields — muted * only
- ❌ Toast for validation errors — errors go below the field
- ❌ Auto-submit on input change
- ❌ Different border-radius per app — always 12px
- ❌ Different focus ring per app — always --text-accent + --bg-accent glow
- ❌ Native <input type="date"> — retired, custom picker only
- ❌ Western number formatting (1,234,567) — always Indian (12,34,567)
- ❌ type="number" on amount field — use type="text" inputmode="decimal"
