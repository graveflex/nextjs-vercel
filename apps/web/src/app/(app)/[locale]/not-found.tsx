import FourOhFour from '@mono/web/globals/FourOhFour/FourOhFour.client';
import Layout from '@mono/web/globals/Layout';
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

    if ('error' in defaultMarkdownData) {
      return { error: 'Error fetching data' };
    }

    return (
      <Layout locale={locale}>
        <FourOhFour markdown={defaultMarkdownData} />
      </Layout>
    );
  } catch (_) {
    return null;
  }
}
