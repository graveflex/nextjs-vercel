'use client';

import React from 'react';
import HTSThemeProvider from '@mono/theme/src/ThemeProvider';

function Providers({ children }: React.PropsWithChildren) {
  return <HTSThemeProvider>{children}</HTSThemeProvider>;
}

export default Providers;
