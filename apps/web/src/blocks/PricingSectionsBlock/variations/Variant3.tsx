import { Button } from '@mono/web/components/ui/Button';
import { Card, CardContent } from '@mono/web/components/ui/Card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@mono/web/components/ui/Tooltip';
import { Check, Info } from 'lucide-react';

const pricingData = {
  plans: [
    {
      name: 'Basic',
      description:
        'A short benefit statement that highlights the ideal user for this.',
      features: [
        {
          id: 1,
          name: 'Basic project management',
          tooltip: 'Create and manage up to 5 projects'
        },
        {
          id: 2,
          name: '5GB storage space',
          tooltip: 'Secure cloud storage for your files'
        },
        {
          id: 3,
          name: 'Email support',
          tooltip: 'Get help via email within 48 hours'
        },
        {
          id: 4,
          name: 'Basic reporting',
          tooltip: 'Basic reporting and analytics'
        }
      ],
      price: 99,
      variant: 'secondary'
    },
    {
      name: 'Pro',
      description:
        'A short benefit statement that highlights the ideal user for this.',
      features: [
        {
          id: 1,
          name: 'Custom workflows',
          tooltip: 'Create and automate custom workflows'
        },
        {
          id: 2,
          name: '100GB storage space',
          tooltip: 'Ample storage for enterprise needs'
        },
        {
          id: 3,
          name: 'Phone support',
          tooltip: 'Priority phone support during business hours'
        },
        {
          id: 4,
          name: 'Advanced reporting',
          tooltip: 'Advanced reporting and analytics'
        },
        {
          id: 5,
          name: 'Advanced analytics',
          tooltip: 'Detailed insights and custom reports'
        },
        {
          id: 6,
          name: 'API access',
          tooltip: 'Full API access for custom integrations'
        }
      ],
      price: 299,
      variant: 'default',
      highlighted: true
    }
  ]
};

export default function Variant3() {
  return (
    // Main pricing section container with muted background
    <section
      className="py-16 md:py-24 bg-muted/40"
      aria-labelledby="pricing-section-title-3"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-12">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-4 md:gap-5 max-w-xl text-center">
            {/* Category Tag */}
            <p className="text-base font-semibold text-muted-foreground">
              Pricing section
            </p>
            {/* Main Title */}
            <h2
              id="pricing-section-title-3"
              className="text-3xl md:text-4xl font-bold"
            >
              Benefit-focused headline that highlights choice
            </h2>
            {/* Section Description */}
            <p className="text-base text-muted-foreground">
              Add a concise value statement that addresses price sensitivity and
              showcases plan flexibility. Focus on transformation and results
              while keeping it under 2 lines. Align with your pricing table
              options.
            </p>
          </div>

          {/* Two-Column Side-by-Side Pricing Cards - Stacks on mobile */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 md:max-w-3xl w-full">
            {pricingData.plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`p-6 sm:p-12 md:rounded-br-none md:rounded-bl-xl md:rounded-tr-none md:rounded-tl-xl md:border-r-0 ${
                  plan.highlighted
                    ? 'md:rounded-xl md:shadow-xl md:border-r-1'
                    : ''
                }`}
              >
                {/* Card Content Container */}
                <CardContent className="p-0 flex flex-col gap-8">
                  {/* Plan Header Section */}
                  <div className="flex flex-col gap-6">
                    {/* Plan Title and Description Block */}
                    <div className="flex flex-col gap-3 relative">
                      <h3
                        className={`text-lg font-semibold ${
                          plan.highlighted ? 'text-primary' : ''
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price Display with Currency and Period */}
                    <div className="flex items-end gap-0.5">
                      <span className="text-4xl font-semibold">
                        ${plan.price}
                      </span>
                      <span className="text-base text-muted-foreground">
                        /month
                      </span>
                    </div>

                    {/* Call-to-Action Button */}
                    <Button variant={plan.variant} className="w-full">
                      Purchase plan
                    </Button>
                  </div>

                  {/* Features List Section */}
                  <div className="flex flex-col gap-4">
                    {/* Features Header with Plan Inheritance */}
                    <p className="text-sm font-medium">
                      {index === 0
                        ? "What's included:"
                        : `Everything in ${pricingData.plans[index - 1].name}, plus:`}
                    </p>
                    {/* Features Grid with Tooltips */}
                    <div className="flex flex-col gap-4">
                      {plan.features.map((feature) => (
                        <div
                          key={feature.id}
                          className="flex items-center gap-3"
                        >
                          <Check className="h-5 w-5 text-primary" />
                          <span className="text-sm text-muted-foreground flex-1">
                            {feature.name}
                          </span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="h-4 w-4 text-muted-foreground opacity-70 hover:opacity-100 cursor-pointer" />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                <p>{feature.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
