import type { IframeBlockT as PayloadType } from '@mono/types/payload-types';
import Wrapper from '@mono/ui/components/Wrapper';
import RichText from '@mono/ui/components/primitives/RichText';
import React from 'react';

export type IframeBlockType = Omit<PayloadType, 'blockType'>;

function IframeBlock({ blockConfig, title, iframe }: IframeBlockType) {
  return (
    <Wrapper {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      <div>
        {title && <RichText {...title} />}
        <iframe src={iframe} title="iframe-block" loading="lazy" />
      </div>
    </Wrapper>
  );
}

export default IframeBlock;
