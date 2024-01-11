import React from 'react';
import { notFound } from 'next/navigation';

import Button from 'ui/components/Button';

import fetchPayloadData from '@web/lib/fetchPayloadData';

export default async function Page() {
  const data = await fetchPayloadData(async (client) =>
    client.find({
      collection: 'pages',
      where: {
        'pageConfig.slug': {
          equals: '/'
        }
      }
    })
  );

  // if there's an error fetching data, 404
  if ('error' in data) {
    return notFound();
  }

  return (
    <>
      <h1>hello world</h1>
      <Button type="button" />

      <h2>users:</h2>
      <pre>{JSON.stringify(data?.docs[0], null, 2)}</pre>
    </>
  );
}
