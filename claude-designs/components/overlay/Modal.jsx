import React from 'react';

/**
 * Modal — Center Decision Surface (Bible Ch.16 §6).
 * Always centered, max-width 480px. Used for edit, review, confirm, and
 * destructive decisions — never a side-mounted or full-screen desktop dialog.
 * Motion: clean fade + extremely subtle scale (175ms, --ease-premium). No zoom theatrics.
 */
export function Modal({
  open = false,
  onClose,
  title,
  subtitle,
  children,
  footer,
  width = 420,
  tone = 'default',
  closeOnBackdrop = true,
}) {
  React.useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === 'Escape') onClose && onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <div
      aria-hidden={!open}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: open ? 'auto' : 'none',
      }}
    >
      {/* Backdrop — flat solid tint, no backdrop-filter */}
      <div
        onClick={closeOnBackdrop ? onClose : undefined}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.14)',
          opacity: open ? 1 : 0,
          transition: 'opacity 175ms var(--ease-premium)',
        }}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        style={{
          position: 'relative',
          width,
          maxWidth: 480,
          maxHeight: 'calc(100% - 48px)',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'var(--card-surface)',
          borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow-card)',
          opacity: open ? 1 : 0,
          transform: open ? 'scale(1)' : 'scale(0.97)',
          transition: 'opacity 175ms var(--ease-premium), transform 175ms var(--ease-premium)',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        {(title || onClose) && (
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: 'var(--space-lg)',
              padding: 'var(--space-lg) var(--space-xl)',
              borderBottom: '1px solid var(--border-hairline)',
              flexShrink: 0,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
              {title && (
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-h3-size)',
                    fontWeight: 600,
                    color: tone === 'danger' ? 'var(--alert-text)' : 'var(--text-primary)',
                  }}
                >
                  {title}
                </span>
              )}
              {subtitle && (
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {subtitle}
                </span>
              )}
            </div>
            {onClose && (
              <button
                onClick={onClose}
                aria-label="Close"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 28,
                  height: 28,
                  flexShrink: 0,
                  background: 'none',
                  border: '1px solid var(--border-hairline)',
                  borderRadius: 'var(--radius-xs)',
                  cursor: 'pointer',
                  color: 'var(--text-muted)',
                  fontSize: '0.875rem',
                }}
              >
                ✕
              </button>
            )}
          </div>
        )}

        {/* Body */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: 'var(--space-xl)',
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-body-size)',
            color: 'var(--text-secondary)',
            lineHeight: 'var(--text-body-leading)',
          }}
        >
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: 'var(--space-sm)',
              padding: 'var(--space-lg) var(--space-xl)',
              borderTop: '1px solid var(--border-hairline)',
              flexShrink: 0,
            }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
