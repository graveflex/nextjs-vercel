'use client';

import React from 'react';
import lens from '@refract-ui/sc/lens';
import { css } from 'styled-components';

import Wrapper from '@web/components/Wrapper';
import expandedDoc from '@web/lib/isExpandedDoc';
import type {
  Image,
  ParallaxBackgroundT as PayloadType
} from '@web/payload/payload-types';

export type ParallaxBackgroundType = Omit<PayloadType, 'blockType'>;

const Container = lens.div()`
  position: relative;
  width: 100%;
  margin: 2rem auto;
  min-height: 40vh;
  display: grid;

  ${({ theme: { mq } }) => mq.lg`
    margin: 6rem auto;
  `}
`;

const Section = lens({ pv: 6, ph: 6 })(Wrapper)`
  display: grid;
  width: 100%;
  align-items: center;
  justify-content: stretch;
`;

const Parallax = lens.div()`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Background = lens.div()<{ background: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  left: 0;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-self: stretch;

  ${({ background }) =>
    background &&
    css`
      background-image: url(${background});
    `}
`;

const Filter = lens.div()`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: brightness(30%);
`;

const Body = lens.div({ pv: 4, ph: 8, m: 0, t: 'display2' })`
  text-align: center;
  font-size: 2rem;
  z-index: 1;
  margin: 0 auto;
  font-size: 2rem;

  span {
    padding: 0.3rem 1rem;
    line-height: 1.3;
  }

  ${({ theme: { mq } }) => mq.sm`
    font-size: 2.5rem;
    max-width: 70%;
  `}
`;

function ParallaxBackground({ content, background }: ParallaxBackgroundType) {
  const bgImage = expandedDoc<Image>(background);
  return (
    <Container>
      <Parallax>
        {bgImage && bgImage.url && <Background background={bgImage.url} />}
        <Filter />
      </Parallax>
      <Section>
        {content && (
          <Body>
            <span>{content}</span>
          </Body>
        )}
      </Section>
    </Container>
  );
}

export default ParallaxBackground;
