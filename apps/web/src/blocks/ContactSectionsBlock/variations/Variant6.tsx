'use client';

import { Button } from '@mono/web/components/ui/Button';
import { Checkbox } from '@mono/web/components/ui/Checkbox';
import { Input } from '@mono/web/components/ui/Input';
import { Label } from '@mono/web/components/ui/Label';
import { Separator } from '@mono/web/components/ui/Separator';
import { Textarea } from '@mono/web/components/ui/Textarea';
import Link from 'next/link';
import { useState } from 'react';

export default function Variant6() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section
      className="bg-background flex flex-col lg:flex-row min-h-screen py-16 md:py-0 gap-8 md:gap-0"
      aria-labelledby="contact-heading"
    >
      {/* Left Column */}
      <div className="flex-1 items-center justify-center md:py-24 px-6 md:p-0">
        <div className="flex flex-col gap-10 max-w-md mx-auto">
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
            onSubmit={(e) => e.preventDefault()}
            aria-label="Contact form"
          >
            {/* Name Input */}
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Name"
                required={true}
                aria-required="true"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                required={true}
                aria-required="true"
              />
            </div>

            {/* Message Textarea */}
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Type your message"
                required={true}
                aria-required="true"
              />
            </div>

            {/* Privacy Policy Checkbox */}
            <div className="flex items-center gap-2">
              <Checkbox
                id="privacy"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
                required={true}
                aria-required="true"
              />
              <Label
                htmlFor="privacy"
                className="text-sm font-normal leading-none text-muted-foreground"
              >
                By selecting this you agree to our{' '}
                <Link href="#" className="underline text-primary">
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
      <div className="flex-1 md:bg-muted/40 items-center justify-center md:py-24 px-6 md:px-0">
        <div className="flex flex-col gap-8 max-w-md mx-auto">
          {/* Office Locations */}
          <div className="flex flex-col gap-6">
            {/* Section Title */}
            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-bold text-foreground">
                Visit our offices
              </h2>
              <p className="text-base text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum
                hendrerit ex vitae sodales.
              </p>
            </div>

            {/* Office Addresses */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* New Mexico Office */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-base font-semibold text-card-foreground">
                  New Mexico
                </h3>
                <p className="text-base text-muted-foreground whitespace-pre-line">
                  4140 Parker Rd. Allentown New Mexico, 31134
                </p>
              </div>

              {/* Hawaii Office */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-base font-semibold text-card-foreground">
                  Hawaii
                </h3>
                <p className="text-base text-muted-foreground whitespace-pre-line">
                  1901 Thornridge Cir. Shiloh Hawaii, 81063
                </p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Email Contacts */}
          <div className="flex flex-col gap-6">
            {/* Section Title */}
            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-bold text-foreground">Email us</h2>
              <p className="text-base text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum
                hendrerit ex vitae sodales.
              </p>
            </div>

            {/* Email Addresses */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Sales Email */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-base font-semibold text-card-foreground">
                  Sales
                </h3>
                <Link
                  href="mailto:sales@example.com"
                  className="text-base text-muted-foreground underline"
                >
                  sales@example.com
                </Link>
              </div>

              {/* Careers Email */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-base font-semibold text-card-foreground">
                  Careers
                </h3>
                <Link
                  href="mailto:careers@example.com"
                  className="text-base text-muted-foreground underline"
                >
                  careers@example.com
                </Link>
              </div>
            </div>
          </div>

          <Separator />

          {/* Social Links */}
          <div className="flex flex-col gap-6">
            <h2 className="text-lg font-bold text-foreground">Follow us</h2>
            <div className="flex flex-row gap-5">
              {/* Facebook Link */}
              <Link
                href="#"
                className="text-foreground hover:scale-110 transition-all duration-300"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                  />
                </svg>
              </Link>

              {/* Instagram Link */}
              <Link
                href="#"
                className="text-foreground hover:scale-110 transition-all duration-300"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                  />
                </svg>
              </Link>

              {/* GitHub Link */}
              <Link
                href="#"
                className="text-foreground hover:scale-110 transition-all duration-300"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                  />
                </svg>
              </Link>

              {/* Website Link */}
              <Link
                href="#"
                className="text-foreground hover:scale-110 transition-all duration-300"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                  >
                    <path d="M44 24a19.94 19.94 0 0 1-5.889 14.173A19.94 19.94 0 0 1 24 44C12.954 44 4 35.046 4 24a19.93 19.93 0 0 1 5.5-13.775A19.94 19.94 0 0 1 24 4a19.94 19.94 0 0 1 14.111 5.827A19.94 19.94 0 0 1 44 24" />
                    <path d="M44 24c-2.918 0-10.968-1.1-18.173 2.063C18 29.5 12.333 34.832 9.863 38.147" />
                    <path d="M16.5 5.454C19.63 8.343 26.46 15.698 29 23s3.48 16.28 4.06 18.835" />
                    <path d="M4.154 21.5c3.778.228 13.779.433 20.179-2.3s11.907-7.76 13.796-9.355M5.5 31.613a20.08 20.08 0 0 0 9 9.991" />
                    <path d="M4 24a19.93 19.93 0 0 1 5.5-13.775M24 4a19.94 19.94 0 0 0-14.5 6.225M32 5.664a20 20 0 0 1 6.111 4.163A19.94 19.94 0 0 1 44 24c0 2.462-.445 4.821-1.26 7M24 44a19.94 19.94 0 0 0 14.111-5.827" />
                  </g>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
