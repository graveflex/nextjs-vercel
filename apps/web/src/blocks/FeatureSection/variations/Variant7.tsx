import { Button } from "@mono/web/components/ui/Button";
import { AspectRatio } from "@mono/web/components/ui/AspectRatio";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Variant7() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-6 flex flex-col gap-12">
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-4 md:gap-5">
            <p className="text-sm md:text-base font-semibold text-muted-foreground">
              Feature section
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Headline that shows solution's impact on user success
            </h2>
            <p className="text-base text-muted-foreground">
              Explain in one or two concise sentences how your solution
              transforms users' challenges into positive outcomes. Focus on the
              end benefits that matter most to your target audience. Keep it
              clear and compelling.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button>Get access</Button>
            <Button variant="ghost">
              Learn more
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="flex-1 w-full">
          <AspectRatio ratio={4 / 3}>
            <Image
              src="https://ui.shadcn.com/placeholder.svg"
              alt="Hero image"
              fill={true}              className="rounded-xl object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
