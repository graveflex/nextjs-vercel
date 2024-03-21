'use client';

import React from 'react';
import Image from 'next/image';
import get from 'lodash/get';
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
  const alt = get(image, 'alt', '');
  const url = get(image, 'url');
  const height = get(image, 'height');
  const width = get(image, 'width');

  /* Additional props for the image */
  const style = get(imageProps, 'style', { objectFit: 'cover' });
  const quality = get(imageProps, 'quality', 75);
  const priority = get(imageProps, 'priority', false);

  if (!url) {
    return null;
  }

  const imageStyles = {
    style,
    borderRadius: isRounded ? '36px' : 'initial',
    aspectRatio
  };

  /* We do not want to optimize SVGs */
  const containsSVG = /\.svg$/;
  const isSVG = containsSVG.test(url);

  const dimensions = {
    height,
    width
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
