'use client';

import React from 'react';
import Link from 'next/link';
import lens from '@refract-ui/sc/lens';
import styled from 'styled-components';

import ResponsivePayloadImage from '@web/components/ResponsivePayloadImage';
import RichText from '@web/components/RichText';
import Wrapper from '@web/components/Wrapper';
import Input from '@web/fields/Input';
import genClassName from '@web/lib/genClassname';
import expandedDoc from '@web/lib/isExpandedDoc';
import type {
  HeroBlockT as PayloadType,
  Image
} from '@web/payload/payload-types';

export type HeroBlockType = Omit<PayloadType, 'blockType'>;

const StyledWrapper = styled(Wrapper)`
  align-items: center;
  & > div:first-child {
    grid-column: 1 / 5;
  }
  &.bg {
    position: relative;
    & > * {
      grid-column: 1 / 5;
    }
  }

  ${({ theme: { mq } }) => mq.md`
    & > div {
      grid-row: 1;
    }
    &.imgRight {
      & > div:first-child {
        grid-column: 3;
      }
      & > div:last-child {
        grid-column: 2;
      }
    }
    &.imgLeft {
      & > div:first-child {
        grid-column: 2;
      } 
      & > div:last-child {
        grid-column: 3;
      }
    }
    &.imgRightFull {
      & > div:first-child {
        grid-column: 3 / 5;
      } 
      & > div:last-child {
        grid-column: 1 / 3;
      }
    }
    &.imgLeftFull {
      & > div:first-child {
        grid-column: 1 / 3;
      }
      & > div:last-child {
        grid-column: 3/ 5;
      }
    }
  `};
`;

const ImageWrapper = styled(ResponsivePayloadImage)`
  aspect-ratio: 500 / 402;

  &.bg {
    position: absolute;
    height: 100%;
    width: 100%;
  }
`;

const Eyebrow = styled.span`
  ${({ theme: { box } }) => box.t('h6')};
`;

const Title = lens.h1({ m: 0, p: 0 })``;

const ContentWrapper = styled.div`
  z-index: 1;
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

const SubTitle = styled(RichText)`
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

const Button = styled(Link)`
  text-align: center;
  width: 100%;

  ${({ theme: { mq } }) => mq.sm`
    width: min(100%, 206px);
  `};
`;

function HeroBlock({
  eyebrow,
  title,
  subTitle,
  cta,
  input,
  image,
  blockConfig
}: HeroBlockType) {
  const layout = blockConfig?.layout || 'imgRight';
  const img = expandedDoc<Image>(image);
  const className = genClassName([layout]);
  return (
    <StyledWrapper className={className}>
      {img && <ImageWrapper image={img} classOverride={className} />}
      <ContentWrapper className={className}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        {title && <Title>{title}</Title>}
        {subTitle && <SubTitle content={subTitle} />}
        {(input || cta) && (
          <InputWrapper className={className}>
            {input?.type && <Input {...input} />}
            {cta?.label && cta?.href && (
              <Button href={cta?.href} className="button">
                {cta?.label}
              </Button>
            )}
          </InputWrapper>
        )}
      </ContentWrapper>
    </StyledWrapper>
  );
}

export default HeroBlock;
