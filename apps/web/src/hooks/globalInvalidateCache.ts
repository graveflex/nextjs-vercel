import { revalidateTag } from 'next/cache';
import type { GlobalAfterChangeHook } from 'payload';

export const globalInvalidateCache: GlobalAfterChangeHook = async ({ doc }) => {
  try {
    const path = doc?.slug;

    // Invalidate the homepage
    if (path === '/') {
      revalidateTag('homepage');
    }

    // Invalidate the blog index
    if (path === 'blog') {
      revalidateTag('blogIndex');
    }

    // Invalidate the main layout if the nav or footer is updated
    if (doc?.header) {
      revalidateTag('global-nav');
    }
  } catch (_err) {
    // no-op
  }

  return doc;
};
