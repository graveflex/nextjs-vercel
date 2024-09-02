'use client';

import ThemeProvider from '@mono/theme/src/ThemeProvider';
import type React from 'react';

function Providers({ children }: React.PropsWithChildren) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Providers;
