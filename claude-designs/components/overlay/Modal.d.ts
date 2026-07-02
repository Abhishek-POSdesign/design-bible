import { ReactNode } from 'react';

/**
 * @startingPoint section="Overlay" subtitle="Centered decision surface — edit, review, confirm" viewport="520x400"
 */
export interface ModalProps {
  /** Controls open/close state */
  open?: boolean;
  /** Close handler — called on ✕ click, Escape, or safe backdrop click */
  onClose?: () => void;
  /** Header title — required for every modal (Bible Ch.16 §9) */
  title?: string;
  /** Optional one-line supporting context under the title */
  subtitle?: string;
  /** Body content — form fields, confirmation copy, review content */
  children?: ReactNode;
  /** Footer action bar — typically Cancel + primary commit Button. Omit for lightweight modals with no commit step. */
  footer?: ReactNode;
  /** Panel width in px — clamped to a 480px system maximum */
  width?: number;
  /** 'danger' tints the title for destructive confirmations */
  tone?: 'default' | 'danger';
  /** Set false for high-effort forms where losing input to a stray click must be prevented (Bible Ch.16 §11) */
  closeOnBackdrop?: boolean;
}
