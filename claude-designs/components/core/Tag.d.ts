import { CSSProperties, ReactNode } from 'react';

export interface TagProps {
  /** Tag label content */
  children: ReactNode;
  /** When provided, renders a dismiss × button */
  onRemove?: () => void;
  style?: CSSProperties;
}
