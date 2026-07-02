import React from 'react';

/**
 * DataRow — Component B: Standard Utility Row.
 * Flat, zero-shadow tabular row for history logs, execution arrays, and data grids.
 * Clicking invokes the FlyoverPanel side-panel (passed via onRowClick at parent level).
 */
export function DataRow({
  label,
  meta,
  value,
  badge,
  icon,
  onClick,
  style: extraStyle,
}) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 16px',   /* Tight Padding Engine: 8px top/bottom, 16px left/right */
        borderBottom: '1px solid var(--border-hairline)',
        backgroundColor: hovered && onClick ? 'rgba(0,0,0,0.018)' : 'transparent',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'background-color 100ms ease',
        ...extraStyle,
      }}
    >
      {/* Left: icon + label + meta */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', minWidth: 0 }}>
        {icon && (
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'inherit',
              flexShrink: 0,
              width: 16,
              height: 16,
            }}
          >
            {icon}
          </span>
        )}
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-body-size)',
            color: 'var(--text-primary)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {label}
        </span>
        {meta && (
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
              whiteSpace: 'nowrap',
            }}
          >
            {meta}
          </span>
        )}
      </div>

      {/* Right: badge + value */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', flexShrink: 0 }}>
        {badge && badge}
        {value && (
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body-size)',
              fontWeight: 500,
              color: 'var(--text-primary)',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {value}
          </span>
        )}
      </div>
    </div>
  );
}
