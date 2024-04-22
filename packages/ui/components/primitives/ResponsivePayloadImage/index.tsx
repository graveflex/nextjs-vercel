'use client';

import React, { useMemo } from 'react';
import { getImageProps } from 'next/image';
import { type Image as PayloadImageProps } from '@mono/types/payload-types';
import styled, { css } from '@refract-ui/sc';
import { type DefaultTheme, useTheme } from 'styled-components';

const Container = styled.picture``;

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

interface BuildMediaQueriesProps {
  $additionalProps: PayloadImageProps['additionalProps'];
  $assets: {
    image?: PayloadImageProps;
    bp: keyof Breakpoints;
  }[];
}

function breakpointStyle(
  additionalProps: PayloadImageProps['additionalProps'],
  asset: { image?: PayloadImageProps; bp: keyof Breakpoints }
) {
  return css`
    ${({ theme: { mq } }) => {
      return mq[asset.bp]`
        ${
          additionalProps?.objectFit &&
          css`
            object-fit: ${additionalProps?.objectFit};
          `
        }

        ${
          additionalProps?.isRounded
            ? css`
                border-radius: 36px;
              `
            : css`
                border-radius: none;
              `
        }

        ${
          additionalProps?.aspectRatio &&
          css`
            aspect-ratio: ${additionalProps?.aspectRatio};
          `
        }
      `;
    }}
  `;
}

const buildMediaQueries = ({
  $additionalProps,
  $assets
}: BuildMediaQueriesProps) => {
  return css`
    ${$assets
      .filter((a) => a?.image?.url)
      .reduce<ReturnType<typeof css>[]>((coll, asset) => {
        coll.push(
          breakpointStyle(
            {
              ...$additionalProps,
              ...(asset?.image?.additionalProps ?? {})
            },
            asset
          )
        );
        return coll;
      }, [])}
  `;
};

const ResponsiveImage = styled.img<BuildMediaQueriesProps>`
  ${({ $assets, $additionalProps }) =>
    buildMediaQueries({ $additionalProps, $assets })}
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
    <Container className={className}>
      <Source breakpoints={breakpoints} image={ultrawide} bp="xxl" />
      <Source breakpoints={breakpoints} image={desktop} bp="lg" />
      <Source breakpoints={breakpoints} image={tablet} bp="md" />
      <Source breakpoints={breakpoints} image={mobile} bp="sm" />
      <Source breakpoints={breakpoints} image={thumbnail} bp="xxs" />
      <ResponsiveImage
        $additionalProps={additionalProps}
        $assets={[
          { image: thumbnail as PayloadImageProps, bp: 'xxs' },
          { image: mobile as PayloadImageProps, bp: 'sm' },
          { image: tablet as PayloadImageProps, bp: 'md' },
          { image: desktop as PayloadImageProps, bp: 'lg' },
          { image: ultrawide as PayloadImageProps, bp: 'xxl' }
        ]}
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
      />
    </Container>
  );
}

export default ResponsivePayloadImage;
