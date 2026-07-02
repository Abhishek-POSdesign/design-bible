import { CSSProperties } from 'react';

/**
 * @startingPoint section="Notifications" subtitle="Passive confirmation — created, saved, synced" viewport="360x100"
 */
export interface ToastProps {
  variant?: 'success' | 'warning' | 'error' | 'info';
  /** One plain-language sentence — no hype, no exclamation abuse */
  message: string;
  /** At most one lightweight secondary action (Undo, Retry, View, Open) */
  action?: { label: string; onClick: () => void };
  /** Dismiss handler — omit only for the rare toast that must be read to completion */
  onDismiss?: () => void;
  style?: CSSProperties;
}

export interface ToastStackProps {
  /** Array of toast configs (id + ToastProps fields). Only the last 3 render (Bible Ch.18 §6). */
  toasts?: Array<{ id: string | number } & ToastProps>;
  onDismiss?: (id: string | number) => void;
  style?: CSSProperties;
}
