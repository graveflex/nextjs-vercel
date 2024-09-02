import StyledComponentsRegistry from '@mono/web/lib/StyledComponentRegistry';
import type { LanguageLocale } from '@mono/web/lib/constants';
import type React from 'react';

import Providers from './providers';

export const dynamic = 'force-static';
export const revalidate = 60;
export const runtime = 'nodejs';

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
