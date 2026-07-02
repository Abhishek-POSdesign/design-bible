import { CSSProperties, ReactNode } from 'react';

/**
 * @startingPoint section="Data" subtitle="Elevated KPI card for financial and health metrics" viewport="700x320"
 */
export interface MetricCardProps {
  /** Uppercase label — auto-uppercased via CSS */
  label: string;
  /** Primary metric value (string for full formatting control) */
  value: string;
  /** Unit suffix rendered at reduced size — e.g. "%" "BPM" "lbs" */
  unit?: string;
  /** Secondary descriptive line below the value */
  subtext?: string;
  /** Badge element rendered top-right — pass a <Badge> component */
  badge?: ReactNode;
  /** Delta string — e.g. "+2.4%" or "−$1,200" */
  delta?: string;
  /** Controls arrow direction and color of delta (▲ green vs ▼ red) */
  deltaPositive?: boolean;
  style?: CSSProperties;
}
