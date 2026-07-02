Popover — anchored dropdown for row actions, sort/filter menus, date-picker triggers (Bible Ch.16 §7).

```jsx
const [open, setOpen] = React.useState(false);

<div style={{ position: 'relative', display: 'inline-block' }}>
  <Button variant="outline" size="sm" onClick={() => setOpen(o => !o)}>Sort</Button>
  <Popover open={open} onClose={() => setOpen(false)} align="left" width={180}>
    <PopoverItem onClick={() => {}}>Date, newest first</PopoverItem>
    <PopoverItem onClick={() => {}}>Amount, high to low</PopoverItem>
    <PopoverItem destructive onClick={() => {}}>Clear sort</PopoverItem>
  </Popover>
</div>
```

Must render inside a `position: relative` (or inline-block) wrapper around the trigger.
Dismisses on outside click or Escape. Motion is a 100ms micro-fade only — never a showy animation.
Never put a long form inside a Popover — that's a Drawer or Modal problem.
