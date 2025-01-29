'use client';

import type { Post, Tag } from '@mono/types/payload-types';
import Pagination, {
  type PaginationType
} from '@mono/ui/components/Pagination';
import React, { useRef } from 'react';

export type BlogIndexType = {
  posts?: Post[];
  page?: number;
  paginationProps?: PaginationType;
  filters?: Tag[];
  setFilter?: (f: string) => void;
  setSort?: (o: string) => void;
  activeSort?: string | null;
  activeFilters?: string[];
};

function BlogIndex({ posts, paginationProps }: BlogIndexType) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={ref}>
        {posts && (
          <div>
            {posts &&
              posts?.map((post) => {
                const { title, date, subTitle, slug } = post as Post;

                return (
                  <div key={`${slug}-${post.id}`}>
                    <div>{title}</div>
                    <div>{subTitle}</div>
                    <div>{date}</div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
      {paginationProps &&
        paginationProps.total &&
        paginationProps?.total > 1 ? (
        <Pagination {...paginationProps} blogRef={ref} />
      ) : null}
    </>
  );
}

export default BlogIndex;
