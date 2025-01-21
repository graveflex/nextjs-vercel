import BlocksRenderer from '@mono/web/components/BlocksRenderer';
import { DEFAULT_LOCALE, type LanguageLocale } from '@mono/web/lib/constants';
import config from '@payload-config';
import { getPayload } from 'payload';
import { unstable_setRequestLocale } from 'next-intl/server';
import { unstable_cache } from 'next/cache';
import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@mono/web/components/ui/Accordion"

export const dynamic = 'force-static';
export const revalidate = 60;

export interface RootLayoutProps {
  params: Promise<{
    slug: string[];
    locale: LanguageLocale;
    draft?: boolean;
  }>;
}

async function fetchPageData(
  draft: boolean | undefined,
  locale: LanguageLocale
) {
  const cacheKey = [locale, 'homepage'].filter((x) => x).join('/');

  const query = async (draft: boolean | undefined, locale: LanguageLocale) => {
    const payload = await getPayload({ config });
    return payload.findGlobal({
      slug: 'homepage',
      locale,
      draft,
      depth: 2,
      fallbackLocale: DEFAULT_LOCALE
    });
  };

  const executeQuery = draft
    ? query
    : unstable_cache(query, [[locale, 'homepage'].filter((x) => x).join('/')], {
        tags: [cacheKey]
      });

  return executeQuery(draft, locale);
}

export default async function HomePage(props: RootLayoutProps) {
  const { locale = DEFAULT_LOCALE, draft } = await props.params;

  const homepageData = await fetchPageData(draft, locale);
  console.log('In page.tsx, this is homepageData: ', homepageData);

  return (
    <>
      <BlocksRenderer blocks={homepageData.blocks ?? []} />
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export async function generateMetadata(props: RootLayoutProps) {
  const { draft, locale } = await props.params;

  unstable_setRequestLocale(locale);
  const data = await fetchPageData(draft, locale);

  if ('error' in data) {
    return {};
  }

  const seoImage =
    'https://ut94wx32cwlqjiry.public.blob.vercel-storage.com/opengraph-IaDqdUZAHTyyH8EfsPaH2oiQFN50MG.jpg';

  return {
    title: data.pageTitle ?? 'Monorepo',
    description: 'Default description text',
    keywords: null,
    openGraph: {
      images: [seoImage]
    }
  };
}
