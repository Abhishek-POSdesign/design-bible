import React from 'react';

/**
 * Input — Standard text input field with label, focus state, prefix/suffix, and validation.
 */
export function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  prefix,
  suffix,
  error,
  disabled = false,
  style: extraStyle,
}) {
  const [focused, setFocused] = React.useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)', ...extraStyle }}>
      {label && (
        <label
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
        </label>
      )}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-sm)',
          backgroundColor: 'var(--card-surface)',
          border: `1px solid ${error ? 'var(--alert-text)' : focused ? 'var(--text-accent)' : 'var(--border-hairline)'}`,
          borderRadius: 'var(--radius)',
          padding: '9px var(--space-lg)',
          boxShadow: error ? '0 0 0 3px var(--bg-danger)' : focused ? '0 0 0 3px var(--bg-accent)' : 'none',
          transition: 'border-color 180ms var(--ease-premium), box-shadow 180ms var(--ease-premium)',
          opacity: disabled ? 0.5 : 1,
        }}
      >
        {prefix && (
          <span style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)', flexShrink: 0 }}>
            {prefix}
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-body-size)',
            color: 'var(--text-primary)',
            fontVariantNumeric: 'tabular-nums',
            minWidth: 0,
          }}
        />
        {suffix && (
          <span style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)', flexShrink: 0 }}>
            {suffix}
          </span>
        )}
      </div>
      {error && (
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            color: 'var(--alert-text)',
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
}
