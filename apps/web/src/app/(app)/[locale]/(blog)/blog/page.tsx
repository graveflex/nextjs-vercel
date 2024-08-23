import React from 'react';
import { notFound } from 'next/navigation';
import { DEFAULT_LOCALE, type LanguageLocale } from '@mono/settings';
import type { Nav, Page, Post, Tag } from '@mono/types/payload-types';
import fetchPayloadDataRest from '@mono/web/lib/fetchPayloadDataRest';
import type { PaginatedDocs } from 'payload';

import PageTemplate from './page.client';

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
  const navData = await fetchPayloadDataRest<Nav>({
    endpoint: '/api/globals/nav',
    params: {
      locale
    }
  });

  const pagPage = searchParams.page ? searchParams.page : 1;
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

  const [pageData, postData, filterData] = await Promise.all([
    fetchPayloadDataRest<PaginatedDocs<Page>>({
      endpoint: '/api/findPage',
      params: {
        locale,
        where: {
          slug: {
            equals: 'blog'
          }
        },
        limit: 1
      }
    }),
    fetchPayloadDataRest<PaginatedDocs<Post>>({
      endpoint: '/api/posts',
      page: pagPage.toString(),
      params: {
        locale,
        limit: 9
      }
    }),

    fetchPayloadDataRest<PaginatedDocs<Tag>>({
      endpoint: '/api/tags',
      params: {
        locale
      }
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
}

export async function generateMetadata({
  params: { slug }
}: {
  params: { slug?: string[] };
}) {
  const pageSlug = slug ? slug.join('/') : '/';
  const data = await fetchPayloadDataRest<PaginatedDocs<Page>>({
    endpoint: '/api/posts',
    params: {
      where: {
        slug: {
          equals: pageSlug
        }
      },
      limit: 1
    }
  });

  if ('error' in data) {
    return {};
  }

  const pageData = data?.docs[0];
  const seoData = data?.docs[0]?.meta;
  const seoImage =
    typeof seoData?.image !== 'number' && seoData?.image?.url
      ? seoData?.image?.url
      : 'https://ut94wx32cwlqjiry.public.blob.vercel-storage.com/opengraph-IaDqdUZAHTyyH8EfsPaH2oiQFN50MG.jpg';

  return {
    title: seoData?.title || pageData?.pageTitle || 'Blog',
    description: seoData?.description || "Blog's description",
    keywords: seoData?.keywords || null,
    openGraph: {
      images: [seoImage]
    }
  };
}
