import theme from '@mono/theme/src/light';
import type { Image as PayloadImageProps } from '@mono/types/payload-types';
import styled, { css } from '@refract-ui/sc';
import type React from 'react';
import type { DefaultTheme } from 'styled-components';
import type { SrcSets } from '.';

type Breakpoints = {
  [K in DefaultTheme['settings']['breakpointNames'][number]]: number;
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
  $width?: number;
}>`
  width: ${({ $fill, $width }) => ($fill ? '100%' : `${$width}px` || undefined)};
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

    ${
      $additionalProps?.aspectRatio &&
      css`
      aspect-ratio: ${$additionalProps?.aspectRatio};
    `
    }
  `}
`;

function ResponsivePayloadImage({
  className,
  fill,
  srcSets,
  width,
  height,
  defaultSrcSet,
  imageProps,
  url,
  alt,
  additionalProps,
  fillSizes
}: ResponsivePayloadWrapperProps & {
  className?: string;
  fill: boolean;
  width?: number;
  height?: number;
  additionalProps: object;
  fillSizes: string;
  defaultSrcSet?: string;
  imageProps: PayloadImageProps['imageProps'];
  url: string;
  alt: string;
  srcSets: SrcSets;
}) {
  return (
    <Container className={className} $fill={fill}>
      <Source {...srcSets.ultrawide} />
      <Source {...srcSets.desktop} />
      <Source {...srcSets.tablet} />
      <Source {...srcSets.mobile} />
      <Source {...srcSets.thumbnail} />
      <ResponsiveImage
        loading={imageProps?.priority ? 'eager' : 'lazy'}
        $additionalProps={additionalProps}
        width={width}
        height={height}
        src={url}
        srcSet={defaultSrcSet}
        sizes={fill ? fillSizes : '100vw'}
        alt={alt ?? ''}
        $fill={fill}
        $width={width || undefined}
      />
    </Container>
  );
}

export default ResponsivePayloadImage;
