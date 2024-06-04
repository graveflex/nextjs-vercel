'use client';

import React from 'react';
import type { Video } from '@mono/types/payload-types';

export type VideoProps = {
  video: number | Video;
};

function Video({ video }: VideoProps) {
  if (typeof video === 'number') {
    return null;
  }
  const { url, mimeType, width, height, title } = video ?? {};

  if (!url) {
    return null;
  }

  const videoProps = {
    controls: true,
    width: width ?? '100%',
    height: height ?? 'auto',
    title: title ?? '',
    autoPlay: true,
    loop: true,
    preload: 'auto',
    muted: true
  };

  return (
    <video {...videoProps}>
      <source src={url} type={mimeType ?? 'video/mp4'} />
      <track kind="captions" srcLang="en" default />
    </video>
  );
}

export default Video;
