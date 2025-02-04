import { Rocket } from "lucide-react";
import Image from "next/image";
import { AspectRatio } from "@mono/web/components/ui/AspectRatio";

export default function Variant11() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-4 md:gap-5 max-w-xl mx-auto text-center">
          <p className="text-sm md:text-base font-semibold text-muted-foreground">
            Feature section
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Headline that shows solution's impact on user success
          </h2>
          <p className="text-base text-muted-foreground">
            Explain in one or two concise sentences how your solution transforms
            users' challenges into positive outcomes. Focus on the end benefits
            that matter most to your target audience. Keep it clear and
            compelling.
          </p>
        </div>
        <div className="flex-1 w-full">
          <AspectRatio ratio={16 / 9}>
            <Image
              src="https://ui.shadcn.com/placeholder.svg"
              alt="Hero image"
              fill={true}              className="rounded-xl object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-6">
          <div className="flex flex-col md:flex-row gap-4 sm:gap-5 items-center md:items-start text-center md:text-left">
            <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
              <Rocket className="w-5 h-5 text-primary" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-foreground">
                Benefit driven feature title
              </h3>
              <p className="text-muted-foreground">
                Shortly describe how this feature solves a specific user
                problem. Focus on benefits not on technical details.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 sm:gap-5 items-center md:items-start text-center md:text-left">
            <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
              <Rocket className="w-5 h-5 text-primary" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-foreground">
                Benefit driven feature title
              </h3>
              <p className="text-muted-foreground">
                Shortly describe how this feature solves a specific user
                problem. Focus on benefits not on technical details.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 sm:gap-5 items-center md:items-start text-center md:text-left">
            <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
              <Rocket className="w-5 h-5 text-primary" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-foreground">
                Benefit driven feature title
              </h3>
              <p className="text-muted-foreground">
                Shortly describe how this feature solves a specific user
                problem. Focus on benefits not on technical details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
