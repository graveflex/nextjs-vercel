import BlocksRenderer from '@mono/web/components/BlocksRenderer';
import UpdatePageTheme from '@mono/web/components/UpdatePageTheme';
import { DEFAULT_LOCALE, type LanguageLocale } from '@mono/web/lib/constants';
import executeCachedQuery from '@mono/web/lib/executeCachedQuery';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';

export const dynamic = 'force-static';
export const revalidate = 60;

export interface RootLayoutProps {
  params: {
    slug: string[];
    locale: LanguageLocale;
    draft?: boolean;
  };
}

async function fetchPageData(
  draft: boolean | undefined,
  locale: LanguageLocale
) {
  const query = async (locale: LanguageLocale) => {
    const payload = await getPayloadHMR({ config });
    return payload.findGlobal({
      slug: 'homepage',
      locale,
      draft,
      depth: 2,
      fallbackLocale: DEFAULT_LOCALE
    });
  };

  return executeCachedQuery(query, 'homepage', locale, draft);
}

export default async function HomePage({
  params: { locale = DEFAULT_LOCALE, draft }
}: RootLayoutProps) {
  const homepageData = await fetchPageData(draft, locale);

  return (
    <>
      <UpdatePageTheme theme={homepageData.theme} />
      <BlocksRenderer blocks={homepageData.blocks ?? []} />
    </>
  );
}

export async function generateMetadata({
  params: { draft, locale }
}: RootLayoutProps) {
  unstable_setRequestLocale(locale);
  const data = await fetchPageData(draft, locale);

  if ('error' in data) {
    return {};
  }

  const seoImage =
    'https://ut94wx32cwlqjiry.public.blob.vercel-storage.com/opengraph-IaDqdUZAHTyyH8EfsPaH2oiQFN50MG.jpg';

  return {
    title: data.pageTitle ?? 'Monorepo',
    description: 'Default description text',
    keywords: null,
    openGraph: {
      images: [seoImage]
    }
  };
}
