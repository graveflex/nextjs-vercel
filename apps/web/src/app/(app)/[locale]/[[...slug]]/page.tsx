import { DEFAULT_LOCALE, LOCALES, type LanguageLocale } from '@mono/settings';
import BlocksRenderer from '@mono/web/components/BlocksRenderer';
import Loading from '@mono/web/components/Loading';
import Layout from '@mono/web/globals/Layout';
import { redirectApi } from '@mono/web/lib/redirectApi';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { notFound, redirect } from 'next/navigation';
import React, { Suspense } from 'react';

export const dynamic = 'force-static';
export const revalidate = 60;

export interface RootLayoutProps {
  draft?: boolean;
  params: {
    slug: string[];
    locale: LanguageLocale;
  };
}

export default async function CatchallPage({
  draft,
  params: { slug, locale = DEFAULT_LOCALE },
}: RootLayoutProps) {
  const payload = await getPayloadHMR({ config });
  let pageSlug = slug ? slug.join('/') : '/';

  if (LOCALES.includes(pageSlug as LanguageLocale)) {
    pageSlug = '/';
  }

  try {
    const [navData, homepageData, data] = await Promise.all([
      payload.findGlobal({
        slug: 'nav',
        locale,
        draft,
        depth: 2,
        fallbackLocale: DEFAULT_LOCALE
      }),

      payload.findGlobal({
        slug: 'homepage',
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

    // if not page data and not the index check for redirects
    if (!data.docs[0] && pageSlug !== '/') {
      const redirectPath = await redirectApi(pageSlug);
      if (
        !redirectPath ||
        (typeof redirectPath === 'object' && 'error' in redirectPath)
      ) {
        return notFound();
      }
      redirect(redirectPath);
    }

    // if there's an error fetching data, 404
    if ('error' in data || 'error' in navData) {
      const redirectPath = await redirectApi(pageSlug);
      if (
        !redirectPath ||
        (typeof redirectPath === 'object' && 'error' in redirectPath)
      ) {
        return notFound();
      }
      redirect(redirectPath);
    }

    const page = data.docs[0] ?? homepageData;

    return (
      <>
        <Layout theme={page.theme} {...navData}>
          <Suspense fallback={<Loading />}>
            <BlocksRenderer blocks={page.blocks ?? []} />
          </Suspense>
        </Layout>
      </>
    );
  } catch (_) {
    return null;
  }
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
