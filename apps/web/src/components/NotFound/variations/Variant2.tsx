import { AspectRatio } from '@mono/web/components/ui/AspectRatio';
import { Button } from '@mono/web/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Variant2() {
  return (
    <section
      className="bg-background py-16 lg:py-24 flex flex-col items-center relative overflow-hidden min-h-screen"
      aria-labelledby="error-title"
    >
      <div className="container px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex flex-col gap-6 lg:gap-8 flex-1">
          <div className="flex flex-col gap-4 lg:gap-5">
            <p
              className="text-muted-foreground text-sm lg:text-base font-semibold"
              aria-label="Error code"
            >
              404
            </p>
            <h1
              id="error-title"
              className="text-foreground text-3xl md:text-5xl font-bold"
            >
              Page not found
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg">
              Sorry, we couldn't find the page you're looking for. Please check
              the URL or navigate back home.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild={true}>
              <Link href="/">Go back home</Link>
            </Button>
            <Button variant="ghost" className="text-foreground" asChild={true}>
              <span>
                <a href="mailto:email@email.com">Contact support</a>
                <ArrowRight />
              </span>
            </Button>
          </div>
        </div>

        <div className="flex-1 w-full">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="https://ui.shadcn.com/placeholder.svg"
              alt="404 illustration"
              fill={true}
              className="rounded-xl object-cover w-full h-full"
              priority={true}
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
