import { revalidatePath } from 'next/cache';
import type { CollectionAfterChangeHook } from 'payload';

function normalizePath(slug: string) {
  const normalized = `/${slug}`.replace(/\/+/g, '/');
  return normalized;
}

export const invalidateCache: CollectionAfterChangeHook = async ({ doc }) => {
  try {
    const path = doc?.slug;
    if (path) {
      revalidatePath(normalizePath(`/(app)/[locale]/[...slug]`), 'page');
    }

    // TODO after rebase Invalidate the blog posts
  } catch (_err) {
    // no-op
  }

  return doc;
};
