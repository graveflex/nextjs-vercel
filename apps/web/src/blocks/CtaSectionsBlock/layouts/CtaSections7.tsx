import type { CtaSectionsBlockT as PayloadType } from '@mono/types/payload-types';
import React from 'react';

import { Button } from '@mono/web/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export type CtaSectionsBlockType = Omit<PayloadType, 'blockType'>;

function CtaSections7({
  title = 'Action-Driving headline that creates urgency'
}: CtaSectionsBlockType) {
  return (
    <section className="bg-background" aria-labelledby="cta-heading">
      <div className="container mx-auto">
        <div className="px-6 py-16 md:p-16 bg-primary sm:rounded-xl">
          <div className="w-full flex flex-col gap-8 items-center text-center max-w-xl mx-auto">
            {/* Section Header */}
            <div className="flex flex-col gap-5">
              {/* Category Tag */}
              <p className="text-primary-foreground/80 text-sm lg:text-base font-semibold">
                CTA section
              </p>
              {/* Main Title */}
              <h2
                id="cta-heading"
                className="text-3xl md:text-4xl font-bold text-primary-foreground"
              >
                {title}
              </h2>
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

export default CtaSections7;
