import type { GalleryGridBlockT as PayloadType } from '@mono/types/payload-types';
import CtaButton from '@mono/ui/components/CtaButton';
import Wrapper from '@mono/ui/components/Wrapper';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import React from 'react';

export type GalleryGridBlockType = Omit<PayloadType, 'blockType'>;

function GalleryGridBlock({
  galleryImages,
  cta,
  blockConfig
}: GalleryGridBlockType) {
  return (
    <Wrapper {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      <div>
        {galleryImages && (
          <div>
            {galleryImages.map((image) => (
              <ResponsivePayloadImage
                image={image.image}
                key={`image-${image.id}`}
                sizes="400px"
              />
            ))}
          </div>
        )}
        {cta?.link?.label && <CtaButton cta={cta} />}
      </div>
    </Wrapper>
  );
}

export default GalleryGridBlock;
