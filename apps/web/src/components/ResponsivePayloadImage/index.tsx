'use client';

import React from 'react';
import type { ImageProps } from 'next/image';
import Image from 'next/image';
import styled from 'styled-components';

import genClassName from '@web/lib/genClassname';
import type { Image as ImageT } from '@web/payload/payload-types';

export type ResponsivePayloadImageType = {
  image: ImageT;
  imageProps?: Partial<ImageProps>;
  className?: string;
  classOverride?: string;
  innerRef?: React.MutableRefObject<HTMLElement>;
};

const ImageWrapper = styled.div`
  container-type: inline-size;
  position: relative;

  img {
    object-fit: cover;
  }
`;

function ResponsivePayloadImage({
  image,
  imageProps,
  className,
  classOverride,
  innerRef
}: ResponsivePayloadImageType) {
  const { alt, url: imageUrl } = image;

  if (!imageUrl) {
    return null;
  }

  return (
    <ImageWrapper
      className={genClassName([className, classOverride])}
      ref={innerRef as React.LegacyRef<HTMLDivElement>}
    >
      <Image
        {...{ fill: true, ...imageProps }}
        src={imageUrl}
        alt={alt || 'image'}
      />
    </ImageWrapper>
  );
}

export default ResponsivePayloadImage;
