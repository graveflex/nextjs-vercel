import { Avatar, AvatarImage } from '@mono/web/components/ui/Avatar';
import { Card } from '@mono/web/components/ui/Card';

const testimonials = [
  {
    id: 1,
    quote:
      "Shadcn UI Kit for Figma has completely transformed our design process. It's incredibly intuitive and saves us so much time. The components are beautifully crafted and customizable.",
    author: 'Lando Norris',
    role: 'Founder at Acme Inc.',
    avatar: 'https://github.com/shadcn.png'
  },
  {
    id: 2,
    quote:
      "The attention to detail in this UI kit is outstanding. We've seen a significant improvement in our development speed since implementing it. Highly recommended for any serious project.",
    author: 'Sarah Chen',
    role: 'Lead Designer at TechCorp',
    avatar: 'https://github.com/shadcn.png'
  },
  {
    id: 3,
    quote:
      'What impressed me most was how seamlessly it integrated with our existing workflow. The documentation is clear, and the component quality is consistently high.',
    author: 'Marcus Rodriguez',
    role: 'CTO at StartupX',
    avatar: 'https://github.com/shadcn.png'
  }
];

export default function Variant4() {
  return (
    <section
      className="py-16 md:py-24 bg-muted/40"
      aria-labelledby="testimonial-title"
    >
      {/* Main Content Container */}
      <div className="container mx-auto px-6">
        {/* Content Wrapper */}
        <div className="flex flex-col items-center gap-12">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-4 md:gap-5 max-w-xl text-center">
            {/* Category Tag */}
            <p className="text-sm md:text-base font-semibold text-muted-foreground">
              Testimonial section
            </p>
            {/* Main Title */}
            <h2
              id="testimonial-title"
              className="text-3xl md:text-4xl font-bold"
            >
              Social proof section title that focuses on trust and results
            </h2>
            {/* Section Description */}
            <p className="text-base text-muted-foreground">
              Write a brief introduction that sets up your testimonials'
              credibility. Mention key outcomes, industry relevance, or the
              scale of your success.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="p-6 md:p-8 flex flex-col gap-6 shadow-sm justify-between"
              >
                {/* Testimonial Quote */}
                <p className="text-base text-foreground">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Author Information */}
                <div className="flex items-center gap-4">
                  {/* Author Avatar */}
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.author}
                    />
                  </Avatar>
                  {/* Author Details */}
                  <div className="flex flex-col">
                    <p className="text-base font-medium text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-base text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
