'use client';

import React from 'react';
import { WEB_URL } from '@mono/settings';
import BlocksRenderer from '@mono/web/components/BlocksRenderer';
import MaybeThemed from '@mono/web/components/MaybeThemed';
import useLivePreview from '@mono/web/hooks/useLivePreview';
import type { Page } from '@mono/web/payload/payload-types';

function PageTemplate({ page }: { page: Page }) {
  const { data } = useLivePreview<Page>({
    initialData: page,
    serverURL: WEB_URL,
    depth: 1
  });

  const blocks = data?.blocks;

  if (!blocks) {
    return null;
  }

  return (
    <MaybeThemed theme={data.pageConfig.theme}>
      <BlocksRenderer blocks={blocks} />
    </MaybeThemed>
  );
}

export default PageTemplate;
