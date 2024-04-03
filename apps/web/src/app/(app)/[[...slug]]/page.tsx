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
    endpoint: '/api/payload/globals/nav'
  });

  const data = await fetchPayloadDataRest<PaginatedDocs<Page>>({
    endpoint: '/api/payload/pages',
    showDraft,
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

  const versionData = await fetchPayloadDataRest<PaginatedDocs<Page>>({
    endpoint: '/api/payload/pages/versions',
    params: {
      where: {
        'pageConfig.slug': {
          equals: pageSlug
        }
      },
      sort: '-createdAt',
      limit: 10
    }
  });

  if ('error' in versionData || !versionData.docs[0]) {
    console.log('no version data');
  }

  const now = new Date();

  const recentPublishedVersion = versionData.docs.find(
    (versionedPages: Page) => {
      if (!versionedPages.version.publishedAt) {
        return false;
      }
      const publishedAt = new Date(versionedPages.version.publishedAt);
      return publishedAt <= now;
    }
  );

  console.log('logging recent published', recentPublishedVersion);

  const page = data.docs[0] || recentPublishedVersion.version;

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
