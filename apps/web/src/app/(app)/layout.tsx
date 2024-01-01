import type { PropsWithChildren } from 'react';
import React from 'react';

import ThemeProvider from 'theme/src/ThemeProvider';

import Layout from '@web/globals/Layout';
import fetchPayloadData from '@web/lib/fetchPayloadData';
import StyledComponentsRegistry from '@web/lib/StyledComponentRegistry';
// import { type Layout as LayoutType } from '@web/payload/payload-types';

export default async function AppLayout({
  children
}: PropsWithChildren<object>) {
  const layout = await fetchPayloadData((client) =>
    client.findGlobal({ slug: 'layout' })
  );

  if ('error' in layout) {
    return null;
  }

  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Layout {...layout}>{children}</Layout>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
