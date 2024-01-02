import React from 'react';
import { notFound } from 'next/navigation';

import RenderBlocks from '@web/components/RenderBlocks';
import fetchPayloadData from '@web/lib/fetchPayloadData';
import type { Page } from '@web/payload/payload-types';

export default async function Page() {
  const data = (await fetchPayloadData((client) =>
    client.find({
      collection: 'page',
      where: {
        slug: {
          equals: 'home'
        }
      }
    })
  )) as { docs: Page[] };

  const page = data?.docs?.[0];

  if ('error' in data) {
    return notFound();
  }

  return <RenderBlocks blocks={page?.layout || []} />;
}
