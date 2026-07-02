import React from 'react';

/**
 * TrophyCard — Component C: Goal Achievement & Celebration Card.
 * Uses flat, highly saturated solid matte pastel tokens.
 * Inner cushion: 32px padding. Ambient colored drop shadow.
 */
export function TrophyCard({
  title,
  value,
  unit,
  description,
  theme = 'mint',
  progress,
  style: extraStyle,
}) {
  const themes = {
    mint: {
      bg: 'var(--trophy-mint-bg)',
      shadow: '0 8px 24px -4px var(--trophy-mint-shadow)',
    },
    gold: {
      bg: 'var(--trophy-gold-bg)',
      shadow: '0 8px 24px -4px var(--trophy-gold-shadow)',
    },
    lavender: {
      bg: 'var(--trophy-lavender-bg)',
      shadow: '0 8px 24px -4px var(--trophy-lavender-shadow)',
    },
  };

  const t = themes[theme] || themes.mint;

  return (
    <div
      style={{
        backgroundColor: t.bg,
        boxShadow: t.shadow,
        borderRadius: 'var(--radius)',
        padding: 'var(--space-2xl)', /* 32px — mandatory spatial cushion */
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-md)',
        ...extraStyle,
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-label-size)',
          fontWeight: 'var(--text-label-weight)',
          letterSpacing: 'var(--text-label-tracking)',
          textTransform: 'uppercase',
          color: 'var(--text-primary)',
          opacity: 0.55,
        }}
      >
        {title}
      </span>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-xs)' }}>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2.5rem',
            fontWeight: 900,
            letterSpacing: '-0.04em',
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
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              opacity: 0.6,
            }}
          >
            {unit}
          </span>
        )}
      </div>

      {description && (
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            color: 'var(--text-primary)',
            opacity: 0.6,
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          {description}
        </p>
      )}

      {progress !== undefined && (
        <div
          style={{
            height: 4,
            borderRadius: 2,
            backgroundColor: 'rgba(0,0,0,0.1)',
            overflow: 'hidden',
            marginTop: 'var(--space-xs)',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${Math.min(100, Math.max(0, progress))}%`,
              backgroundColor: 'var(--text-primary)',
              opacity: 0.4,
              borderRadius: 2,
              transition: 'width 600ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        </div>
      )}
    </div>
  );
}
