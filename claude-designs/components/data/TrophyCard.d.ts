import { CSSProperties } from 'react';

/**
 * @startingPoint section="Data" subtitle="Goal achievement card — mint, gold, or lavender" viewport="700x280"
 */
export interface TrophyCardProps {
  /** Uppercase goal title */
  title: string;
  /** Primary achievement value */
  value: string;
  /** Unit label — e.g. "lbs" "%" "days" */
  unit?: string;
  /** Supporting description or goal context */
  description?: string;
  /** Matte color theme — maps to the Component C trophy palette */
  theme?: 'mint' | 'gold' | 'lavender';
  /** Optional progress bar 0–100 */
  progress?: number;
  style?: CSSProperties;
}
