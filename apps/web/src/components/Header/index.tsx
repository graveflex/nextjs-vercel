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

export type HeaderType = {
  logo?: Image | number | null;
  collapsibleMenu?: CollapsibleMenu | null;
  flatMenu?: FlatMenu | null;
  iconItems?: IconNavItems | null;
  ctaButton?: {
    cta?: CTAType;
  };
};

function Header() {
  return (
    <header className={styles.container}>
      <DesktopMenu links={data} />
      <MobileMenu links={data} />
    </header>
  );
}

export default Header;
