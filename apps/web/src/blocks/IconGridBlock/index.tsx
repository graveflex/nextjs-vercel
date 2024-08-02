'use client';

import React from 'react';
import type { IconGridBlockT as PayloadType } from '@mono/types/payload-types';
import CtaButton from '@mono/ui/components/CtaButton';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/ui/components/primitives/RichText';
import Wrapper from '@mono/ui/components/Wrapper';
import styled, { css } from '@refract-ui/sc';

export type IconGridBlockType = Omit<PayloadType, 'blockType'>;
const Grid = styled.div<{ $dir: IconGridBlockType['layout'] }>`
  ${({ theme: { mq }, $dir }) => css`
    display: grid;
    justify-items: center;
    gap: 3rem;
    column-gap: 2rem;
    align-items: center;

    ${$dir === 'vertical' &&
    css`
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    `}

    ${$dir === 'horizontal' &&
    css`
      grid-template-columns: repeat(auto-fill, minmax(156px, 1fr));
    `}
    
    ${mq.md`
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 3rem;
    `}
  `}
`;

const CardWrapper = styled.div<{ $dir: IconGridBlockType['layout'] }>`
  width: 100%;
  display: flex;
  align-items: center;

  ${({ $dir }) => css`
    ${$dir === 'vertical' &&
    css`
      flex-direction: row;
      gap: 1.25rem;
    `}
    ${$dir === 'horizontal' &&
    css`
      flex-direction: column;
      gap: 1rem;
    `}
  `}
`;

const StyledRichText = styled(RichText)<{ $dir: IconGridBlockType['layout'] }>`
  text-align: center;
  p {
    max-width: 14rem;
    margin: 0 auto;
  }
  ${({ theme: { box }, $dir }) => css`
    ${$dir === 'vertical' &&
    css`
      text-align: left;
      p {
        max-width: 15rem;
        ${box.t('pSmall')};
      }
      h5 {
        margin: 0 0 0.5rem 0;
      }
    `}
  `}

  h3, h4 {
    margin: 0 0 1rem 0;
  }
`;

function IconGridBlock({ layout, items, blockConfig }: IconGridBlockType) {
  return (
    <Wrapper {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      <Grid $dir={layout}>
        {items &&
          items.map((item) => {
            const { content, image, cta } = item;
            return (
              <CardWrapper key={`icon-${item?.id}`} $dir={layout}>
                <ResponsivePayloadImage image={image} />
                <StyledRichText {...content} $dir={layout} />
                {cta?.link?.label && <CtaButton cta={cta} />}
              </CardWrapper>
            );
          })}
      </Grid>
    </Wrapper>
  );
}

export default IconGridBlock;
