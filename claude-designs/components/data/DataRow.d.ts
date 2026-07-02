import { CSSProperties, ReactNode } from 'react';

export interface DataRowProps {
  /** Primary row label */
  label: string;
  /** Secondary metadata text (date, category, etc.) */
  meta?: string;
  /** Right-aligned value with tabular-nums applied */
  value?: string;
  /** Badge element — pass a <Badge> component */
  badge?: ReactNode;
  /** Leading 16px icon (Lucide, stroke 1.5, color: inherit) */
  icon?: ReactNode;
  /** Click handler — triggers FlyoverPanel at parent level */
  onClick?: () => void;
  style?: CSSProperties;
}
