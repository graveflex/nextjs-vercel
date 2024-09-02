import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { unstable_cache } from 'next/cache';

export default async function BaselineWithoutDataPage() {
  const fetchPageData = unstable_cache(async () => {
    const payload = await getPayloadHMR({ config });
    return payload.findGlobal({
      slug: 'nav',
      depth: 2
    });
  }, ['/baseline/with-data']);

  const data = await fetchPageData();

  console.log('@-->data', data);

  return (
    <div
      style={{
        display: 'grid',
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h2>This page contains no styles and pulls data from the API</h2>
      <p><b>data:</b></p>
    </div>
  );
}
