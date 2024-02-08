'use client';

import React from 'react';
import lens from '@refract-ui/sc/lens';
import { css } from 'styled-components';

import ResponsivePayloadImage from '@web/components/ResponsivePayloadImage';
import RichText from '@web/components/RichText';
import Wrapper from '@web/components/Wrapper';
import useParallax from '@web/hooks/useParallax';
import expandedDoc from '@web/lib/isExpandedDoc';
import type {
  HeroRevealBlockT as PayloadType,
  Image
} from '@web/payload/payload-types';

export type HeroRevealBlockType = Omit<PayloadType, 'blockType'>;

const ProductDetail = lens()(ResponsivePayloadImage)`
  position: absolute;
  top: -409px;
  right: 0;
  width: 100%;
  height: 406px;
  z-index: 0;

  img {
    object-fit: contain;
  }

  ${({ theme: { mq } }) => mq.lg`
    top: -320px;
    width: 580px;
    height: 930px;
  `}
`;

const Container = lens.div()`
  position: relative;
  width: 100%;
  margin: 0 auto;

  ${({ theme: { mq } }) => mq.lg`
    margin: 0 auto 6rem;
  `}
`;

const Section = lens()(Wrapper)`
  position: relative;
  padding-top: 520px;

  ${({ theme: { mq } }) => mq.lg`
    padding-top: 480px;
    padding-bottom: 100px;
  `}
`;

const Background = lens.div()<{ background: string }>`
  position: absolute;
  width: 100%;
  height: 350px;
  z-index: 0;
  left: 0;

  ${({ theme: { mq } }) => mq.lg`
    height: 480px;
    right: unset;
  `}

  ${({ background }) =>
    background &&
    css`
      background-image: url(${background});
      background-size: cover;
      background-repeat: repeat-x;
    `}
`;

const Title = lens.h1({ p: 0, m: 0, pb: 4, t: 'display1' })`
  position: relative;
  line-height: 0.8;
  color: ${({ theme: { allColors } }) => allColors.displayFill};
  text-align: left;

  ${({ theme: { mq } }) => css`
    ${mq.sm`
      font-size: 4.0625rem;
    `}

    ${mq.lg`
      font-size: 7.361418135512773rem;
    `}
  `}

  span {
    position: relative;

    &:first-of-type {
      z-index: 0;
      ${({ theme: { allColors, mq } }) => css`
        -webkit-text-stroke: ${allColors.displayOutline} 18px;

        ${mq.lg`
          -webkit-text-stroke-width: 24px;
        `}
      `}
    }

    &:last-child {
      z-index: 1;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }
`;

const Body = lens({ p: 0, m: 0 })(RichText)`
  font-size: 1.5rem;

  ${({ theme: { mq } }) => mq.lg`
    max-width: 40%;
  `}
`;

const Content = lens.div()`
  max-width: 478px;
  margin: 0 auto;
  z-index: 1;

  ${({ theme: { mq } }) => mq.lg`
    max-width: unset;
    min-height: 415px;
    margin: unset;
  `}
`;

function HeroRevealBlock({
  background,
  title,
  body,
  productDetail
}: PayloadType) {
  const pdImage = expandedDoc<Image>(productDetail);
  const bgImage = expandedDoc<Image>(background);

  const bgRef = useParallax({ speed: -4 });
  const mgRef = useParallax({ speed: -2 });

  return (
    <Container>
      {bgImage && bgImage.url && (
        <Background ref={bgRef} background={bgImage.url} />
      )}
      <Section background={background}>
        <Content>
          {title && (
            <Title className="display1">
              {pdImage && <ProductDetail innerRef={mgRef} image={pdImage} />}
              <span>{title}</span>
              <span>{title}</span>
            </Title>
          )}
          {body && <Body content={body} />}
        </Content>
      </Section>
    </Container>
  );
}

export default HeroRevealBlock;
