'use client';

import * as themeList from '@mono/theme/src/theme';
import { SubTheme } from '@refract-ui/sc';
import type React from 'react';

interface MaybeThemedProps {
  children: React.ReactNode;
  theme?: null | keyof typeof themeList | '_';
  style?: React.CSSProperties;
}

function MaybeThemed({ children, theme, style }: MaybeThemedProps) {
  if (theme && theme !== '_') {
    const pageTheme = themeList[theme];
    return (
      <SubTheme theme={pageTheme} style={style}>
        {children}
      </SubTheme>
    );
  }

  return children;
}

export default MaybeThemed;
