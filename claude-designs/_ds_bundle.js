/* @ds-bundle: {"format":4,"namespace":"AbhishekSikkaPersonalOSDesignSystem_0177da","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"DataRow","sourcePath":"components/data/DataRow.jsx"},{"name":"DonutChart","sourcePath":"components/data/DonutChart.jsx"},{"name":"MetricCard","sourcePath":"components/data/MetricCard.jsx"},{"name":"TrophyCard","sourcePath":"components/data/TrophyCard.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"SkeletonGroup","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastStack","sourcePath":"components/feedback/Toast.jsx"},{"name":"FlyoverPanel","sourcePath":"components/navigation/FlyoverPanel.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"BottomSheet","sourcePath":"components/overlay/BottomSheet.jsx"},{"name":"Modal","sourcePath":"components/overlay/Modal.jsx"},{"name":"Popover","sourcePath":"components/overlay/Popover.jsx"},{"name":"PopoverItem","sourcePath":"components/overlay/Popover.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"f412620293a1","components/core/Badge.jsx":"36e69c59190c","components/core/Button.jsx":"13fb016882eb","components/core/Input.jsx":"c9ecbb5685e2","components/core/Tag.jsx":"c7c24b002059","components/data/DataRow.jsx":"0abd9aa416b0","components/data/DonutChart.jsx":"80b209e33960","components/data/MetricCard.jsx":"b0bbdcdb6581","components/data/TrophyCard.jsx":"5bce9b664250","components/feedback/Banner.jsx":"f91a60c22811","components/feedback/EmptyState.jsx":"278f26dea59f","components/feedback/ProgressBar.jsx":"e3c63ed45692","components/feedback/Skeleton.jsx":"78f69ef812f6","components/feedback/Spinner.jsx":"98b3f569c536","components/feedback/Toast.jsx":"e68799955a92","components/navigation/FlyoverPanel.jsx":"52d3459710d6","components/navigation/Sidebar.jsx":"251d84617baa","components/overlay/BottomSheet.jsx":"947cbed6fa5a","components/overlay/Modal.jsx":"23b4813cdcc7","components/overlay/Popover.jsx":"7c20c48e0056"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AbhishekSikkaPersonalOSDesignSystem_0177da = window.AbhishekSikkaPersonalOSDesignSystem_0177da || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
/**
 * Avatar — User identity mark. Shows initials when no image is provided.
 * Used in sidebar footer for the sync status micro-indicator node.
 */
function Avatar({
  name,
  src,
  size = 32,
  status,
  style: extraStyle
}) {
  const initials = name ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : 'AS';
  const statusColors = {
    synced: '#113a24',
    syncing: '#0d47a1',
    offline: '#7f231c'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexShrink: 0,
      ...extraStyle
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
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
      userSelect: 'none'
    }
  }, initials), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: Math.max(8, size * 0.28),
      height: Math.max(8, size * 0.28),
      borderRadius: '50%',
      backgroundColor: statusColors[status] || statusColors.synced,
      border: '1.5px solid var(--card-surface)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * Badge — Accessible, solid-state status indicator.
 * Used for priority triage in Component A metric cards and data rows.
 * Dull pastels and low-contrast strings are banned; use these calibrated tokens only.
 */
