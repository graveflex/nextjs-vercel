import React, { PropsWithChildren } from 'react';

import ThemeProvider from 'theme/src/ThemeProvider';
// import Layout from '@web/components/Layout'; TODO: get the layout prepped

import StyledComponentsRegistry from '@web/lib/StyledComponentRegistry';

export default function AppLayout({ children }: PropsWithChildren<object>) {
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
