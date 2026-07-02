import { CSSProperties } from 'react';

export interface AvatarProps {
  /** Full name — initials extracted automatically */
  name?: string;
  /** Image URL — shows image, falls back to initials */
  src?: string;
  /** Pixel size (width = height = size, circular) */
  size?: number;
  /** Shows a micro-indicator dot — synced (green), syncing (blue), offline (red) */
  status?: 'synced' | 'syncing' | 'offline';
  style?: CSSProperties;
}
