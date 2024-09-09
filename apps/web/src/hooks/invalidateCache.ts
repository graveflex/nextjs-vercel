import { revalidateTag } from 'next/cache';
import type { CollectionAfterChangeHook } from 'payload';

export const invalidateCache: CollectionAfterChangeHook = async ({ doc }) => {
  try {
    const path = doc?.slug;
    // invalidate dynamic block pages / blog detail pages
    if (path) {
      revalidateTag(path);
    }
  } catch (_err) {
    // no-op
  }

  return doc;
};
