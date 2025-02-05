import { Button } from '@mono/web/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import type { HeroSectionsBlockType } from '../index';

function HeroSections6({ title }: HeroSectionsBlockType) {
  return (
    <section
      className="bg-placeholder bg-cover bg-center py-16 lg:py-24 overflow-hidden relative"
      aria-labelledby="hero-heading"
    >
      <div className="absolute bg-black/80 inset-0 z-0" />
      <div className="container px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-1 mx-auto">
        <div className="flex flex-col gap-6 lg:gap-8 flex-1 max-w-2xl items-center text-center m-auto">
          <div className="flex flex-col gap-4 lg:gap-5">
            <p
              className="text-white/80 text-sm lg:text-base font-semibold"
              aria-hidden="true"
            >
              Hero section
            </p>
            <h1
              id="hero-heading"
              className="text-white text-3xl md:text-5xl font-bold"
            >
              {title}
            </h1>
            <p className="text-white/80 text-base lg:text-lg">
              Follow with one or two sentences that expand on your value
              proposition. Focus on key benefits and address why users should
              take action now. Keep it scannable, short and benefit-driven.
            </p>
          </div>
          <Button>
            Get started
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSections6;
