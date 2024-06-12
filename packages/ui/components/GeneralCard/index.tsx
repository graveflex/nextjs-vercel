'use client';

import React from 'react';
import type { CardType, Image } from '@mono/types/payload-types';
import CtaButton from '@mono/ui/components/CtaButton';
import ResponsiveImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import styled, { css } from '@refract-ui/sc';

const Container = styled.div`
  ${({ theme: { spacing, mq, allColors } }) => css`
    display: flex;
    flex-direction: column;
    border-radius: 1.13rem;
    background-color: ${allColors.neutral10};
    padding: ${spacing[5]}rem;

    ${mq.md`
      height: 100%;
      max-width: 30rem;
      padding: ${spacing[9]}rem;
    `}
  `}
`;

const ContentContainer = styled.div`
  height: fill-available;
  display: grid;
`;

const Eyebrow = styled.h1({ t: 'menuLinkLight' })`
  margin: 0rem;
`;

const Headline = styled.h1({ t: 'h4Serif', c: 'secondary' })`
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
  `}
`;

const SubHead = styled.p({ t: 'p2Serif' })`
${({ theme: { spacing } }) => css`
  margin-top: ${spacing[6]}rem;
`}
`;

const ImageContainer = styled.div`
  aspect-ratio: 16/9;
  border-radius: 6px;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
  }

  ${({ theme: { spacing } }) => css`
    margin-bottom: ${spacing[9]}rem;
    position: relative;
  `}
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${({ theme: { spacing, mq } }) => css`
    margin-top: ${spacing[9]}rem;
    gap: ${spacing[6]}rem;

    ${mq.md`
      flex-wrap: initial;
    `}
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
              const key = `${cta?.label}-${index}`;
              if (!cta) {
                return null;
              }

              return <CtaButton key={key} cta={cta} color="secondary" />;
            })}
          </ButtonsWrapper>
        )}
      </ContentContainer>
    </Container>
  );
}

export default GeneralCard;
