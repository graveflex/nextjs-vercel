'use client';

import React from 'react';
import ThemeProvider from '@mono/theme/src/ThemeProvider';

function Providers({ children }: React.PropsWithChildren) {
  return <ThemeProvider theme="light">{children}</ThemeProvider>;
}

export default Providers;
