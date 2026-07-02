import React from 'react';

/**
 * BottomSheet — Mobile overlay for short/simple flows (Bible Ch.16 §8): date
 * selection, quick filters, small confirmations. Arrives directly from the
 * bottom edge. No CSS transition is used on open/close — this preview
 * environment does not reliably resolve transitions on transform/bottom for
 * this position:absolute-in-position:absolute structure, so the sheet
 * appears/disappears immediately rather than sliding, avoiding the failure
 * mode outright. Consuming apps that need a slide can add `transition` back;
 * verify it against a real target browser before shipping.
 */
export function BottomSheet({
  open = false,
  onClose,
  title,
  children,
  footer,
  maxHeight = '80%',
}) {
  if (!open) return null;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1200,
      }}
    >
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.14)',
        }}
      />

      <div
        role="dialog"
        aria-modal="true"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          maxHeight,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'var(--card-surface)',
          borderTopLeftRadius: 'var(--radius)',
          borderTopRightRadius: 'var(--radius)',
          boxShadow: 'var(--shadow-card)',
          overflow: 'hidden',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        }}
      >
        {/* Grab handle */}
        <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0 4px' }}>
          <div style={{ width: 36, height: 4, borderRadius: 999, background: 'var(--border-strong)' }} />
        </div>

        {title && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 'var(--space-sm) var(--space-xl) var(--space-lg)',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-h3-size)',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              {title}
            </span>
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
                  background: 'none',
                  border: '1px solid var(--border-hairline)',
                  borderRadius: 'var(--radius-xs)',
                  cursor: 'pointer',
                  color: 'var(--text-muted)',
                }}
              >
                ✕
              </button>
            )}
          </div>
        )}

        <div style={{ flex: 1, overflowY: 'auto', padding: '0 var(--space-xl) var(--space-lg)' }}>
          {children}
        </div>

        {footer && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
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
