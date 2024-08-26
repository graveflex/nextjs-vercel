import { DEFAULT_LOCALE } from '@mono/settings';
import type { MarkdownBlockT } from '@mono/types/payload-types';
import NotFoundC from '@mono/web/components/NotFound';
import fetchPayloadData from '@mono/web/lib/fetchPayloadDataRest';
import { cookies } from 'next/headers';
import React from 'react';

export default async function NotFound() {
  const locale = cookies().get('NEXT_LOCALE')?.value || DEFAULT_LOCALE;
  const [defaultMarkdownData] = await Promise.all([
    fetchPayloadData<MarkdownBlockT>({
      endpoint: '/api/globals/four-oh-four',
      params: {
        locale
      }
    })
  ]);

  if ('error' in defaultMarkdownData) {
    return { error: 'Error fetching data' };
  }

  return <NotFoundC markdownData={defaultMarkdownData} />;
}
