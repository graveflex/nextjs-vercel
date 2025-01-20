import type { HeroBlockT as PayloadType } from '@mono/types/payload-types';
import CtaButton from '@mono/ui/components/CtaButton';
import Wrapper from '@mono/ui/components/Wrapper';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/ui/components/primitives/RichText';
import React from 'react';

export type HeroBlockProps = Omit<PayloadType, 'blockType'>;
function HeroBlock({
  eyebrow,
  content,
  cta,
  image,
  blockConfig
}: HeroBlockProps) {
  // TODO: this was removed from the image config, add this to block config
  const isFullBleed = true;

  return (
    <Wrapper
      {...blockConfig}
      gutter={isFullBleed ? false : 'blockH'}
      hidden={blockConfig?.hidden ?? false}
    >
      <div>
        <div>
          {eyebrow && <div>{eyebrow}</div>}
          {content && <RichText {...content} />}
          {cta?.link?.label && (
            <div>
              <CtaButton cta={cta} />
            </div>
          )}
        </div>
        <ResponsivePayloadImage image={image} sizes="100%" />
      </div>
    </Wrapper>
  );
}

export default HeroBlock;
