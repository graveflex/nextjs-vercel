import React from 'react';
import { notFound } from 'next/navigation';
import fetchPayloadDataRest from '@mono/web/lib/fetchPayloadDataRest';
import type { Nav, Page } from '@mono/web/payload/payload-types';
import type { PaginatedDocs } from 'payload/database';

import PageTemplate from './page.client';

export const revalidate = 60;

interface RootLayoutProps {
  params: {
    slug: string[];
  };
}

export default async function Page({ params: { slug } }: RootLayoutProps) {
  const pageSlug = slug ? slug.join('/') : '/';
  const navData = await fetchPayloadDataRest<Nav>({
    endpoint: '/api/payload/globals/nav'
  });

  const data = await fetchPayloadDataRest<PaginatedDocs<Page>>({
    endpoint: '/api/payload/pages',
    params: {
      where: {
        'pageConfig.slug': {
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
    endpoint: '/api/payload/pages',
    params: {
      where: {
        'pageConfig.slug': {
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
