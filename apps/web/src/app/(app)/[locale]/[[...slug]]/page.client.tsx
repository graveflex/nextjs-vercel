'use client';

import React from 'react';
import { WEB_URL } from '@mono/settings';
import type { Nav, Page } from '@mono/types/payload-types';
import BlocksRenderer from '@mono/web/components/BlocksRenderer';
import Layout from '@mono/web/globals/Layout';
import useLivePreview from '@mono/web/hooks/useLivePreview';

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
      <BlocksRenderer blocks={blocks} />
    </Layout>
  );
}

export default PageTemplate;
