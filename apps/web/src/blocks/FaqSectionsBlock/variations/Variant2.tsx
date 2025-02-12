import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@mono/web/components/ui/Accordion';
import Link from 'next/link';

export default function Variant2() {
  return (
    <section
      className="bg-background py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col gap-5 flex-1">
            {/* Category Tag */}
            <p className="text-sm md:text-base text-muted-foreground font-semibold">
              FAQ section
            </p>
            {/* Main Title */}
            <h1
              id="faq-heading"
              className="text-3xl md:text-4xl font-bold text-foreground"
            >
              Frequently asked questions
            </h1>
            {/* Section Description */}
            <p className="text-muted-foreground">
              We've compiled the most important information to help you get the
              most out of your experience. Can't find what you're looking for?{' '}
              <Link href="#" className="text-primary underline">
                Contact us.
              </Link>
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 flex-1">
            {/* General FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-lg md:text-xl font-semibold text-foreground">
                General
              </h2>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible={true}
                aria-label="General FAQ items"
              >
                {/* FAQ Item 1 */}
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-foreground">
                    What is shadcn/ui?
                  </AccordionTrigger>
                  <AccordionContent className="text-left text-foreground">
                    Content goes here
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-foreground">
                    What is shadcn/ui kit for Figma?
                  </AccordionTrigger>
                  <AccordionContent className="text-left text-foreground">
                    Content goes here
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-foreground">
                    I'm not familiar with shadcn/ui. Can I still use this kit?
                  </AccordionTrigger>
                  <AccordionContent className="text-left text-foreground">
                    Content goes here
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-foreground">
                    Can I create multi-brand design systems with this UI kit?
                  </AccordionTrigger>
                  <AccordionContent className="text-left text-foreground">
                    Content goes here
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Billing FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-lg md:text-xl font-semibold text-foreground">
                Billing
              </h2>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible={true}
                aria-label="Billing FAQ items"
              >
                {/* FAQ Item 1 */}
                <AccordionItem value="billing-1">
                  <AccordionTrigger className="text-left text-foreground">
                    What is shadcn/ui?
                  </AccordionTrigger>
                  <AccordionContent className="text-left text-foreground">
                    Content goes here
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="billing-2">
                  <AccordionTrigger className="text-left text-foreground">
                    What is shadcn/ui kit for Figma?
                  </AccordionTrigger>
                  <AccordionContent className="text-left text-foreground">
                    Content goes here
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="billing-3">
                  <AccordionTrigger className="text-left text-foreground">
                    I'm not familiar with shadcn/ui. Can I still use this kit?
                  </AccordionTrigger>
                  <AccordionContent className="text-left text-foreground">
                    Content goes here
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="billing-4">
                  <AccordionTrigger className="text-left text-foreground">
                    Can I create multi-brand design systems with this UI kit?
                  </AccordionTrigger>
                  <AccordionContent className="text-left text-foreground">
                    Content goes here
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
