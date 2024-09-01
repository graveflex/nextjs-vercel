import { DEFAULT_LOCALE, type LanguageLocale } from '@mono/web/lib/constants';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { notFound } from 'next/navigation';
import { unstable_cache } from 'next/cache';
import React from 'react';

import PageTemplate from './page.client';

export const dynamic = 'force-static';
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
  const pagPage = searchParams.page ? searchParams.page : '1';

  const fetchPageData = unstable_cache(
    async (draft: boolean | undefined, locale: LanguageLocale) => {
      const payload = await getPayloadHMR({ config });
      return Promise.all([
        payload.findGlobal({
          slug: 'nav',
          locale
        }),
        payload.findGlobal({
          slug: 'blogIndex',
          locale,
          draft
        }),
        payload.find({
          collection: 'posts',
          page: parseInt(pagPage, 10),
          locale,
          limit: 9
        }),
        payload.find({
          collection: 'tags',
          locale
        })
      ]);
    },
    [[locale, draft, 'blog'].filter((x) => x).join('/')]
  );

  const [navData, indexData, postData, filterData] = await fetchPageData(
    draft,
    locale
  );

  // if there's an error fetching data, 404
  if (
    'error' in indexData ||
    'error' in navData ||
    'error' in postData ||
    'error' in filterData
  ) {
    return notFound();
  }

  const page = indexData;

  return <PageTemplate page={page} postData={postData} nav={navData} />;
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
