import type { PropsWithChildren } from 'react';
import React from 'react';

async function RootLayout({ children }: PropsWithChildren<object>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