function Badge({
  children,
  variant = 'neutral',
  outline = false,
  style: extraStyle
}) {
  const configs = {
    success: {
      bg: '#e2f4e8',
      color: '#1b5232'
    },
    alert: {
      bg: '#fbeceb',
      color: '#7f231c'
    },
    green: {
      bg: '#e2f4e8',
      color: '#113a24'
    },
    blue: {
      bg: '#e3f2fd',
      color: '#0d47a1'
    },
    mint: {
      bg: '#ccebda',
      color: '#113a24'
    },
    gold: {
      bg: '#fdf0cd',
      color: '#7a4800'
    },
    lavender: {
      bg: '#dcd6f7',
      color: '#4a148c'
    },
    neutral: {
      bg: 'var(--btn-muted-bg)',
      color: 'var(--text-muted)'
    }
  };
  const {
    bg,
    color
  } = configs[variant] || configs.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-xs)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-label-size)',
      fontWeight: 'var(--text-label-weight)',
      letterSpacing: 'var(--text-label-tracking)',
      textTransform: 'uppercase',
      padding: '3px 8px',
      borderRadius: 'var(--radius-xs)',
      backgroundColor: outline ? 'transparent' : bg,
      color,
      border: outline ? `1px solid ${color}` : 'none',
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      ...extraStyle
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/**
 * Button — Primary interactive control for the Personal OS ecosystem.
 * Three variants: primary (dark filled), muted (soft tinted), outline (hairline border).
 * Hover lifts +3px, press deflects -1px per the Matte-Scale Feedback Physics spec.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  icon,
  style: extraStyle
}) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const bgMap = {
    primary: 'var(--btn-primary-bg)',
    muted: 'var(--btn-muted-bg)',
    outline: 'transparent'
  };
  const colorMap = {
    primary: 'var(--btn-primary-text)',
    muted: 'var(--btn-muted-text)',
    outline: 'var(--text-primary)'
  };
  const padMap = {
    sm: '6px 14px',
    md: '9px 20px',
    lg: '12px 28px'
  };
  const fontMap = {
    sm: '0.8125rem',
    md: '0.9375rem',
    lg: '1rem'
  };
  const transform = disabled ? 'none' : pressed ? 'translateY(-1px) scale(0.99)' : hovered ? 'translateY(-3px) scale(1.015)' : 'translateY(0) scale(1)';

  /* Bible Ch.07 §3 — press deflection resolves faster (100ms) than hover lift (150ms) */
  const transition = pressed ? 'var(--transition-press)' : 'var(--transition-hover)';
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => !disabled && setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setPressed(false);
    },
    onMouseDown: () => !disabled && setPressed(true),
    onMouseUp: () => setPressed(false),
    disabled: disabled,
    style: {
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
      ...extraStyle
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      color: 'inherit',
      flexShrink: 0
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
/**
 * Input — Standard text input field with label, focus state, prefix/suffix, and validation.
 */
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  prefix,
  suffix,
  error,
  disabled = false,
  style: extraStyle
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xs)',
      ...extraStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-label-size)',
      fontWeight: 'var(--text-label-weight)',
      letterSpacing: 'var(--text-label-tracking)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-sm)',
      backgroundColor: 'var(--card-surface)',
      border: `1px solid ${error ? 'var(--alert-text)' : focused ? 'var(--text-accent)' : 'var(--border-hairline)'}`,
      borderRadius: 'var(--radius)',
      padding: '9px var(--space-lg)',
      boxShadow: error ? '0 0 0 3px var(--bg-danger)' : focused ? '0 0 0 3px var(--bg-accent)' : 'none',
      transition: 'border-color 180ms var(--ease-premium), box-shadow 180ms var(--ease-premium)',
      opacity: disabled ? 0.5 : 1
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      color: 'var(--text-muted)',
      flexShrink: 0
    }
  }, prefix), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-size)',
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums',
      minWidth: 0
    }
  }), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      color: 'var(--text-muted)',
      flexShrink: 0
    }
  }, suffix)), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.8125rem',
      color: 'var(--alert-text)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/**
 * Tag — Compact categorization label for data rows, entries, and filter chips.
 */
function Tag({
  children,
  onRemove,
  style: extraStyle
}) {
  const [hovered, setHovered] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-xs)',
      fontFamily: 'var(--font-body)',
      fontSize: '0.8125rem',
      fontWeight: 500,
      color: 'var(--text-primary)',
      backgroundColor: 'var(--btn-muted-bg)',
      borderRadius: 'var(--radius-xs)',
      padding: '4px 10px',
      border: '1px solid var(--border-hairline)',
      lineHeight: 1,
      ...extraStyle
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      color: hovered ? 'var(--text-primary)' : 'var(--text-muted)',
      fontSize: '0.875rem',
      lineHeight: 1,
      transition: 'color 100ms ease'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/DataRow.jsx
