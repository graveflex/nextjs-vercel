'use client';

import React from 'react';
import styled from 'styled-components';

import type { HeroBlockT as PayloadType } from '@web/payload/payload-types';

export type HeroBlockType = Pick<PayloadType, 'title'>;

const Wrapper = styled.section``;

function HeroBlock({ title }: HeroBlockType) {
  return (
    <Wrapper>
      <h1>Hero block</h1>
      <pre>{JSON.stringify({ title })}</pre>
    </Wrapper>
  );
}

export default HeroBlock;
