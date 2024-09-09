'use client';

import { type ThemeKey, containerStyles } from '@mono/theme/src/ThemeProvider';
import type { Nav as NavT } from '@mono/types/payload-types';
import Footer from '@mono/ui/components/Footer';
import Header from '@mono/ui/components/Header';
import React from 'react';
import type { PropsWithChildren } from 'react';

export interface LayoutType extends PropsWithChildren<NavT> {
  theme?: ThemeKey;
}

function Layout({ children, footer, header }: LayoutType) {
  return (
    <div style={containerStyles}>
      <Header {...header} />
      <main role="main" style={{ zIndex: 0 }}>
        {children}
      </main>
      <Footer {...footer?.footerItems} />
    </div>
  );
}

export default Layout;
