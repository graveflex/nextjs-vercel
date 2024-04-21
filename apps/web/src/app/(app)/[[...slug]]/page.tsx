import React from 'react';
import { notFound } from 'next/navigation';
import type { Nav, Page } from '@mono/types/payload-types';
import fetchPayloadDataRest from '@mono/web/lib/fetchPayloadDataRest';
import type { PaginatedDocs } from 'payload/database';

import PageTemplate from './page.client';

export const revalidate = 60;

interface RootLayoutProps {
  params: {
    slug: string[];
  };
  searchParams: {
    draft: string;
  };
}

export default async function Page({
  params: { slug },
  searchParams
}: RootLayoutProps) {
  const pageSlug = slug ? slug.join('/') : '/';
  const showDraft = searchParams.draft === 'true';
  const navData = await fetchPayloadDataRest<Nav>({
    endpoint: '/api/globals/nav'
  });

  const data = await fetchPayloadDataRest<PaginatedDocs<Page>>({
    endpoint: '/api/pages',
    showDraft,
    params: {
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
    return notFound();
  }

  const page = data.docs[0];

  return <PageTemplate page={page} nav={navData} />;
}

export async function generateMetadata({
  params: { slug }
}: {
  params: { slug?: string[] };
}) {
  const pageSlug = slug ? slug.join('/') : '/';
  const data = await fetchPayloadDataRest<PaginatedDocs<Page>>({
    endpoint: '/api/pages',
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

  const seoData = data?.docs[0]?.seoConfig;

  return {
    title: seoData?.title || 'Default title',
    description: seoData?.description || 'Default description',
    keywords: seoData?.keywords
  };
}
