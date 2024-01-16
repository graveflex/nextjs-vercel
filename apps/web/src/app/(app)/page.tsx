import React from 'react';
import { notFound } from 'next/navigation';
import type { PaginatedDocs } from 'payload/database';

import BlocksRenderer from '@web/components/BlocksRenderer';
import fetchPayloadDataRest from '@web/lib/fetchPayloadDataRest';
import type { Page } from '@web/payload/payload-types';

export const revalidate = 60;
export const dynamic = 'force-dynamic';

export default async function Page() {
  const data = await fetchPayloadDataRest<PaginatedDocs<Page>>({
    endpoint: '/api/payload/pages',
    params: {
      where: {
        'pageConfig.slug': {
          equals: '/'
        }
      },
      limit: 1
    }
  });

  // if there's an error fetching data, 404
  if ('error' in data || !data.docs[0]?.blocks) {
    return notFound();
  }

  const blocks = data.docs[0]?.blocks;

  return <BlocksRenderer blocks={blocks} />;
}
