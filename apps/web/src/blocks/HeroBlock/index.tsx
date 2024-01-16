'use client';

import React from 'react';
import Link from 'next/link';
import lens from '@refract-ui/sc/lens';
import styled, { css } from 'styled-components';

import ResponsivePayloadImage from '@web/components/ResponsivePayloadImage';
import expandedDoc from '@web/lib/isExpandedDoc';
import type {
  HeroBlockT as PayloadType,
  Image
} from '@web/payload/payload-types';

export type HeroBlockType = Omit<PayloadType, 'blockType'>;

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

// replace w/ `lens`
const Title = lens.h1({ m: 0, p: 0 })`
  text-align: center;
  position: relative;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.04em;

  ${({ theme: { mq } }) => mq.md`
    font-size: 7.5rem;
    line-height: 121px;
  `};
`;

const SubTitle = lens.h2({ m: 0, p: 0 })`
  position: relative;
  text-align: center;
  font-weight: 700;
  font-size: 1.75rem;
  letter-spacing: -0.04em;
  ${({ theme: { mq } }) => mq.md`
    font-size: 2.25rem;
    line-height: 49px;
  `};

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
      {cta?.label && <Button href={cta?.href}>{cta?.label}</Button>}
    </Wrapper>
  );
}

export default HeroBlock;
