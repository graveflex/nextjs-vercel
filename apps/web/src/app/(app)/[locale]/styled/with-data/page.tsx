import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { unstable_cache } from 'next/cache';
import PageClient from '../page.client';

export default async function BaselineWithoutDataPage() {
  const fetchPageData = unstable_cache(async () => {
    const payload = await getPayloadHMR({ config });
    const posts = await payload.find({
      collection: 'posts',
      depth: 2,
      limit: 1
    });
    return posts.docs[0];
  }, ['/baseline/with-data']);

  const data = await fetchPageData();

  return (
    <PageClient
      heading="This page contains basic styles and pulls data from the API"
      body={data.title}
    />
  );
}
