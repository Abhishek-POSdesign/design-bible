Avatar — User identity mark for sidebar footer and profile nodes.

```jsx
<Avatar name="Abhishek Sikka" size={36} status="synced" />
<Avatar src="/photo.jpg" name="Abhishek Sikka" size={40} />
<Avatar name="Abhishek Sikka" size={28} />
```

Initials are auto-extracted (first letter of each name word, max 2 chars).
The `status` prop adds a micro-indicator dot per Storage & Sync spec:
- `synced` → green, `syncing` → blue, `offline` → red.
No persistent top-status banners — sync state lives exclusively in this node.
