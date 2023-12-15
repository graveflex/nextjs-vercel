import React, { PropsWithChildren } from 'react';

export default function RootLayout({ children }: PropsWithChildren<object>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
