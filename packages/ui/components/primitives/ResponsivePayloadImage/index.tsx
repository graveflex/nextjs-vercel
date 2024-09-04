import type { Image as PayloadImageProps } from '@mono/types/payload-types';
import { getImageProps } from 'next/image';
import React from 'react';
import type { DefaultTheme } from 'styled-components';
import ResponsiveImageClient, {
  type ResponsivePayloadWrapperProps
} from './ResponsivePayloadImage.client';

type Dimensions = {
  height?: number;
  width?: number;
};

const sizeMapping = {
  ultrawide: 'xxl',
  desktop: 'lg',
  tablet: 'md',
  mobile: 'sm',
  thumbnail: 'xxs'
};

export type SrcSets = Record<
  keyof typeof sizeMapping,
  {
    bp: DefaultTheme['settings']['breakpointNames'][number];
    srcSet?: string;
  }
>;

/* If there is no height or width then the image will fill the container */
const isFill = ({ width, height }: Dimensions): boolean => {
  if (width === undefined && height === undefined) {
    return true;
  }
  return false;
};

const getSrcSets = (
  sizes: PayloadImageProps['sizes'],
  alt: string
): SrcSets => {
  const srcSets = Object.keys(sizeMapping).reduce(
    (memo, screenSize): SrcSets => {
      const sizeKey = screenSize as keyof typeof sizeMapping;

      const image = sizes?.[sizeKey];
      if (image && image.url) {
        memo[sizeKey] = {
          bp: sizeMapping[
            sizeKey
          ] as DefaultTheme['settings']['breakpointNames'][number],
          srcSet: getImageProps({
            alt,
            src: image.url,
            width: image.width || undefined,
            height: image.height || undefined
          }).props.srcSet
        };
      }

      return memo;
    },
    {} as SrcSets
  );

  return srcSets;
};

export default function ResponsiveImage(props: ResponsivePayloadWrapperProps) {
  if (typeof props.image === 'number' || !props.image) {
    return null;
  }

  const { alt, url, height, sizes, width, imageProps, additionalProps } =
    props.image;

  if (!url) {
    return null;
  }

  const { mobile, tablet, desktop, ultrawide } = sizes ?? {};
  let { thumbnail } = sizes ?? {};

  if (!thumbnail) {
    thumbnail = { url, width, height };
  }

  /* Nextjs Image properties. There cannot be a height and width if fill is true */
  const fill = imageProps?.fill ?? isFill({ height, width } as Dimensions);

  const fillSizes = [
    `(min-width: 2048px) ${desktop?.width} px`,
    `(min-width: 1024px) ${tablet?.width} px`,
    `(min-width: 768px) ${mobile?.width} px`,
    `(min-width: 0) ${thumbnail?.width} px`,
    `${ultrawide?.width} px`
  ].join(', ');

  const dimensions = !fill
    ? ({
        height,
        width
      } as Dimensions)
    : {};

  const srcSets = getSrcSets(sizes, alt ?? '');
  const defaultSrcSet = getImageProps({
    alt: alt ?? '',
    width: width || undefined,
    height: height || undefined,
    src: url,
    fill: !width && !!imageProps?.fill
  }).props.srcSet;

  return (
    <ResponsiveImageClient
      fill={fill}
      defaultSrcSet={defaultSrcSet}
      imageProps={imageProps}
      fillSizes={fillSizes}
      srcSets={srcSets}
      additionalProps={additionalProps ?? {}}
      width={dimensions.width}
      height={dimensions.height}
      url={url}
      alt={alt ?? ''}
    />
  );
}
