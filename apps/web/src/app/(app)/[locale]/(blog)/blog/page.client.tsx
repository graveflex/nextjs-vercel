'use client';

import React from 'react';
import { WEB_URL } from '@mono/settings';
import type { Nav, Page, Post } from '@mono/types/payload-types';
import BlogIndex from '@mono/ui/components/BlogIndex';
import useIndexControls from '@mono/ui/lib/hooks/useIndexControls';
import BlocksRenderer from '@mono/web/components/BlocksRenderer';
import Layout from '@mono/web/globals/Layout';
import useLivePreview from '@mono/web/hooks/useLivePreview';
import type { PaginatedDocs } from 'payload';

function PageTemplate({
  page,
  nav,
  postData
}: {
  postData: PaginatedDocs<Post>;
  page: Page;
  nav: Nav;
}) {
  const { data } = useLivePreview<Page>({
    initialData: page,
    serverURL: WEB_URL,
    depth: 1
  });
  const { theme } = data;
  const blocks = data?.blocks;

  const { setPage, setFilter, setSort, activeSort, activeFilters } =
    useIndexControls();

  const pagination = {
    total: postData.totalDocs,
    limit: postData.limit,
    currentPage: (postData?.page ?? 1) - 1,
    updatePage: (pageNumber: number) => {
      setPage(pageNumber + 1);
    }
  };

  return (
    <Layout {...nav} theme={theme}>
      {blocks && <BlocksRenderer blocks={blocks} />}
      {postData && (
        <BlogIndex
          posts={postData.docs}
          activeFilters={activeFilters}
          activeSort={activeSort}
          setFilter={setFilter}
          setSort={setSort}
          paginationProps={pagination}
          page={postData.page}
        />
      )}
    </Layout>
  );
}

export default PageTemplate;
