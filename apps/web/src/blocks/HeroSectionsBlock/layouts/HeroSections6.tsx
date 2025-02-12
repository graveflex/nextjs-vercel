import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/web/components/RichText/index';
import { Button } from '@mono/web/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import type { HeroSectionsBlockType } from '../index';

function HeroSections6({ content, image }: HeroSectionsBlockType) {
  return (
    <section
      className="bg-background bg-cover bg-center py-16 lg:py-24 overflow-hidden relative"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0">
        <ResponsivePayloadImage
          image={image}
          sizes="100vw"
          alt="Hero section visual"
          fill={true}
          imgClasses="object-cover w-full h-full absolute"
        />
        <div className=" w-full h-full dark:bg-black/80 bg-white/80 absolute" />
      </div>
      <div className="container px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-1 mx-auto">
        <div className="flex flex-col gap-6 lg:gap-8 flex-1 max-w-2xl items-center text-center m-auto">
          <div className="flex flex-col gap-4 lg:gap-5">
            {content && <RichText data={content} />}
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
