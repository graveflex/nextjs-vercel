'use client';

import { WEB_URL } from '@mono/settings';
import type { Nav, Page } from '@mono/types/payload-types';
import BlocksRenderer from '@mono/web/components/BlocksRenderer';
import Loading from '@mono/web/components/Loading';
import Layout from '@mono/web/globals/Layout';
import useLivePreview from '@mono/web/hooks/useLivePreview';
import React, { Suspense } from 'react';

function PageTemplate({ page, nav }: { page: Page; nav: Nav }) {
  const { data } = useLivePreview<Page>({
    initialData: page,
    serverURL: WEB_URL,
    depth: 2
  });

  const blocks = data?.blocks;

  const { theme } = data;

  if (!blocks) {
    return null;
  }

  return (
    <Layout theme={theme} {...nav}>
      <Suspense fallback={<Loading />}>
        <BlocksRenderer blocks={blocks} />
      </Suspense>
    </Layout>
  );
}

export default PageTemplate;
