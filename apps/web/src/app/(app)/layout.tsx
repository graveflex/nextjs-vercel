import React, { PropsWithChildren } from 'react';

import ThemeProvider from 'theme/src/ThemeProvider';

import Layout from '@web/components/Layout';
import fetchPayloadData from '@web/lib/fetchPayloadData';
import StyledComponentsRegistry from '@web/lib/StyledComponentRegistry';

export default async function AppLayout({
  children
}: PropsWithChildren<object>) {
  const navigation = await fetchPayloadData((client) =>
    client.findGlobal({ slug: 'navigation' })
  );
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Layout navigation={navigation}>{children}</Layout>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
