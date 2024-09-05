import { revalidatePath } from 'next/cache';
import type { CollectionAfterChangeHook } from 'payload';

function normalizePath(slug: string) {
  const normalized = `/${slug}`.replace(/\/+/g, '/');
  return normalized;
}

export const invalidateCache: CollectionAfterChangeHook = async ({ doc }) => {
  try {
    const path = doc?.slug;
    // invalidate dynamic block pages
    if (path) {
      revalidatePath(normalizePath(`/(app)/[locale]/[...slug]`), 'page');
    }

    // invalidate dynamic blog detail pages
    revalidatePath(
      normalizePath(`/(app)/[locale]/(blog)/blog/[...slug]`),
      'page'
    );
  } catch (_err) {
    // no-op
  }

  return doc;
};
