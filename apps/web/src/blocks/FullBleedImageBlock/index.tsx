'use client';

import type { FullBleedImageBlockT as PayloadType } from '@mono/types/payload-types';
import Wrapper from '@mono/ui/components/Wrapper';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import styled, { css } from '@refract-ui/sc';
import React from 'react';

export type FullBleedImageBlockType = Omit<PayloadType, 'blockType'>;

const StyledWrapper = styled(Wrapper)<{
  $isBackground: FullBleedImageBlockType['isBackground'];
}>`
  ${({ theme: { mq }, $isBackground }) =>
    $isBackground &&
    css`
      z-index: -1;
      margin-bottom: -2rem;

      ${mq.lg`
        margin-bottom: -4rem;
      `}
    `};
`;

const StyledDesktopImage = styled(ResponsivePayloadImage)<{
  $hasMobile: boolean;
}>`
  ${({ theme: { mq }, $hasMobile }) => css`
    display: ${$hasMobile ? 'none' : 'block'};

    ${mq.sm`
      display: block;
    `}
  `};
`;

const StyledMobileImage = styled(ResponsivePayloadImage)`
  ${({ theme: { mq } }) => css`
    display: block;

    ${mq.sm`
      display: none;
    `}
  `};
`;

function FullBleedImageBlock({
  image,
  mobileImage,
  isBackground,
  blockConfig
}: FullBleedImageBlockType) {
  const hasMobileImage = !!mobileImage;
  return (
    <StyledWrapper
      {...blockConfig}
      hidden={blockConfig?.hidden ?? false}
      $isBackground={isBackground}
    >
      <StyledDesktopImage image={image} $hasMobile={hasMobileImage} />
      <StyledMobileImage image={mobileImage} />
    </StyledWrapper>
  );
}

export default FullBleedImageBlock;
