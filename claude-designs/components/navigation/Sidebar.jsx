import React from 'react';

/**
 * Sidebar — Collapsible left navigation rail.
 * Expanded: 240px | Collapsed: 72px (icon-only, auto at <768px viewport).
 * Fluid acceleration curve on width transition.
 */
export function Sidebar({
  items = [],
  brandName = 'Abhishek Sikka',
  tagline = 'Personal OS',
  collapsed = false,
  onToggle,
  activeId,
  onItemClick,
  footerContent,
}) {
  const width = collapsed ? '72px' : '240px';

  return (
    <nav
      style={{
        width,
        minWidth: width,
        height: '100vh',
        backgroundColor: 'var(--card-surface)',
        borderRight: '1px solid var(--border-hairline)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'var(--transition-sidebar)',
        flexShrink: 0,
        position: 'relative',
      }}
    >
      {/* Brand header */}
      <div
        style={{
          padding: collapsed ? '20px 0' : `20px var(--space-xl)`,
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-sm)',
          justifyContent: collapsed ? 'center' : 'flex-start',
          borderBottom: '1px solid var(--border-hairline)',
          minHeight: 64,
        }}
      >
        {/* Logomark */}
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            backgroundColor: 'var(--pwa-icon-bg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#f7f5f2',
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: '0.875rem',
            letterSpacing: '-0.03em',
            flexShrink: 0,
          }}
        >
          AS
        </div>
        {!collapsed && (
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: '0.9375rem',
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                lineHeight: 1.1,
                whiteSpace: 'nowrap',
              }}
            >
              {brandName}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6875rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.03em',
                whiteSpace: 'nowrap',
                marginTop: 2,
              }}
            >
              {tagline}
            </div>
          </div>
        )}
      </div>

      {/* Nav items */}
      <div style={{ flex: 1, overflowY: 'auto', padding: `var(--space-sm) 0` }}>
        {items.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            collapsed={collapsed}
            active={activeId === item.id}
            onClick={() => onItemClick && onItemClick(item)}
          />
        ))}
      </div>

      {/* Footer slot */}
      {footerContent && (
        <div
          style={{
            padding: collapsed ? `var(--space-lg) 0` : `var(--space-lg) var(--space-xl)`,
            borderTop: '1px solid var(--border-hairline)',
            display: 'flex',
            justifyContent: collapsed ? 'center' : 'space-between',
            alignItems: 'center',
          }}
        >
          {footerContent}
        </div>
      )}

      {/* Collapse toggle */}
      {onToggle && (
        <button
          onClick={onToggle}
          style={{
            position: 'absolute',
            top: 20,
            right: -12,
            width: 24,
            height: 24,
            borderRadius: '50%',
            backgroundColor: 'var(--card-surface)',
            border: '1px solid var(--border-hairline)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.625rem',
            color: 'var(--text-muted)',
            zIndex: 10,
          }}
        >
          {collapsed ? '›' : '‹'}
        </button>
      )}
    </nav>
  );
}

function SidebarItem({ item, collapsed, active, onClick }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    /* Bible Ch.16 §6/§13 — the 2px active accent is the only structural side
       border in the system and lives at the true rail edge; the hover/active
       tint is a separate 8px-radius pill inset from that edge (never
       full-bleed edge-to-edge). */
    <div style={{ position: 'relative' }}>
      <span
        style={{
          position: 'absolute',
          left: 0,
          top: '20%',
          bottom: '20%',
          width: 2,
          backgroundColor: active ? 'var(--text-primary)' : 'transparent',
        }}
      />
      <div
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-sm)',
          height: 40,
          margin: collapsed ? '0 var(--space-sm)' : '0 var(--space-sm) 0 10px',
          padding: `0 ${collapsed ? '0' : 'var(--space-md)'}`,
          justifyContent: collapsed ? 'center' : 'flex-start',
          cursor: 'pointer',
          borderRadius: 'var(--radius-sm)',
          backgroundColor: active
            ? 'var(--card-surface)'
            : hovered
            ? 'rgba(0,0,0,0.02)'
            : 'transparent',
          transition: 'background-color 100ms var(--ease-premium)',
        }}
      >
        {item.icon && (
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              color: active ? 'var(--text-primary)' : 'var(--text-muted)',
              flexShrink: 0,
            }}
          >
            {item.icon}
          </span>
        )}
        {!collapsed && (
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body-size)',
              fontWeight: active ? 600 : 500,
              color: active ? 'var(--text-primary)' : 'var(--text-muted)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              opacity: 1,
              transition: 'opacity 200ms ease',
            }}
          >
            {item.label}
          </span>
        )}
        {!collapsed && item.badge && (
          <span style={{ marginLeft: 'auto' }}>{item.badge}</span>
        )}
      </div>
    </div>
  );
}
