import React from 'react';
import StyledComponentsRegistry from '@mono/web/lib/StyledComponentRegistry';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Providers from './providers';

export const runtime = 'edge';

interface RootLayoutProps {
  children: React.ReactNode;
}

async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <Providers>
          <SpeedInsights />
          {children}
        </Providers>
      </StyledComponentsRegistry>
    </html>
  );
}

export default RootLayout;
