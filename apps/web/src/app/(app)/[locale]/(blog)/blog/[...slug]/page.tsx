import { DEFAULT_LOCALE, type LanguageLocale } from '@mono/settings';
import type { Nav, Post } from '@mono/types/payload-types';
import fetchPayloadDataRest from '@mono/web/lib/fetchPayloadDataRest';
import { redirectApi } from '@mono/web/lib/redirectApi';
import { notFound, redirect } from 'next/navigation';
import type { PaginatedDocs } from 'payload';
import React from 'react';

import PageTemplate from './page.client';

export const revalidate = 60;

interface BlogLayoutProps {
  params: {
    locale: LanguageLocale;
    slug: string[];
  };
}

export default async function Blog({
  params: { locale = DEFAULT_LOCALE, slug }
}: BlogLayoutProps) {
  const pageSlug = slug ? slug.join('/') : '/';

  const navData = await fetchPayloadDataRest<Nav>({
    endpoint: '/api/globals/nav',
    params: {
      locale
    }
  });

  const postData = await fetchPayloadDataRest<PaginatedDocs<Post>>({
    endpoint: '/api/posts',
    params: {
      locale,
      where: {
        slug: {
          equals: pageSlug
        }
      },
      limit: 1
    }
  });

  // if there's an error fetching data, 404
  if ('error' in navData || 'error' in postData || !postData.docs[0]) {
    const redirectPath = await redirectApi(pageSlug);
    if (
      !redirectPath ||
      (typeof redirectPath === 'object' && 'error' in redirectPath)
    ) {
      return notFound();
    }
    redirect(redirectPath);
  }

  return <PageTemplate post={postData.docs[0]} nav={navData} />;
}

export async function generateMetadata({
  params: { slug }
}: {
  params: { slug?: string[] };
}) {
  const pageSlug = slug ? slug.join('/') : '/';
  const data = await fetchPayloadDataRest<PaginatedDocs<Post>>({
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
    title: seoData?.title || pageData?.title || 'Blog Post',
    description: seoData?.description || "Blog post's description",
    keywords: seoData?.keywords || null,
    openGraph: {
      images: [seoImage]
    }
  };
}
