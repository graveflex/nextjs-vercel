import { revalidatePath } from 'next/cache';
import type { CollectionAfterChangeHook } from 'payload';

export const invalidateCache: CollectionAfterChangeHook = async ({ doc }) => {
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
