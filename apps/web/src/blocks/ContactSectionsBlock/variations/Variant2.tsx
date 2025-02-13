import { Button } from '@mono/web/components/ui/Button';
import { Checkbox } from '@mono/web/components/ui/Checkbox';
import { Input } from '@mono/web/components/ui/Input';
import { Label } from '@mono/web/components/ui/Label';
import { Separator } from '@mono/web/components/ui/Separator';
import { Textarea } from '@mono/web/components/ui/Textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Variant2() {
  return (
    <section
      className="bg-background py-16 md:py-0"
      aria-labelledby="contact-heading"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-0">
        {/* Left Column */}
        <div className="flex flex-1 items-center justify-center flex-1 px-6 py-0 md:py-24">
          <div className="flex flex-col gap-8 max-w-md">
            {/* Section Header */}
            <div className="flex flex-col gap-4">
              {/* Category Tag */}
              <p className="text-sm md:text-base font-semibold text-muted-foreground">
                Contact us
              </p>
              {/* Main Title */}
              <h1
                id="contact-heading"
                className="text-3xl md:text-4xl font-bold text-foreground"
              >
                Get in touch
              </h1>
              {/* Section Description */}
              <p className="text-base text-muted-foreground">
                Write a welcoming sentence that encourage contact. Include your
                response time commitment and highlight your team's readiness to
                help.
              </p>
            </div>

            {/* Contact Form */}
            <form
              className="flex flex-col gap-5 md:gap-6"
              // onSubmit={(e) => e.preventDefault()}
              aria-label="Contact form"
            >
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <Label className="text-foreground" htmlFor="name">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Name"
                  required={true}
                  aria-required="true"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <Label className="text-foreground" htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  required={true}
                  aria-required="true"
                />
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-1.5">
                <Label className="text-foreground" htmlFor="message">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Type your message"
                  className="min-h-[106px]"
                  required={true}
                  aria-required="true"
                />
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-center gap-2">
                <Checkbox id="privacy" required={true} aria-required="true" />
                <Label
                  htmlFor="privacy"
                  className="font-normal leading-tight text-muted-foreground"
                >
                  By selecting this you agree to our{' '}
                  <Link href="#" className="underline text-foreground">
                    Privacy Policy
                  </Link>
                  .
                </Label>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full">
                Send message
              </Button>
            </form>
          </div>
        </div>

        {/* Mobile Separator */}
        <Separator className="block md:hidden" />

        {/* Right Column */}
        <div className="md:bg-primary-foreground flex flex-col items-center justify-center flex-1 px-6">
          <div className="flex flex-col gap-12">
            {/* Phone Card */}
            <Link
              href="#"
              className="flex md:flex-row flex-col gap-5 md:items-start items-center cursor-pointer"
            >
              <div className="flex justify-center items-center w-10 h-10 rounded-md bg-background border shadow-sm">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col gap-1 md:text-left text-center">
                <h3 className="text-base font-semibold leading-6 text-card-foreground">
                  Call us
                </h3>
                <span className="text-base underline text-muted-foreground">
                  +1 400 500 600
                </span>
              </div>
            </Link>

            {/* Email Card */}
            <Link
              href="#"
              className="flex md:flex-row flex-col gap-5 md:items-start items-center cursor-pointer"
            >
              <div className="flex justify-center items-center w-10 h-10 rounded-md bg-background border shadow-sm">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col gap-1 md:text-left text-center">
                <h3 className="text-base font-semibold leading-6 text-card-foreground">
                  Write an email
                </h3>
                <span className="text-base underline text-muted-foreground">
                  hello@example.com
                </span>
              </div>
            </Link>

            {/* Location Card */}
            <Link
              href="#"
              className="flex md:flex-row flex-col gap-5 md:items-start items-center cursor-pointer"
            >
              <div className="flex justify-center items-center w-10 h-10 rounded-md bg-background border shadow-sm">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col gap-1 md:text-left text-center">
                <h3 className="text-base font-semibold leading-6 text-card-foreground">
                  Visit our office
                </h3>
                <span className="text-base underline text-muted-foreground">
                  192 Griffin Street, Gilbert, AZ 32521
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
