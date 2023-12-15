import React from 'react';
import { notFound } from 'next/navigation';

import Button from 'ui/components/Button';

import getPayloadClient from '@web/payload/payloadClient';

async function pageApi() {
  const payload = await getPayloadClient();
  try {
    return await payload.find({
      collection: 'users'
    });
  } catch (err) {
    return { error: err };
  }
}

export default async function Page() {
  const data = await pageApi();

  // if there's an error fetching data, 404
  if ('error' in data) {
    return notFound();
  }

  return (
    <>
      <h1>hello world</h1>
      <Button type="button" />

      <h2>users:</h2>
      <pre>{JSON.stringify(data?.docs, null, 2)}</pre>
    </>
  );
}
