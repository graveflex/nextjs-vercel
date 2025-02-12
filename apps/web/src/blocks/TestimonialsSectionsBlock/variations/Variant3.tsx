import { Star } from 'lucide-react';
import Image from 'next/image';

const ids = ['id1', 'id2', 'id3', 'id4', 'id5'];

export default function Variant3() {
  return (
    <section className="py-16 md:py-24 bg-primary-foreground">
      {/* Main Content Container */}
      <div className="container mx-auto px-6">
        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Testimonial Image */}
          <div className="w-full h-full  relative">
            <Image
              src="https://ui.shadcn.com/placeholder.svg"
              alt="Testimonial image"
              fill={true}
              className="rounded-xl"
            />
          </div>
          {/* Testimonial Content Wrapper */}
          <div className="flex flex-col items-center md:items-start gap-8 py-16 md:py-24 ">
            {/* Star Rating */}
            <div className="flex gap-1">
              {ids.map((id) => (
                <Star
                  key={id}
                  className="w-6 h-6 fill-yellow-500 text-yellow-500"
                />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-lg lg:text-2xl font-medium text-center md:text-left text-foreground">
              &quot;We absolutely love how the Shadcn UI Kit blends
              functionality and aesthetics seamlessly. It fits perfectly into
              our design workflow and gives us the flexibility to create
              stunning, professional and high-quality designs
              effortlessly.&quot;
            </blockquote>

            {/* Author Information */}
            <div className="flex flex-col items-center md:items-start space-y-0.5">
              <span className="text-base font-semibold text-foreground">
                Lando Norris
              </span>
              <span className="text-base text-muted-foreground">
                CEO at Acme Inc.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
