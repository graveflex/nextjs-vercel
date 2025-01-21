import BlocksRenderer from '@mono/web/components/BlocksRenderer';
import { routing } from '@mono/web/i18n/routing';
import {
  DEFAULT_LOCALE,
  LOCALES,
  type LanguageLocale
} from '@mono/web/lib/constants';
import { redirectApi } from '@mono/web/lib/redirectApi';
import config from '@payload-config';
import { getPayload } from 'payload';
import { unstable_setRequestLocale } from 'next-intl/server';
import { unstable_cache } from 'next/cache';
import { notFound, redirect } from 'next/navigation';
import React from 'react';

export const dynamic = 'force-static';
export const revalidate = 60;

export interface RootLayoutProps {
  params: {
    slug: string[];
    locale: LanguageLocale;
    draft?: boolean;
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

async function fetchPageData(
  draft: boolean | undefined,
  locale: LanguageLocale,
  pageSlug: string
) {
  const cacheKey = [locale, pageSlug].filter((x) => x).join('/');

  const query = async (locale: LanguageLocale, pageSlug: string) => {
    const payload = await getPayload({ config });
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
  };

  const executeQuery = draft
    ? query
    : unstable_cache(query, [cacheKey, 'global-cache-key'], {
        tags: [cacheKey, 'global-cache-key']
      });

  return executeQuery(locale, pageSlug);
}

export default async function CatchallPage({
  params: { slug, locale: localeOrSlug = DEFAULT_LOCALE, draft }
}: RootLayoutProps) {
  let pageSlug = slug.join('/');
  let locale = localeOrSlug;
  if (LOCALES.includes(pageSlug as LanguageLocale)) {
    pageSlug = locale;
    locale = DEFAULT_LOCALE;
  }

  unstable_setRequestLocale(locale);

  const page = await fetchPageData(draft, locale, pageSlug);

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

  return <BlocksRenderer blocks={page.blocks ?? []} />;
}

export async function generateMetadata({
  params: { draft, slug, locale }
}: RootLayoutProps) {
  const pageSlug = slug ? slug.join('/') : '/';
  const data = await fetchPageData(draft, locale, pageSlug);

  if ('error' in data) {
    return {};
  }

  const pageData = data;
  const seoData = data.meta;
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
}
