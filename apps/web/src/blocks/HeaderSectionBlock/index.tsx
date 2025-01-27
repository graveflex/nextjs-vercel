import type { HeaderSectionBlockT as PayloadType } from '@mono/types/payload-types';
import Wrapper from '@mono/ui/components/Wrapper';
import React from 'react';

export type HeaderSectionBlockType = Omit<PayloadType, 'blockType'>;

function HeaderSectionBlock({ title, blockConfig }: HeaderSectionBlockType) {
  return (
    <Wrapper {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      <div>
        <h1>HeaderSectionBlock</h1>
        <div>
          <h1>title-</h1>
          <p>{title}</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default HeaderSectionBlock;