try { (() => {
/**
 * DataRow — Component B: Standard Utility Row.
 * Flat, zero-shadow tabular row for history logs, execution arrays, and data grids.
 * Clicking invokes the FlyoverPanel side-panel (passed via onRowClick at parent level).
 */
function DataRow({
  label,
  meta,
  value,
  badge,
  icon,
  onClick,
  style: extraStyle
}) {
  const [hovered, setHovered] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 16px',
      /* Tight Padding Engine: 8px top/bottom, 16px left/right */
      borderBottom: '1px solid var(--border-hairline)',
      backgroundColor: hovered && onClick ? 'rgba(0,0,0,0.018)' : 'transparent',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'background-color 100ms ease',
      ...extraStyle
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-sm)',
      minWidth: 0
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      color: 'inherit',
      flexShrink: 0,
      width: 16,
      height: 16
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-size)',
      color: 'var(--text-primary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, label), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.8125rem',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, meta)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-sm)',
      flexShrink: 0
    }
  }, badge && badge, value && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-size)',
      fontWeight: 500,
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value)));
}
Object.assign(__ds_scope, { DataRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataRow.jsx", error: String((e && e.message) || e) }); }

// components/data/DonutChart.jsx
try { (() => {
/**
 * DonutChart — Categorical Donut Ring visualization.
 * 100% vector SVG stroke-based (no nested div donut holes — banned).
 * Ring stroke: fixed 12px. Center: Inter Black tabular-nums summary value.
 */
function DonutChart({
  segments,
  size = 120,
  strokeWidth = 12,
  centerValue,
  centerLabel,
  style: extraStyle
}) {
  const radius = (size - strokeWidth) / 2;
  const circ = 2 * Math.PI * radius;
  const cx = size / 2;
  const cy = size / 2;
  const total = (segments || []).reduce((s, seg) => s + (seg.value || 0), 0);
  let acc = 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flexShrink: 0,
      ...extraStyle
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      display: 'block',
      transform: 'rotate(-90deg)'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: radius,
    fill: "none",
    stroke: "var(--track-fallback)",
    strokeWidth: strokeWidth
  }), total > 0 && (segments || []).map((seg, i) => {
    const frac = seg.value / total;
    const segLen = frac * circ;
    const offset = -(acc / total) * circ;
    acc += seg.value;
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: cx,
      cy: cy,
      r: radius,
      fill: "none",
      stroke: seg.color,
      strokeWidth: strokeWidth,
      strokeDasharray: `${segLen} ${circ - segLen}`,
      strokeDashoffset: offset,
      strokeLinecap: "butt"
    });
  })), (centerValue || centerLabel) && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2px',
      pointerEvents: 'none'
    }
  }, centerValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: size < 100 ? '0.875rem' : '1.125rem',
      fontWeight: 900,
      lineHeight: 1,
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, centerValue), centerLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.5625rem',
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      lineHeight: 1
    }
  }, centerLabel)));
}
Object.assign(__ds_scope, { DonutChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DonutChart.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricCard.jsx
try { (() => {
/**
 * MetricCard — Component A: Luxury Metric Card.
 * Floating, elevated data display block for key financial and health KPIs.
 * NEVER use pastel full-container backgrounds — surface stays locked to --card-surface.
 */
function MetricCard({
  label,
  value,
  unit,
  subtext,
  badge,
  delta,
  deltaPositive,
  style: extraStyle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: 'var(--card-surface)',
      borderRadius: 'var(--radius)',
      boxShadow: 'var(--shadow-card)',
      padding: 'var(--space-xl)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
      ...extraStyle
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-label-size)',
      fontWeight: 'var(--text-label-weight)',
      letterSpacing: 'var(--text-label-tracking)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), badge && badge), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '2rem',
      fontWeight: 900,
      letterSpacing: '-0.03em',
      lineHeight: 1.05,
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: 'var(--text-muted)'
    }
  }, unit)), (delta !== undefined || subtext) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-sm)'
    }
  }, delta !== undefined && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.8125rem',
      fontWeight: 600,
      color: deltaPositive ? 'var(--active-green-text)' : 'var(--alert-text)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, deltaPositive ? '▲' : '▼', " ", delta), subtext && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.8125rem',
      color: 'var(--text-muted)'
    }
  }, subtext)));
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricCard.jsx", error: String((e && e.message) || e) }); }

