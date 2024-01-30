'use client';

import type { PropsWithChildren } from 'react';
import React, { createContext, useMemo, useState } from 'react';
import GlobalStyles from '@refract-ui/sc/components/GlobalStyles';
import type { DefaultTheme } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import defaultTheme, { darkTheme } from './theme';

const themeList: Record<string, DefaultTheme> = {
  light: defaultTheme,
  dark: darkTheme
};

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

export const ThemeContext = createContext<{
  theme: keyof typeof themeList;
  setTheme: (t: ThemeKey) => void;
}>({
  theme: 'light',
  setTheme: (t: ThemeKey) => {}
});

function ThemeProvider({
  children,
  theme
}: PropsWithChildren<{ theme?: ThemeKey }>): JSX.Element {
  const [themeName, setThemeName] = useState(theme || 'light');
  const setTheme = (t: ThemeKey) => {
    if (t !== themeName) {
      setThemeName(t);
    }
  };

  const globalTheme = useMemo(() => {
    return themeList?.[themeName] || defaultTheme;
  }, [themeName]);

  const providerValue = useMemo(() => {
    return {
      theme: themeName,
      setTheme
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeName]);

  return (
    <ThemeContext.Provider value={providerValue}>
      <GlobalStyles theme={globalTheme} style={containerStyles}>
        <GlobalResets />
        {children}
      </GlobalStyles>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
