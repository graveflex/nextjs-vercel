import Tags from '@mono/web/collections/Tags';
import BlocksRenderer from '@mono/web/components/BlocksRenderer';
import { DEFAULT_LOCALE, type LanguageLocale } from '@mono/web/lib/constants';
import config from '@payload-config';
import { unstable_cache } from 'next/cache';
import { notFound } from 'next/navigation';
import { getPayload } from 'payload';
import React from 'react';
import Posts from './components/posts';

export const dynamic = 'auto';
export const revalidate = 60;

interface BlogLayoutProps {
  params: Promise<{
    locale: LanguageLocale;
    draft?: boolean;
  }>;
  searchParams: Promise<{
    page: string;
    sort: string;
    filter: string;
    search: string;
  }>;
}

async function fetchPageData(
  draft: boolean | undefined,
  locale: LanguageLocale,
  searchParams: BlogLayoutProps['searchParams']
) {
  const cacheKey = [locale, 'blogIndex'].filter((x) => x).join('/');
  const { page } = await searchParams;

  const query = async (draft: boolean | undefined, locale: LanguageLocale) => {
    const payload = await getPayload({ config });
    return payload.findGlobal({
      slug: 'blogIndex',
      locale,
      draft
    });
  };

  const executeQuery = draft
    ? query
    : unstable_cache(
        query,
        [
          `${[locale, 'blog'].filter((x) => x).join('/')}?page=${page}`
        ],
        {
          tags: [cacheKey]
        }
      );

  return executeQuery(draft, locale);
}

export default async function Blog({
  params,
  searchParams
}: BlogLayoutProps) {
  const { locale = DEFAULT_LOCALE, draft } = await params;
  const sp = await searchParams;
  const indexData = await fetchPageData(draft, locale, searchParams);

  // if there's an error fetching data, 404
  if ('error' in indexData) {
    return notFound();
  }

  const page = indexData;
  const blocks = page.blocks;

  return (
    <>
      {blocks && <BlocksRenderer blocks={blocks} />}
      <Tags locale={locale} draft={draft} />
      <Posts locale={locale} draft={draft} searchParams={sp} />
    </>
  );
}

export async function generateMetadata({
  params,
  searchParams
}: BlogLayoutProps) {
  const { draft, locale } = await params;
  const data = await fetchPageData(draft, locale, searchParams);

  if ('error' in data) {
    return {};
  }

  // const seoData = data?.docs[0]?.meta;
  const seoImage =
    'https://ut94wx32cwlqjiry.public.blob.vercel-storage.com/opengraph-IaDqdUZAHTyyH8EfsPaH2oiQFN50MG.jpg';

  return {
    title: data.pageTitle || 'Blog',
    description: 'Default Blog description',
    keywords: null,
    openGraph: {
      images: [seoImage]
    }
  };
}
