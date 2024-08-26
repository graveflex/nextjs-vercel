import { DEFAULT_LOCALE, type LanguageLocale } from '@mono/settings';
import { redirectApi } from '@mono/web/lib/redirectApi';
import { notFound, redirect } from 'next/navigation';
import React from 'react';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';

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
  const payload = await getPayloadHMR({ config });
  const pageSlug = slug ? slug.join('/') : '/';

  const [navData, postData] = await Promise.all([
    payload.findGlobal({
      slug: 'nav',
      locale
    }),
    payload.find({
      collection: 'posts',
      locale,
      where: {
        slug: {
          equals: pageSlug
        }
      }
    })
  ]);

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
  const payload = await getPayloadHMR({ config });
  const pageSlug = slug ? slug.join('/') : '/';
  const data = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: pageSlug
      }
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
