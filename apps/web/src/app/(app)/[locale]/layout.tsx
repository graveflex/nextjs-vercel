import type { LanguageLocale } from '@mono/settings';
import StyledComponentsRegistry from '@mono/web/lib/StyledComponentRegistry';
// import { SpeedInsights } from '@vercel/speed-insights/next';
import type React from 'react';

import Providers from './providers';

export const revalidate = 60;
export const runtime = 'edge';

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: LanguageLocale;
  };
}

async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  return (
    <html lang={locale}>
      <head />

      <StyledComponentsRegistry>
        <Providers>{children}</Providers>
      </StyledComponentsRegistry>
    </html>
  );
}

export default RootLayout;
