import { LOCALES } from '@mono/settings';
import { revalidatePath } from 'next/cache';
import type { GlobalAfterChangeHook } from 'payload';

function normalizePath(slug: string) {
  const normalized = `/${slug}`.replace(/\/+/g, '/');
  return normalized;
}

export const globalInvalidateCache: GlobalAfterChangeHook = async ({ doc }) => {
  try {
    const path = doc?.slug;
    if (path) {
      revalidatePath(normalizePath(`/${path}`));

      LOCALES.forEach((locale) => {
        revalidatePath(normalizePath(`/${locale}/${path}`));
      });
    }
  } catch (_err) {
    // no-op
  }

  return doc;
};