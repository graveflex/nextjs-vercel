'use client';

import React from 'react';
import type { CardType, Image } from '@mono/types/payload-types';
import CtaButton from '@mono/ui/components/CtaButton';
import ResponsiveImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import styled, { css } from '@refract-ui/sc';

const Container = styled.div`
  ${({ theme: { spacing, allColors } }) => css`
    display: flex;
    flex-direction: column;
    border-radius: 1.13rem;
    background-color: ${allColors.fg};
    max-width: 30rem;
    padding: ${spacing[9]}rem;
    color: ${allColors.bg};
  `}
`;

const ContentContainer = styled.div`
  display: grid;
  gap: 1rem;
`;

const Eyebrow = styled.h6`
  margin: 0rem;
`;

const Headline = styled.h1`
  margin: 0;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 1;

  ${({ theme: { box } }) => css`
    ${box.t('h3')};
    ${box.c('bg')};
  `}
`;

const SubHead = styled.p`
  ${({ theme: { spacing } }) => css`
    margin-top: ${spacing[6]}rem;
  `}
`;

const ImageContainer = styled.div`
  border-radius: 0.375rem;
  overflow: hidden;

  ${({ theme: { spacing } }) => css`
    margin-bottom: ${spacing[9]}rem;
    position: relative;
  `}
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${({ theme: { spacing } }) => css`
    margin-top: ${spacing[9]}rem;
    gap: ${spacing[6]}rem;
  `}
`;

export type GeneralCardType = CardType & {
  className?: string;
};

const imageProps = (image: Image | number) => {
  if (typeof image === 'number') {
    return image;
  }

  return {
    ...image,
    imageProps: {
      fill: true
    }
  };
};

function GeneralCard({
  image,
  eyebrow,
  headline,
  subHead,
  ctas,
  className
}: GeneralCardType) {
  return (
    <Container className={className}>
      {image && (
        <ImageContainer>
          <ResponsiveImage image={imageProps(image)} />
        </ImageContainer>
      )}
      <ContentContainer>
        {headline && (
          <>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <Headline>{headline}</Headline>
          </>
        )}
        {subHead && <SubHead>{subHead}</SubHead>}
        {ctas && (
          <ButtonsWrapper>
            {ctas?.map(({ cta }, index) => {
              const key = `${cta?.link?.label}-${index}`;
              if (!cta) {
                return null;
              }

              return <CtaButton key={key} cta={cta} />;
            })}
          </ButtonsWrapper>
        )}
      </ContentContainer>
    </Container>
  );
}

export default GeneralCard;
