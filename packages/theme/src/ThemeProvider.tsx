'use client';

import { GlobalStyles } from '@refract-ui/sc';
import type { PropsWithChildren } from 'react';
import type React from 'react';

import * as themeList from './theme';
import GlobalResets from './Reset';

export type ThemeKey = keyof typeof themeList;

export const containerStyles = {
  display: 'grid',
  minHeight: '100svh',
  gridTemplateRows: 'min-content 1fr min-content'
};

function ThemeProvider({
  theme,
  children
}: PropsWithChildren<{ theme?: ThemeKey }>): React.JSX.Element {
  const themeKey = theme ?? 'light';
  const t = themeList[themeKey];

  return (
    <GlobalStyles as="body" theme={t} style={containerStyles}>
      <GlobalResets />
      {children}
    </GlobalStyles>
  );
}

export default ThemeProvider;
