'use client';

import { Badge } from '@mono/web/components/ui/Badge';
import { Button } from '@mono/web/components/ui/Button';
import { Card, CardContent } from '@mono/web/components/ui/Card';
import { Tabs, TabsList, TabsTrigger } from '@mono/web/components/ui/Tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@mono/web/components/ui/Tooltip';
import { Check, Info } from 'lucide-react';
import * as React from 'react';

const pricingData = {
  plans: [
    {
      name: 'Basic',
      description: 'Perfect for individuals and small projects',
      features: [
        {
          id: 1,
          name: 'Up to 5 team members',
          tooltip: 'Collaborate with up to 5 team members on unlimited projects'
        },
        {
          id: 2,
          name: '10GB storage space',
          tooltip: 'Secure cloud storage for all your project files and assets'
        },
        {
          id: 3,
          name: 'Basic analytics',
          tooltip: 'Access to essential metrics and performance tracking'
        }
      ],
      pricing: {
        monthly: 29,
        annually: 290
      },
      variant: 'secondary' as const
    },
    {
      name: 'Standard',
      description: 'Ideal for growing teams and businesses',
      badge: 'Most popular',
      features: [
        {
          id: 1,
          name: 'Up to 20 team members',
          tooltip: 'Scale your team with expanded collaboration capabilities'
        },
        {
          id: 2,
          name: '50GB storage space',
          tooltip: 'More storage for larger projects and asset libraries'
        },
        {
          id: 3,
          name: 'Advanced analytics',
          tooltip: 'Detailed insights with custom reporting and dashboards'
        },
        {
          id: 4,
          name: 'Priority support',
          tooltip: 'Get help within 24 hours from our dedicated support team'
        }
      ],
      pricing: {
        monthly: 49,
        annually: 490
      },
      variant: 'default' as const,
      highlighted: true
    },
    {
      name: 'Premium',
      description: 'For large enterprises and advanced needs',
      features: [
        {
          id: 1,
          name: 'Unlimited team members',
          tooltip: 'No limits on team size or collaboration'
        },
        {
          id: 2,
          name: '250GB storage space',
          tooltip: 'Enterprise-grade storage with advanced security'
        },
        {
          id: 3,
          name: 'Custom analytics',
          tooltip: 'Tailored analytics solutions with API access'
        },
        {
          id: 4,
          name: '24/7 premium support',
          tooltip: 'Round-the-clock dedicated support with 4-hour response time'
        },
        {
          id: 5,
          name: 'White-labeling',
          tooltip: 'Custom branding and white-label solutions'
        }
      ],
      pricing: {
        monthly: 99,
        annually: 990
      },
      variant: 'secondary' as const
    }
  ]
};

export default function Variant1() {
  const [billingPeriod, setBillingPeriod] = React.useState('monthly');

  return (
    // Main pricing section container
    <section
      className="py-16 md:py-24 bg-background"
      aria-labelledby="pricing-section-title"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-4 md:gap-5 max-w-xl text-center">
            {/* Category Tag */}
            <p className="text-base font-semibold text-muted-foreground">
              Pricing section
            </p>
            {/* Main Title */}
            <h2
              id="pricing-section-title"
              className="text-3xl md:text-4xl font-bold text-foreground"
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

          {/* Billing Period Toggle */}
          <Tabs
            value={billingPeriod}
            onValueChange={setBillingPeriod}
            className="w-fit"
          >
            <TabsList className="bg-primary-foreground h-10 py-1 rounded-[40px]">
              <TabsTrigger
                value="monthly"
                className="rounded-full px-3 py-1.5 data-[state=active]:bg-background"
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger
                value="annually"
                className="rounded-full px-3 py-1.5 data-[state=active]:bg-background"
              >
                Annually
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 w-full lg:max-w-5xl">
            {pricingData.plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`p-6 lg:p-8 rounded-xl ${plan.highlighted ? 'border-2 border-primary' : ''}`}
              >
                <CardContent className="p-0 flex flex-col gap-8">
                  {/* Plan Header */}
                  <div className="flex flex-col gap-6">
                    {/* Plan Title and Description */}
                    <div className="flex flex-col gap-3 relative">
                      {/* Popular Plan Badge */}
                      {plan.badge && (
                        <Badge className="w-fit absolute top-1 right-0">
                          {plan.badge}
                        </Badge>
                      )}
                      <h3
                        className={`text-lg font-semibold ${plan.highlighted ? 'text-primary' : ''}`}
                      >
                        {plan.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {plan.description}
                      </p>
                    </div>

                    {/* Pricing Display */}
                    <div className="flex items-end gap-0.5">
                      <span className="text-4xl font-semibold">
                        $
                        {
                          plan.pricing[
                            billingPeriod as keyof typeof plan.pricing
                          ]
                        }
                      </span>
                      <span className="text-base text-muted-foreground">
                        /{billingPeriod === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>

                    {/* CTA Button */}
                    <Button variant={plan.variant} className="w-full">
                      Purchase plan
                    </Button>
                  </div>

                  {/* Features List */}
                  <div className="flex flex-col gap-4">
                    <p className="text-sm font-medium">
                      {index === 0
                        ? "What's included:"
                        : `Everything in ${pricingData.plans[index - 1].name}, plus:`}
                    </p>
                    <div className="flex flex-col gap-4">
                      {plan.features.map((feature) => (
                        <div
                          key={feature.id}
                          className="flex items-center gap-3"
                        >
                          {/* Feature Checkmark */}
                          <Check className="h-5 w-5 text-primary" />
                          {/* Feature Name */}
                          <span className="text-sm text-muted-foreground flex-1">
                            {feature.name}
                          </span>
                          {/* Feature Info Tooltip */}
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger
                                aria-label={`More information about ${feature.name}`}
                              >
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
