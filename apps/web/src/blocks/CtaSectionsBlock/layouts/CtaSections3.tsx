import type { CtaSectionsBlockT as PayloadType } from '@mono/types/payload-types';
import React from 'react';

import { AspectRatio } from '@mono/web/components/ui/AspectRatio';
import { Button } from '@mono/web/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export type CtaSectionsBlockType = Omit<PayloadType, 'blockType'>;

function CtaSections3({
  title = 'Action-Driving headline that creates urgency'
}: CtaSectionsBlockType) {
  return (
    <section className="bg-background" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:p-16 lg:rounded-xl bg-primary">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:max-w-full max-w-xl mx-auto">
          {/* Left Column - Image */}
          <div className="flex-1 w-full">
            <AspectRatio ratio={1}>
              <Image
                src="https://ui.shadcn.com/placeholder.svg"
                alt="CTA section image"
                fill={true}
                className="rounded-xl object-cover"
              />
            </AspectRatio>
          </div>
          {/* Right Column - Content */}
          <div className="flex flex-col items-center lg:items-start gap-8 md:gap-10 flex-1">
            {/* Section Header */}
            <div className="flex flex-col gap-4 md:gap-5 text-center lg:text-left">
              {/* Category Tag */}
              <p className="text-sm md:text-base font-semibold text-primary-foreground opacity-80">
                CTA section
              </p>
              {/* Main Title */}
              <h2
                id="cta-heading"
                className="text-3xl md:text-4xl font-bold text-primary-foreground"
              >
                {title}
              </h2>
              {/* Section Description */}
              <p className="text-base md:text-lg text-primary-foreground opacity-80">
                Add one or two compelling sentences that reinforce your main
                value proposition and overcome final objections. End with a
                clear reason to act now. Align this copy with your CTA button
                text.
              </p>
            </div>
            {/* CTA Button */}
            <Button
              className="bg-primary-foreground hover:bg-primary-foreground/80 text-primary"
              aria-label="Get started with our service"
            >
              Get started
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSections3;
