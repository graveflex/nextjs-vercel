import { routing } from '@mono/web/i18n/routing';
import StyledComponentsRegistry from '@mono/web/lib/StyledComponentRegistry';
import type { LanguageLocale } from '@mono/web/lib/constants';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import Layout from '@mono/web/globals/Layout';
import type React from 'react';

import Providers from './providers';

export const dynamic = 'auto';
export const revalidate = 60;
export const runtime = 'nodejs';

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: LanguageLocale;
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

async function RootLayout({ children, params: { locale, ...params } }: RootLayoutProps) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head />

      <StyledComponentsRegistry>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <Layout locale={locale}>{children}</Layout>
          </NextIntlClientProvider>
        </Providers>
      </StyledComponentsRegistry>
    </html>
  );
}

export default RootLayout;