// components/data/TrophyCard.jsx
try { (() => {
/**
 * TrophyCard — Component C: Goal Achievement & Celebration Card.
 * Uses flat, highly saturated solid matte pastel tokens.
 * Inner cushion: 32px padding. Ambient colored drop shadow.
 */
function TrophyCard({
  title,
  value,
  unit,
  description,
  theme = 'mint',
  progress,
  style: extraStyle
}) {
  const themes = {
    mint: {
      bg: 'var(--trophy-mint-bg)',
      shadow: '0 8px 24px -4px var(--trophy-mint-shadow)'
    },
    gold: {
      bg: 'var(--trophy-gold-bg)',
      shadow: '0 8px 24px -4px var(--trophy-gold-shadow)'
    },
    lavender: {
      bg: 'var(--trophy-lavender-bg)',
      shadow: '0 8px 24px -4px var(--trophy-lavender-shadow)'
    }
  };
  const t = themes[theme] || themes.mint;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: t.bg,
      boxShadow: t.shadow,
      borderRadius: 'var(--radius)',
      padding: 'var(--space-2xl)',
      /* 32px — mandatory spatial cushion */
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)',
      ...extraStyle
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-label-size)',
      fontWeight: 'var(--text-label-weight)',
      letterSpacing: 'var(--text-label-tracking)',
      textTransform: 'uppercase',
      color: 'var(--text-primary)',
      opacity: 0.55
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '2.5rem',
      fontWeight: 900,
      letterSpacing: '-0.04em',
      lineHeight: 1.05,
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '1rem',
      fontWeight: 600,
      color: 'var(--text-primary)',
      opacity: 0.6
    }
  }, unit)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      color: 'var(--text-primary)',
      opacity: 0.6,
      margin: 0,
      lineHeight: 1.5
    }
  }, description), progress !== undefined && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      borderRadius: 2,
      backgroundColor: 'rgba(0,0,0,0.1)',
      overflow: 'hidden',
      marginTop: 'var(--space-xs)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${Math.min(100, Math.max(0, progress))}%`,
      backgroundColor: 'var(--text-primary)',
      opacity: 0.4,
      borderRadius: 2,
      transition: 'width 600ms cubic-bezier(0.16, 1, 0.3, 1)'
    }
  })));
}
Object.assign(__ds_scope, { TrophyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/TrophyCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
/**
 * Banner — Surface-level warning or persistent context (Bible Ch.18 §13):
 * offline mode, account limitation, partial outage, read-only state.
 * A contextual warning rail, not a billboard — placed at the top of the
 * affected surface or section, never floated disconnected from context.
 */
function Banner({
  variant = 'info',
  title,
  message,
  action,
  onDismiss,
  style: extraStyle
}) {
  const tone = {
    warning: {
      bg: 'var(--warning-bg)',
      text: 'var(--warning-text)'
    },
    error: {
      bg: 'var(--alert-bg)',
      text: 'var(--alert-text)'
    },
    info: {
      bg: 'var(--info-bg)',
      text: 'var(--info-text)'
    },
    neutral: {
      bg: 'var(--btn-muted-bg)',
      text: 'var(--text-secondary)'
    }
  }[variant] || {
    bg: 'var(--info-bg)',
    text: 'var(--info-text)'
  };
  return /*#__PURE__*/React.createElement("div", {
    role: variant === 'error' ? 'alert' : 'status',
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-md)',
      width: '100%',
      backgroundColor: tone.bg,
      borderRadius: 'var(--radius)',
      padding: 'var(--space-md) var(--space-lg)',
      ...extraStyle
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.8125rem',
      fontWeight: 700,
      color: tone.text,
      marginBottom: message ? 2 : 0
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.8125rem',
      color: tone.text,
      lineHeight: 1.5
    }
  }, message)), action && /*#__PURE__*/React.createElement("button", {
    onClick: action.onClick,
    style: {
      flexShrink: 0,
      background: 'none',
      border: `1px solid ${tone.text}`,
      borderRadius: 'var(--radius-xs)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: '0.75rem',
      fontWeight: 600,
      color: tone.text,
      padding: '5px 10px'
    }
  }, action.label), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      flexShrink: 0,
      display: 'flex',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: tone.text,
      opacity: 0.6,
      padding: 0,
      fontSize: '0.75rem'
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
/**
 * EmptyState — First-impression placeholder for any view that can have zero
 * items (Bible Ch.15). Always three parts: a quiet Lucide-style visual, a
 * headline + one sub-line, and a primary action that resolves the emptiness.
 * Animates in on first mount only; respects prefers-reduced-motion.
 */
