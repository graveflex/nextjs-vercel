import BlocksRenderer from '@mono/web/components/BlocksRenderer';
import { Button } from '@mono/web/components/ui/Button';
import { DEFAULT_LOCALE, type LanguageLocale } from '@mono/web/lib/constants';
import executeCachedQuery from '@mono/web/lib/executeCachedQuery';
import config from '@payload-config';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getPayload } from 'payload';
import React from 'react';

export const dynamic = 'force-static';
export const revalidate = 60;

export interface RootLayoutProps {
  params: Promise<{
    slug: string[];
    locale: LanguageLocale;
    draft?: boolean;
  }>;
}

async function fetchPageData(
  draft: boolean | undefined,
  locale: LanguageLocale
) {
  const query = async (locale: LanguageLocale) => {
    const payload = await getPayload({ config });
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

export default async function HomePage(props: RootLayoutProps) {
  const { locale = DEFAULT_LOCALE, draft } = await props.params;

  const homepageData = await fetchPageData(draft, locale);

  return (
    <>
      <Button>click me</Button>
      <BlocksRenderer blocks={homepageData.blocks ?? []} />
    </>
  );
}

export async function generateMetadata(props: RootLayoutProps) {
  const { draft, locale } = await props.params;

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
