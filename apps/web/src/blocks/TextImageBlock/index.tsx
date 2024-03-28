'use client';

import React from 'react';
import Link from 'next/link';
import ResponsivePayloadImage from '@mono/web/components/ResponsivePayloadImage';
import RichText from '@mono/web/components/RichText';
import genClassName from '@mono/web/lib/genClassname';
import expandedDoc from '@mono/web/lib/isExpandedDoc';
import type {
  Image,
  TextImageBlockT as PayloadType
} from '@mono/web/payload/payload-types';
import styled from '@refract-ui/sc';
import s from 'styled-components';

export type TextImageBlockType = Omit<PayloadType, 'blockType'>;

const Wrapper = styled.section`
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns: 1fr min(1052px, calc(100% - 4rem)) 1fr;
  padding: 180px 0;

  & > * {
    grid-column: 2;
  }
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 50px 50px 1fr;
  row-gap: 1rem;

  & > div {
    grid-column: 1 / 5;
  }

  ${({ theme: { mq } }) => mq.lg`
    & > div:first-child {
      grid-column: 1 / 3;
    }

    & > div:last-child {
      grid-column: 4;
    }

    &.imgRight {
      & > div:first-child {
        grid-column: 3 / 5;
      }

      & > div:last-child {
        grid-column: 1;
        grid-row: 1;
      }
    }
  `};
`;

const ImageWrapper = s(ResponsivePayloadImage)`
  aspect-ratio: 500 / 402;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
  width: min(100%, 476px);
`;

const Title = styled.h3({ m: 0, p: 0 })``;

const Button = s(Link)`
  text-align: center;
  width: 100%;

  ${({ theme: { mq } }) => mq.sm`
    width: min(100%, 200px);
  `};
`;

function TextImageBlock({
  title,
  content,
  image,
  cta,
  blockConfig
}: TextImageBlockType) {
  const img = expandedDoc<Image>(image);
  const layout = blockConfig?.layout || 'imgRight';
  const className = genClassName([layout]);
  return (
    <Wrapper>
      <InnerWrapper className={className}>
        {img && <ImageWrapper image={img} />}
        <ContentWrapper>
          {title && <Title>{title}</Title>}
          {content && <RichText content={content} />}
          {cta?.label && cta?.href && (
            <Button href={cta?.href} className="button">
              {cta?.label}
            </Button>
          )}
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}

export default TextImageBlock;
