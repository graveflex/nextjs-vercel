'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import Button from 'ui/components/Button';

import { Page } from '@web/payload/payload-types';

const Container = styled.div`
  position: relative;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 24px;
`;

const Header = styled.h1`
  && {
    text-align: center;
    font-size: clamp(24px, 8.4vw, 121px);
    font-style: normal;
    font-weight: 700;
    margin: 0;
    line-height: 121px;
  }
`;

const SubHeader = styled.h3`
  && {
    text-align: center;
    font-size: clamp(20px, 3vw, 36px);
    font-style: normal;
    margin: 0;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1.44px;
  }
`;

type ExtractBlockType<T, BlockType> = T extends { blockType: BlockType }
  ? T
  : never;
export type HeroType = ExtractBlockType<
  NonNullable<Page['layout']>[number],
  'Hero'
>;

function Hero({ header, subHeader, cta, image }: HeroType) {
  return (
    <Container>
      {typeof image === 'object' && (
        <Image
          layout="responsive"
          width="100"
          height="720"
          alt={image?.alt || ''}
          src={image?.url || ''}
        />
      )}

      <ContentWrapper>
        <Header> {header} </Header>
        <SubHeader> {subHeader} </SubHeader>
        {cta && <Button> {cta} </Button>}
      </ContentWrapper>
    </Container>
  );
}

export default Hero;
