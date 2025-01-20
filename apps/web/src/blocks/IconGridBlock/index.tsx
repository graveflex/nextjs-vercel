import type { IconGridBlockT as PayloadType } from '@mono/types/payload-types';
import CtaButton from '@mono/ui/components/CtaButton';
import Wrapper from '@mono/ui/components/Wrapper';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/ui/components/primitives/RichText';
import React from 'react';

export type IconGridBlockType = Omit<PayloadType, 'blockType'>;

function IconGridBlock({ layout, items, blockConfig }: IconGridBlockType) {
  return (
    <Wrapper {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      <div>
        {items &&
          items.map((item) => {
            const { content, image, cta } = item;
            return (
              <div key={`icon-${item?.id}`}>
                <ResponsivePayloadImage image={image} sizes="400px" />
                <RichText {...content} $dir={layout} />
                {cta?.link?.label && <CtaButton cta={cta} />}
              </div>
            );
          })}
      </div>
    </Wrapper>
  );
}

export default IconGridBlock;
