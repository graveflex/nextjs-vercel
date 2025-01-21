import type { FAQBlockT as PayloadType } from '@mono/types/payload-types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@mono/web/components/ui/Accordion"
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
      {items && (<Accordion type="single" collapsible={true}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>)}
    </Wrapper>
  );
}

export default AccordionBlock;
