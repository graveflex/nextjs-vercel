'use client';

import React from 'react';
import type { GalleryGridBlockT as PayloadType } from '@mono/types/payload-types';
import CtaButton from '@mono/ui/components/CtaButton';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import Wrapper from '@mono/ui/components/Wrapper';
import styled, { css } from '@refract-ui/sc';
import s from 'styled-components';

export type GalleryGridBlockType = Omit<PayloadType, 'blockType'>;

const Section = styled.div`
  display: grid;
  gap: 2rem;
  justify-items: center;
`;

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(159px, 1fr));
  width: 100%;

  img {
    width: 159px;
    height: 159px;
  }

  ${({ theme: { mq } }) => css`
    ${mq.lg`
      grid-template-columns: repeat(auto-fill, minmax(296px, 1fr));

      img {
        width: 296px;
        height: 296px;
      }
    `}
  `}
`;

const ImageWrapper = s(ResponsivePayloadImage)`

  ${({ theme: { mq, allColors } }) => css`
    background-color: ${allColors.color4};
    height: 30rem;
    width: 40rem;
    border-radius: 2.5rem;

    img {
      border-radius: 1.5rem;
    }

    ${mq.md`
      img {
        border-radius: 2.5rem;
        height: 30rem;
        width: 40rem;
      }
    `}
  `}

`;

function GalleryGridBlock({
  galleryImages,
  cta,
  blockConfig
}: GalleryGridBlockType) {
  return (
    <Wrapper {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      <Section>
        {galleryImages && (
          <Grid>
            {galleryImages.map((image) => (
              <ImageWrapper image={image.image} key={`image-${image.id}`} />
            ))}
          </Grid>
        )}
        {cta?.link?.label && <CtaButton cta={cta} />}
      </Section>
    </Wrapper>
  );
}

export default GalleryGridBlock;
