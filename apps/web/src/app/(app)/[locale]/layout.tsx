import Layout from '@mono/web/globals/Layout';
import { routing } from '@mono/web/i18n/routing';
import StyledComponentsRegistry from '@mono/web/lib/StyledComponentRegistry';
import type { LanguageLocale } from '@mono/web/lib/constants';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type React from 'react';

import Providers from './providers';

export const dynamic = 'auto';
export const revalidate = 60;
export const runtime = 'nodejs';

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: LanguageLocale;
  }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }
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
