import { Avatar, AvatarImage } from '@mono/web/components/ui/Avatar';
import { Separator } from '@mono/web/components/ui/Separator';

export default function Variant2() {
  return (
    <section
      className="bg-background py-16 md:py-24"
      aria-labelledby="testimonial-title"
    >
      <div className="container px-6 m-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* First Testimonial */}
          <div className="flex-1 flex flex-col items-center gap-8">
            <blockquote className="text-center text-lg leading-7 text-foreground">
              &quot;Shadcn UI Kit for Figma has completely transformed our
              design process. It&apos;s incredibly intuitive and saves us so
              much time. The components are beautifully crafted and
              customizable.&quot;
            </blockquote>
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-12 w-12 rounded-lg">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Lando Norris"
                />
              </Avatar>
              <div className="flex flex-col items-center gap-1">
                <p className="text-base font-semibold leading-6 text-foreground">
                  Lando Norris
                </p>
                <p className="text-sm leading-5 text-muted-foreground">
                  Founder at Acme Inc.
                </p>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="hidden md:block w-[1px] self-stretch bg-border" />
          <Separator className="md:hidden bg-border" orientation="horizontal" />

          {/* Second Testimonial */}
          <div className="flex-1 flex flex-col items-center gap-8">
            <blockquote className="text-center text-lg leading-7 text-foreground">
              &quot;Shadcn UI Kit for Figma has completely transformed our
              design process. It&apos;s incredibly intuitive and saves us so
              much time. The components are beautifully crafted and
              customizable.&quot;
            </blockquote>
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-12 w-12 rounded-lg">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Lando Norris"
                />
              </Avatar>
              <div className="flex flex-col items-center gap-1">
                <p className="text-base font-semibold leading-6 text-foreground">
                  Lando Norris
                </p>
                <p className="text-sm leading-5 text-muted-foreground">
                  Founder at Acme Inc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
