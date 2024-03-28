'use client';

import type { PropsWithChildren } from 'react';
import React from 'react';
import { GlobalStyles } from '@refract-ui/sc';
import { createGlobalStyle } from 'styled-components';

import * as themeList from './theme';

export type ThemeKey = keyof typeof themeList;

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
}: PropsWithChildren<{ theme: ThemeKey }>): JSX.Element {
  return (
    <GlobalStyles as="body" theme={themeList[theme]} style={containerStyles}>
      <GlobalResets />
      {children}
    </GlobalStyles>
  );
}

export default ThemeProvider;
