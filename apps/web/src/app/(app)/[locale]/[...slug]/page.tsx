import BlocksRenderer from '@mono/web/components/BlocksRenderer';
import Layout from '@mono/web/globals/Layout';
import {
  DEFAULT_LOCALE,
  LOCALES,
  type LanguageLocale
} from '@mono/web/lib/constants';
import { redirectApi } from '@mono/web/lib/redirectApi';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { unstable_cache } from 'next/cache';
import { notFound, redirect } from 'next/navigation';
import React from 'react';

export const dynamic = 'force-static';
export const revalidate = 60;

interface RootLayoutProps {
  params: {
    slug: string[];
    locale: LanguageLocale;
    draft?: boolean;
  };
}

export default async function CatchallPage({
  params: { slug, locale = DEFAULT_LOCALE, draft }
}: RootLayoutProps) {
  const pageSlug = slug.join('/');

  const fetchPageData = unstable_cache(
    async (draft: boolean | undefined, locale: LanguageLocale) => {
      const payload = await getPayloadHMR({ config });
      const data = await payload.find({
        collection: 'pages',
        locale,
        draft,
        depth: 2,
        where: {
          slug: { equals: pageSlug }
        },
        limit: 1
      });

      return data?.docs?.[0];
    },
    [[locale, draft, pageSlug].filter((x) => x).join('/')]
  );

  const page = await fetchPageData(draft, locale);

  // if not page data and not the index check for redirects
  if (!page) {
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
    <Layout
      id={page.id}
      theme={page.theme}
      params={{
        locale: locale,
        draft: draft
      }}
    >
      <BlocksRenderer blocks={page.blocks ?? []} />
    </Layout>
  );
}

export async function generateMetadata({
  params: { slug, locale }
}: RootLayoutProps) {
  const pageSlug = slug ? slug.join('/') : '/';
  const payload = await getPayloadHMR({ config });

  try {
    const data = await payload.find({
      collection: 'pages',
      locale,
      depth: 2,
      where: {
        slug: { equals: pageSlug }
      },
      limit: 1
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
      title: seoData?.title || pageData?.pageTitle || 'Monorepo',
      description: seoData?.description || 'Default description text',
      keywords: seoData?.keywords || null,
      openGraph: {
        images: [seoImage]
      }
    };
  } catch (_) {
    return {};
  }
}
