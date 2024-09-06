import FourOhFour from '@mono/web/globals/FourOhFour/FourOhFour.client';
import { DEFAULT_LOCALE, type LOCALES } from '@mono/web/lib/constants';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { cookies } from 'next/headers';
import React from 'react';

export const dynamic = 'auto';
export const revalidate = 60;

export default async function NotFound() {
  const payload = await getPayloadHMR({ config });
  const locale = (cookies().get('NEXT_LOCALE')?.value ||
    DEFAULT_LOCALE) as (typeof LOCALES)[number];

  try {
    const defaultMarkdownData = await payload.findGlobal({
      slug: 'four-oh-four',
      locale,
      depth: 1,
      fallbackLocale: DEFAULT_LOCALE
    });

    const defaultNavData = await payload.findGlobal({
      slug: 'nav',
      locale,
      depth: 2,
      fallbackLocale: DEFAULT_LOCALE
    });

    if ('error' in defaultMarkdownData || 'error' in defaultNavData) {
      return { error: 'Error fetching data' };
    }

    return <FourOhFour markdown={defaultMarkdownData} nav={defaultNavData} />;
  } catch (_) {
    return null;
  }
}
