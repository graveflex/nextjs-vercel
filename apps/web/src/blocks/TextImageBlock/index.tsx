import type {
  Image,
  TextImageBlockT as PayloadType
} from '@mono/types/payload-types';
import CtaButton from '@mono/ui/components/CtaButton';
import Video from '@mono/ui/components/Video';
import Wrapper from '@mono/ui/components/Wrapper';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/ui/components/primitives/RichText';
import React, { useMemo } from 'react';

export type TextImageBlockType = Omit<PayloadType, 'blockType'>;

const defaultImageProps = (image: Image | number) => {
  if (typeof image === 'number') {
    return image;
  }

  return {
    ...image,
    image
  };
};

function TextImageBlock({
  content,
  image,
  items,
  blockConfig,
  video
}: TextImageBlockType) {
  const Items = useMemo(() => {
    if (!items || !items.length) {
      return null;
    }

    return items.map(({ cta, id }) => {
      if (!cta) {
        return null;
      }
      return (
        <span key={id}>{cta?.link?.label && <CtaButton cta={cta} />}</span>
      );
    });
  }, [items]);
  return (
    <Wrapper {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      <div>
        <div>
          {content && <RichText {...content} />}
          {items && <div>{Items}</div>}
        </div>
        {image && !video && (
          <ResponsivePayloadImage
            image={defaultImageProps(image)}
            sizes="600px"
          />
        )}
        {video && (
          <div>
            <Video video={video} />
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default TextImageBlock;
