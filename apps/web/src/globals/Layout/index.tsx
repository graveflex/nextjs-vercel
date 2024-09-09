'use server';

import { DEFAULT_LOCALE, type LanguageLocale } from '@mono/web/lib/constants';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { unstable_cache } from 'next/cache';

import type React from 'react';

import LayoutClient from './Layout.client';

type LayoutProps = {
  locale: LanguageLocale;
  draft?: boolean;
  children: React.ReactNode;
};

export default async function Layout({
  children,
  locale,
  draft
}: LayoutProps) {
  const fetchNavData = unstable_cache(
    async (draft: boolean | undefined, locale: LanguageLocale) => {
      const payload = await getPayloadHMR({ config });
      return payload.findGlobal({
        slug: 'nav',
        locale,
        draft,
        depth: 2,
        fallbackLocale: DEFAULT_LOCALE
      });
    },
    [[locale, draft, 'nav'].filter((x) => x).join('/')]
  );

  const navData = await fetchNavData(draft, locale);

  return (
    <LayoutClient {...navData}>
      {children}
    </LayoutClient>
  );
}
