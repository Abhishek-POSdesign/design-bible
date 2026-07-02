import React from 'react';

/**
 * FlyoverPanel — the POS Drawer (Bible Ch.16 §5): right-docked, add/create
 * flows that preserve the page behind. Only two widths are approved system-
 * wide — `size="default"` (400px) and `size="extended"` (480px, form-heavy
 * cases only). No app may invent its own drawer width.
 * Slides in from right with high-velocity curve (175ms).
 * Backdrop: flat rgba(0,0,0,0.14) — no blur (banned for performance).
 */
export function FlyoverPanel({
  open = false,
  onClose,
  title,
  children,
  size = 'default',
}) {
  const width = size === 'extended' ? 480 : 400;
  return (
    <>
      {/* Backdrop — flat solid tint, no backdrop-filter */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.14)',
          zIndex: 999,
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 175ms ease',
        }}
      />

      {/* Panel */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: open ? 0 : -width,
          width,
          backgroundColor: 'var(--card-surface)',
          borderLeft: '1px solid var(--border-hairline)',
          zIndex: 1000,
          transition: 'var(--transition-panel)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: `var(--space-lg) var(--space-xl)`,
            borderBottom: '1px solid var(--border-hairline)',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-h3-size)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em',
            }}
          >
            {title}
          </span>
          <button
            onClick={onClose}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 28,
              height: 28,
              background: 'none',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-xs)',
              cursor: 'pointer',
              color: 'var(--text-muted)',
              fontSize: '0.875rem',
              transition: 'background-color 100ms ease',
            }}
          >
            ✕
          </button>
        </div>

        {/* Scrollable content */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: 'var(--space-xl)',
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}
