import type { CtaSectionsT as PayloadType } from '@mono/types/payload-types';
import Wrapper from '@mono/ui/components/Wrapper';
import React from 'react';

export type CtaSectionsType = Omit<PayloadType, 'blockType'>;

function CtaSections({ title, blockConfig }: CtaSectionsType) {
  return (
    <Wrapper {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      <div>
        <h1>CtaSections</h1>
        <div>
          <h1>title-</h1>
          <p>{title}</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default CtaSections;
