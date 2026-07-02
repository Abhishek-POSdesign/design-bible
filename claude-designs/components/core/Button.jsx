import React from 'react';

/**
 * Button — Primary interactive control for the Personal OS ecosystem.
 * Three variants: primary (dark filled), muted (soft tinted), outline (hairline border).
 * Hover lifts +3px, press deflects -1px per the Matte-Scale Feedback Physics spec.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  icon,
  style: extraStyle,
}) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);

  const bgMap = {
    primary: 'var(--btn-primary-bg)',
    muted:   'var(--btn-muted-bg)',
    outline: 'transparent',
  };
  const colorMap = {
    primary: 'var(--btn-primary-text)',
    muted:   'var(--btn-muted-text)',
    outline: 'var(--text-primary)',
  };
  const padMap = {
    sm: '6px 14px',
    md: '9px 20px',
    lg: '12px 28px',
  };
  const fontMap = {
    sm: '0.8125rem',
    md: '0.9375rem',
    lg: '1rem',
  };

  const transform = disabled
    ? 'none'
    : pressed
    ? 'translateY(-1px) scale(0.99)'
    : hovered
    ? 'translateY(-3px) scale(1.015)'
    : 'translateY(0) scale(1)';

  /* Bible Ch.07 §3 — press deflection resolves faster (100ms) than hover lift (150ms) */
  const transition = pressed ? 'var(--transition-press)' : 'var(--transition-hover)';

  return (
    <button
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => !disabled && setPressed(true)}
      onMouseUp={() => setPressed(false)}
      disabled={disabled}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-sm)',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: fontMap[size] || fontMap.md,
        lineHeight: 1,
        color: colorMap[variant] || colorMap.primary,
        backgroundColor: bgMap[variant] || bgMap.primary,
        border: variant === 'outline' ? '1px solid var(--border-hairline)' : 'none',
        borderRadius: 'var(--radius)',
        padding: padMap[size] || padMap.md,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transform,
        transition,
        userSelect: 'none',
        whiteSpace: 'nowrap',
        ...extraStyle,
      }}
    >
      {icon && (
        <span style={{ display: 'flex', alignItems: 'center', color: 'inherit', flexShrink: 0 }}>
          {icon}
        </span>
      )}
      {children}
    </button>
  );
}
