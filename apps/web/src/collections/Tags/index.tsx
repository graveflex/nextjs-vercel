import type { LanguageLocale } from '@mono/web/lib/constants';
import config from '@payload-config';
import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';
import type React from 'react';
import TagsClient from './tags.client';

type TagsProps = {
  locale: LanguageLocale;
  draft?: boolean;
};

export default async function TagData({ locale, draft }: TagsProps) {
  'use server';

  const fetchPostData = unstable_cache(
    async (draft: boolean | undefined, locale: LanguageLocale) => {
      const payload = await getPayload({ config });

      return payload.find({
        collection: 'tags',
        locale,
        draft,
        depth: 2
      });
    },
    [`${[locale, draft, 'tags'].filter((x) => x).join('/')}`],
    {
      tags: ['global-cache-key']
    }
  );

  const tagData = await fetchPostData(draft, locale);

  return <TagsClient tagData={tagData.docs} />;
}
