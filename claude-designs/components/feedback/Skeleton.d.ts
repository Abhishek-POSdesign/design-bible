import { CSSProperties } from 'react';

/**
 * @startingPoint section="Loading" subtitle="Structural placeholder — cards, tables, forms" viewport="360x200"
 */
export interface SkeletonProps {
  /** Which final-content geometry this placeholder mirrors */
  variant?: 'text' | 'title' | 'circle' | 'rect' | 'row' | 'input' | 'button' | 'chart';
  width?: number | string;
  height?: number | string;
  /** Very soft, slow opacity drift (2.2s) — never fast shimmer. Forced off under prefers-reduced-motion. */
  shimmer?: boolean;
  style?: CSSProperties;
}

export interface SkeletonGroupProps {
  /** Number of stacked text lines; the last line renders shorter (70%) to read as a paragraph end */
  lines?: number;
  gap?: string | number;
  style?: CSSProperties;
}
