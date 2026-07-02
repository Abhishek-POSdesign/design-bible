import React from 'react';

/**
 * Skeleton — Structural loading placeholder (Bible Ch.17 §5-6).
 * Mirrors the geometry of the final content it stands in for. Static by
 * default; the optional shimmer is intentionally soft and slow — never a
 * sweeping, flashing, or multi-color effect. Always static under
 * prefers-reduced-motion.
 */
export function Skeleton({
  variant = 'text',
  width,
  height,
  shimmer = true,
  style: extraStyle,
}) {
  const presets = {
    text:   { width: width ?? '100%', height: height ?? 12, borderRadius: 4 },
    title:  { width: width ?? '60%',  height: height ?? 18, borderRadius: 4 },
    circle: { width: width ?? 36,     height: height ?? 36, borderRadius: '50%' },
    rect:   { width: width ?? '100%', height: height ?? 120, borderRadius: 'var(--radius)' },
    row:    { width: width ?? '100%', height: height ?? 44, borderRadius: 'var(--radius-sm)' },
    input:  { width: width ?? '100%', height: height ?? 40, borderRadius: 'var(--radius)' },
    button: { width: width ?? 96,     height: height ?? 36, borderRadius: 'var(--radius)' },
    chart:  { width: width ?? '100%', height: height ?? 160, borderRadius: 'var(--radius)' },
  };
  const p = presets[variant] || presets.text;

  return (
    <div
      className={shimmer ? 'pos-skeleton pos-skeleton-shimmer' : 'pos-skeleton'}
      style={{
        width: p.width,
        height: p.height,
        borderRadius: p.borderRadius,
        backgroundColor: 'var(--btn-muted-bg)',
        flexShrink: 0,
        ...extraStyle,
      }}
    >
      <style>{`
        @keyframes posSkeletonShimmer { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }
        .pos-skeleton-shimmer { animation: posSkeletonShimmer 2.2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .pos-skeleton-shimmer { animation: none; }
        }
      `}</style>
    </div>
  );
}

/**
 * SkeletonGroup — lays out a vertical stack of Skeleton lines with system spacing.
 * Convenience wrapper for the common "title + a few text lines" pattern.
 */
export function SkeletonGroup({ lines = 3, gap = 'var(--space-sm)', style: extraStyle }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap, ...extraStyle }}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} variant="text" width={i === lines - 1 ? '70%' : '100%'} />
      ))}
    </div>
  );
}
