import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const runtime = 'edge';

interface RootLayoutProps {
  children: React.ReactNode;
}

async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
