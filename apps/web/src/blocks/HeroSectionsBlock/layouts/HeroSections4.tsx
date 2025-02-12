import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/web/components/RichText/index';
import { AspectRatio } from '@mono/web/components/ui/AspectRatio';
import { Button } from '@mono/web/components/ui/Button';
import { Input } from '@mono/web/components/ui/Input';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import type { HeroSectionsBlockType } from '../index';
import { genImgColumnOrder } from '../index';

function HeroSections4({
  content,
  image,
  imagePosition
}: HeroSectionsBlockType) {
  const imgColumnOrder = genImgColumnOrder(imagePosition);
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

          {/* Email Form */}
          <form
            className="flex flex-col lg:flex-row gap-3 w-full md:max-w-sm"
            aria-label="Email signup form"
          >
            <Input
              placeholder="Your email"
              type="email"
              required={true}
              aria-required="true"
            />
            <Button>
              Sign up
              <ArrowRight />
            </Button>
          </form>
        </div>

        {/* Right Column */}
        <div className={`flex-1 w-full ${imgColumnOrder}`}>
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

export default HeroSections4;
