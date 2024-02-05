'use client';

import React, { useId } from 'react';
import lens from '@refract-ui/sc/lens';

import Wrapper from '@web/components/Wrapper';
import type { HeroRevealBlockT as PayloadType } from '@web/payload/payload-types';

export type HeroRevealBlockType = Pick<PayloadType, 'title'>;

const Section = lens()(Wrapper)`
  height: 300vh;
  width: 100%;
`;

const Slide = lens.div()`
  height: 100vh;
  width: 100%;
`;

const SlideContent = lens.div()`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
`;

const SlideMask = lens.div()`
`;

function HeroRevealBlock() {
  const slide1Id = useId();
  const slide2Id = useId();
  const slide3Id = useId();
  return (
    <Section>
      <Slide>
        <SlideContent id={slide1Id}>slide 1</SlideContent>
        <SlideMask />
      </Slide>
      <Slide>
        <SlideContent id={slide2Id}>slide 2</SlideContent>
        <SlideMask />
      </Slide>
      <Slide>
        <SlideContent id={slide3Id}>slide 3</SlideContent>
        <SlideMask />
      </Slide>
    </Section>
  );
}

export default HeroRevealBlock;
