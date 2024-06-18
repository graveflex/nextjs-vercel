'use client';

import React from 'react';
import type { FAQBlockT as PayloadType } from '@mono/types/payload-types';
import Accordion from '@mono/ui/components/Accordion';
import RichText from '@mono/ui/components/primitives/RichText';
import Wrapper from '@mono/ui/components/Wrapper';
import s from '@refract-ui/sc';

export type FAQBlockType = Omit<PayloadType, 'blockType'>;

const Header = s(RichText)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 1.25rem;
  }
  max-width: 30rem;
  margin: 0 auto 3.125em;
`;

const AccordionContainer = s.div``;

function AccordionBlock({ blockConfig, header, items }: FAQBlockType) {
  return (
    <Wrapper {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      {header && <Header {...header} />}
      <AccordionContainer>
        <Accordion items={items} />
      </AccordionContainer>
    </Wrapper>
  );
}

export default AccordionBlock;
