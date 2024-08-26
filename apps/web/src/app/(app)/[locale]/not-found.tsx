import { DEFAULT_LOCALE, type LOCALES } from '@mono/settings';
import NotFoundC from '@mono/web/components/NotFound';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { cookies } from 'next/headers';
import React from 'react';

export default async function NotFound() {
  const payload = await getPayloadHMR({ config });
  const locale = (cookies().get('NEXT_LOCALE')?.value ||
    DEFAULT_LOCALE) as (typeof LOCALES)[number];
  const defaultMarkdownData = await payload.findGlobal({
    slug: 'four-oh-four',
    locale
  });

  if ('error' in defaultMarkdownData) {
    return { error: 'Error fetching data' };
  }

  return (
    <NotFoundC
      markdownData={{
        ...defaultMarkdownData,
        blockType: 'markdownBlock',
        id: '42069'
      }}
    />
  );
}
