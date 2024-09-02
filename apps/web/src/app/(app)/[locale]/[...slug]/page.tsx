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
  let pageSlug = slug ? slug.join('/') : '/';

  if (LOCALES.includes(pageSlug as LanguageLocale)) {
    pageSlug = '/';
  }

  const fetchPageData = unstable_cache(
    async (draft: boolean | undefined, locale: LanguageLocale) => {
      const payload = await getPayloadHMR({ config });
      return Promise.all([
        payload.findGlobal({
          slug: 'nav',
          locale,
          draft,
          depth: 2,
          fallbackLocale: DEFAULT_LOCALE
        }),

        payload.find({
          collection: 'pages',
          locale,
          draft,
          depth: 2,
          where: {
            slug: { equals: pageSlug }
          },
          limit: 1
        })
      ]);
    },
    [[locale, draft, pageSlug].filter((x) => x).join('/')]
  );

  const [navData, data] = await fetchPageData(draft, locale);

  // if not page data and not the index check for redirects
  if (!data.docs[0]) {
    const redirectPath = await redirectApi(pageSlug);
    if (
      !redirectPath ||
      (typeof redirectPath === 'object' && 'error' in redirectPath)
    ) {
      return notFound();
    }
    redirect(redirectPath);
  }

  const page = data.docs[0];

  return (
    <Layout theme={page.theme} {...navData}>
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
