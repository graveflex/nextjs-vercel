import { AspectRatio } from "@mono/web/components/ui/AspectRatio";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with shadcn/ui: A Complete Guide",
    description:
      "Learn how to set up and maximize your development workflow with shadcn/ui's powerful component library.",
    date: "Mar 15, 2024",
    category: "Tutorial",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
  {
    id: 2,
    title: "Building Dark Mode with Next.js and Tailwind CSS",
    description:
      "Implement a seamless dark mode toggle in your Next.js application using Tailwind CSS and shadcn/ui.",
    date: "Mar 12, 2024",
    category: "Development",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
  {
    id: 3,
    title: "Mastering React Server Components",
    description:
      "Deep dive into React Server Components and learn how they can improve your application's performance.",
    date: "Mar 8, 2024",
    category: "Advanced",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
  {
    id: 4,
    title: "The Future of Web Development in 2024",
    description:
      "Explore the latest trends and technologies shaping the future of web development this year.",
    date: "Mar 5, 2024",
    category: "Insights",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
];

export default function Variant1() {
  return (
    <section
      className="bg-background py-16 md:py-24"
      aria-labelledby="blog-section-heading"
    >
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-4 md:gap-5 max-w-xl text-center">
            {/* Category Tag */}
            <p className="text-base font-semibold text-muted-foreground md:text-sm">
              Blog section
            </p>
            
            {/* Main Title */}
            <h2
              id="blog-section-heading"
              className="text-3xl font-bold leading-tight md:text-4xl"
            >
              Short and clear engaging headline for a blog
            </h2>
            
            {/* Section Description */}
            <p className="text-base text-muted-foreground">
              Add a concise value statement that captures reader interest and
              previews content value. Focus on benefits while keeping it under
              two lines. Align with your blog categories.
            </p>
          </div>

          {/* Blog Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
            role="list"
          >
            {BLOG_POSTS.map((post) => (
              <Link
                href="#"
                key={post.id}
                className="group block"
              >
                {/* Blog Card */}
                <div className="flex flex-col gap-4 rounded-xl transition-all duration-200">
                  {/* Image Wrapper */}
                  <AspectRatio
                    ratio={4 / 3}
                    className="rounded-xl overflow-hidden"
                  >
                    <Image
                      src={post.image}
                      alt={`${post.title} thumbnail`}
                      fill={true}

                      className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
                    />
                  </AspectRatio>

                  {/* Post Content */}
                  <div className="flex flex-col gap-3">
                    {/* Post Meta */}
                    <div className="flex items-center gap-2 text-left">
                      <span className="text-sm text-muted-foreground">
                        {post.date}
                      </span>
                      <span className="text-sm text-muted-foreground">·</span>
                      <span className="text-sm text-muted-foreground">
                        {post.category}
                      </span>
                    </div>

                    {/* Post Title */}
                    <h3 className="text-base font-semibold leading-normal group-hover:underline">
                      {post.title}
                    </h3>

                    {/* Post Summary */}
                    <p className="text-sm text-muted-foreground leading-normal">
                      {post.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
