import type {
  CTAType,
  CollapsibleMenu,
  FlatMenu,
  IconNavItems,
  Image
} from '@mono/types/payload-types';
import React from 'react';
import styles from './Header.module.css';

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
  return <header className={styles.container}>header</header>;
}

export default Header;
