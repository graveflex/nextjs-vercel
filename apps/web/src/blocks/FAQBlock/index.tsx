import type { FAQBlockT as PayloadType } from '@mono/types/payload-types';
import Accordion from '@mono/ui/components/Accordion';
import Wrapper from '@mono/ui/components/Wrapper';
import RichText from '@mono/ui/components/primitives/RichText';
import React from 'react';

export type FAQBlockType = Omit<PayloadType, 'blockType'>;

function AccordionBlock({
  blockConfig,
  header,
  textAlignment,
  items
}: FAQBlockType) {
  return (
    <Wrapper {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      {header && <RichText {...header} $tAlign={textAlignment ?? 'left'} />}
      <Accordion items={items} />
    </Wrapper>
  );
}

export default AccordionBlock;
