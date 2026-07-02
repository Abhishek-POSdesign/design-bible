import React from 'react';

/**
 * Badge — Accessible, solid-state status indicator.
 * Used for priority triage in Component A metric cards and data rows.
 * Dull pastels and low-contrast strings are banned; use these calibrated tokens only.
 */
export function Badge({ children, variant = 'neutral', outline = false, style: extraStyle }) {
  const configs = {
    success:  { bg: '#e2f4e8', color: '#1b5232' },
    alert:    { bg: '#fbeceb', color: '#7f231c' },
    green:    { bg: '#e2f4e8', color: '#113a24' },
    blue:     { bg: '#e3f2fd', color: '#0d47a1' },
    mint:     { bg: '#ccebda', color: '#113a24' },
    gold:     { bg: '#fdf0cd', color: '#7a4800' },
    lavender: { bg: '#dcd6f7', color: '#4a148c' },
    neutral:  { bg: 'var(--btn-muted-bg)', color: 'var(--text-muted)' },
  };

  const { bg, color } = configs[variant] || configs.neutral;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-xs)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-label-size)',
        fontWeight: 'var(--text-label-weight)',
        letterSpacing: 'var(--text-label-tracking)',
        textTransform: 'uppercase',
        padding: '3px 8px',
        borderRadius: 'var(--radius-xs)',
        backgroundColor: outline ? 'transparent' : bg,
        color,
        border: outline ? `1px solid ${color}` : 'none',
        lineHeight: 1.4,
        whiteSpace: 'nowrap',
        ...extraStyle,
      }}
    >
      {children}
    </span>
  );
}
