import type {
  CTAType,
  CollapsibleMenu,
  FlatMenu,
  IconNavItems,
  Image
} from '@mono/types/payload-types';
import type React from 'react';
import styles from './Header.module.css';
import { data } from './mockData';
import MobileMenu from './mobile';
import DesktopMenu from './desktop';
import { cn } from '@mono/web/lib/utils';

export type HeaderType = {
  logo?: Image | number | null;
  className?: string;
  collapsibleMenu?: CollapsibleMenu | null;
  flatMenu?: FlatMenu | null;
  iconItems?: IconNavItems | null;
  ctaButton?: {
    cta?: CTAType;
  };
};

function Header({ className }: HeaderType) {
  return (
    <header className={cn(styles.container, className)}>
      <DesktopMenu links={data} />
      <MobileMenu links={data} />
    </header>
  );
}

export default Header;
