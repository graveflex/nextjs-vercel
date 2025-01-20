'use server';

import { DEFAULT_LOCALE, type LanguageLocale } from '@mono/web/lib/constants';
import config from '@payload-config';
import { getPayload } from 'payload';
import { unstable_cache } from 'next/cache';

import type React from 'react';

import LayoutClient from './Layout.client';

type LayoutProps = {
  locale: LanguageLocale;
  draft?: boolean;
  showHeader?: boolean;
  children: React.ReactNode;
};

export default async function Layout({
  children,
  locale,
  draft,
  showHeader
}: LayoutProps) {
  const fetchNavData = unstable_cache(
    async (draft: boolean | undefined, locale: LanguageLocale) => {
      const payload = await getPayload({ config });
      return payload.findGlobal({
        slug: 'nav',
        locale,
        draft,
        depth: 2,
        fallbackLocale: DEFAULT_LOCALE
      });
    },
    [[locale, draft, 'nav'].filter((x) => x).join('/')],
    {
      tags: ['global-nav']
    }
  );

  const navData = await fetchNavData(draft, locale);

  return (
    <LayoutClient showHeader={showHeader} {...navData}>
      {children}
    </LayoutClient>
  );
}
