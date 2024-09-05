'use client';

import theme from '@mono/theme/src/light';
import type { Image as PayloadImageProps } from '@mono/types/payload-types';
import styled, { css } from '@refract-ui/sc';
import { getImageProps } from 'next/image';
import type React from 'react';
import type { DefaultTheme } from 'styled-components';

type Breakpoints = {
  [K in DefaultTheme['settings']['breakpointNames'][number]]: number;
};

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

const breakpoints = theme.settings.breakpointNames.reduce<Partial<Breakpoints>>(
  (coll, name, idx) => ({
    ...coll,
    [name]: theme.settings.breakpointValues[idx]
  }),
  {}
) as Breakpoints;

const Container = styled.picture<{ $fill: boolean }>`
  ${({ $fill }) => css`
    width: ${$fill ? '100%' : 'fit-content'};
    height: ${$fill ? '100%' : 'fit-content'};
  `}
`;

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

export interface ResponsivePayloadWrapperProps
  extends React.ComponentProps<'img'> {
  image?: number | PayloadImageProps | null | undefined;
}

interface SourceProps {
  srcSet?: string;
  bp: keyof Breakpoints;
}

function Source({ srcSet, bp }: SourceProps) {
  if (!srcSet) {
    return null;
  }

  const minWidth = breakpoints[bp];

  return <source media={`(min-width: ${minWidth}px)`} srcSet={srcSet} />;
}

const ResponsiveImage = styled.img<{
  $additionalProps: PayloadImageProps['additionalProps'];
  $fill: boolean;
}>`
  ${({ $additionalProps }) => css`
    ${
      $additionalProps?.objectFit &&
      css`
      object-fit: ${$additionalProps?.objectFit};
    `
    }

    ${
      $additionalProps?.isRounded
        ? css`
          border-radius: 2.25rem;
        `
        : css`
          border-radius: none;
        `
    }
  `}
`;

function ResponsivePayloadImage(props: ResponsivePayloadWrapperProps) {
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

  const fillSizes =
    props.sizes ??
    [
      `(min-width: 2048px) ${desktop?.width} px`,
      `(min-width: 1024px) ${tablet?.width} px`,
      `(min-width: 768px) ${mobile?.width} px`,
      `(min-width: 0) ${thumbnail?.width} px`,
      `${ultrawide?.width} px`
    ].join(', ');

  const srcSets = getSrcSets(sizes, alt ?? '');
  const defaultSrcSet = getImageProps({
    alt: alt ?? '',
    width: width || undefined,
    height: height || undefined,
    src: url,
    fill: !width && !!imageProps?.fill
  }).props.srcSet;

  return (
    <Container $fill={fill}>
      <Source {...srcSets.ultrawide} />
      <Source {...srcSets.desktop} />
      <Source {...srcSets.tablet} />
      <Source {...srcSets.mobile} />
      <Source {...srcSets.thumbnail} />
      <ResponsiveImage
        loading={imageProps?.priority ? 'eager' : 'lazy'}
        $additionalProps={additionalProps}
        src={url}
        width={width || undefined}
        height={height || undefined}
        srcSet={defaultSrcSet}
        sizes={fillSizes}
        $fill={fill}
        {...props}
      />
    </Container>
  );
}

export default ResponsivePayloadImage;
