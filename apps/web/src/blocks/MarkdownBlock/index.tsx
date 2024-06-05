'use client';

import React from 'react';
import type { MarkdownBlockT as PayloadType } from '@mono/types/payload-types';
import RichText from '@mono/ui/components/primitives/RichText';
import Wrapper from '@mono/ui/components/Wrapper';
import s, { css } from '@refract-ui/sc';

export type MarkdownBlockType = Omit<PayloadType, 'blockType'>;

const Content = s(RichText)<{ $maxWidth?: string }>`
  ${({ $maxWidth }) => css`
    max-width: ${$maxWidth};

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0 0 2.25rem;
    }

    p,
    picture,
    ul,
    ol {
      + p {
        margin-top: 1.5rem;
      }
    }

    p,
    ul,
    picture,
    ol {
      + h1,
      + h2,
      + h3,
      + h4,
      + h5,
      + h6 {
        margin: 2.25rem 0;
      }
    }
  `}
`;

function MarkdownBlock({ content, maxWidth, blockConfig }: MarkdownBlockType) {
  return (
    <Wrapper {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      {content && <Content {...content} $maxWidth={maxWidth || 'unset'} />}
    </Wrapper>
  );
}

export default MarkdownBlock;
