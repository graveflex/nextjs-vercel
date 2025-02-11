import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/web/components/RichText/index';
import { AspectRatio } from '@mono/web/components/ui/AspectRatio';
import { Button } from '@mono/web/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import type { HeroSectionsBlockType } from '../index';

function HeroSections7({ content, image }: HeroSectionsBlockType) {
  return (
    <section
      className="bg-background py-16 lg:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="container px-6 flex flex-col items-center gap-12 lg:gap-16 mx-auto">
        <div className="flex gap-12 lg:gap-16">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
            {content && <RichText data={content} />}
            <div className="flex-1 w-full flex flex-col gap-8">
              {content && <RichText data={content} />}

              <div className="flex flex-col lg:flex-row gap-3">
                <Button>Get started</Button>
                <Button variant="ghost">
                  Explore
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <AspectRatio ratio={16 / 9}>
          <ResponsivePayloadImage
            image={image}
            sizes="(max-width: 1023px) 100vw, 50vw"
            alt="Hero section visual"
            fill={true}
            imgClasses="rounded-xl object-cover w-full h-full"
          />
        </AspectRatio>
      </div>
    </section>
  );
}

export default HeroSections7;
