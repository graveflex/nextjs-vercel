import React from 'react';
import { notFound, redirect } from 'next/navigation';
import { DEFAULT_LOCALE, type LanguageLocale, LOCALES } from '@mono/settings';
import type { Nav, Page } from '@mono/types/payload-types';
import fetchPayloadDataRest from '@mono/web/lib/fetchPayloadDataRest';
import { redirectApi } from '@mono/web/lib/redirectApi';
import type { PaginatedDocs } from 'payload';

import PageTemplate from './page.client';

export const revalidate = 60;

interface RootLayoutProps {
  params: {
    slug: string[];
    locale: LanguageLocale;
  };
  searchParams: {
    draft: string;
  };
}

export default async function Page({
  params: { slug, locale = DEFAULT_LOCALE },
  searchParams
}: RootLayoutProps) {
  let pageSlug = slug ? slug.join('/') : '/';
  if (LOCALES.includes(pageSlug as LanguageLocale)) {
    pageSlug = '/';
  }
  const showDraft = searchParams.draft === 'true';
  console.log('pageSlug', pageSlug);

  console.log('showDraft', showDraft);
  const navData = await fetchPayloadDataRest<Nav>({
    endpoint: '/api/globals/nav',
    params: {
      locale
    }
  });

  const data = await fetchPayloadDataRest<PaginatedDocs<Page>>({
    endpoint: '/api/pages',
    showDraft,
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
  if ('error' in data || !data.docs[0] || 'error' in navData) {
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

  return <PageTemplate page={page} nav={navData} />;
}

export async function generateMetadata({
  params: { slug, locale }
}: {
  params: { slug?: string[]; locale: LanguageLocale };
}) {
  const pageSlug = slug ? slug.join('/') : '/';
  const data = await fetchPayloadDataRest<PaginatedDocs<Page>>({
    endpoint: '/api/pages',
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

  if ('error' in data) {
    return {};
  }

  const seoData = data?.docs[0]?.seoConfig;

  return {
    title: seoData?.title || 'Default title',
    description: seoData?.description || 'Default description',
    keywords: seoData?.keywords
  };
}
