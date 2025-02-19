import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import Form from '@mono/web/components/Form';
import RichText from '@mono/web/components/RichText/index';
import { AspectRatio } from '@mono/web/components/ui/AspectRatio';
import { Button } from '@mono/web/components/ui/Button';
import { Input } from '@mono/web/components/ui/Input';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import type { HeroSectionsBlockType } from '../index';
import { genImgColumnOrder } from '../index';

function HeroSections5({
  content,
  imagePosition,
  form
}: HeroSectionsBlockType) {
  const imgColumnOrder = genImgColumnOrder(imagePosition);
  const payloadForm = typeof form !== 'number' ? form : undefined;

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
          <AspectRatio ratio={4 / 3}>
            <video
              className="object-cover w-full h-full rounded-lg"
              controls={true}
              preload="none"
              aria-label="Product demonstration video"
            >
              <source src="/path/to/video.mp4" type="video/mp4" />
              <track
                src="/path/to/captions.vtt"
                kind="captions"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}

export default HeroSections5;
