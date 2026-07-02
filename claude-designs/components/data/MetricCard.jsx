import React from 'react';

/**
 * MetricCard — Component A: Luxury Metric Card.
 * Floating, elevated data display block for key financial and health KPIs.
 * NEVER use pastel full-container backgrounds — surface stays locked to --card-surface.
 */
export function MetricCard({
  label,
  value,
  unit,
  subtext,
  badge,
  delta,
  deltaPositive,
  style: extraStyle,
}) {
  return (
    <div
      style={{
        backgroundColor: 'var(--card-surface)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow-card)',
        padding: 'var(--space-xl)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-sm)',
        ...extraStyle,
      }}
    >
      {/* Label row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-sm)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-label-size)',
            fontWeight: 'var(--text-label-weight)',
            letterSpacing: 'var(--text-label-tracking)',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
          }}
        >
          {label}
        </span>
        {badge && badge}
      </div>

      {/* Value row */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-xs)' }}>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2rem',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            color: 'var(--text-primary)',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {value}
        </span>
        {unit && (
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--text-muted)',
            }}
          >
            {unit}
          </span>
        )}
      </div>

      {/* Delta / subtext row */}
      {(delta !== undefined || subtext) && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
          {delta !== undefined && (
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: deltaPositive ? 'var(--active-green-text)' : 'var(--alert-text)',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {deltaPositive ? '▲' : '▼'} {delta}
            </span>
          )}
          {subtext && (
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                color: 'var(--text-muted)',
              }}
            >
              {subtext}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
