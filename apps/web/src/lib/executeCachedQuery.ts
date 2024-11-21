import type { LanguageLocale } from '@mono/web/lib/constants';
import { unstable_cache } from 'next/cache';

export default function executeCachedQuery<
  T extends (locale: LanguageLocale, slug?: string) => Promise<unknown>
>(
  query: T,
  key: string,
  locale: LanguageLocale,
  draft: boolean | undefined,
  searchParams?: string
) {
  const cacheKey = [locale, key].filter((x) => x).join('/');
  const executeQuery = draft
    ? query
    : unstable_cache(
        query,
        [
          `${[process.env.VERCEL_GIT_COMMIT_REF, cacheKey]
            .filter((x) => x)
            .join('/')}?${searchParams}`
        ],
        {
          tags: [cacheKey]
        }
      );
  return executeQuery(locale, key) as ReturnType<T>;
}
