import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import Form from '@mono/web/components/Form';
import RichText from '@mono/web/components/RichText/index';
import Video from '@mono/web/components/Video';
import { AspectRatio } from '@mono/web/components/ui/AspectRatio';
import React from 'react';
import type { HeroSectionsBlockType } from '../index';
import { genImgColumnOrder } from '../index';

function HeroSections4({
  content,
  imagePosition,
  form,
  media
}: HeroSectionsBlockType) {
  const imgColumnOrder = genImgColumnOrder(imagePosition);
  const payloadForm = typeof form !== 'number' ? form : undefined;
  const mediaRelation = media?.relationTo;

  return (
    <section
      className="bg-background py-16 lg:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="container px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mx-auto">
        {/* Left Column */}
        <div className="flex flex-col gap-6 lg:gap-8 flex-1">
          <div className="flex flex-col gap-4 lg:gap-5">
            {content && <RichText data={content} />}
          </div>

          {/* Email Form */}
          {payloadForm && <Form form={payloadForm} />}
        </div>

        {/* Right Column */}
        <div className={`flex-1 w-full ${imgColumnOrder}`}>
          <AspectRatio ratio={1 / 1}>
            {mediaRelation === 'videos' ? (
              <Video
                className="object-cover w-full h-full rounded-lg"
                video={media?.value}
              />
            ) : (
              <ResponsivePayloadImage
                image={media?.value}
                sizes="(max-width: 1023px) 100vw, 50vw"
                alt="Hero section visual"
                fill={true}
                imgClasses="rounded-xl object-cover w-full h-full"
              />
            )}
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}

export default HeroSections4;
