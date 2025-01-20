import BlocksRenderer from '@mono/web/components/BlocksRenderer';
import { DEFAULT_LOCALE, type LanguageLocale } from '@mono/web/lib/constants';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { unstable_setRequestLocale } from 'next-intl/server';
import { unstable_cache } from 'next/cache';
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
  const cacheKey = [locale, 'homepage'].filter((x) => x).join('/');

  const query = async (draft: boolean | undefined, locale: LanguageLocale) => {
    const payload = await getPayloadHMR({ config });
    return payload.findGlobal({
      slug: 'homepage',
      locale,
      draft,
      depth: 2,
      fallbackLocale: DEFAULT_LOCALE
    });
  };

  const executeQuery = draft
    ? query
    : unstable_cache(query, [[locale, 'homepage'].filter((x) => x).join('/')], {
        tags: [cacheKey]
      });

  return executeQuery(draft, locale);
}

export default async function HomePage({
  params: { locale = DEFAULT_LOCALE, draft }
}: RootLayoutProps) {
  const homepageData = await fetchPageData(draft, locale);

  return (
    <>
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
