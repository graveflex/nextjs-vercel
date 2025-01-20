import type { FullBleedImageBlockT as PayloadType } from '@mono/types/payload-types';
import Wrapper from '@mono/ui/components/Wrapper';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import React from 'react';

export type FullBleedImageBlockType = Omit<PayloadType, 'blockType'>;

function FullBleedImageBlock({ image, blockConfig }: FullBleedImageBlockType) {
  return (
    <Wrapper {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      <ResponsivePayloadImage image={image} sizes="100%" />
    </Wrapper>
  );
}

export default FullBleedImageBlock;
