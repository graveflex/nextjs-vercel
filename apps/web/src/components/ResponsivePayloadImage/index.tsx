'use client';

import React from 'react';
import type { ImageProps } from 'next/image';
import Image from 'next/image';
import genClassName from '@mono/web/lib/genClassname';
import type { Image as ImageT } from '@mono/web/payload/payload-types';
import styled from '@refract-ui/sc';

export interface ResponsivePayloadImageType
  extends React.ComponentProps<'div'> {
  image: ImageT;
  imageProps?: Partial<ImageProps>;
  className?: string;
  classOverride?: string;
}

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
  ...props
}: ResponsivePayloadImageType) {
  const { alt, url: imageUrl } = image;

  if (!imageUrl) {
    return null;
  }

  return (
    <ImageWrapper
      className={genClassName([className, classOverride])}
      {...props}
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
