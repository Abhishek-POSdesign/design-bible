import { CSSProperties, ReactNode } from 'react';

/**
 * @startingPoint section="Feedback" subtitle="Zero-item placeholder — icon, message, primary action" viewport="420x320"
 */
export interface EmptyStateProps {
  /** 24–28px Lucide outline icon — never emoji */
  icon?: ReactNode;
  /** Short headline, e.g. "No transactions yet" */
  title?: string;
  /** One supporting sub-line, plain warm language */
  subtitle?: string;
  /** Primary action that resolves the emptiness — typically a <Button variant="primary"> */
  action?: ReactNode;
  style?: CSSProperties;
}
