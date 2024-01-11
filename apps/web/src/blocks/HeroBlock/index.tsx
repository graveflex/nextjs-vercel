'use client';

import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import ResponsivePayloadImage from '@web/components/ResponsivePayloadImage';
import expandedDoc from '@web/lib/isExpandedDoc';
import type {
  HeroBlockT as PayloadType,
  Image
} from '@web/payload/payload-types';

export type HeroBlockType = PayloadType;

const Wrapper = styled.section`
  position: relative;
  height: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const BackgroundImage = styled(ResponsivePayloadImage)`
  height: 100%;
  width: 100%;
  position: absolute;
`;

const Title = styled.h1`
  position: relative;
  margin: 0;
  padding: 0;
  && {
    font-size: 7.5rem;
    font-weight: 700;
    line-height: 121px;
    letter-spacing: -0.04em;
  }
`;

const SubTitle = styled.h2`
  position: relative;
  margin: 0;
  padding: 0;
  && {
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 49px;
    letter-spacing: -0.04em;
  }
`;

const Button = styled(Link)`
  ${({ theme: { box } }) => box.t('menuLink')};
  text-decoration: none;
  position: relative;

  ${({ theme }) => css`
    color: ${theme.colors.black};
    background: ${theme.themeColors.primary};
    padding: 0.625rem 1.5rem;
    border-radius: 62px;

    &:hover,
    &:active,
    &:focus {
      background: ${theme.themeColorShades.primary400};
    }
  `};
`;

function HeroBlock({ title, subTitle, cta, background }: HeroBlockType) {
  const bg = expandedDoc<Image>(background);
  return (
    <Wrapper>
      {bg && <BackgroundImage image={bg} imageProps={{ objectFit: 'cover' }} />}
      {title && <Title>{title}</Title>}
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      {cta && <Button href={cta.href}>{cta.label}</Button>}
    </Wrapper>
  );
}

export default HeroBlock;
