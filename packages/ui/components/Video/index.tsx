'use client';

import type { Video as TVideo } from '@mono/types/payload-types';
import type { MouseEvent } from 'react';
import { useEffect, useRef, useState } from 'react';

import PlayButton from './PlayButton';

export type VideoProps = {
  video: string | number | TVideo;
  fullBleed?: boolean | undefined;
};

function Video({ video, fullBleed }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('play', handlePlay);
      videoElement.addEventListener('pause', handlePause);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('play', handlePlay);
        videoElement.removeEventListener('pause', handlePause);
      }
    };
  }, []);

  if (typeof video === 'number') {
    return null;
  }

  const videoURL = typeof video === 'string' ? video : video?.url;
  const mimeType = typeof video === 'string' ? 'video/mp4' : video?.mimeType;
  const width = typeof video === 'string' ? '100%' : (video?.width ?? '100%');
  const height = typeof video === 'string' ? 'auto' : (video?.height ?? 'auto');
  const title = typeof video === 'string' ? '' : (video?.title ?? '');

  if (!videoURL) {
    return null;
  }

  const handlePlayButton = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (videoRef.current) {
      videoRef.current.play();
      setHasPlayed(true);
    }
  };

  const handleParentClick = () => {
    if (isPlaying && videoRef.current) {
      videoRef.current.pause();
    }
  };

  const videoProps = {
    controls: hasPlayed && !fullBleed,
    width,
    height,
    title,
    autoPlay: false,
    loop: true,
    preload: 'auto',
    muted: false,
    fullBleed: fullBleed ?? false
  };

  function renderPlayButton() {
    if (!isPlaying) {
      if (!fullBleed) {
        if (!hasPlayed) {
          return true;
        }
        return false;
      }
      return true;
    }
    return false;
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <div
      onClick={fullBleed ? handleParentClick : undefined}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          fullBleed && handleParentClick();
        }
      }}
    >
      <video ref={videoRef} {...videoProps}>
        <source src={videoURL} type={mimeType ?? 'video/mp4'} />
        <track kind="captions" srcLang="en" default={true} />
      </video>
      {renderPlayButton() && (
        <button
          type="button"
          onClick={handlePlayButton}
          aria-label="Play Video"
        >
          <PlayButton />
        </button>
      )}
    </div>
  );
}

export default Video;
