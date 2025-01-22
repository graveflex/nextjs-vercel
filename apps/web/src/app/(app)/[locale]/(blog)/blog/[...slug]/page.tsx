import { DEFAULT_LOCALE, type LanguageLocale } from '@mono/web/lib/constants';
import { redirectApi } from '@mono/web/lib/redirectApi';
import config from '@payload-config';
import { notFound, redirect } from 'next/navigation';
import { getPayload } from 'payload';
import React from 'react';

import executeCachedQuery from '@mono/web/lib/executeCachedQuery';
import PageTemplate from './page.client';

export const dynamic = 'force-static';
export const revalidate = 60;

interface BlogDetailProps {
  params: Promise<{
    locale: LanguageLocale;
    slug: string[];
    draft?: boolean;
  }>;
}

async function fetchPageData(
  draft: boolean | undefined,
  locale: LanguageLocale,
  pageSlug: string
) {
  const query = async (locale: LanguageLocale, pageSlug?: string) => {
    const payload = await getPayload({ config });

    return Promise.all([
      payload.find({
        collection: 'posts',
        locale,
        draft,
        depth: 2,
        where: {
          slug: {
            equals: pageSlug
          }
        }
      })
    ]);
  };

  return executeCachedQuery(query, pageSlug, locale, draft);
}

export default async function Blog({ params }: BlogDetailProps) {
  const { locale = DEFAULT_LOCALE, slug, draft } = await params;
  const pageSlug = slug ? slug.join('/') : '/';

  const [postData] = await fetchPageData(draft, locale, pageSlug);

  // if there's an error fetching data, 404
  if ('error' in postData || !postData.docs[0]) {
    const redirectPath = await redirectApi(pageSlug);
    if (
      !redirectPath ||
      (typeof redirectPath === 'object' && 'error' in redirectPath)
    ) {
      return notFound();
    }
    redirect(redirectPath);
  }

  return (
    <>
      <PageTemplate post={postData.docs[0]} />
    </>
  );
}

export async function generateMetadata({ params }: BlogDetailProps) {
  const { draft, slug, locale } = await params;
  const pageSlug = slug ? slug.join('/') : '/';
  const [data] = await fetchPageData(draft, locale, pageSlug);

  if ('error' in data) {
    return {};
  }

  const seoData = data?.docs[0]?.meta;
  const seoImage =
    typeof seoData?.image !== 'number' && seoData?.image?.url
      ? seoData?.image?.url
      : 'https://ut94wx32cwlqjiry.public.blob.vercel-storage.com/opengraph-IaDqdUZAHTyyH8EfsPaH2oiQFN50MG.jpg';

  return {
    title: seoData?.title || 'Blog Post',
    description: seoData?.description || "Blog post's description",
    keywords: null,
    openGraph: {
      images: [seoImage]
    }
  };
}
