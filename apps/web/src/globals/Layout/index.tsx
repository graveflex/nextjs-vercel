'use client';

import React, { useState } from 'react';
import { containerStyles } from '@mono/theme/src/ThemeProvider';
import type * as themeList from '@mono/theme/src/theme';
import type { Nav as NavT } from '@mono/types/payload-types';
import useLockBodyScroll from '@mono/ui/lib/hooks/useLockBodyScroll';
import Footer from '@mono/ui/components/Footer';
import Header from '@mono/ui/components/Header';
import MaybeThemed from '@mono/ui/components/MaybeThemed';
import type { PropsWithChildren } from 'react';

export interface LayoutType extends PropsWithChildren<NavT> {
  theme?: keyof typeof themeList | null;
}

function Layout({ children, header, footer, theme }: LayoutType) {
  const [menuOpen, setMenuOpen] = useState(false);
  useLockBodyScroll(menuOpen);
  return (
    <MaybeThemed theme={theme} style={containerStyles}>
      <div style={containerStyles}>
        <Header {...header} open={menuOpen} setOpen={setMenuOpen} />
        <main role="main" style={{ zIndex: 0 }}>
          {children}
        </main>
        <Footer {...footer?.footerItems} />
      </div>
    </MaybeThemed>
  );
}

export default Layout;
