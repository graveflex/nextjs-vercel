import React, { PropsWithChildren } from 'react';

import ThemeProvider from 'theme/src/ThemeProvider';

import StyledComponentsRegistry from '@web/lib/StyledComponentRegistry';

export default function RootLayout({ children }: PropsWithChildren<object>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
