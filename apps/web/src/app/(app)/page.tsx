import React from 'react';
import { notFound } from 'next/navigation';
import first from 'lodash/first';

import RenderBlocks from '@web/components/RenderBlocks';
import fetchPayloadData from '@web/lib/fetchPayloadData';
import { Page } from '@web/payload/payload-types';

// const pageApi = async (slug: string) => {
export default async function Page() {
  // const data = (await pageApi('home')) as { docs: Page[] };
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

  const page = first(data?.docs);

  // if there's an error fetching data, 404
  if ('error' in data) {
    return notFound();
  }

  return <RenderBlocks blocks={page?.layout || []} />;
}
