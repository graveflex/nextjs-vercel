'use client';

import React from 'react';
import Link from 'next/link';
import type { TextImageBlockT as PayloadType } from '@mono/types/payload-types';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/ui/components/primitives/RichText';
import genClassName from '@mono/ui/utils/genClassname';
import styled from '@refract-ui/sc';
import s from 'styled-components';

export type TextImageBlockType = Omit<PayloadType, 'blockType'>;

const Wrapper = styled.section`
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns: 1fr min(1052px, calc(100% - 4rem)) 1fr;
  padding: 2rem 0;
  position: relative;
  overflow: hidden;

  & > * {
    grid-column: 2;
  }
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 50px 50px 1fr;
  row-gap: 1rem;

  & > * {
    grid-column: 1 / 5;
  }

  ${({ theme: { mq } }) => mq.sm`
    & > :first-child {
      grid-column: 1 / 3;
    }

    & > :last-child {
      grid-column: 4;
    }

    &.imgRight {
      & > :first-child {
        grid-column: 3 / 5;
      }

      & > :last-child {
        grid-column: 1;
        grid-row: 1;
      }
    }
  `};
`;

const ImageWrapper = s(ResponsivePayloadImage)`
  aspect-ratio: 500 / 402;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
  const layout = blockConfig?.layout || 'imgRight';
  const className = genClassName([layout]);
  return (
    <Wrapper>
      <InnerWrapper className={className}>
        <ImageWrapper image={image} />
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
