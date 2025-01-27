import type { HeroSectionsBlockT as PayloadType } from '@mono/types/payload-types';
import Wrapper from '@mono/ui/components/Wrapper';
import React from 'react';

export type HeroSectionsBlockType = Omit<PayloadType, 'blockType'>;

function HeroSectionsBlock({ title, blockConfig }: HeroSectionsBlockType) {
  return (
    <Wrapper {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      <div>
        <h1>HeroSectionsBlock</h1>
        <div>
          <h1>title-</h1>
          <p>{title}</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default HeroSectionsBlock;
