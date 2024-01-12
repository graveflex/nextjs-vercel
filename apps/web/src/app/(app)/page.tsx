import React from 'react';
import { notFound } from 'next/navigation';

import BlocksRenderer from '@web/components/BlocksRenderer';
import fetchPayloadData from '@web/lib/fetchPayloadData';

export default async function Page() {
  const data = await fetchPayloadData(async (client) =>
    client.find({
      collection: 'pages',
      where: {
        'pageConfig.slug': {
          equals: '/'
        }
      },
      limit: 1
    })
  );

  // if there's an error fetching data, 404
  if ('error' in data || !data.docs[0]?.blocks) {
    return notFound();
  }

  const blocks = data.docs[0]?.blocks;

  return <BlocksRenderer blocks={blocks} />;
}
