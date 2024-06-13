'use client';

import type { PropsWithChildren } from 'react';
import React, { useState } from 'react';
import type * as themeList from '@mono/theme/src/theme';
import type { Nav as NavT } from '@mono/types/payload-types';
import Footer from '@mono/ui/components/Footer';
import Header from '@mono/ui/components/Header';
import OuterMaybeThemed from '@mono/ui/components/OuterMaybeThemed';
import useLockBodyScroll from '@mono/ui/lib/hooks/useLockBodyScroll';
import styled from '@refract-ui/sc';

const Main = styled.main`
  z-index: 0;
`;

export interface LayoutType extends PropsWithChildren<NavT> {
  theme?: keyof typeof themeList | null;
}

function Layout({ children, header, footer, theme }: LayoutType) {
  const [menuOpen, setMenuOpen] = useState(false);
  useLockBodyScroll(menuOpen);
  return (
    <OuterMaybeThemed theme={theme}>
      <Header {...header} open={menuOpen} setOpen={setMenuOpen} />
      <Main role="main">{children}</Main>
      <Footer {...footer?.footerItems} />
    </OuterMaybeThemed>
  );
}

export default Layout;
