'use client';

import type { Post } from '@mono/types/payload-types';
import BlogWrapper from '@mono/ui/components/BlogIndex';
import useIndexControls from '@mono/ui/lib/hooks/useIndexControls';
import { useTranslations } from 'next-intl';
import type { PaginatedDocs } from 'payload';
import React from 'react';
import s, { css } from 'styled-components';

const NoPosts = s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  ${({ theme: { box } }) => css`
    ${box.t('heading')};
  `}
`;

function PageTemplate({
  postData
}: {
  postData: PaginatedDocs<Post>;
}) {
  const { setPage, setFilter, setSort, activeSort, activeFilters } =
    useIndexControls();

  const t = useTranslations('Blog');

  const pagination = {
    total: postData.totalDocs,
    limit: postData.limit,
    currentPage: (postData?.page ?? 1) - 1,
    updatePage: (pageNumber: number) => {
      setPage(pageNumber + 1);
    }
  };

  return (
    <>
      {postData ? (
        <BlogWrapper
          posts={postData.docs}
          activeFilters={activeFilters}
          activeSort={activeSort}
          setFilter={setFilter}
          setSort={setSort}
          paginationProps={pagination}
          page={postData.page}
        />
      ) : (
        <NoPosts>{t('noPosts')}</NoPosts>
      )}
    </>
  );
}

export default PageTemplate;
