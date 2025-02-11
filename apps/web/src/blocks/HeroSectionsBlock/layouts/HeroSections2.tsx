import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/web/components/RichText/index';
import { AspectRatio } from '@mono/web/components/ui/AspectRatio';
import { Button } from '@mono/web/components/ui/Button';
import { ArrowRight, Check } from 'lucide-react';
import React from 'react';
import type { HeroSectionsBlockType } from '../index';

function HeroSections2({ content, image }: HeroSectionsBlockType) {
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

          {/* Feature List */}
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <span className="text-card-foreground text-base font-medium leading-6">
                Benefit driven feature title
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <span className="text-card-foreground text-base font-medium leading-6">
                Benefit driven feature title
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <span className="text-card-foreground text-base font-medium leading-6">
                Benefit driven feature title
              </span>
            </div>
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
        <div className="flex-1 w-full">
          <AspectRatio ratio={1 / 1}>
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

export default HeroSections2;
