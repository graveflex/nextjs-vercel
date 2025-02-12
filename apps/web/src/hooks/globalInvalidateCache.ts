import nukeCache from '@mono/web/lib/nukeCache';
import type { GlobalAfterChangeHook } from 'payload';

export const globalInvalidateCache: GlobalAfterChangeHook = async ({ doc }) => {
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
