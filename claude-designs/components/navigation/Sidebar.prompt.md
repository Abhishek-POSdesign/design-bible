Sidebar — Collapsible left navigation rail for the Personal OS shell.

```jsx
const [collapsed, setCollapsed] = React.useState(false);
const [active, setActive] = React.useState('finance');

<Sidebar
  collapsed={collapsed}
  onToggle={() => setCollapsed(c => !c)}
  activeId={active}
  onItemClick={item => setActive(item.id)}
  footerContent={<Avatar name="Abhishek Sikka" size={32} status="synced" />}
  items={[
    { id: 'dashboard', label: 'Dashboard Hub', icon: <LayoutDashboardIcon size={20} strokeWidth={1.5} /> },
    { id: 'finance',   label: 'Finance',       icon: <TrendingUpIcon size={20} strokeWidth={1.5} /> },
    { id: 'health',    label: 'Health',         icon: <ActivityIcon size={20} strokeWidth={1.5} /> },
    { id: 'research',  label: 'Research',       icon: <BookOpenIcon size={20} strokeWidth={1.5} /> },
    { id: 'writing',   label: 'Writing',        icon: <PenLineIcon size={20} strokeWidth={1.5} /> },
  ]}
/>
```

Expanded: 240px | Collapsed: 72px (icon-only).
Transition: width 280ms cubic-bezier(0.25, 1, 0.5, 1) — fluid acceleration curve.
Active item: left 2px solid border at the true rail edge + an 8px-radius
pill background inset from that edge (never full-bleed edge-to-edge).
Below 768px: hide off-screen and replace with a bottom tab bar (max 5 items); a hamburger icon in the top toolbar reveals the sidebar as a temporary overlay drawer.
Footer: sync status lives in the Avatar micro-indicator — never a persistent banner.
Icons: always 20px Lucide, strokeWidth 1.5, must be paired with text label (hidden when collapsed, not removed from DOM).
