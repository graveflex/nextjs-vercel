import { revalidatePath } from 'next/cache';
import type { GlobalAfterChangeHook } from 'payload';

export const globalInvalidateCache: GlobalAfterChangeHook = async ({ doc }) => {
  try {
    const path = doc?.slug;

    // Invalidate the homepage
    if (path === '/') {
      revalidatePath('/(app)/[locale]/', 'page');
    }

    // Invalidate the blog index
    if (path === 'blog') {
      revalidatePath(`/(app)/[locale]/(blog)/blog`, 'page');
    }

    // Invalidate the main layout if the nav or footer is updated
    if (doc?.header) {
      revalidatePath('/', 'layout');
    }
  } catch (_err) {
    // no-op
  }

  return doc;
};
