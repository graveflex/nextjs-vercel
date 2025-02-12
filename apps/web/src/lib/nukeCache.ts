import { CACHE_TAGS } from '@mono/web/lib/constants';
import { revalidatePath, revalidateTag } from 'next/cache';

export default async function nukeCache({
  publishedAt = new Date().getTime().toString(),
  title = 'Untitled Document'
}: { publishedAt: string; title: string }) {
  try {
    const waitUntil =
      publishedAt && new Date(publishedAt) ? new Date(publishedAt) : new Date();

    const shouldQueue = waitUntil.getTime() > new Date().getTime();

    if (shouldQueue) {
      const { getPayload } = require('payload');
      const config = require('@payload-config');
      const { default: payload } = await getPayload({ config });
      await payload.jobs.queue({
        task: 'NukeCache',
        input: { title },
        waitUntil
      });
    } else {
      revalidatePath('/', 'layout');

      for (const tag of CACHE_TAGS) {
        revalidateTag(tag);
      }
    }
  } catch (_err) {
    // no-op
  }
}
