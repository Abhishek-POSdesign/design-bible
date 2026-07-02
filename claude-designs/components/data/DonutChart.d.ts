import { CSSProperties } from 'react';

export interface DonutChartSegment {
  /** Numeric value (proportional — auto-normalized to total) */
  value: number;
  /** Solid matte color — use trophy palette tokens or explicit hex */
  color: string;
  /** Optional label for legend rendering outside the chart */
  label?: string;
}

export interface DonutChartProps {
  segments: DonutChartSegment[];
  /** Outer bounding box size in px (width = height) */
  size?: number;
  /** Ring stroke width — locked to 12px per spec */
  strokeWidth?: number;
  /** Primary center value (Inter Black, tabular-nums) */
  centerValue?: string;
  /** Secondary center label (uppercase, muted) */
  centerLabel?: string;
  style?: CSSProperties;
}
