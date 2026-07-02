import React from 'react';

/**
 * Avatar — User identity mark. Shows initials when no image is provided.
 * Used in sidebar footer for the sync status micro-indicator node.
 */
export function Avatar({ name, src, size = 32, status, style: extraStyle }) {
  const initials = name
    ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : 'AS';

  const statusColors = {
    synced:  '#113a24',
    syncing: '#0d47a1',
    offline: '#7f231c',
  };

  return (
    <div style={{ position: 'relative', display: 'inline-flex', flexShrink: 0, ...extraStyle }}>
      {src ? (
        <img
          src={src}
          alt={name}
          style={{
            width: size,
            height: size,
            borderRadius: '50%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      ) : (
        <div
          style={{
            width: size,
            height: size,
            borderRadius: '50%',
            backgroundColor: 'var(--btn-muted-bg)',
            border: '1px solid var(--border-hairline)',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-body)',
            fontSize: size * 0.38 + 'px',
            fontWeight: 600,
            userSelect: 'none',
          }}
        >
          {initials}
        </div>
      )}
      {status && (
        <span
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: Math.max(8, size * 0.28),
            height: Math.max(8, size * 0.28),
            borderRadius: '50%',
            backgroundColor: statusColors[status] || statusColors.synced,
            border: '1.5px solid var(--card-surface)',
          }}
        />
      )}
    </div>
  );
}