function EmptyState({
  icon,
  title,
  subtitle,
  action,
  style: extraStyle
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pos-empty-state",
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: 'var(--space-2xl-lg) var(--space-xl)',
      color: 'var(--text-secondary)',
      ...extraStyle
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes posEmptyFadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes posEmptyFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        .pos-empty-state, .pos-empty-icon { animation: posEmptyFadeUp 280ms var(--ease-premium) forwards; }
        .pos-empty-icon { animation-name: posEmptyFadeUp, posEmptyFloat; animation-duration: 280ms, 3s; animation-timing-function: var(--ease-premium), ease-in-out; animation-delay: 0s, 280ms; animation-iteration-count: 1, infinite; }
        @media (prefers-reduced-motion: reduce) {
          .pos-empty-state, .pos-empty-icon { animation: none; }
        }
      `), /*#__PURE__*/React.createElement("div", {
    className: "pos-empty-icon",
    style: {
      width: 48,
      height: 48,
      marginBottom: 'var(--space-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-muted)',
      flexShrink: 0
    }
  }, icon), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '1rem',
      fontWeight: 700,
      color: 'var(--text-primary)',
      margin: '0 0 var(--space-sm)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.8125rem',
      color: 'var(--text-secondary)',
      maxWidth: '28ch',
      lineHeight: 1.5,
      margin: '0 0 var(--space-xl)'
    }
  }, subtitle), action && action);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
/**
 * ProgressBar — Measurable ongoing process (Bible Ch.17 §10): import/export,
 * backup/restore, upload, multi-step sync. Progress must map to real
 * progress — never a fake stalling animation.
 */
function ProgressBar({
  value = 0,
  indeterminate = false,
  label,
  showPercent = true,
  style: extraStyle
}) {
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xs)',
      ...extraStyle
    }
  }, (label || showPercent && !indeterminate) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-sm)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.8125rem',
      color: 'var(--text-secondary)'
    }
  }, label), showPercent && !indeterminate && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.8125rem',
      fontWeight: 600,
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--text-primary)'
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: 6,
      borderRadius: 999,
      backgroundColor: 'var(--btn-muted-bg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("style", null, `
          @keyframes posProgressIndeterminate { 0% { left: -35%; width: 35%; } 50% { width: 45%; } 100% { left: 100%; width: 35%; } }
          .pos-progress-indeterminate { position: absolute; top: 0; bottom: 0; border-radius: 999px; background: var(--fill-accent); animation: posProgressIndeterminate 1.4s var(--ease-premium) infinite; }
          @media (prefers-reduced-motion: reduce) {
            .pos-progress-indeterminate { animation: none; left: 0; width: 40%; }
          }
        `), indeterminate ? /*#__PURE__*/React.createElement("div", {
    className: "pos-progress-indeterminate"
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${pct}%`,
      borderRadius: 999,
      backgroundColor: 'var(--fill-accent)',
      transition: 'width 200ms var(--ease-premium)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
/**
 * Skeleton — Structural loading placeholder (Bible Ch.17 §5-6).
 * Mirrors the geometry of the final content it stands in for. Static by
 * default; the optional shimmer is intentionally soft and slow — never a
 * sweeping, flashing, or multi-color effect. Always static under
 * prefers-reduced-motion.
 */
function Skeleton({
  variant = 'text',
  width,
  height,
  shimmer = true,
  style: extraStyle
}) {
  const presets = {
    text: {
      width: width ?? '100%',
      height: height ?? 12,
      borderRadius: 4
    },
    title: {
      width: width ?? '60%',
      height: height ?? 18,
      borderRadius: 4
    },
    circle: {
      width: width ?? 36,
      height: height ?? 36,
      borderRadius: '50%'
    },
    rect: {
      width: width ?? '100%',
      height: height ?? 120,
      borderRadius: 'var(--radius)'
    },
    row: {
      width: width ?? '100%',
      height: height ?? 44,
      borderRadius: 'var(--radius-sm)'
    },
    input: {
      width: width ?? '100%',
      height: height ?? 40,
      borderRadius: 'var(--radius)'
    },
    button: {
      width: width ?? 96,
      height: height ?? 36,
      borderRadius: 'var(--radius)'
    },
    chart: {
      width: width ?? '100%',
      height: height ?? 160,
      borderRadius: 'var(--radius)'
    }
  };
  const p = presets[variant] || presets.text;
  return /*#__PURE__*/React.createElement("div", {
    className: shimmer ? 'pos-skeleton pos-skeleton-shimmer' : 'pos-skeleton',
    style: {
      width: p.width,
      height: p.height,
      borderRadius: p.borderRadius,
      backgroundColor: 'var(--btn-muted-bg)',
      flexShrink: 0,
      ...extraStyle
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes posSkeletonShimmer { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }
        .pos-skeleton-shimmer { animation: posSkeletonShimmer 2.2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .pos-skeleton-shimmer { animation: none; }
        }
      `));
}

/**
 * SkeletonGroup — lays out a vertical stack of Skeleton lines with system spacing.
 * Convenience wrapper for the common "title + a few text lines" pattern.
 */
function SkeletonGroup({
  lines = 3,
  gap = 'var(--space-sm)',
  style: extraStyle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap,
      ...extraStyle
    }
  }, Array.from({
    length: lines
  }).map((_, i) => /*#__PURE__*/React.createElement(Skeleton, {
    key: i,
    variant: "text",
    width: i === lines - 1 ? '70%' : '100%'
  })));
}
Object.assign(__ds_scope, { Skeleton, SkeletonGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
/**
 * Spinner — Small localized activity indicator (Bible Ch.17 §9).
 * For truly local work only: button pending state, a tiny control refresh,
 * an inline row-level action. Never a fallback for unknown/whole-page loading
 * — that belongs to Skeleton.
 */
function Spinner({
  size = 16,
  color = 'currentColor',
  style: extraStyle
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      flexShrink: 0,
      animation: 'posSpin 800ms linear infinite',
      ...extraStyle
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes posSpin { to { transform: rotate(360deg); } }`), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    stroke: color,
    strokeWidth: "2",
    opacity: "0.18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 0 0-9-9",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round"
  }));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICONS = {
  success: c => /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })),
  warning: c => /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.3 3.9 1.8 18a1.6 1.6 0 0 0 1.4 2.4h17.6a1.6 1.6 0 0 0 1.4-2.4L13.7 3.9a1.6 1.6 0 0 0-2.8 0Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 17h.01"
  })),
  error: c => /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 16h.01"
  })),
  info: c => /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11v5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8h.01"
  }))
};

