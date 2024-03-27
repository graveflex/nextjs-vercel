import React from 'react';
import MaybeThemed from '@mono/web/components/MaybeThemed';
import Layout from '@mono/web/globals/Layout';
import fetchPayloadDataRest from '@mono/web/lib/fetchPayloadDataRest';
import expandedDoc from '@mono/web/lib/isExpandedDoc';
import type { Nav, Page } from '@mono/web/payload/payload-types';
import type { PaginatedDocs } from 'payload/database';

export const revalidate = 60;

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    slug: string[];
  };
}

async function RootLayout({ children, params: { slug } }: RootLayoutProps) {
  const data = await fetchPayloadDataRest<Nav>({
    endpoint: '/api/payload/globals/nav'
  });
  const pageSlug = slug ? slug.join('/') : '/';
  // this call will be deduped
  const pageData = await fetchPayloadDataRest<PaginatedDocs<Page>>({
    endpoint: '/api/payload/pages',
    params: {
      where: {
        'pageConfig.slug': {
          equals: pageSlug
        }
      },
      limit: 1
    }
  });

  if ('error' in data) {
    return null;
  }

  const page = expandedDoc<PaginatedDocs<Page>>(pageData);

  const theme = page?.docs[0]?.pageConfig?.theme || 'light';

  return (
    <MaybeThemed theme={theme}>
      <Layout {...data}>{children}</Layout>
    </MaybeThemed>
  );
}

export default RootLayout;
