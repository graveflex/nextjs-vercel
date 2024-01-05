'use client';

import type { PropsWithChildren } from 'react';
import React from 'react';
import GlobalStyles from '@refract-ui/sc/components/GlobalStyles';
import type { DefaultTheme } from 'styled-components';

import defaultTheme from './theme';

const containerStyles = {
  display: 'grid',
  minHeight: '100svh',
  gridTemplateRows: 'min-content 1fr min-content',
  background: '#000',
  color: '#fff'
};

function ThemeProvider({
  children,
  theme
}: PropsWithChildren<{ theme?: DefaultTheme }>): JSX.Element {
  return (
    <GlobalStyles theme={theme || { ...defaultTheme }} style={containerStyles}>
      {children}
    </GlobalStyles>
  );
}

export default React.memo(ThemeProvider);
