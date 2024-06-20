'use client';

import React from 'react';
import type { HeroBlockT as PayloadType } from '@mono/types/payload-types';
import CtaButton from '@mono/ui/components/CtaButton';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/ui/components/primitives/RichText';
import Wrapper from '@mono/ui/components/Wrapper';
import genClassName from '@mono/ui/utils/genClassname';
import Input from '@mono/web/fields/Input';
import s from '@refract-ui/sc';

export type HeroBlockProps = Omit<PayloadType, 'blockType'>;

const StyledWrapper = s(Wrapper)``;

const InnerWrapper = s.div<{ $isFullBleed: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 3rem;
  width: 100%;
  z-index: 1;
  overflow: hidden;
  margin: auto;

  ${({ theme: { mq }, $isFullBleed }) => mq.lg`
    padding: ${$isFullBleed ? '0' : '0 3.125rem'};
    &.contentLeft, &.contentRight {
      grid-template-columns: 1fr 1fr;
    }
    &.contentCenter {
      grid-template-columns: 1fr;
    }
  `};
`;

const Eyebrow = s.span({ t: 'h6', c: 'fg' })`
`;

const Title = s.h1({ t: 'h1' })`
  margin: 0 0 1.25rem;
`;

const SubTitle = s(RichText)`
`;

const ContentWrapper = s.div<{ $isFullBleed: boolean; $contentAlign: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 33.75rem;
  padding: 0 2rem;
  align-items: ${({ $contentAlign }) => $contentAlign};
  text-align: ${({ $contentAlign }) => $contentAlign};
  order: 1;

  ${({ theme: { mq }, $isFullBleed }) => mq.lg`
    &.contentLeft {
      order: 0;
      margin: 0 0 0 auto;
      padding: ${$isFullBleed ? '0 0 0 2rem' : '0'};
    }

    &.contentRight {
      order: 1;
      margin: 0 auto 0 0;
      padding: ${$isFullBleed ? '0 2rem 0 0' : '0'};
    }

    &.contentCenter {
      margin: 0 auto;
      padding: ${$isFullBleed ? '0 2rem' : '0'};
    }
  `};
`;

const ImageWrapper = s(ResponsivePayloadImage)`
  img {
    max-width: 100%;
    min-width: 100%;
    height: auto;
    }

  margin: 0 auto;
  min-width: 100%;

  ${({ theme: { mq } }) => mq.lg`
    min-width: unset;

    &.contentLeft {
    margin: 0 auto 0 0;
    }

    &.contentRight {
    margin-left: 0 0 0 auto;
    }
  `};
`;

const InputWrapper = s.div`
  display: flex;
  gap: 20px;
  margin-top: 1rem;
`;

function HeroBlock({
  eyebrow,
  title,
  subTitle,
  cta,
  input,
  image,
  blockConfig,
  contentAlign
}: HeroBlockProps) {
  const layout = blockConfig?.layout || 'contentLeft';

  const className = genClassName([layout]);

  const isFullBleed =
    typeof image === 'object' ? image?.imageProps?.fill : false;

  return (
    <StyledWrapper
      className={className}
      gutter={false}
      {...blockConfig}
      hidden={blockConfig?.hidden ?? false}
    >
      <InnerWrapper className={className} $isFullBleed={isFullBleed || false}>
        <ContentWrapper
          className={className}
          $isFullBleed={isFullBleed || false}
          $contentAlign={contentAlign || 'contentLeft'}
        >
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          {title && <Title>{title}</Title>}
          {subTitle && <SubTitle {...subTitle} />}
          {(input || cta) && (
            <InputWrapper className={className}>
              {input?.type && <Input {...input} />}
              {cta && <CtaButton cta={cta} />}
            </InputWrapper>
          )}
        </ContentWrapper>
        <ImageWrapper image={image} />
      </InnerWrapper>
    </StyledWrapper>
  );
}

export default HeroBlock;
