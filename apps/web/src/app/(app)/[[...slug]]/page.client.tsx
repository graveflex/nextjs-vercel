'use client';

import React, { useContext, useEffect, useMemo } from 'react';
import { WEB_URL } from '@mono/settings';
import type { ThemeKey } from '@mono/theme/src/ThemeProvider';
import { ThemeContext } from '@mono/theme/src/ThemeProvider';
import BlocksRenderer from '@mono/web/components/BlocksRenderer';
import useLivePreview from '@mono/web/hooks/useLivePreview';
import type { Page } from '@mono/web/payload/payload-types';

function PageTemplate({ page }: { page: Page }) {
  const { data } = useLivePreview<Page>({
    initialData: page,
    serverURL: WEB_URL,
    depth: 1
  });
  const { setTheme } = useContext(
    ThemeContext as React.Context<{
      theme: ThemeKey;
      setTheme: (t: ThemeKey) => void;
    }>
  );

  const pageTheme = data?.pageConfig?.theme;
  const blocks = data?.blocks;
  const blockString = JSON.stringify(blocks);

  useEffect(() => {
    if (pageTheme) {
      setTheme(pageTheme);
    }
  }, [pageTheme, setTheme]);

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
