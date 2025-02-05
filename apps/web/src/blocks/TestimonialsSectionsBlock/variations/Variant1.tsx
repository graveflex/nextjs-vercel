'use client';

import { Avatar, AvatarImage } from '@mono/web/components/ui/Avatar';

export default function Variant1() {
  return (
    <section
      className="flex flex-col items-center bg-muted py-16 md:py-24 px-6"
      aria-labelledby="testimonial-title"
    >
      {/* Content Container */}
      <div className="flex flex-col items-center gap-8 max-w-2xl">
        {/* Testimonial Quote */}
        <blockquote
          id="testimonial-title"
          className="text-center text-foreground font-medium text-lg md:text-xl leading-7"
        >
          &quot;Shadcn UI Kit for Figma has completely transformed our design
          process. It&apos;s incredibly intuitive and saves us so much time. The
          components are beautifully crafted and customizable.&quot;
        </blockquote>

        {/* Author Information */}
        <div className="flex flex-col items-center gap-4">
          {/* Author Avatar */}
          <Avatar className="h-12 w-12 md:h-14 md:w-14 rounded-xl">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Lando Norris"
            />
          </Avatar>

          {/* Author Details */}
          <div className="flex items-center gap-2">
            <span className="text-foreground font-medium text-base">
              Lando Norris
            </span>
            <span className="text-muted-foreground opacity-50">•</span>
            <span className="text-muted-foreground text-base">
              CEO at Acme Inc.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
