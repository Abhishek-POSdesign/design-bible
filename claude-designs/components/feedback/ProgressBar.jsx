import React from 'react';

/**
 * ProgressBar — Measurable ongoing process (Bible Ch.17 §10): import/export,
 * backup/restore, upload, multi-step sync. Progress must map to real
 * progress — never a fake stalling animation.
 */
export function ProgressBar({
  value = 0,
  indeterminate = false,
  label,
  showPercent = true,
  style: extraStyle,
}) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)', ...extraStyle }}>
      {(label || (showPercent && !indeterminate)) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-sm)' }}>
          {label && (
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                color: 'var(--text-secondary)',
              }}
            >
              {label}
            </span>
          )}
          {showPercent && !indeterminate && (
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                fontVariantNumeric: 'tabular-nums',
                color: 'var(--text-primary)',
              }}
            >
              {Math.round(pct)}%
            </span>
          )}
        </div>
      )}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 6,
          borderRadius: 999,
          backgroundColor: 'var(--btn-muted-bg)',
          overflow: 'hidden',
        }}
      >
        <style>{`
          @keyframes posProgressIndeterminate { 0% { left: -35%; width: 35%; } 50% { width: 45%; } 100% { left: 100%; width: 35%; } }
          .pos-progress-indeterminate { position: absolute; top: 0; bottom: 0; border-radius: 999px; background: var(--fill-accent); animation: posProgressIndeterminate 1.4s var(--ease-premium) infinite; }
          @media (prefers-reduced-motion: reduce) {
            .pos-progress-indeterminate { animation: none; left: 0; width: 40%; }
          }
        `}</style>
        {indeterminate ? (
          <div className="pos-progress-indeterminate" />
        ) : (
          <div
            style={{
              height: '100%',
              width: `${pct}%`,
              borderRadius: 999,
              backgroundColor: 'var(--fill-accent)',
              transition: 'width 200ms var(--ease-premium)',
            }}
          />
        )}
      </div>
    </div>
  );
}
