import { CSSProperties, ReactNode } from 'react';

export interface BadgeProps {
  /** Badge label */
  children: ReactNode;
  /** Calibrated state token — each maps to a precise bg/text pair */
  variant?: 'success' | 'alert' | 'green' | 'blue' | 'mint' | 'gold' | 'lavender' | 'neutral';
  /** When true: transparent fill, solid 1px border using the variant's text color */
  outline?: boolean;
  style?: CSSProperties;
}
