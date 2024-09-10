import type { Image as PayloadImage } from '@mono/types/payload-types';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { unstable_cache } from 'next/cache';
import PageClient from '../page.client';
import Providers from '../providers';

export default async function RefractWithoutDataPage() {
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
    <Providers>
      <div
        style={{
          display: 'grid',
          justifyItems: 'center',
          margin: '4rem'
        }}
      >
        <PageClient
          payloadImg={data.coverImage as PayloadImage}
          heading="This page contains the entire refract theme and pulls data from the API"
          body={data.title}
        />
      </div>
    </Providers>
  );
}
