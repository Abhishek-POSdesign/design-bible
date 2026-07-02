import { CSSProperties } from 'react';

/**
 * @startingPoint section="Loading" subtitle="Measurable process — import/export, sync, upload" viewport="320x80"
 */
export interface ProgressBarProps {
  /** 0–100. Ignored when indeterminate. */
  value?: number;
  /** Use only when true progress can't be measured — never to fake a stall */
  indeterminate?: boolean;
  /** Optional step/context label, e.g. "Importing transactions…" */
  label?: string;
  /** Show the numeric percent on the right */
  showPercent?: boolean;
  style?: CSSProperties;
}
