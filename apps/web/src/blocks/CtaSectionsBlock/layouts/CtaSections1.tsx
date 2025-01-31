// import Wrapper from '@mono/web/components/Wrapper';
import type { CtaSectionsBlockT as PayloadType } from '@mono/types/payload-types';
import React from 'react';

import RichText from '@mono/web/components/RichText/index';
import { Button } from '@mono/web/components/ui/Button';
import { ArrowRight } from 'lucide-react';
export type CtaSectionsBlockType = Omit<PayloadType, 'blockType'>;

import styles from '../CtaSectionsBlock.module.css';

function CtaSections1({
  title = 'Action-Driving headline that creates urgency',
  content
}: CtaSectionsBlockType) {
  return (
    <section className={styles.container} aria-labelledby="cta-heading">
      <div className={styles.content}>
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
              Add 1 or 2 compelling sentences that reinforce your main value
              proposition and overcome final objections. End with a clear reason
              to act now. Align this copy with your CTA button text.
            </p>

            {content && (
              <RichText data={content} className="text-primary-foreground" />
            )}
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

export default CtaSections1;
