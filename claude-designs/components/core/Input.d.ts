import { CSSProperties, ChangeEvent, ReactNode } from 'react';

export interface InputProps {
  /** Uppercase label rendered above the field */
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'number' | 'email' | 'password' | 'search' | 'date';
  /** Leading decorative element (e.g. currency symbol, search icon) */
  prefix?: ReactNode;
  /** Trailing decorative element (e.g. unit label, clear button) */
  suffix?: ReactNode;
  /** Validation error string — switches border to alert color */
  error?: string;
  disabled?: boolean;
  style?: CSSProperties;
}
