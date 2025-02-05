import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@mono/web/components/ui/Avatar';
import { Separator } from '@mono/web/components/ui/Separator';

export default function Variant5() {
  return (
    <section
      className="py-16 md:py-24 bg-background"
      aria-labelledby="testimonial-title"
    >
      {/* Main Content Container */}
      <div className="container mx-auto px-6">
        {/* Content Wrapper */}
        <div className="flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col gap-4 md:gap-5 max-w-xl text-center md:text-left">
            {/* Category Tag */}
            <p className="text-sm md:text-base font-semibold text-muted-foreground leading-[20px] md:leading-6">
              Testimonial section
            </p>
            {/* Main Title */}
            <h2
              id="testimonial-title"
              className="text-3xl md:text-4xl font-bold"
            >
              Social proof section title that focuses on trust and results
            </h2>
          </div>

          {/* Testimonials Layout */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* First Testimonial */}
            <div className="flex flex-col gap-8">
              {/* Testimonial Quote */}
              <p className="text-foreground text-lg font-medium leading-7 md:text-left text-center">
                &quot;Shadcn UI Kit for Figma has completely transformed our
                design process. It&apos;s incredibly intuitive and saves us so
                much time. The components are beautifully crafted and
                customizable.&quot;
              </p>

              {/* Author Information */}
              <div className="flex md:flex-row flex-col items-center gap-5">
                {/* Author Avatar */}
                <Avatar className="h-14 w-14">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Lando Norris"
                  />
                  <AvatarFallback>LN</AvatarFallback>
                </Avatar>

                {/* Author Details */}
                <div className="flex flex-col gap-1 md:text-left text-center">
                  <p className="text-foreground text-base font-semibold leading-6">
                    Lando Norris
                  </p>
                  <p className="text-muted-foreground text-base leading-6">
                    Founder at Acme Inc.
                  </p>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="hidden md:block w-[1px] self-stretch bg-border" />
            <Separator
              className="md:hidden bg-border"
              orientation="horizontal"
            />

            {/* Second Testimonial */}
            <div className="flex flex-col gap-8">
              {/* Testimonial Quote */}
              <p className="text-foreground text-lg font-medium leading-7 md:text-left text-center">
                &quot;Shadcn UI Kit for Figma has completely transformed our
                design process. It&apos;s incredibly intuitive and saves us so
                much time. The components are beautifully crafted and
                customizable.&quot;
              </p>

              {/* Author Information */}
              <div className="flex md:flex-row flex-col items-center gap-5">
                {/* Author Avatar */}
                <Avatar className="h-14 w-14">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Lando Norris"
                  />
                  <AvatarFallback>LN</AvatarFallback>
                </Avatar>

                {/* Author Details */}
                <div className="flex flex-col gap-1 md:text-left text-center">
                  <p className="text-foreground text-base font-semibold leading-6">
                    Lando Norris
                  </p>
                  <p className="text-muted-foreground text-base leading-6">
                    Founder at Acme Inc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
