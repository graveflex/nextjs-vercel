import type { MarkdownBlockT as PayloadType } from '@mono/types/payload-types';
import Wrapper from '@mono/ui/components/Wrapper';
import RichText from '@mono/ui/components/primitives/RichText';
import React from 'react';

export type MarkdownBlockType = Omit<PayloadType, 'blockType'>;

function MarkdownBlock({ content, maxWidth, blockConfig }: MarkdownBlockType) {
  return (
    <Wrapper {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      {content && <RichText {...content} $maxWidth={maxWidth || 'unset'} />}
    </Wrapper>
  );
}

export default MarkdownBlock;
