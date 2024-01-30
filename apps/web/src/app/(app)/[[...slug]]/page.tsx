import React from 'react';
import { notFound } from 'next/navigation';
import type { PaginatedDocs } from 'payload/database';

import fetchPayloadDataRest from '@web/lib/fetchPayloadDataRest';
import type { Page } from '@web/payload/payload-types';

import PageTemplate from './page.client';

export const revalidate = 60;

export default async function Page({
  params: { slug }
}: {
  params: { slug: string[] | undefined };
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

  // if there's an error fetching data, 404
  if ('error' in data || !data.docs[0]) {
    return notFound();
  }

  const page = data.docs[0];

  return <PageTemplate page={page} />;
}
