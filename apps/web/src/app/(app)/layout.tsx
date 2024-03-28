import React from 'react';
import ThemeProvider from '@mono/theme/src/ThemeProvider';
import StyledComponentsRegistry from '@mono/web/lib/StyledComponentRegistry';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const runtime = 'edge';

interface RootLayoutProps {
  children: React.ReactNode;
}

async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <ThemeProvider theme="light">
          <SpeedInsights />
          {children}
        </ThemeProvider>
      </StyledComponentsRegistry>
    </html>
  );
}

export default RootLayout;
