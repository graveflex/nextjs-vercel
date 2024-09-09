'use client';

import {
  DEFAULT_THEME_NAME,
  type ThemeKey,
  usePageThemeContext
} from '@mono/theme/src/ThemeProvider';
import { useEffect } from 'react';

interface UpdatePageThemeProps {
  theme?: ThemeKey | null;
}

export default function UpdatePageTheme({ theme }: UpdatePageThemeProps) {
  const { setCurrentTheme } = usePageThemeContext();

  useEffect(() => {
    setCurrentTheme(theme || DEFAULT_THEME_NAME);
  }, [theme, setCurrentTheme]);

  return null;
}
