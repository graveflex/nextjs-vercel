'use client';

import React, { PropsWithChildren } from 'react';
import GlobalStyles from '@refract-ui/sc/components/GlobalStyles';
import type { DefaultTheme } from 'styled-components';

import defaultTheme from './theme';

const containerStyles = {
  minHeight: '100svh',
  backgroundColor: '#000000',
  color: defaultTheme.allColors.plainBg,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
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
