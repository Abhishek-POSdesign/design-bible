import React from 'react';

/**
 * DonutChart — Categorical Donut Ring visualization.
 * 100% vector SVG stroke-based (no nested div donut holes — banned).
 * Ring stroke: fixed 12px. Center: Inter Black tabular-nums summary value.
 */
export function DonutChart({
  segments,
  size = 120,
  strokeWidth = 12,
  centerValue,
  centerLabel,
  style: extraStyle,
}) {
  const radius = (size - strokeWidth) / 2;
  const circ = 2 * Math.PI * radius;
  const cx = size / 2;
  const cy = size / 2;
  const total = (segments || []).reduce((s, seg) => s + (seg.value || 0), 0);

  let acc = 0;

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        flexShrink: 0,
        ...extraStyle,
      }}
    >
      <svg
        width={size}
        height={size}
        style={{ display: 'block', transform: 'rotate(-90deg)' }}
        aria-hidden="true"
      >
        {/* Background track */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke="var(--track-fallback)"
          strokeWidth={strokeWidth}
        />
        {/* Segments */}
        {total > 0 &&
          (segments || []).map((seg, i) => {
            const frac = seg.value / total;
            const segLen = frac * circ;
            const offset = -(acc / total) * circ;
            acc += seg.value;
            return (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={radius}
                fill="none"
                stroke={seg.color}
                strokeWidth={strokeWidth}
                strokeDasharray={`${segLen} ${circ - segLen}`}
                strokeDashoffset={offset}
                strokeLinecap="butt"
              />
            );
          })}
      </svg>

      {/* Center label (not rotated — absolute positioned) */}
      {(centerValue || centerLabel) && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2px',
            pointerEvents: 'none',
          }}
        >
          {centerValue && (
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: size < 100 ? '0.875rem' : '1.125rem',
                fontWeight: 900,
                lineHeight: 1,
                color: 'var(--text-primary)',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {centerValue}
            </span>
          )}
          {centerLabel && (
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.5625rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                lineHeight: 1,
              }}
            >
              {centerLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
