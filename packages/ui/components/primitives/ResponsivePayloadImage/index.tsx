'use client';

import React, { useMemo } from 'react';
import { getImageProps } from 'next/image';
import { type Image as PayloadImageProps } from '@mono/types/payload-types';
import styled, { css } from '@refract-ui/sc';
import { type DefaultTheme, useTheme } from 'styled-components';

const Container = styled.picture<{ $fill: boolean }>`
  ${({ $fill }) => css`
    width: ${$fill ? '100%' : 'fit-content'};
    height: ${$fill ? '100%' : 'fit-content'};
  `}
`;

export interface ResponsivePayloadWrapperProps
  extends React.ComponentProps<'img'> {
  image?: number | PayloadImageProps | null | undefined;
}

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

type Breakpoints = {
  [K in DefaultTheme['settings']['breakpointNames'][number]]: number;
};

interface SourceProps {
  image?: {
    url?: string | null;
    width?: number | null;
    height?: number | null;
  };
  breakpoints: Breakpoints;
  bp: keyof Breakpoints;
}

function Source({ image, breakpoints, bp }: SourceProps) {
  if (!image?.url) {
    return null;
  }

  const minWidth = breakpoints[bp];

  return (
    <source
      media={`(min-width: ${minWidth}px)`}
      srcSet={
        getImageProps({
          alt: '',
          width: image.width || undefined,
          height: image.height || undefined,
          src: image.url
        }).props.srcSet
      }
    />
  );
}

const ResponsiveImage = styled.img<{
  $additionalProps: PayloadImageProps['additionalProps'];
  $fill: boolean;
  $width?: number;
}>`
  width: ${({ $fill, $width }) =>
    $fill ? '100%' : `${$width}px` || undefined};
  ${({ $additionalProps }) => css`
    ${$additionalProps?.objectFit &&
    css`
      object-fit: ${$additionalProps?.objectFit};
    `}

    ${$additionalProps?.isRounded
      ? css`
          border-radius: 2.25rem;
        `
      : css`
          border-radius: none;
        `}

    ${$additionalProps?.aspectRatio &&
    css`
      aspect-ratio: ${$additionalProps?.aspectRatio};
    `}
  `}
`;

function ResponsivePayloadImage({
  image,
  className,
  ...props
}: ResponsivePayloadWrapperProps) {
  const theme = useTheme();

  const breakpoints = useMemo(
    () =>
      theme.settings.breakpointNames.reduce<Partial<Breakpoints>>(
        (coll, name, idx) => ({
          ...coll,
          [name]: theme.settings.breakpointValues[idx]
        }),
        {}
      ) as Breakpoints,
    [theme.settings.breakpointValues, theme.settings.breakpointNames]
  );

  if (typeof image === 'number' || !image) {
    return null;
  }

  const { alt, url, height, sizes, width, imageProps, additionalProps } = image;

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

  return (
    <Container className={className} $fill={fill}>
      <Source breakpoints={breakpoints} image={ultrawide} bp="xxl" />
      <Source breakpoints={breakpoints} image={desktop} bp="lg" />
      <Source breakpoints={breakpoints} image={tablet} bp="md" />
      <Source breakpoints={breakpoints} image={mobile} bp="sm" />
      <Source breakpoints={breakpoints} image={thumbnail} bp="xxs" />
      <ResponsiveImage
        $additionalProps={additionalProps}
        {...{
          ...dimensions,
          ...props
        }}
        src={url}
        srcSet={
          getImageProps({
            alt: '',
            width: width || undefined,
            height: height || undefined,
            src: url,
            fill: !width && !!imageProps?.fill
          }).props.srcSet
        }
        sizes={fill ? fillSizes : '100vw'}
        alt={alt ?? ''}
        $fill={fill}
        $width={width || undefined}
      />
    </Container>
  );
}

export default ResponsivePayloadImage;
