import type { VideoBlockT as PayloadType } from '@mono/types/payload-types';
import Video from '@mono/ui/components/Video';
import Wrapper from '@mono/ui/components/Wrapper';
import React from 'react';

export type VideoBlockType = Omit<PayloadType, 'blockType'>;

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
      <div>
        {videoToUse && videoToUse !== undefined && (
          <Video video={videoToUse} fullBleed={fullBleedMobile || false} />
        )}
        {embedURL && embedURL !== undefined && (
          <iframe src={embedURL} title={caption ?? 'title'} />
        )}
        {caption && <p>{caption}</p>}
      </div>
    </Wrapper>
  );
}

export default VideoBlock;
