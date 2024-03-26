'use client';

import React from 'react';
import Image from 'next/image';
import genClassName from '@mono/web/lib/genClassname';
import styled from '@refract-ui/sc';

import type { PayloadImageT } from '@web/primitives/primitives';

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
  alt,
  url,
  height,
  width,
  imageProps,
  additionalProps,
  className,
  classOverride
}: PayloadImageT) {
  /* Additional props for the image */
  const fill = imageProps?.fill ?? isFill({ height, width } as Dimensions);
  const objectFit = additionalProps?.objectFit ?? 'cover';
  const isRounded = additionalProps?.isRounded ?? false;
  const aspectRatio = additionalProps?.aspectRatio ?? 'initial';
  if (!url) {
    return null;
  }

  const imageStyles = {
    objectFit,
    borderRadius: isRounded ? '36px' : 'initial',
    aspectRatio
  } as React.CSSProperties;

  const dimensions = !fill
    ? ({
        height,
        width
      } as Dimensions)
    : {};

  /* We do not want to optimize SVGs */
  const containsSVG = /\.svg$/;
  const isSVG = containsSVG.test(url);

  return (
    <ImageWrapper className={genClassName([className, classOverride])}>
      <Image
        {...{
          fill,
          ...dimensions,
          ...imageProps
        }}
        src={url}
        alt={alt ?? ''}
        unoptimized={isSVG}
        style={imageStyles}
        placeholder="blur"
        blurDataURL={url}
      />
    </ImageWrapper>
  );
}

export default ResponsivePayloadImage;
