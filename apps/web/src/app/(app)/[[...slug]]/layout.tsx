import React from 'react';
import ThemeProvider from '@mono/theme/src/ThemeProvider';
import Layout from '@mono/web/globals/Layout';
import fetchPayloadDataRest from '@mono/web/lib/fetchPayloadDataRest';
import expandedDoc from '@mono/web/lib/isExpandedDoc';
import StyledComponentsRegistry from '@mono/web/lib/StyledComponentRegistry';
import type { Nav, Page } from '@mono/web/payload/payload-types';
import type { PaginatedDocs } from 'payload/database';

export const revalidate = 60;

async function RootLayout({ children, params: { slug } }) {
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
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <Layout {...data}>{children}</Layout>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

export default RootLayout;
