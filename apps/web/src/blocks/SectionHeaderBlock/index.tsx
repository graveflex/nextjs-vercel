import type { SectionHeaderBlockT as PayloadType } from '@mono/types/payload-types';
import CtaButton from '@mono/ui/components/CtaButton';
import Wrapper from '@mono/ui/components/Wrapper';
import RichText from '@mono/ui/components/primitives/RichText';
import React from 'react';

export type SectionHeaderBlockType = Omit<PayloadType, 'blockType'>;

function SectionHeaderBlock({
  eyebrow,
  content,
  cta,
  blockConfig
}: SectionHeaderBlockType) {
  return (
    <Wrapper {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      <div>
        {eyebrow && <div>{eyebrow}</div>}
        {content && <RichText {...content} />}
        {cta?.link?.label && <CtaButton cta={cta} />}
      </div>
    </Wrapper>
  );
}

export default SectionHeaderBlock;
