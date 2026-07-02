import React from 'react';

const ICONS = {
  success: (c) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>,
  warning: (c) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4" /><path d="M10.3 3.9 1.8 18a1.6 1.6 0 0 0 1.4 2.4h17.6a1.6 1.6 0 0 0 1.4-2.4L13.7 3.9a1.6 1.6 0 0 0-2.8 0Z" /><path d="M12 17h.01" /></svg>,
  error: (c) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 8v5" /><path d="M12 16h.01" /></svg>,
  info: (c) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 11v5" /><path d="M12 8h.01" /></svg>,
};

/**
 * Toast — Passive, lightweight confirmation or background event (Bible Ch.18 §5-9).
 * Never used for validation or destructive confirmation. One sentence, plain
 * language, at most one lightweight secondary action.
 */
export function Toast({ variant = 'info', message, action, onDismiss, style: extraStyle }) {
  const tone = {
    success: { text: 'var(--text-success)' },
    warning: { text: 'var(--warning-text)' },
    error:   { text: 'var(--alert-text)' },
    info:    { text: 'var(--info-text)' },
  }[variant] || { text: 'var(--info-text)' };

  return (
    <div
      role="status"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-sm)',
        width: 320,
        maxWidth: '100%',
        backgroundColor: 'var(--card-surface)',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow-card)',
        padding: '12px var(--space-lg)',
        animation: 'posToastIn 175ms var(--ease-premium)',
        ...extraStyle,
      }}
    >
      <style>{`
        @keyframes posToastIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) {
          div[style*="posToastIn"] { animation: none; }
        }
      `}</style>

      <span style={{ display: 'flex', flexShrink: 0, color: tone.text }}>
        {(ICONS[variant] || ICONS.info)(tone.text)}
      </span>

      <span
        style={{
          flex: 1,
          fontFamily: 'var(--font-body)',
          fontSize: '0.8125rem',
          fontWeight: 500,
          color: 'var(--text-primary)',
          lineHeight: 1.4,
        }}
      >
        {message}
      </span>

      {action && (
        <button
          onClick={action.onClick}
          style={{
            flexShrink: 0,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            fontWeight: 600,
            color: 'var(--text-accent)',
            padding: 0,
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
            color: 'var(--text-muted)',
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

/**
 * ToastStack — positions up to 3 toasts top-right (desktop), newest on top,
 * per the system-wide placement and stacking rule (Bible Ch.18 §6).
 */
export function ToastStack({ toasts = [], onDismiss, style: extraStyle }) {
  const visible = toasts.slice(-3);
  return (
    <div
      style={{
        position: 'absolute',
        top: 'var(--space-lg)',
        right: 'var(--space-lg)',
        zIndex: 1300,
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-sm)',
        ...extraStyle,
      }}
    >
      {visible.map((t) => (
        <Toast key={t.id} {...t} onDismiss={onDismiss ? () => onDismiss(t.id) : undefined} />
      ))}
    </div>
  );
}
