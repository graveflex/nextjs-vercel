import type { PropsWithChildren } from 'react';
import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';

async function RootLayout({ children }: PropsWithChildren<object>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
