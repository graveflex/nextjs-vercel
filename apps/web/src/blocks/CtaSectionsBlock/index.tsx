// @ts-ignore
// import Wrapper from '@mono/ui/components/Wrapper';
import type { CtaSectionsBlockT as PayloadType } from '@mono/types/payload-types';
import React from 'react';

import { Button } from '@mono/web/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export type CtaSectionsBlockType = Omit<PayloadType, 'blockType'>;

function CtaSections({
  title = 'Action-driving headline that creates urgency'
}: CtaSectionsBlockType) {
  return (
    <section
      className="bg-primary py-16 md:py-24"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center max-w-xl gap-8 md:gap-10 mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-4 md:gap-5">
            {/* Category Tag */}
            <p className="text-sm md:text-base font-semibold text-primary-foreground text-center opacity-80">
              CTA section
            </p>
            {/* Main Title */}
            <h2
              id="cta-heading"
              className="text-3xl md:text-4xl font-bold text-primary-foreground text-center"
            >
              {title}
            </h2>
            {/* Section Description */}
            <p className="text-base md:text-lg text-primary-foreground text-center opacity-80">
              Add one or two compelling sentences that reinforce your main value
              proposition and overcome final objections. End with a clear reason
              to act now. Align this copy with your CTA button text.
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
    </section>
  );
}

export default CtaSections;
