'use client';

import React from 'react';
import type { VideoBlockT as PayloadType } from '@mono/types/payload-types';
import Video from '@mono/ui/components/Video';
import Wrapper from '@mono/ui/components/Wrapper';
import styled from 'styled-components';

export type VideoBlockType = Omit<PayloadType, 'blockType'>;

const Section = styled.div`
  p {
    margin-top: 1rem;
    font-style: italic;
  }
`;

function VideoBlock({ video, caption, blockConfig }: VideoBlockType) {
  return (
    <Wrapper {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      <Section>
        {video && <Video video={video} />}
        {caption && <p>{caption}</p>}
      </Section>
    </Wrapper>
  );
}

export default VideoBlock;
