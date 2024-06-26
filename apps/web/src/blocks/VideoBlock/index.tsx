'use client';

import React from 'react';
import type { VideoBlockT as PayloadType } from '@mono/types/payload-types';
import Video from '@mono/ui/components/Video';
import Wrapper from '@mono/web/components/Wrapper';
import styled from '@refract-ui/sc';

export type VideoBlockType = Omit<PayloadType, 'blockType'>;

const Section = styled(Wrapper)`
  p {
    margin-top: 1rem;
    font-style: italic;
  }
`;

function VideoBlock({ video, caption }: VideoBlockType) {
  return (
    <Section>
      {video && <Video video={video} />}
      {caption && <p>{caption}</p>}
    </Section>
  );
}

export default VideoBlock;
