import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@mono/web/components/ui/Avatar';
import { Button } from '@mono/web/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import type { HeroSectionsBlockType } from '../index';

function HeroSections8({ title }: HeroSectionsBlockType) {
  return (
    <section
      className="bg-background py-16 lg:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="container px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10 mx-auto">
        <div className="flex flex-col gap-6 lg:gap-8 flex-1 max-w-2xl items-center text-center mx-auto">
          <div className="flex flex-col gap-4 lg:gap-5">
            <p
              className="text-muted-foreground text-sm lg:text-base font-semibold"
              aria-hidden="true"
            >
              Hero section
            </p>
            <h1
              id="hero-heading"
              className="text-foreground text-3xl md:text-5xl font-bold"
            >
              {title}
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg">
              Follow with one or two sentences that expand on your value
              proposition. Focus on key benefits and address why users should
              take action now. Keep it scannable, short and benefit-driven.
            </p>
          </div>
          <Button
            className="md:flex-1"
            aria-label="Get started with our service"
          >
            Get started
            <ArrowRight />
          </Button>
          <div className="flex flex-col gap-2 text-center">
            <div className="flex gap-3 items-center justify-center">
              <div
                className="flex space-x-[-1rem]"
                aria-label="User testimonials"
              >
                <Avatar className="border-background border-2 w-10 h-10">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="User testimonial"
                  />
                  <AvatarFallback>UN</AvatarFallback>
                </Avatar>
                <Avatar className="border-background border-2 w-10 h-10">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="User testimonial"
                  />
                  <AvatarFallback>UN</AvatarFallback>
                </Avatar>
                <Avatar className="border-background border-2 w-10 h-10">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="User testimonial"
                  />
                  <AvatarFallback>UN</AvatarFallback>
                </Avatar>
                <Avatar className="border-background border-2 w-10 h-10">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="User testimonial"
                  />
                  <AvatarFallback>UN</AvatarFallback>
                </Avatar>
              </div>
              <svg
                width="109"
                height="20"
                viewBox="0 0 109 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="5 star rating"
                role="img"
              >
                <path
                  d="M10.2503 1.66797L12.8253 6.88463L18.5837 7.7263L14.417 11.7846L15.4003 17.518L10.2503 14.8096L5.10033 17.518L6.08366 11.7846L1.91699 7.7263L7.67533 6.88463L10.2503 1.66797Z"
                  fill="#EAB308"
                />
                <path
                  d="M32.2503 1.66797L34.8253 6.88463L40.5837 7.7263L36.417 11.7846L37.4003 17.518L32.2503 14.8096L27.1003 17.518L28.0837 11.7846L23.917 7.7263L29.6753 6.88463L32.2503 1.66797Z"
                  fill="#EAB308"
                />
                <path
                  d="M54.2503 1.66797L56.8253 6.88463L62.5837 7.7263L58.417 11.7846L59.4003 17.518L54.2503 14.8096L49.1003 17.518L50.0837 11.7846L45.917 7.7263L51.6753 6.88463L54.2503 1.66797Z"
                  fill="#EAB308"
                />
                <path
                  d="M76.2503 1.66797L78.8253 6.88463L84.5837 7.7263L80.417 11.7846L81.4003 17.518L76.2503 14.8096L71.1003 17.518L72.0837 11.7846L67.917 7.7263L73.6753 6.88463L76.2503 1.66797Z"
                  fill="#EAB308"
                />
                <path
                  d="M98.2503 1.66797L100.825 6.88463L106.584 7.7263L102.417 11.7846L103.4 17.518L98.2503 14.8096L93.1003 17.518L94.0837 11.7846L89.917 7.7263L95.6753 6.88463L98.2503 1.66797Z"
                  fill="#EAB308"
                />
              </svg>
            </div>
            <div className="text-muted-foreground md:text-base text-sm">
              Loved by 3200+ developers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSections8;
