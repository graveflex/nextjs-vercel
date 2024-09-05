import type { LanguageLocale } from '@mono/web/lib/constants';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { unstable_cache } from 'next/cache';
import PageTemplate from '../page.client';

import type React from 'react';

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

  const fetchPostData = unstable_cache(
    async (draft: boolean | undefined, locale: LanguageLocale) => {
      const payload = await getPayloadHMR({ config });
      return payload.find({
        collection: 'posts',
        page: parseInt(pagPage, 10),
        locale,
        draft,
        depth: 2,
        limit: 9
      });
    },
    [`${[locale, draft, 'posts'].filter((x) => x).join('/')}?page=${pagPage}`]
  );

  const postData = await fetchPostData(draft, locale);

  return <PageTemplate postData={postData} />;
}
