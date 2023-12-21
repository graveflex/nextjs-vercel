import React, { PropsWithChildren } from 'react';

import ThemeProvider from 'theme/src/ThemeProvider';

import Layout from '@web/blocks/Layout';
import fetchPayloadData from '@web/lib/fetchPayloadData';
import StyledComponentsRegistry from '@web/lib/StyledComponentRegistry';
import { type Layout as LayoutType } from '@web/payload/payload-types';

export default async function AppLayout({
  children
}: PropsWithChildren<object>) {
  const layout = await fetchPayloadData((client) =>
    client.findGlobal({ slug: 'layout' })
  );

  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Layout {...(layout as LayoutType)}>{children}</Layout>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
