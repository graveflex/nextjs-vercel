import type { PropsWithChildren } from 'react';
import React from 'react';

import ThemeProvider from 'theme/src/ThemeProvider';

import Layout from '@web/globals/Layout';
import fetchPayloadDataRest from '@web/lib/fetchPayloadDataRest';
import StyledComponentsRegistry from '@web/lib/StyledComponentRegistry';
import type { Nav } from '@web/payload/payload-types';

export const metadata = {
  title: 'Homepage',
  description: 'Homepage'
};

export const revalidate = 60;

async function RootLayout({ children }: PropsWithChildren<object>) {
  const data = await fetchPayloadDataRest<Nav>({
    endpoint: '/api/payload/globals/nav'
  });

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

export default RootLayout;
