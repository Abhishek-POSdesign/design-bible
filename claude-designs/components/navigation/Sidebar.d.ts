import { CSSProperties, ReactNode } from 'react';

export interface SidebarItem {
  id: string;
  label: string;
  /** 20px Lucide icon, stroke 1.5, color: inherit */
  icon?: ReactNode;
  /** Optional badge (e.g. unread count) */
  badge?: ReactNode;
}

export interface SidebarProps {
  items?: SidebarItem[];
  /** Brand display name */
  brandName?: string;
  /** Secondary tagline below brand */
  tagline?: string;
  /** Collapsed to 72px icon-only rail */
  collapsed?: boolean;
  /** Toggle collapse/expand */
  onToggle?: () => void;
  /** Active nav item id */
  activeId?: string;
  /** Item click callback */
  onItemClick?: (item: SidebarItem) => void;
  /** Footer slot — typically an Avatar with sync status */
  footerContent?: ReactNode;
}
