'use client';

import React from 'react';

import HTSThemeProvider from 'theme/src/ThemeProvider';

function Providers({ children }: React.PropsWithChildren) {
  return <HTSThemeProvider>{children}</HTSThemeProvider>;
}

export default Providers;
