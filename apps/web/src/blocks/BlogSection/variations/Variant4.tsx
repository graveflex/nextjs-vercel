import { AspectRatio } from '@mono/web/components/ui/AspectRatio';
import { Button } from '@mono/web/components/ui/Button';
import { Card, CardContent } from '@mono/web/components/ui/Card';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with shadcn/ui: A Complete Guide',
    date: 'Mar 15, 2024',
    category: 'Tutorial',
    image: 'https://ui.shadcn.com/placeholder.svg'
  },
  {
    id: 2,
    title: 'Building Dark Mode with Next.js and Tailwind CSS',
    date: 'Mar 12, 2024',
    category: 'Development',
    image: 'https://ui.shadcn.com/placeholder.svg'
  },
  {
    id: 3,
    title: 'Mastering React Server Components',
    date: 'Mar 8, 2024',
    category: 'Advanced',
    image: 'https://ui.shadcn.com/placeholder.svg'
  },
  {
    id: 4,
    title: 'The Future of Web Development in 2024',
    date: 'Mar 5, 2024',
    category: 'Insights',
    image: 'https://ui.shadcn.com/placeholder.svg'
  }
];

export default function Variant4() {
  return (
    <section
      className="bg-muted/40 py-16 md:py-24"
      aria-labelledby="blog-section-4-heading"
    >
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          <div className="flex flex-col gap-6 lg:gap-8 max-w-lg flex-1">
            <div className="flex flex-col gap-5">
              <p className="text-sm md:text-base font-semibold text-muted-foreground">
                Blog section
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Short and clear engaging headline for a blog
              </h2>
              <p className="text-base text-muted-foreground">
                Add a concise value statement that captures reader interest and
                previews content value. Focus on benefits while keeping it under
                two lines. Align with your blog categories.
              </p>
            </div>
            <Button variant="outline" className="w-fit">
              View all articles
            </Button>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 flex-1"
            role="list"
          >
            {BLOG_POSTS.map((post) => (
              <Card
                key={post.id}
                className="group cursor-pointer overflow-hidden"
                role="listitem"
              >
                <AspectRatio ratio={4 / 3} className="overflow-hidden">
                  <Image
                    src={post.image}
                    alt={`${post.title} thumbnail`}
                    fill={true}
                    className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
                  />
                </AspectRatio>
                <CardContent className="p-6 flex flex-col gap-4 justify-between">
                  <h3 className="text-base font-semibold">{post.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap leading-none">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.category}</span>
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
