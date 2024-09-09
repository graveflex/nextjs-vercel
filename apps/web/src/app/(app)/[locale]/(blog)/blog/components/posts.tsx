import type { LanguageLocale } from '@mono/web/lib/constants';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { unstable_cache } from 'next/cache';
import type { Where } from 'payload';
import type React from 'react';
import PageTemplate from '../page.client';

type LayoutProps = {
  locale: LanguageLocale;
  draft?: boolean;
  searchParams: {
    page: string;
    sort: string;
    filter: string;
    search: string;
  };
};

export default async function Posts({
  locale,
  draft,
  searchParams
}: LayoutProps) {
  'use server';

  const pagPage = searchParams.page;
  const filterPage = searchParams.filter;
  const sortPage = searchParams.sort ?? 'newest';
  const searchPage = searchParams.search;

  const fetchPostData = unstable_cache(
    async (draft: boolean | undefined, locale: LanguageLocale) => {
      const payload = await getPayloadHMR({ config });

      const filterQuery: Where = filterPage
        ? {
            'tags.label': {
              in: filterPage
            }
          }
        : {};

      const searchQuery: Where = searchPage
        ? {
            title: {
              contains: searchPage
            }
          }
        : {};

      const filterSearchQuery: Where = {
        and: [filterQuery, searchQuery]
      };

      return payload.find({
        collection: 'posts',
        page: parseInt(pagPage, 10),
        sort: sortPage === 'oldest' ? 'publishedAt' : '-publishedAt',
        where: filterSearchQuery,
        locale,
        draft,
        depth: 2,
        limit: 9
      });
    },
    [
      `${[locale, draft, 'posts'].filter((x) => x).join('/')}?page=${pagPage}?filter=${filterPage}?sort=${sortPage}?search=${searchPage}`
    ]
  );

  const postData = await fetchPostData(draft, locale);

  return <PageTemplate postData={postData} />;
}
