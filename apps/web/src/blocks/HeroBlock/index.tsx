'use client';

import React from 'react';
import type { HeroBlockT as PayloadType } from '@mono/types/payload-types';
import CtaButton from '@mono/ui/components/CtaButton';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/ui/components/primitives/RichText';
import Wrapper from '@mono/ui/components/Wrapper';
import genClassName from '@mono/ui/utils/genClassname';
import TextInput from '@mono/ui/fields/TextInput';
import styled, { css } from '@refract-ui/sc';
import s from 'styled-components';
import tc from 'tinycolor2';

export type HeroBlockProps = Omit<PayloadType, 'blockType'>;

const StyledWrapper = s(Wrapper)`
  align-items: center;
  overflow: hidden;
  min-height: 40svh;
  position: relative;

  ${({ theme: { mq } }) => mq.md`
  `};
`;

const ImageWrapper = s(ResponsivePayloadImage)<{
  $layout: 'bg' | 'imgRight' | 'imgLeft' | 'imgRightFull' | 'imgLeftFull';
}>`
  ${({ $layout }) =>
    $layout === 'bg' &&
    css`
      position: absolute;
      height: 100%;
      width: 100%;
    `})}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`;

const Eyebrow = styled.span({ t: 'h6', c: 'fg' })`
  width: 100%;
`;

const Title = styled.h1({ m: 0, p: 0, c: 'fg' })`
  width: 100%;
`;

const ContentWrapper = styled.div`
  z-index: 1;
  overflow: hidden;
  background: ${({ theme: { allColors } }) =>
    tc(allColors.bg).setAlpha(0.4).toString()};

  &.bg,
  &.imgRightFull,
  &.imgLeftFull {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
    text-align: center;
  }

  &.bg {
    padding: 120px 25px;
  }

  &.imgRight,
  &.imgLeft {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  ${({ theme: { mq } }) => mq.md`
    &.bg,
    &.imgRightFull,
    &.imgLeftFull {
      padding: 100px 50px;
    }
    &.imgLeft {
      padding-left: 50px;
    }

    &.imgRight {
      padding-right: 50px;
    }
  `};
`;

const SubTitle = s(RichText)`
  width: min(100%, 600px);
`;

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  margin-top: 1rem;

  &.bg,
  &.imgLeftFull,
  &.imgRightFull {
    justify-content: center;
  }

  input {
    width: 100%;
    ${({ theme: { mq } }) => mq.sm`
      width: min(100%, 206px);
    `};
  }
`;

function HeroBlock({
  eyebrow,
  title,
  subTitle,
  image,
  blockConfig,
  input,
  cta
}: HeroBlockProps) {
  const layout = blockConfig?.layout || 'imgRight';

  const className = genClassName([layout]);
  return (
    <StyledWrapper className={className} gutter={false} fullBleed>
      <ImageWrapper image={image} $layout={layout} />

      <ContentWrapper className={className}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        {title && <Title>{title}</Title>}
        {subTitle && <SubTitle {...subTitle} />}
        {(input || cta) && (
          <InputWrapper className={className}>
            {input?.type === 'input' && <TextInput {...input} />}
            {cta?.label && <CtaButton cta={cta} />}
          </InputWrapper>
        )}
      </ContentWrapper>
    </StyledWrapper>
  );
}

export default HeroBlock;
