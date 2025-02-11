import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/web/components/RichText/index';
import { AspectRatio } from '@mono/web/components/ui/AspectRatio';
import { Button } from '@mono/web/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import type { HeroSectionsBlockType } from '../index';

function HeroSections1({ content, image }: HeroSectionsBlockType) {
  return (
    <section
      className="bg-background py-16 lg:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="container px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mx-auto">
        {/* Left Column */}
        <div className="flex flex-col gap-6 lg:gap-8 flex-1">
          <div className="flex flex-col gap-4 lg:gap-5">
            {content && (
              <RichText data={content} className="text-primary-foreground" />
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button>Get started</Button>
            <Button variant="ghost">
              Explore
              <ArrowRight />
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 w-full right-column">
          <AspectRatio ratio={1 / 1} className="aspect-ratio">
            <ResponsivePayloadImage
              image={image}
              sizes="(max-width: 1023px) 100vw, 50vw"
              alt="Hero section visual"
              fill={true}
              imgClasses="rounded-xl object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}

export default HeroSections1;
