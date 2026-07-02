import { ReactNode } from 'react';

/**
 * @startingPoint section="Overlay" subtitle="Mobile short-flow overlay — date/filter/quick-select" viewport="380x420"
 */
export interface BottomSheetProps {
  open?: boolean;
  onClose?: () => void;
  title?: string;
  children?: ReactNode;
  /** Footer action bar — full-width stacked buttons are typical on mobile */
  footer?: ReactNode;
  /** Cap on sheet height before body scrolls */
  maxHeight?: string | number;
}
