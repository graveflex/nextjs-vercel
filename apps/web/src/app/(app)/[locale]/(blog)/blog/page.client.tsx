'use client';

import BlogWrapper from '@mono/ui/components/BlogIndex';
import type { BlogIndex, Nav, Post } from '@mono/types/payload-types';
import useIndexControls from '@mono/ui/lib/hooks/useIndexControls';
import BlocksRenderer from '@mono/web/components/BlocksRenderer';
import Layout from '@mono/web/globals/Layout';
import type { PaginatedDocs } from 'payload';
import React from 'react';

function PageTemplate({
  page,
  nav,
  postData
}: {
  postData: PaginatedDocs<Post>;
  page: BlogIndex;
  nav: Nav;
}) {
  const { theme } = page;
  const blocks = page?.blocks;

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
        <BlogWrapper
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
