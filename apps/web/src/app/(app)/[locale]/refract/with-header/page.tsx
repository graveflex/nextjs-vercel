import type { Image as PayloadImage } from '@mono/types/payload-types';
import Layout from '@mono/web/globals/Layout';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { unstable_cache } from 'next/cache';
import dynamic from 'next/dynamic';
import Providers from '../providers';

const defaultOpts = {
  suspense: true,
  ssr: true
};

const PageClient = dynamic(() => import('../page.client'), {
  ...defaultOpts
});

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
      <Layout locale="en-US">
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
      </Layout>
    </Providers>
  );
}
