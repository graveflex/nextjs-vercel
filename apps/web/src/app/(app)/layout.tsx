import type { PropsWithChildren } from 'react';
import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const runtime = 'edge';

async function RootLayout({ children }: PropsWithChildren<object>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
