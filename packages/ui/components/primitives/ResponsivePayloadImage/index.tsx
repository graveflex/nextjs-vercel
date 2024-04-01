'use client';

import React from 'react';
import Image from 'next/image';
import type { PayloadImageProps } from '@mono/ui/primitives/ResponsivePayloadImage';
import styled from '@refract-ui/sc';

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
  additionalProps
}: PayloadImageProps) {
  if (!url) {
    return null;
  }

  /* Nextjs Image properties. There cannot be a height and width if fill is true */
  const fill = imageProps?.fill ?? isFill({ height, width } as Dimensions);

  const dimensions = !fill
    ? ({
        height,
        width
      } as Dimensions)
    : {};

  /* Additional styling props for the image & container */
  const objectFit = additionalProps?.objectFit ?? 'cover';
  const isRounded = additionalProps?.isRounded ?? false;
  const aspectRatio = additionalProps?.aspectRatio ?? 'initial';

  const imageStyles = {
    objectFit,
    borderRadius: isRounded ? '36px' : 'initial'
  } as React.CSSProperties;

  const containerStyles = {
    aspectRatio
  } as React.CSSProperties;

  /* We do not want to optimize SVGs */
  const containsSVG = /\.svg$/;
  const isSVG = containsSVG.test(url);

  return (
    <ImageWrapper style={containerStyles}>
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
