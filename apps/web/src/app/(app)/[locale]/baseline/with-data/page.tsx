import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { unstable_cache } from 'next/cache';

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
    <div style={{}}>
      <h2>This page contains no styles and pulls data from the API</h2>
      <p>{data.title}</p>
    </div>
  );
}
