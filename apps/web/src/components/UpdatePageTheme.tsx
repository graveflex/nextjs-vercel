'use client';

import {
  usePageThemeContext,
  type ThemeKey,
  DEFAULT_THEME_NAME,
} from '@mono/theme/src/ThemeProvider';
import { useEffect } from 'react';

interface UpdatePageThemeProps {
  theme?: ThemeKey | null;
}

export default function UpdatePageTheme({ theme }: UpdatePageThemeProps) {
  const { currentTheme, setCurrentTheme } = usePageThemeContext();

  console.log('@-->UpdatePageTheme | currentTheme', currentTheme);

  useEffect(() => {
    console.log('@-->UpdatePageTheme.useEffect | currentTheme', currentTheme);
    setCurrentTheme(theme || DEFAULT_THEME_NAME);
  }, [theme, setCurrentTheme]);

  return null;
}
