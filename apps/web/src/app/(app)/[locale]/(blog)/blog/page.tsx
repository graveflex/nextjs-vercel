import Tags from '@mono/web/collections/Tags';
import BlocksRenderer from '@mono/web/components/BlocksRenderer';
import { DEFAULT_LOCALE, type LanguageLocale } from '@mono/web/lib/constants';
import executeCachedQuery from '@mono/web/lib/executeCachedQuery';
import config from '@payload-config';
import { getPayload } from 'payload';
import { notFound } from 'next/navigation';
import React from 'react';
import Posts from './components/posts';

export const dynamic = 'auto';
export const revalidate = 60;

interface BlogLayoutProps {
  params: {
    locale: LanguageLocale;
    draft?: boolean;
  };
  searchParams: {
    page: string;
    sort: string;
    filter: string;
    search: string;
  };
}

async function fetchPageData(
  draft: boolean | undefined,
  locale: LanguageLocale,
  searchParams: BlogLayoutProps['searchParams']
) {
  const query = async (locale: LanguageLocale) => {
    const payload = await getPayload({ config });
    return payload.findGlobal({
      slug: 'blogIndex',
      locale,
      draft
    });
  };
  const searchParamString = `page=${searchParams.page}`;

  return executeCachedQuery(
    query,
    'blogIndex',
    locale,
    draft,
    searchParamString
  );
}

export default async function Blog({
  params: { locale = DEFAULT_LOCALE, draft },
  searchParams
}: BlogLayoutProps) {
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
      <Posts locale={locale} draft={draft} searchParams={searchParams} />
    </>
  );
}

export async function generateMetadata({
  params: { draft, locale },
  searchParams
}: BlogLayoutProps) {
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
