'use client';

import type { VideoBlockT as PayloadType } from '@mono/types/payload-types';
import Video from '@mono/ui/components/Video';
import Wrapper from '@mono/ui/components/Wrapper';
import React from 'react';
import styled, { css } from '@refract-ui/sc';

export type VideoBlockType = Omit<PayloadType, 'blockType'>;

const Section = styled.div`
  p {
    margin-top: 1rem;
    font-style: italic;
  }
`;

const Iframe = styled.iframe`
  display: block;
  width: 100%;
  height: 12rem;

  ${({ theme: { mq } }) => css`
    ${mq.md`
      height: 25rem;
    `}
    ${mq.lg`
      height: 45rem;
    `}
  `}
`;

function VideoBlock({
  video,
  videoURL,
  embedURL,
  caption,
  fullBleedMobile,
  blockConfig
}: VideoBlockType) {
  const videoToUse = videoURL || video;

  return (
    <Wrapper {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      <Section>
        {videoToUse && videoToUse !== undefined && (
          <Video video={videoToUse} fullBleed={fullBleedMobile || false} />
        )}
        {embedURL && embedURL !== undefined && (
          <Iframe src={embedURL} title={caption ?? 'title'} />
        )}
        {caption && <p>{caption}</p>}
      </Section>
    </Wrapper>
  );
}

export default VideoBlock;
