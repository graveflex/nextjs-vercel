'use client';

import React from 'react';
import Image, { type ImageProps } from 'next/image';
import styled from 'styled-components';

import type { Image as ImageT } from '@web/payload/payload-types';

export type ResponsivePayloadImageType = {
  image: ImageT;
  imageProps?: Partial<ImageProps>;
};

const ImageWrapper = styled.div`
  container-type: inline-size;
  position: relative;
`;

function ResponsivePayloadImage({
  image,
  imageProps,
  ...props
}: ResponsivePayloadImageType) {
  const { alt, url: imageUrl } = image;

  if (!imageUrl) {
    return null;
  }

  return (
    <ImageWrapper {...props}>
      <Image fill {...imageProps} src={imageUrl} alt={alt || 'image'} />
    </ImageWrapper>
  );
}

export default ResponsivePayloadImage;
