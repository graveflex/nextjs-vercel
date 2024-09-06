import BlocksRenderer from '@mono/web/components/BlocksRenderer';
import Layout from '@mono/web/globals/Layout';
import { DEFAULT_LOCALE, type LanguageLocale } from '@mono/web/lib/constants';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { unstable_cache } from 'next/cache';
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

export default async function Blog({
  params: { locale = DEFAULT_LOCALE, draft },
  searchParams
}: BlogLayoutProps) {
  const query = async (draft: boolean | undefined, locale: LanguageLocale) => {
    const payload = await getPayloadHMR({ config });
    return payload.findGlobal({
      slug: 'blogIndex',
      locale,
      draft
    });
  };

  const fetchPageData = draft
    ? query
    : unstable_cache(query, [
        `${[locale, 'blog'].filter((x) => x).join('/')}?page=${searchParams.page}`
      ]);

  const indexData = await fetchPageData(draft, locale);

  // if there's an error fetching data, 404
  if ('error' in indexData) {
    return notFound();
  }

  const page = indexData;
  const blocks = page.blocks;

  return (
    <Layout theme={page.theme} locale={locale} draft={draft}>
      <span>{searchParams.page}</span>
      {blocks && <BlocksRenderer blocks={blocks} />}
      <Posts locale={locale} draft={draft} searchParams={searchParams} />
    </Layout>
  );
}

export async function generateMetadata({
  params: { slug }
}: {
  params: { slug?: string[] };
}) {
  const payload = await getPayloadHMR({ config });
  const pageSlug = slug ? slug.join('/') : '/';

  try {
    const data = await payload.find({
      collection: 'posts',
      where: {
        slug: { equals: pageSlug }
      },
      limit: 1
    });

    if ('error' in data) {
      return {};
    }

    const seoData = data?.docs[0]?.meta;
    const seoImage =
      typeof seoData?.image !== 'number' && seoData?.image?.url
        ? seoData?.image?.url
        : 'https://ut94wx32cwlqjiry.public.blob.vercel-storage.com/opengraph-IaDqdUZAHTyyH8EfsPaH2oiQFN50MG.jpg';

    return {
      title: seoData?.title || 'Blog',
      description: seoData?.description || "Blog's description",
      keywords: seoData?.keywords || null,
      openGraph: {
        images: [seoImage]
      }
    };
  } catch (_) {
    return {};
  }
}
