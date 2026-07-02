import { CSSProperties } from 'react';

/**
 * @startingPoint section="Loading" subtitle="Localized activity indicator" viewport="120x80"
 */
export interface SpinnerProps {
  /** Bounding box in px */
  size?: number;
  /** Stroke color — defaults to inherited text color */
  color?: string;
  style?: CSSProperties;
}
