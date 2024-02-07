'use client';

import React, { useEffect, useRef } from 'react';
import lens from '@refract-ui/sc/lens';
import Rellax from 'rellax';
import { css } from 'styled-components';

import ResponsivePayloadImage from '@web/components/ResponsivePayloadImage';
import RichText from '@web/components/RichText';
import Wrapper from '@web/components/Wrapper';
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

  ${({ theme: { mq } }) => mq.md`
    top: -320px;
    width: 580px;
    height: 930px;
  `}
`;

const Section = lens()(Wrapper)`
  position: relative;
  padding-top: 520px;

  ${({ theme: { mq } }) => mq.md`
    padding-top: 480px;
  `}
`;

const Background = lens.div()<{ background: string }>`
  position: absolute;
  width: 300%;
  height: 350px;
  right: -111px;
  z-index: 0;

  ${({ theme: { mq } }) => mq.md`
    width: 100%;
    height: 480px;
    right: unset;
  `}

  ${({ background }) =>
    background &&
    css`
      background-image: url(${background});
      background-size: cover;
      background-repeat: no-repeat;
    `}
`;

const Title = lens.h1({ p: 0, m: 0, t: 'display1' })`
  position: relative;
  line-height: 1;
  color: ${({ theme: { allColors } }) => allColors.displayFill};

  span {
    position: relative;

    &:first-of-type {
      z-index: 0;
      ${({ theme: { allColors, mq } }) => css`
        -webkit-text-stroke: ${allColors.displayOutline} 18px;

        ${mq.md`
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

  ${({ theme: { mq } }) => mq.md`
    max-width: 40%;
  `}
`;

const Content = lens.div()`
  z-index: 1;
`;

function HeroRevealBlock({
  background,
  title,
  body,
  productDetail
}: PayloadType) {
  const bgRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const mgRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const pdImage = expandedDoc<Image>(productDetail);
  const bgImage = expandedDoc<Image>(background);

  useEffect(() => {
    if (bgRef.current && mgRef.current) {
      const bgRellax = new Rellax(bgRef.current, {
        speed: -4,
        center: false,
        round: false,
        vertical: true,
        horizontal: false
      });

      const mgRellax = new Rellax(mgRef.current, {
        speed: -2,
        center: false,
        round: false,
        vertical: true,
        horizontal: false
      });

      return () => {
        bgRellax.destroy();
        mgRellax.destroy();
      };
    }

    return () => {};
  }, []);

  return (
    <Section background={background}>
      {bgImage && bgImage.url && (
        <Background ref={bgRef} background={bgImage.url} />
      )}
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
  );
}

export default HeroRevealBlock;
