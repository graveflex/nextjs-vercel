'use client';

import type { CTAType, Image, Post, Tag } from '@mono/types/payload-types';
import GeneralCard from '@mono/ui/components/GeneralCard';
import Pagination, {
  type PaginationType
} from '@mono/ui/components/Pagination';
import Wrapper from '@mono/ui/components/Wrapper';
import styled, { css } from '@refract-ui/sc';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef } from 'react';

const PostWrapper = styled.div`
  text-decoration: none;
  transition: outline 0.1s ease;
  border-radius: 1.125rem;
`;

const CardWrapper = styled.div`
  display: grid;
  justify-content: center;
  max-width: 100%;

  ${({ theme: { mq, spacing } }) => css`
    gap: ${spacing[9]}rem;

    ${mq.md`
      grid-template-columns: repeat(2, 1fr);
    `}

    ${mq.lg`
      margin: 0 auto;
      grid-template-columns: repeat(3, 1fr);
    `}
  `};
`;

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${({ theme: { spacing } }) => css`
    gap: ${spacing[9]}rem;
    margin: ${spacing[9]}rem 0;
  `}
`;

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
      image: thumbnail,
      imageProps: {
        fill: true
      }
    };
  };

  return (
    <Wrapper contentWidth="xl">
      <OuterContainer ref={ref}>
        {posts && (
          <CardWrapper>
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
                  <PostWrapper key={`${slug}-${post.id}`}>
                    <GeneralCard
                      key={`${slug}-${post.id}`}
                      image={defaultImageProps(thumbnail)}
                      headline={title}
                      date={date}
                      subHead={subTitle}
                      ctas={ctas?.length === 0 ? defaultCtas : ctas}
                    />
                  </PostWrapper>
                );
              })}
          </CardWrapper>
        )}
      </OuterContainer>
      {paginationProps &&
      paginationProps.total &&
      paginationProps?.total > 1 ? (
        <Pagination {...paginationProps} blogRef={ref} />
      ) : null}
    </Wrapper>
  );
}

export default BlogIndex;
