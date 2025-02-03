'use client';

import { useEffect } from 'react';

interface PageThemeObserverProps {
  theme?: 'light' | 'dark' | null;
}

const PageThemeObserver = ({ theme }: PageThemeObserverProps) => {
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);
  return null;
};

export default PageThemeObserver;
