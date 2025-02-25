import type { LanguageLocale } from '@mono/web/lib/constants';
import executeCachedQuery from '@mono/web/lib/executeCachedQuery';
import config from '@payload-config';
import { getPayload } from 'payload';
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

async function fetchPostData({ draft, locale, searchParams }: LayoutProps) {
  const pagPage = searchParams.page;
  const filterPage = searchParams.filter;
  const sortPage = searchParams.sort;
  const searchPage = searchParams.search;

  const filterQueries: Where[] = [];

  if (filterPage) {
    filterQueries.push({
      'tags.label': {
        in: filterPage
      }
    });
  }

  if (searchPage) {
    filterQueries.push({
      title: {
        contains: searchPage
      }
    });
  }

  const filterSearchQuery = filterQueries.length
    ? {
        and: filterQueries
      }
    : undefined;

  const query = async (locale: LanguageLocale) => {
    const payload = await getPayload({ config });

    const resp = await payload.find({
      collection: 'posts',
      page: parseInt(pagPage ?? '1', 10),
      sort: sortPage === 'oldest' ? 'publishedAt' : '-publishedAt',
      where: filterSearchQuery,
      locale,
      draft,
      depth: 2,
      limit: 9
    });

    return resp;
  };

  // don't cache search / filter combinations
  const bypassCache = !!(draft || filterPage || searchPage || sortPage);

  return executeCachedQuery(query, 'blogPosts', locale, bypassCache);
}

export default async function Posts({
  locale,
  draft,
  searchParams
}: LayoutProps) {
  'use server';

  const postData = await fetchPostData({ draft, locale, searchParams });

  return <PageTemplate postData={postData} />;
}
