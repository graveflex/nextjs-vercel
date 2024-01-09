import type { PropsWithChildren } from 'react';
import React from 'react';

import ThemeProvider from 'theme/src/ThemeProvider';

import Layout from '@web/globals/Layout';
import fetchPayloadData from '@web/lib/fetchPayloadData';
import StyledComponentsRegistry from '@web/lib/StyledComponentRegistry';

export const metadata = {
  title: 'Homepage',
  description: 'Homepage'
};

export default async function RootLayout({
  children
}: PropsWithChildren<object>) {
  const data = await fetchPayloadData(async (client) =>
    client.findGlobal({ slug: 'nav' })
  );

  if ('error' in data) {
    return null;
  }

  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Layout {...data}>{children}</Layout>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
