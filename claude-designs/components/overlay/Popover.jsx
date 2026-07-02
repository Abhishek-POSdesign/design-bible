import React from 'react';

/**
 * Popover — Lightest overlay class (Bible Ch.16 §7): row action menus, sort
 * controls, filter menus, date-picker triggers. Must originate visually from
 * its trigger and open near-instantly. Never contains long forms.
 * Render inside a `position: relative` wrapper around the trigger element.
 */
export function Popover({
  open = false,
  onClose,
  children,
  align = 'left',
  width = 220,
  offset = 6,
}) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose && onClose();
    }
    function onKey(e) {
      if (e.key === 'Escape') onClose && onClose();
    }
    document.addEventListener('mousedown', onDocClick);
    window.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        top: `calc(100% + ${offset}px)`,
        left: align === 'left' ? 0 : 'auto',
        right: align === 'right' ? 0 : 'auto',
        width,
        zIndex: 1100,
        backgroundColor: 'var(--card-surface)',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow-card)',
        padding: 'var(--space-sm)',
        animation: 'posPopoverIn 100ms var(--ease-premium)',
      }}
    >
      <style>{`
        @keyframes posPopoverIn { from { opacity: 0; transform: translateY(-2px); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) {
          div[style*="posPopoverIn"] { animation: none; }
        }
      `}</style>
      {children}
    </div>
  );
}

/**
 * PopoverItem — standard row inside a Popover menu (row actions, sort options).
 */
export function PopoverItem({ children, icon, onClick, destructive = false }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-sm)',
        width: '100%',
        border: 'none',
        background: hovered ? 'rgba(0,0,0,0.03)' : 'transparent',
        borderRadius: 'var(--radius-xs)',
        padding: '8px 10px',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: '0.8125rem',
        fontWeight: 500,
        color: destructive ? 'var(--alert-text)' : 'var(--text-primary)',
        textAlign: 'left',
      }}
    >
      {icon && <span style={{ display: 'flex', color: 'inherit', flexShrink: 0 }}>{icon}</span>}
      {children}
    </button>
  );
}
