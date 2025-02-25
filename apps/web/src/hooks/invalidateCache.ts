import nukeCache from '@mono/web/lib/nukeCache';
import type { CollectionAfterChangeHook } from 'payload';

export const invalidateCache: CollectionAfterChangeHook = async ({ doc }) => {
  try {
    await nukeCache({
      publishedAt: doc?.publishedAt,
      title: doc?.title
    });
  } catch (_err) {
    // no-op
  }

  return doc;
};
