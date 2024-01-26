'use client';

import type { PropsWithChildren } from 'react';
import React from 'react';
import GlobalStyles from '@refract-ui/sc/components/GlobalStyles';
import type { DefaultTheme } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import defaultTheme from './theme';

const containerStyles = {
  display: 'grid',
  minHeight: '100svh',
  gridTemplateRows: 'min-content 1fr min-content'
};

const GlobalResets = createGlobalStyle`
  button {
    -webkit-appearance: none;
    border-radius: 0;
    text-align: inherit;
    background: none;
    box-shadow: none;
    padding: 0;
    cursor: pointer;
    border: none;
    color: inherit;
    font: inherit;
  }

  a.button {
    text-decoration: none;
  }
`;

function ThemeProvider({
  children,
  theme
}: PropsWithChildren<{ theme?: DefaultTheme }>): JSX.Element {
  return (
    <GlobalStyles theme={theme || { ...defaultTheme }} style={containerStyles}>
      <GlobalResets />
      {children}
    </GlobalStyles>
  );
}

export default React.memo(ThemeProvider);
