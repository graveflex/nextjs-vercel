import { Button } from '@mono/web/components/ui/Button';
import { Checkbox } from '@mono/web/components/ui/Checkbox';
import { Input } from '@mono/web/components/ui/Input';
import { Label } from '@mono/web/components/ui/Label';
import { Textarea } from '@mono/web/components/ui/Textarea';
import Link from 'next/link';

export default function Variant1() {
  return (
    <section
      className="bg-background py-16 lg:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-xl px-6 mx-auto">
        <div className="flex flex-col items-center gap-10">
          {/* Section Header */}
          <div className="flex flex-col gap-4 md:gap-5 md:text-center">
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
            <p className="text-base text-muted-foreground leading-6">
              Write one or two welcoming sentences that encourage contact.
              Include your response time commitment and highlight your team's
              readiness to help.
            </p>
          </div>

          {/* Contact Form */}
          <form
            className="flex flex-col w-full gap-5"
            // onSubmit={(e) => e.preventDefault()}
            aria-label="Contact form"
          >
            {/* Name Input */}
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-foreground">
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
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-foreground">
                Email
              </Label>
              <Input
                id="email"
                placeholder="Email"
                type="email"
                required={true}
                aria-required="true"
              />
            </div>

            {/* Message Textarea */}
            <div className="grid gap-2">
              <Label htmlFor="message" className="text-foreground">
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
            <div className="flex items-start gap-2">
              <Checkbox id="privacy" required={true} aria-required="true" />
              <Label
                htmlFor="privacy"
                className="font-normal leading-none text-muted-foreground"
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
    </section>
  );
}
