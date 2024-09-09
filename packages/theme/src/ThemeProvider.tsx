'use client';

import { GlobalStyles } from '@refract-ui/sc';
import type { PropsWithChildren } from 'react';
import type React from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react';

import GlobalResets from './Reset';
import * as themeList from './theme';

export type ThemeKey = keyof typeof themeList;

export const DEFAULT_THEME_NAME = 'light' as ThemeKey;

type TPageThemeContext = {
  currentTheme: ThemeKey;
  setCurrentTheme: (t: ThemeKey) => void;
};

const PageThemeContext = createContext<TPageThemeContext>({
  currentTheme: 'light',
  setCurrentTheme: () => undefined
});

export function usePageThemeContext() {
  return useContext(PageThemeContext);
}

export const containerStyles = {
  display: 'grid',
  minHeight: '100svh',
  gridTemplateRows: 'min-content 1fr min-content'
};

function ThemeProvider({
  children
}: PropsWithChildren<{ theme?: ThemeKey }>): React.JSX.Element {
  const [currentTheme, setCurrentTheme] =
    useState<ThemeKey>(DEFAULT_THEME_NAME);

  const updateCurrentTheme = useCallback(
    (themeName?: ThemeKey | null) => {
      const nextTheme = themeName || DEFAULT_THEME_NAME;
      if (nextTheme !== currentTheme) {
        setCurrentTheme(nextTheme);
      }
    },
    [currentTheme]
  );

  const t = useMemo(() => themeList[currentTheme], [currentTheme]);

  return (
    <PageThemeContext.Provider
      value={{ currentTheme, setCurrentTheme: updateCurrentTheme }}
    >
      <GlobalStyles as="body" theme={t} style={containerStyles}>
        <GlobalResets />
        {children}
      </GlobalStyles>
    </PageThemeContext.Provider>
  );
}

export default ThemeProvider;
