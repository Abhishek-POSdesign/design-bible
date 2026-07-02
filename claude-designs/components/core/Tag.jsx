import React from 'react';

/**
 * Tag — Compact categorization label for data rows, entries, and filter chips.
 */
export function Tag({ children, onRemove, style: extraStyle }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-xs)',
        fontFamily: 'var(--font-body)',
        fontSize: '0.8125rem',
        fontWeight: 500,
        color: 'var(--text-primary)',
        backgroundColor: 'var(--btn-muted-bg)',
        borderRadius: 'var(--radius-xs)',
        padding: '4px 10px',
        border: '1px solid var(--border-hairline)',
        lineHeight: 1,
        ...extraStyle,
      }}
    >
      {children}
      {onRemove && (
        <button
          onClick={onRemove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            color: hovered ? 'var(--text-primary)' : 'var(--text-muted)',
            fontSize: '0.875rem',
            lineHeight: 1,
            transition: 'color 100ms ease',
          }}
        >
          ×
        </button>
      )}
    </span>
  );
}
