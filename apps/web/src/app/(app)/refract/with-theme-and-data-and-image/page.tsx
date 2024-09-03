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
          imageSrc="https://xcimnkefyv2zqinf.public.blob.vercel-storage.com/tmp-52453-h76vzH8SwzgV-.jpg"
          heading="This page contains no styles and pulls data from the API"
          body={data.title}
        />
      </div>
    </Providers>
  );
}
