import { revalidatePath, revalidateTag } from 'next/cache';
import type { CollectionAfterChangeHook } from 'payload';

export const invalidateCache: CollectionAfterChangeHook = async ({ doc }) => {
  try {
    revalidatePath('/', 'layout');

    const tags = ['global-nav', 'global-cache-key'];
    for (const tag of tags) {
      revalidateTag(tag);
    }
  } catch (_err) {
    // no-op
  }

  return doc;
};
