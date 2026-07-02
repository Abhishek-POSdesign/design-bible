import { CSSProperties, ReactNode } from 'react';

/**
 * @startingPoint section="Core" subtitle="Primary action button — three variants" viewport="700x180"
 */
export interface ButtonProps {
  /** Button label */
  children: ReactNode;
  /** Visual variant: filled dark, soft tinted, or hairline border */
  variant?: 'primary' | 'muted' | 'outline';
  /** Size preset */
  size?: 'sm' | 'md' | 'lg';
  /** Disables interaction and dims opacity */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Leading icon element (SVG or Lucide icon at 16px) */
  icon?: ReactNode;
  /** Extra inline styles — merge with base */
  style?: CSSProperties;
}
