'use client';

import React from 'react';
import type { FAQBlockT as PayloadType } from '@mono/types/payload-types';
import Accordion from '@mono/ui/components/Accordion';
import RichText from '@mono/ui/components/primitives/RichText';
import Wrapper from '@mono/ui/components/Wrapper';
import s from '@refract-ui/sc';

export type FAQBlockType = Omit<PayloadType, 'blockType'>;

const HeaderContainer = s.div<{ $tAlign: string }>`
  width: 100%;
  display: flex;
  ${({ $tAlign }) => $tAlign && `justify-content: ${$tAlign};`}
`;

const Header = s(RichText)<{ $tAlign: string }>`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 1.25rem;
  }
  max-width: 30rem;
  ${({ $tAlign }) => $tAlign && `text-align: ${$tAlign};`}
`;

const AccordionContainer = s.div``;

function AccordionBlock({
  blockConfig,
  header,
  textAlignment,
  items
}: FAQBlockType) {
  return (
    <Wrapper {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      <HeaderContainer $tAlign={textAlignment as string}>
        {header && <Header {...header} $tAlign={textAlignment as string} />}
      </HeaderContainer>
      <AccordionContainer>
        <Accordion items={items} />
      </AccordionContainer>
    </Wrapper>
  );
}

export default AccordionBlock;
