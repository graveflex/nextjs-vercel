import BlocksRenderer from '@mono/web/components/BlocksRenderer';
import Layout from '@mono/web/globals/Layout';
import { unstable_setRequestLocale } from 'next-intl/server';
import { DEFAULT_LOCALE, type LanguageLocale } from '@mono/web/lib/constants';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
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

export default async function CatchallPage({
  params: { locale = DEFAULT_LOCALE, draft }
}: RootLayoutProps) {
  const fetchPageData = unstable_cache(
    async (draft: boolean | undefined, locale: LanguageLocale) => {
      const payload = await getPayloadHMR({ config });

      return payload.findGlobal({
        slug: 'homepage',
        locale,
        draft,
        depth: 2,
        fallbackLocale: DEFAULT_LOCALE
      });
    },
    [[locale, draft, 'homepage'].filter((x) => x).join('/')]
  );

  const homepageData = await fetchPageData(draft, locale);

  return (
    <Layout theme={homepageData.theme} locale={locale} draft={draft}>
      <BlocksRenderer blocks={homepageData.blocks ?? []} />
    </Layout>
  );
}

export async function generateMetadata({
  params: { locale }
}: RootLayoutProps) {
  unstable_setRequestLocale(locale);
  const payload = await getPayloadHMR({ config });

  try {
    const data = await payload.findGlobal({
      slug: 'homepage',
      locale,
      depth: 2,
      fallbackLocale: DEFAULT_LOCALE
    });

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
  } catch (_) {
    return {};
  }
}
