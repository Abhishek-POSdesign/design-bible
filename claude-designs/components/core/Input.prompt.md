Input — Standard text field for search, data entry, and filter controls.

```jsx
<Input label="Amount" placeholder="0.00" prefix="$" type="number" />
<Input label="Search" placeholder="Search transactions..." suffix={<SearchIcon size={16} />} />
<Input label="Date" type="date" />
<Input label="Email" error="Invalid address" value={email} onChange={e => setEmail(e.target.value)} />
```

Border transitions to `--text-primary` on focus; `--alert-text` on error.
Label renders as UPPERCASE with wide tracking automatically.
Use `prefix` for currency symbols or icons; `suffix` for unit labels or clear buttons.
Tabular-nums applied to the inner input for numeric stability.
