import { AspectRatio } from '@mono/web/components/ui/AspectRatio';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Variant5() {
  return (
    <section
      className="bg-background py-16 md:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-6 flex flex-col lg:flex-row md:items-center gap-8 lg:gap-12">
        {/* Left Column - Image */}
        <div className="w-full flex-1 order-2 lg:order-1">
          <AspectRatio ratio={1}>
            <Image
              src="https://ui.shadcn.com/placeholder.svg"
              alt="Contact section image"
              fill={true}
              className="rounded-xl object-cover"
            />
          </AspectRatio>
        </div>

        {/* Right Column - Content */}
        <div className="flex-1 flex flex-col gap-6 order-1 lg:order-2">
          {/* Section Header */}
          <div className="flex flex-col gap-4">
            {/* Category Tag */}
            <p className="text-sm md:text-base font-semibold text-muted-foreground">
              Contact us
            </p>
            {/* Main Title */}
            <h2
              id="contact-heading"
              className="text-3xl md:text-4xl font-bold text-foreground"
            >
              Get in touch
            </h2>
            {/* Section Description */}
            <p className="text-base text-muted-foreground">
              Write a welcoming sentence that encourage contact. Include your
              response time commitment and highlight your team's readiness to
              help.
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col gap-4">
            {/* Phone Link */}
            <Link href="#" className="flex gap-3 items-start hover:underline">
              <div className="pt-0.5">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="text-base font-medium text-card-foreground leading-6">
                (406) 555-0120
              </span>
            </Link>

            {/* Email Link */}
            <Link href="#" className="flex gap-3 items-start hover:underline">
              <div className="pt-0.5">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="text-base font-medium text-card-foreground leading-6">
                hello@example.com
              </span>
            </Link>

            {/* Location Link */}
            <Link href="#" className="flex gap-3 items-start hover:underline">
              <div className="pt-0.5">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <span className="text-base font-medium text-card-foreground leading-6">
                192 Griffin Street, Gilbert, AZ 32521
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
