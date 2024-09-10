import { revalidateTag } from 'next/cache';
import type { CollectionAfterChangeHook } from 'payload';

export const invalidateCache: CollectionAfterChangeHook = async ({
  req,
  doc
}) => {
  try {
    const path = doc?.slug;
    const locale = req?.locale;

    // invalidate dynamic block pages / blog detail pages
    revalidateTag(`${locale}/${path}`);
  } catch (_err) {
    // no-op
  }

  return doc;
};
