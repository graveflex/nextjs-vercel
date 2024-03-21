'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import genClassName from '@web/lib/genClassname';
import type { PayloadImageT } from '@web/primitives/primatives';

const ImageWrapper = styled.div`
  container-type: inline-size;
  position: relative;
`;

type Dimensions = {
  height?: number;
  width?: number;
};
/* If there is no height or width then the image will fill the container */
const isFill = ({ width, height }: Dimensions): boolean => {
  if (width === undefined && height === undefined) {
    return true;
  }
  return false;
};

function ResponsivePayloadImage({
  image,
  imageProps,
  aspectRatio = 'initial',
  isRounded = false,
  className,
  classOverride
}: PayloadImageT) {
  const { alt, url } = image;

  /* Additional props for the image */
  const { style, quality, priority } = imageProps ?? {
    style: { objectFit: 'cover' },
    quality: 75,
    priority: false
  };

  if (!url) {
    return null;
  }

  const imageStyles = {
    ...style,
    borderRadius: isRounded ? '36px' : 'initial',
    aspectRatio
  };

  /* We do not want to optimize SVGs */
  const containsSVG = /\.svg$/;
  const isSVG = containsSVG.test(url);

  const dimensions = {
    height: image?.height,
    width: image?.width
  } as Dimensions;

  return (
    <ImageWrapper className={genClassName([className, classOverride])}>
      <Image
        {...{
          fill: isFill(dimensions),
          ...dimensions
        }}
        src={url}
        alt={alt ?? ''}
        quality={quality}
        unoptimized={isSVG}
        style={imageStyles}
        priority={priority}
        placeholder="blur"
        blurDataURL={url}
      />
    </ImageWrapper>
  );
}

export default ResponsivePayloadImage;
