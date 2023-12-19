'use client';

import React from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';

import { Page } from '@web/payload/payload-types';

type Directions = 'right' | 'left';

const Container = styled.div<{ direction: Directions }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  * {
    text-align: center;
  }
  ${({
    theme: {
      mq: { lg }
    },
    direction
  }) => lg`
    justify-content: center;
    flex-direction: row;
  align-items: flex-start;
  gap: 84px;
  flex: 1;
  * {
    text-align: left;
  }
  ${
    direction === 'right' &&
    css`
      flex-direction: row-reverse;
    `
  }
    `}
`;

const ContentWrapper = styled.div`
  max-width: 410px;
`;

const ImageWrapper = styled.div`
  img {
    border-radius: 16px;
  }
`;

const Header = styled.h1`
  margin: 0;
  margin-bottom: 16px;
  font-size: 48px;
`;

type ExtractBlockType<T, BlockType> = T extends { blockType: BlockType }
  ? T
  : never;
type ImageWithContentBlock = ExtractBlockType<
  NonNullable<Page['layout']>[number],
  'ImageWithContent'
>;

function ImageWithContent({
  title,
  content,
  direction,
  image
}: ImageWithContentBlock) {
  return (
    <Container direction={direction}>
      <ContentWrapper>
        <Header>{title}</Header>
        <p>{content}</p>
      </ContentWrapper>

      <ImageWrapper>
        {image && (
          <Image
            width="501"
            height="410"
            alt="Image with content"
            src={image?.url}
          />
        )}
      </ImageWrapper>
    </Container>
  );
}

export default ImageWithContent;
