'use client';

import type { PropsWithChildren } from 'react';
import React from 'react';
import type * as themeList from '@mono/theme/src/theme';
import { containerStyles } from '@mono/theme/src/ThemeProvider';
import type { Nav as NavT } from '@mono/types/payload-types';
import Header from '@mono/ui/components/Header';
import MaybeThemed from '@mono/web/components/MaybeThemed';
import styled from '@refract-ui/sc'

const Main = styled.main`
  z-index: 0;
`;

export interface LayoutType extends PropsWithChildren<NavT> {
  theme?: keyof typeof themeList | null;
}

function Layout({ children, header, footer, theme }: LayoutType) {
  return (
    <MaybeThemed theme={theme} style={containerStyles}>
      <Header {...header}/>
      <Main role="main">{children}</Main>
    </MaybeThemed>
  );
}

export default Layout;
