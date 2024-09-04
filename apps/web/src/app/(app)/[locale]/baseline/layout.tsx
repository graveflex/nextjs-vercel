import type React from 'react';
export const dynamic = 'force-static';
export const revalidate = 60;
export const runtime = 'nodejs';

interface RootLayoutProps {
  children: React.ReactNode;
}

async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en-US">
      <head />
      <body
        style={{
          margin: 0,
          display: 'grid',
          height: '100vh',
          alignContent: 'center',
          justifyContent: 'center'
        }}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;