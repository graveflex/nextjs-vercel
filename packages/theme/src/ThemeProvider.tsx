'use client';

import type { PropsWithChildren } from 'react';
import React from 'react';
import GlobalStyles from '@refract-ui/sc/components/GlobalStyles';
import type { DefaultTheme } from 'styled-components';

import defaultTheme from './theme';

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100vh'
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

// export default React.memo(ThemeProvider);
export default ThemeProvider;
