'use client';

import type { SectionHeaderBlockT as PayloadType } from '@mono/types/payload-types';
import CtaButton from '@mono/ui/components/CtaButton';
import Wrapper from '@mono/ui/components/Wrapper';
import RichText from '@mono/ui/components/primitives/RichText';
import styled from '@refract-ui/sc';
import React from 'react';
import s from 'styled-components';

export type SectionHeaderBlockType = Omit<PayloadType, 'blockType'>;

const Section = styled.div<{
  $align?: 'center' | 'left' | 'right' | null;
}>`
  text-align: ${({ $align }) => ($align === 'center' ? 'center' : $align)};
  justify-items: ${({ $align }) => ($align === 'center' ? 'center' : $align)};
`;

const Eyebrow = styled.h1`
  font-size: 1.375rem;
  margin: 0;
`;

const StyledRichText = s(RichText)`
  h1 {
    margin: 0;
  }

  p {
    margin-bottom: 1rem;
  }
`;

function SectionHeaderBlock({
  eyebrow,
  content,
  alignment,
  cta,
  blockConfig
}: SectionHeaderBlockType) {
  return (
    <Wrapper {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      <Section $align={alignment}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        {content && <StyledRichText {...content} />}
        {cta?.link?.label && <CtaButton cta={cta} />}
      </Section>
    </Wrapper>
  );
}

export default SectionHeaderBlock;