/**
 * Toast — Passive, lightweight confirmation or background event (Bible Ch.18 §5-9).
 * Never used for validation or destructive confirmation. One sentence, plain
 * language, at most one lightweight secondary action.
 */
function Toast({
  variant = 'info',
  message,
  action,
  onDismiss,
  style: extraStyle
}) {
  const tone = {
    success: {
      text: 'var(--text-success)'
    },
    warning: {
      text: 'var(--warning-text)'
    },
    error: {
      text: 'var(--alert-text)'
    },
    info: {
      text: 'var(--info-text)'
    }
  }[variant] || {
    text: 'var(--info-text)'
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-sm)',
      width: 320,
      maxWidth: '100%',
      backgroundColor: 'var(--card-surface)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius)',
      boxShadow: 'var(--shadow-card)',
      padding: '12px var(--space-lg)',
      animation: 'posToastIn 175ms var(--ease-premium)',
      ...extraStyle
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes posToastIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) {
          div[style*="posToastIn"] { animation: none; }
        }
      `), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexShrink: 0,
      color: tone.text
    }
  }, (ICONS[variant] || ICONS.info)(tone.text)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-body)',
      fontSize: '0.8125rem',
      fontWeight: 500,
      color: 'var(--text-primary)',
      lineHeight: 1.4
    }
  }, message), action && /*#__PURE__*/React.createElement("button", {
    onClick: action.onClick,
    style: {
      flexShrink: 0,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: '0.8125rem',
      fontWeight: 600,
      color: 'var(--text-accent)',
      padding: 0
    }
  }, action.label), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      flexShrink: 0,
      display: 'flex',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      padding: 0,
      fontSize: '0.75rem'
    }
  }, "\u2715"));
}

/**
 * ToastStack — positions up to 3 toasts top-right (desktop), newest on top,
 * per the system-wide placement and stacking rule (Bible Ch.18 §6).
 */
function ToastStack({
  toasts = [],
  onDismiss,
  style: extraStyle
}) {
  const visible = toasts.slice(-3);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'var(--space-lg)',
      right: 'var(--space-lg)',
      zIndex: 1300,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
      ...extraStyle
    }
  }, visible.map(t => /*#__PURE__*/React.createElement(Toast, _extends({
    key: t.id
  }, t, {
    onDismiss: onDismiss ? () => onDismiss(t.id) : undefined
  }))));
}
Object.assign(__ds_scope, { Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FlyoverPanel.jsx
try { (() => {
/**
 * FlyoverPanel — the POS Drawer (Bible Ch.16 §5): right-docked, add/create
 * flows that preserve the page behind. Only two widths are approved system-
 * wide — `size="default"` (400px) and `size="extended"` (480px, form-heavy
 * cases only). No app may invent its own drawer width.
 * Slides in from right with high-velocity curve (175ms).
 * Backdrop: flat rgba(0,0,0,0.14) — no blur (banned for performance).
 */
function FlyoverPanel({
  open = false,
  onClose,
  title,
  children,
  size = 'default'
}) {
  const width = size === 'extended' ? 480 : 400;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.14)',
      zIndex: 999,
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity 175ms ease'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: open ? 0 : -width,
      width,
      backgroundColor: 'var(--card-surface)',
      borderLeft: '1px solid var(--border-hairline)',
      zIndex: 1000,
      transition: 'var(--transition-panel)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: `var(--space-lg) var(--space-xl)`,
      borderBottom: '1px solid var(--border-hairline)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-h3-size)',
      fontWeight: 600,
      color: 'var(--text-primary)',
      letterSpacing: '-0.01em'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 28,
      height: 28,
      background: 'none',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-xs)',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: '0.875rem',
      transition: 'background-color 100ms ease'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 'var(--space-xl)'
    }
  }, children)));
}
Object.assign(__ds_scope, { FlyoverPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FlyoverPanel.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
/**
 * Sidebar — Collapsible left navigation rail.
 * Expanded: 240px | Collapsed: 72px (icon-only, auto at <768px viewport).
 * Fluid acceleration curve on width transition.
 */
function Sidebar({
  items = [],
  brandName = 'Abhishek Sikka',
  tagline = 'Personal OS',
  collapsed = false,
  onToggle,
  activeId,
  onItemClick,
  footerContent
}) {
  const width = collapsed ? '72px' : '240px';
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width,
      minWidth: width,
      height: '100vh',
      backgroundColor: 'var(--card-surface)',
      borderRight: '1px solid var(--border-hairline)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      transition: 'var(--transition-sidebar)',
      flexShrink: 0,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: collapsed ? '20px 0' : `20px var(--space-xl)`,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-sm)',
      justifyContent: collapsed ? 'center' : 'flex-start',
      borderBottom: '1px solid var(--border-hairline)',
      minHeight: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      backgroundColor: 'var(--pwa-icon-bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#f7f5f2',
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: '0.875rem',
      letterSpacing: '-0.03em',
      flexShrink: 0
    }
  }, "AS"), !collapsed && /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: '0.9375rem',
      letterSpacing: '-0.03em',
      color: 'var(--text-primary)',
      lineHeight: 1.1,
      whiteSpace: 'nowrap'
    }
  }, brandName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.6875rem',
      color: 'var(--text-muted)',
      letterSpacing: '0.03em',
      whiteSpace: 'nowrap',
      marginTop: 2
    }
  }, tagline))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: `var(--space-sm) 0`
    }
  }, items.map(item => /*#__PURE__*/React.createElement(SidebarItem, {
    key: item.id,
    item: item,
    collapsed: collapsed,
    active: activeId === item.id,
    onClick: () => onItemClick && onItemClick(item)
  }))), footerContent && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: collapsed ? `var(--space-lg) 0` : `var(--space-lg) var(--space-xl)`,
      borderTop: '1px solid var(--border-hairline)',
      display: 'flex',
      justifyContent: collapsed ? 'center' : 'space-between',
      alignItems: 'center'
    }
  }, footerContent), onToggle && /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    style: {
      position: 'absolute',
      top: 20,
      right: -12,
      width: 24,
      height: 24,
      borderRadius: '50%',
      backgroundColor: 'var(--card-surface)',
      border: '1px solid var(--border-hairline)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.625rem',
      color: 'var(--text-muted)',
      zIndex: 10
    }
  }, collapsed ? '›' : '‹'));
}
function SidebarItem({
  item,
  collapsed,
  active,
  onClick
}) {
  const [hovered, setHovered] = React.useState(false);
  return (
    /*#__PURE__*/
    /* Bible Ch.16 §6/§13 — the 2px active accent is the only structural side
       border in the system and lives at the true rail edge; the hover/active
       tint is a separate 8px-radius pill inset from that edge (never
       full-bleed edge-to-edge). */
    React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: '20%',
        bottom: '20%',
        width: 2,
        backgroundColor: active ? 'var(--text-primary)' : 'transparent'
      }
    }), /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-sm)',
        height: 40,
        margin: collapsed ? '0 var(--space-sm)' : '0 var(--space-sm) 0 10px',
        padding: `0 ${collapsed ? '0' : 'var(--space-md)'}`,
        justifyContent: collapsed ? 'center' : 'flex-start',
        cursor: 'pointer',
        borderRadius: 'var(--radius-sm)',
        backgroundColor: active ? 'var(--card-surface)' : hovered ? 'rgba(0,0,0,0.02)' : 'transparent',
        transition: 'background-color 100ms var(--ease-premium)'
      }
    }, item.icon && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        color: active ? 'var(--text-primary)' : 'var(--text-muted)',
        flexShrink: 0
      }
    }, item.icon), !collapsed && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-body-size)',
        fontWeight: active ? 600 : 500,
        color: active ? 'var(--text-primary)' : 'var(--text-muted)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        opacity: 1,
        transition: 'opacity 200ms ease'
      }
    }, item.label), !collapsed && item.badge && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto'
      }
    }, item.badge)))
  );
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/overlay/BottomSheet.jsx
try { (() => {
/**
 * BottomSheet — Mobile overlay for short/simple flows (Bible Ch.16 §8): date
 * selection, quick filters, small confirmations. Arrives directly from the
 * bottom edge. No CSS transition is used on open/close — this preview
 * environment does not reliably resolve transitions on transform/bottom for
 * this position:absolute-in-position:absolute structure, so the sheet
 * appears/disappears immediately rather than sliding, avoiding the failure
 * mode outright. Consuming apps that need a slide can add `transition` back;
 * verify it against a real target browser before shipping.
 */
function BottomSheet({
  open = false,
  onClose,
  title,
  children,
  footer,
  maxHeight = '80%'
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1200
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.14)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      maxHeight,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'var(--card-surface)',
      borderTopLeftRadius: 'var(--radius)',
      borderTopRightRadius: 'var(--radius)',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden',
      paddingBottom: 'env(safe-area-inset-bottom, 0px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      padding: '10px 0 4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 4,
      borderRadius: 999,
      background: 'var(--border-strong)'
    }
  })), title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-sm) var(--space-xl) var(--space-lg)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-h3-size)',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 28,
      height: 28,
      background: 'none',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-xs)',
      cursor: 'pointer',
      color: 'var(--text-muted)'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '0 var(--space-xl) var(--space-lg)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
      padding: 'var(--space-lg) var(--space-xl)',
      borderTop: '1px solid var(--border-hairline)',
      flexShrink: 0
    }
  }, footer)));
}
Object.assign(__ds_scope, { BottomSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/BottomSheet.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Modal.jsx
try { (() => {
/**
 * Modal — Center Decision Surface (Bible Ch.16 §6).
 * Always centered, max-width 480px. Used for edit, review, confirm, and
 * destructive decisions — never a side-mounted or full-screen desktop dialog.
 * Motion: clean fade + extremely subtle scale (175ms, --ease-premium). No zoom theatrics.
 */
function Modal({
  open = false,
  onClose,
  title,
  subtitle,
  children,
  footer,
  width = 420,
  tone = 'default',
  closeOnBackdrop = true
}) {
  React.useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === 'Escape') onClose && onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": !open,
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: open ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: closeOnBackdrop ? onClose : undefined,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.14)',
      opacity: open ? 1 : 0,
      transition: 'opacity 175ms var(--ease-premium)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: 'relative',
      width,
      maxWidth: 480,
      maxHeight: 'calc(100% - 48px)',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'var(--card-surface)',
      borderRadius: 'var(--radius)',
      boxShadow: 'var(--shadow-card)',
      opacity: open ? 1 : 0,
      transform: open ? 'scale(1)' : 'scale(0.97)',
      transition: 'opacity 175ms var(--ease-premium), transform 175ms var(--ease-premium)',
      overflow: 'hidden'
    }
  }, (title || onClose) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-lg)',
      padding: 'var(--space-lg) var(--space-xl)',
      borderBottom: '1px solid var(--border-hairline)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-h3-size)',
      fontWeight: 600,
      color: tone === 'danger' ? 'var(--alert-text)' : 'var(--text-primary)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.8125rem',
      color: 'var(--text-secondary)'
    }
  }, subtitle)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 28,
      height: 28,
      flexShrink: 0,
      background: 'none',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-xs)',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: '0.875rem'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 'var(--space-xl)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-size)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--text-body-leading)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 'var(--space-sm)',
      padding: 'var(--space-lg) var(--space-xl)',
      borderTop: '1px solid var(--border-hairline)',
      flexShrink: 0
    }
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Modal.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Popover.jsx
try { (() => {
/**
 * Popover — Lightest overlay class (Bible Ch.16 §7): row action menus, sort
 * controls, filter menus, date-picker triggers. Must originate visually from
 * its trigger and open near-instantly. Never contains long forms.
 * Render inside a `position: relative` wrapper around the trigger element.
 */
function Popover({
  open = false,
  onClose,
  children,
  align = 'left',
  width = 220,
  offset = 6
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose && onClose();
    }
    function onKey(e) {
      if (e.key === 'Escape') onClose && onClose();
    }
    document.addEventListener('mousedown', onDocClick);
    window.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'absolute',
      top: `calc(100% + ${offset}px)`,
      left: align === 'left' ? 0 : 'auto',
      right: align === 'right' ? 0 : 'auto',
      width,
      zIndex: 1100,
      backgroundColor: 'var(--card-surface)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius)',
      boxShadow: 'var(--shadow-card)',
      padding: 'var(--space-sm)',
      animation: 'posPopoverIn 100ms var(--ease-premium)'
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes posPopoverIn { from { opacity: 0; transform: translateY(-2px); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) {
          div[style*="posPopoverIn"] { animation: none; }
        }
      `), children);
}

/**
 * PopoverItem — standard row inside a Popover menu (row actions, sort options).
 */
function PopoverItem({
  children,
  icon,
  onClick,
  destructive = false
}) {
  const [hovered, setHovered] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-sm)',
      width: '100%',
      border: 'none',
      background: hovered ? 'rgba(0,0,0,0.03)' : 'transparent',
      borderRadius: 'var(--radius-xs)',
      padding: '8px 10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: '0.8125rem',
      fontWeight: 500,
      color: destructive ? 'var(--alert-text)' : 'var(--text-primary)',
      textAlign: 'left'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'inherit',
      flexShrink: 0
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Popover, PopoverItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Popover.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.DataRow = __ds_scope.DataRow;

__ds_ns.DonutChart = __ds_scope.DonutChart;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.TrophyCard = __ds_scope.TrophyCard;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.SkeletonGroup = __ds_scope.SkeletonGroup;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

__ds_ns.FlyoverPanel = __ds_scope.FlyoverPanel;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.BottomSheet = __ds_scope.BottomSheet;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Popover = __ds_scope.Popover;

__ds_ns.PopoverItem = __ds_scope.PopoverItem;

})();
