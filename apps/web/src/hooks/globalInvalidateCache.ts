import { revalidatePath } from 'next/cache';
import type { GlobalAfterChangeHook } from 'payload';

export const globalInvalidateCache: GlobalAfterChangeHook = async ({ doc }) => {
  try {
    const path = doc?.slug;
    if (path) {
      revalidatePath('/', 'layout');
    }
  } catch (_err) {
    // no-op
  }

  return doc;
};
