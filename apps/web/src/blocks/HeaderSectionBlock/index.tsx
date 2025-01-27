import type { HeaderSectionBlockT as PayloadType } from '@mono/types/payload-types';
import Wrapper from '@mono/ui/components/Wrapper';
import React from 'react';

export type HeaderSectionBlockType = Omit<PayloadType, 'blockType'>;

function HeaderSectionBlock({ title }: HeaderSectionBlockType) {
  return (
    <section
      className="bg-background py-16 lg:py-24"
      aria-labelledby="page-heading"
    >
      <div className="container px-6 mx-auto">
        <div className="flex flex-col gap-6 lg:gap-8 flex-1 max-w-xl items-center text-center mx-auto">
          <div className="flex flex-col gap-4 lg:gap-5">
            <p
              className="text-muted-foreground text-sm lg:text-base font-semibold"
              aria-hidden="true"
            >
              {title}
            </p>
            <h1
              id="page-heading"
              className="text-foreground text-3xl md:text-5xl font-bold"
            >
              Short engaging headline
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum
              hendrerit ex vitae sodales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderSectionBlock;
