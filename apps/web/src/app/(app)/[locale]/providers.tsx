'use client';

import ThemeProvider from '@mono/theme/src/ThemeProvider';
import ImagePriorityProvider from '@mono/ui/components/ImagePriorityContext';
import type React from 'react';

function Providers({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider>
      <ImagePriorityProvider priority="lazy">{children}</ImagePriorityProvider>
    </ThemeProvider>
  );
}

export default Providers;
