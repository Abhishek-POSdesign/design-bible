import React from 'react';

/**
 * Banner — Surface-level warning or persistent context (Bible Ch.18 §13):
 * offline mode, account limitation, partial outage, read-only state.
 * A contextual warning rail, not a billboard — placed at the top of the
 * affected surface or section, never floated disconnected from context.
 */
export function Banner({ variant = 'info', title, message, action, onDismiss, style: extraStyle }) {
  const tone = {
    warning: { bg: 'var(--warning-bg)', text: 'var(--warning-text)' },
    error:   { bg: 'var(--alert-bg)', text: 'var(--alert-text)' },
    info:    { bg: 'var(--info-bg)', text: 'var(--info-text)' },
    neutral: { bg: 'var(--btn-muted-bg)', text: 'var(--text-secondary)' },
  }[variant] || { bg: 'var(--info-bg)', text: 'var(--info-text)' };

  return (
    <div
      role={variant === 'error' ? 'alert' : 'status'}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 'var(--space-md)',
        width: '100%',
        backgroundColor: tone.bg,
        borderRadius: 'var(--radius)',
        padding: 'var(--space-md) var(--space-lg)',
        ...extraStyle,
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && (
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              fontWeight: 700,
              color: tone.text,
              marginBottom: message ? 2 : 0,
            }}
          >
            {title}
          </div>
        )}
        {message && (
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              color: tone.text,
              lineHeight: 1.5,
            }}
          >
            {message}
          </div>
        )}
      </div>

      {action && (
        <button
          onClick={action.onClick}
          style={{
            flexShrink: 0,
            background: 'none',
            border: `1px solid ${tone.text}`,
            borderRadius: 'var(--radius-xs)',
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: tone.text,
            padding: '5px 10px',
          }}
        >
          {action.label}
        </button>
      )}

      {onDismiss && (
        <button
          onClick={onDismiss}
          aria-label="Dismiss"
          style={{
            flexShrink: 0,
            display: 'flex',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: tone.text,
            opacity: 0.6,
            padding: 0,
            fontSize: '0.75rem',
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
}
