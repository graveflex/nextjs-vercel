'use client';

import React from 'react';
import styled from 'styled-components';

import ResponsivePayloadImage from '@web/components/ResponsivePayloadImage';
import RichText from '@web/components/RichText';
import genClassName from '@web/lib/genClassname';
import expandedDoc from '@web/lib/isExpandedDoc';
import type {
  Image,
  TextImageBlockT as PayloadType
} from '@web/payload/payload-types';

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
  grid-template-columns: 1fr 42px 42px 1fr;

  & > div:first-child {
    grid-column: 3 / 5;
  }

  & > div:last-child {
    grid-column: 1;
    grid-row: 1;
  }

  &.reverse {
    & > div:first-child {
      grid-column: 1 / 3;
    }

    & > div:last-child {
      grid-column: 4;
    }
  }
`;

const ImageWrapper = styled(ResponsivePayloadImage)`
  aspect-ratio: 500 / 402;
`;

const Title = styled.h2`
  margin: 0;
  padding: 0;
  && {
    font-size: 3rem;
    font-weight: 700;
    line-height: 65px;
    letter-spacing: -0.04em;
  }
`;

function TextImageBlock({
  title,
  content,
  image,
  blockOptions
}: TextImageBlockType) {
  const img = expandedDoc<Image>(image);
  const reverse = blockOptions?.contentSide === 'left';
  return (
    <Wrapper>
      <InnerWrapper className={genClassName([reverse && 'reverse'])}>
        {img && (
          <ImageWrapper image={img} imageProps={{ objectFit: 'cover' }} />
        )}
        <div>
          {title && <Title>{title}</Title>}
          {content && <RichText content={content} />}
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}

export default TextImageBlock;
