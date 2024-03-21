'use client';

import React from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import genClassName from '@web/lib/genClassname';
import type { PayloadImageT } from '@web/primitives/primatives';


type IsFillProps = {
  width?: number | null;
  height?: number | null;
};

const ImageWrapper = styled.div`
  container-type: inline-size;
  position: relative;
`;

/* If there is no height or width then the image will fill the container */
const isFill = ({ width, height }: IsFillProps): boolean => {
  if (width !== undefined && height !== undefined) {
    return false;
  }
  return true;
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

  return (
    <ImageWrapper className={genClassName([className, classOverride])}>
      <Image
        {...{
          fill: isFill(image)
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
