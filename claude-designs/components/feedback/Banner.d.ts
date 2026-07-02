import { CSSProperties } from 'react';

/**
 * @startingPoint section="Notifications" subtitle="Section-level warning or persistent context" viewport="420x90"
 */
export interface BannerProps {
  variant?: 'warning' | 'error' | 'info' | 'neutral';
  /** Short bold lead-in, e.g. "You're offline" */
  title?: string;
  /** Supporting sentence */
  message?: string;
  /** Optional single action, e.g. "Retry" */
  action?: { label: string; onClick: () => void };
  /** Omit for persistent banners that resolve only when the underlying condition clears */
  onDismiss?: () => void;
  style?: CSSProperties;
}
