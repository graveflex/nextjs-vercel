import type { CTAType, Image, Post, Tag } from '@mono/types/payload-types';
import GeneralCard from '@mono/ui/components/GeneralCard';
import Pagination, {
  type PaginationType
} from '@mono/ui/components/Pagination';
import Wrapper from '@mono/ui/components/Wrapper';
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

  const defaultImageProps = (thumbnail: Image | number) => {
    if (typeof thumbnail === 'number') {
      return thumbnail;
    }
    return {
      ...thumbnail,
      image: thumbnail
    };
  };

  return (
    <Wrapper contentWidth="xl">
      <div ref={ref}>
        {posts && (
          <div>
            {posts &&
              posts?.map((post) => {
                const { title, date, subTitle, thumbnail, slug, ctas } =
                  post as Post;

                const defaultCtas: { cta: CTAType }[] = [
                  {
                    cta: {
                      link: {
                        label: 'Read More',
                        type: 'external',
                        externalHref: `blog/${slug}`,
                        icon: {
                          name: 'ArrowRight'
                        }
                      }
                    }
                  }
                ];

                return (
                  <div key={`${slug}-${post.id}`}>
                    <GeneralCard
                      key={`${slug}-${post.id}`}
                      image={defaultImageProps(thumbnail)}
                      headline={title}
                      date={date}
                      subHead={subTitle}
                      ctas={ctas?.length === 0 ? defaultCtas : ctas}
                    />
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
    </Wrapper>
  );
}

export default BlogIndex;
