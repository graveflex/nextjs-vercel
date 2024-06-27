'use client';

import React from 'react';
import type { SectionHeaderBlockT as PayloadType } from '@mono/types/payload-types';
import CtaButton from '@mono/ui/components/CtaButton';
import RichText from '@mono/ui/components/primitives/RichText';
import Wrapper from '@mono/web/components/Wrapper';
import styled from '@refract-ui/sc';
import s from 'styled-components';

export type SectionHeaderBlockType = Omit<PayloadType, 'blockType'>;

const Section = styled(Wrapper)<{
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
  cta
}: SectionHeaderBlockType) {
  console.log('SectionHeaderBlock', alignment);
  return (
    <Section $align={alignment}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {content && <StyledRichText {...content} />}
      {cta && <CtaButton cta={cta} />}
    </Section>
  );
}

export default SectionHeaderBlock;
