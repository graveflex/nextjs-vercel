import type { CardType, Image } from '@mono/types/payload-types';
import CtaButton from '@mono/ui/components/CtaButton';
import ResponsiveImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import React from 'react';

export type GeneralCardType = CardType & {
  className?: string;
};

const imageProps = (image: Image | number) => {
  if (typeof image === 'number') {
    return image;
  }

  return {
    ...image
  };
};

function GeneralCard({
  image,
  eyebrow,
  headline,
  subHead,
  ctas,
  className
}: GeneralCardType) {
  return (
    <div className={className}>
      {image && (
        <div>
          <ResponsiveImage
            image={imageProps(image)}
            width={330}
            height={230}
            sizes="330px"
          />
        </div>
      )}
      <div>
        {headline && (
          <>
            {eyebrow && <div>{eyebrow}</div>}
            <div>{headline}</div>
          </>
        )}
        {subHead && <div>{subHead}</div>}
        {ctas && (
          <div>
            {ctas?.map(({ cta }, index) => {
              const key = `${cta?.link?.label}-${index}`;
              if (!cta) {
                return null;
              }

              return <CtaButton key={key} cta={cta} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default GeneralCard;
