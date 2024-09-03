import Layout from '@mono/web/globals/Layout';
import { DEFAULT_LOCALE, type LanguageLocale } from '@mono/web/lib/constants';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { unstable_cache } from 'next/cache';
import React from 'react';

export const dynamic = 'force-static';
export const revalidate = 60;
interface RootLayoutProps {
  params: {
    locale: LanguageLocale;
    draft?: boolean;
  };
}

export default async function FetchNav({
  params: { locale = DEFAULT_LOCALE, draft }
}: RootLayoutProps) {
  const fetchPageData = unstable_cache(
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
    [[locale, draft].filter((x) => x).join('/')]
  );

  const nav = await fetchPageData(draft, locale);

  return <Layout {...nav} />;
}
