import { DEFAULT_LOCALE, type LanguageLocale } from '@mono/settings';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { notFound } from 'next/navigation';
import React from 'react';

import PageTemplate from './page.client';

export const dynamic = 'force-dynamic';
export const revalidate = 60;

interface BlogLayoutProps {
  params: {
    locale: LanguageLocale;
  };
  searchParams: {
    page: string;
    sort: string;
    filter: string;
    search: string;
  };
}

export default async function Blog({
  params: { locale = DEFAULT_LOCALE },
  searchParams
}: BlogLayoutProps) {
  const payload = await getPayloadHMR({ config });
  const pagPage = searchParams.page ? searchParams.page : '1';
  // const sortRes = () => {
  //   switch (searchParams.sort) {
  //     case 'newest':
  //       return '-publishedAt';
  //     case 'oldest':
  //       return 'publishedAt';
  //     case 'asc':
  //       return 'title';
  //     case 'desc':
  //       return '-title';
  //     default:
  //       return '-publishedAt';
  //   }
  // };

  try {
    const [navData, pageData, postData, filterData] = await Promise.all([
      payload.findGlobal({
        slug: 'nav',
        locale
      }),
      payload.find({
        collection: 'pages',
        locale,
        where: {
          slug: { equals: 'blog' }
        }
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

    // if there's an error fetching data, 404
    if (
      'error' in pageData ||
      !pageData.docs[0] ||
      'error' in navData ||
      'error' in postData ||
      'error' in filterData
    ) {
      return notFound();
    }

    const page = pageData.docs[0];

    return <PageTemplate page={page} postData={postData} nav={navData} />;
  } catch (_) {
    return null;
  }
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
