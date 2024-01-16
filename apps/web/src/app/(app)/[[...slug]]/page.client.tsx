'use client';

import React, { useMemo } from 'react';
import { useLivePreview } from '@payloadcms/live-preview-react';

import { WEB_URL } from 'settings';

import BlocksRenderer from '@web/components/BlocksRenderer';
import type { Page } from '@web/payload/payload-types';

function PageTemplate({ page }: { page: Page }) {
  const { data } = useLivePreview<Page>({
    initialData: page,
    serverURL: WEB_URL,
    depth: 1
  });

  const blocks = data?.blocks;
  const blockString = JSON.stringify(blocks);

  // NOTE: prevent flicker on client for initial page loads
  // Will never render a second time in production
  const Blocks = useMemo(() => {
    if (!blocks) {
      return null;
    }

    return <BlocksRenderer blocks={blocks} />;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockString]);

  return Blocks;
}

export default PageTemplate;
