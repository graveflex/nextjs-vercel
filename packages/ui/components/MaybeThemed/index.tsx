'use client';

import React from 'react';
import * as themeList from '@mono/theme/src/theme';
import { SubTheme } from '@refract-ui/sc';

interface MaybeThemedProps {
  children: React.ReactNode;
  theme?: null | keyof typeof themeList | '_';
}

function MaybeThemed({ children, theme }: MaybeThemedProps) {
  if (theme && theme !== '_') {
    const pageTheme = themeList[theme];
    return (
      <SubTheme theme={pageTheme}>
        {children}
      </SubTheme>
    );
  }

  return children;
}

export default MaybeThemed;
