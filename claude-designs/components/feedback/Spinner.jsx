import React from 'react';

/**
 * Spinner — Small localized activity indicator (Bible Ch.17 §9).
 * For truly local work only: button pending state, a tiny control refresh,
 * an inline row-level action. Never a fallback for unknown/whole-page loading
 * — that belongs to Skeleton.
 */
export function Spinner({ size = 16, color = 'currentColor', style: extraStyle }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ flexShrink: 0, animation: 'posSpin 800ms linear infinite', ...extraStyle }}
    >
      <style>{`@keyframes posSpin { to { transform: rotate(360deg); } }`}</style>
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" opacity="0.18" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
