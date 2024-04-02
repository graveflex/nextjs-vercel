'use client';

import React from 'react';
import Image from 'next/image';
import styled from '@refract-ui/sc';

import genClassName from '../../../utils/genClassname';
import type { PayloadImageProps } from '../types/ResponsivePayloadImage';

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
  sizes,
  width,
  imageProps,
  additionalProps,
  className,
  classOverride
}: PayloadImageProps) {
  if (!url) {
    return null;
  }

  /* Nextjs Image properties. There cannot be a height and width if fill is true */
  const fill = imageProps?.fill ?? isFill({ height, width } as Dimensions);

  const { thumbnail, mobile, tablet, desktop, ultrawide } = sizes ?? {};

  const fillSizes = [
    `(max-width: 480px) ${thumbnail?.width}px`,
    `(max-width: 768px) ${mobile?.width}px`,
    `(max-width: 1024px) ${tablet?.width}px`,
    `(max-width: 2048px) ${desktop?.width}px`,
    `${ultrawide?.width}px`
  ].join(', ');

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
    <ImageWrapper
      style={containerStyles}
      className={genClassName([className, classOverride])}
    >
      <Image
        {...{
          fill,
          ...dimensions,
          ...imageProps
        }}
        src={url}
        sizes={fill ? fillSizes : '100vw'}
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
