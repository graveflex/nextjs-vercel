'use client';

import React, { useMemo } from 'react';
import Image, { type ImageProps } from 'next/image';
import styled from 'styled-components';

import type { Image as ImageT } from '@web/payload/payload-types';

export type ResponsivePayloadImageType = {
  image: ImageT;
  imageProps?: ImageProps;
};

const ImageWrapper = styled.div`
  container-type: inline-size;
  position: relative;

  img {
    display: none;
    &.svg {
      display: block;
    }
    &.thumbnail {
      @container (max-width: 300px) {
        display: block;
      }
    }
    &.mobile {
      @container (min-width: 301px) and (max-width: 768px) {
        display: block;
      }
    }
    &.tablet {
      @container (min-width: 769px) and (max-width: 1024px) {
        display: block;
      }
    }
    &.desktop {
      @container (min-width: 1025px) and (max-width: 2048px) {
        display: block;
      }
    }
    &.ultrawide {
      @container (min-width: 2049px) {
        display: block;
      }
    }
  }
`;

const checkSizes = (sizes: Record<string, object>) =>
  Object.values(sizes).reduce((acc, size) => {
    if (Object.keys(size).length > 0) {
      return true;
    }
    return acc;
  }, false);

function ResponsivePayloadImage({
  image,
  imageProps,
  ...props
}: ResponsivePayloadImageType) {
  const { sizes, alt, url: imageUrl } = image;
  const ResponsiveImage = useMemo(() => {
    // NOTE: svgs will not return `sizes`
    if (!sizes || !checkSizes(sizes)) {
      if (imageUrl) {
        return (
          <Image
            fill
            {...imageProps}
            src={imageUrl}
            alt={alt || 'image'}
            className="svg"
          />
        );
      }
      // if you don't have `sizes` or a `url`, can't render
      // eslint-disable-next-line no-console
      console.log('@--> missing sizes or url for image', image);
      return null;
    }
    const Images = Object.entries(sizes)
      .map(([key, { url, filename }]) => {
        if (!url || !filename) {
          return null;
        }
        return (
          <Image
            fill
            {...imageProps}
            src={url}
            key={url}
            alt={alt || filename}
            className={key}
          />
        );
      })
      .filter((x) => !!x);

    return Images;
  }, [sizes, imageUrl, image, imageProps, alt]);
  return <ImageWrapper {...props}>{ResponsiveImage}</ImageWrapper>;
}

export default ResponsivePayloadImage;
