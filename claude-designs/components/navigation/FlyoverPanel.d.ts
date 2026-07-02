import { CSSProperties, ReactNode } from 'react';

export interface FlyoverPanelProps {
  /** Controls open/close state */
  open?: boolean;
  /** Close handler — called on backdrop click or ✕ button */
  onClose?: () => void;
  /** Panel header title */
  title?: string;
  /** Detail content — typically a grid of DataRows and MetricCards */
  children?: ReactNode;
  /** Only two approved widths (Bible Ch.16 §5): 'default' = 400px, 'extended' = 480px for form-heavy cases */
  size?: 'default' | 'extended';
}
