import React from 'react';

/**
 * EmptyState — First-impression placeholder for any view that can have zero
 * items (Bible Ch.15). Always three parts: a quiet Lucide-style visual, a
 * headline + one sub-line, and a primary action that resolves the emptiness.
 * Animates in on first mount only; respects prefers-reduced-motion.
 */
export function EmptyState({
  icon,
  title,
  subtitle,
  action,
  style: extraStyle,
}) {
  return (
    <div
      className="pos-empty-state"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: 'var(--space-2xl-lg) var(--space-xl)',
        color: 'var(--text-secondary)',
        ...extraStyle,
      }}
    >
      <style>{`
        @keyframes posEmptyFadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes posEmptyFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        .pos-empty-state, .pos-empty-icon { animation: posEmptyFadeUp 280ms var(--ease-premium) forwards; }
        .pos-empty-icon { animation-name: posEmptyFadeUp, posEmptyFloat; animation-duration: 280ms, 3s; animation-timing-function: var(--ease-premium), ease-in-out; animation-delay: 0s, 280ms; animation-iteration-count: 1, infinite; }
        @media (prefers-reduced-motion: reduce) {
          .pos-empty-state, .pos-empty-icon { animation: none; }
        }
      `}</style>

      <div
        className="pos-empty-icon"
        style={{
          width: 48,
          height: 48,
          marginBottom: 'var(--space-lg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-muted)',
          flexShrink: 0,
        }}
      >
        {icon}
      </div>

      {title && (
        <h3
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            margin: '0 0 var(--space-sm)',
          }}
        >
          {title}
        </h3>
      )}

      {subtitle && (
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            color: 'var(--text-secondary)',
            maxWidth: '28ch',
            lineHeight: 1.5,
            margin: '0 0 var(--space-xl)',
          }}
        >
          {subtitle}
        </p>
      )}

      {action && action}
    </div>
  );
}
