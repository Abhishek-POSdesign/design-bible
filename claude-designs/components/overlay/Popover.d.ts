import { ReactNode } from 'react';

/**
 * @startingPoint section="Overlay" subtitle="Anchored menu — row actions, sort, filters" viewport="320x220"
 */
export interface PopoverProps {
  open?: boolean;
  /** Called on outside click or Escape */
  onClose?: () => void;
  children?: ReactNode;
  /** Anchors the panel to the left or right edge of its relative trigger wrapper */
  align?: 'left' | 'right';
  width?: number;
  /** Gap between trigger and panel, px */
  offset?: number;
}

export interface PopoverItemProps {
  children?: ReactNode;
  /** 16px Lucide outline icon */
  icon?: ReactNode;
  onClick?: () => void;
  /** Red ink for destructive row actions (e.g. "Delete") */
  destructive?: boolean;
}
