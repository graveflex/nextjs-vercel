import { AspectRatio } from '@mono/web/components/ui/AspectRatio';
import { Avatar, AvatarImage } from '@mono/web/components/ui/Avatar';
import Image from 'next/image';

interface Author {
  name: string;
  role: string;
  avatar: string;
}

interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
  author: Author;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'How can shadcn/ui kit for Figma improve your workflow?',
    date: 'Mar 15, 2024',
    category: 'Articles',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus volutpat aliquet mauris.',
    image: 'https://ui.shadcn.com/placeholder.svg',
    author: {
      name: 'Lando Norris',
      role: 'Product Designer',
      avatar: 'https://github.com/shadcn.png'
    }
  },
  {
    id: 2,
    title: 'Building Dark Mode with Next.js and Tailwind CSS',
    date: 'Mar 12, 2024',
    category: 'Development',
    description:
      'Learn how to implement a seamless dark mode toggle in your Next.js application using Tailwind CSS and system preferences.',
    image: 'https://ui.shadcn.com/placeholder.svg',
    author: {
      name: 'Charles Leclerc',
      role: 'Frontend Developer',
      avatar: 'https://github.com/shadcn.png'
    }
  },
  {
    id: 3,
    title: 'Mastering React Server Components',
    date: 'Mar 8, 2024',
    category: 'Advanced',
    description:
      "Deep dive into React Server Components and learn how they can improve your application's performance and user experience.",
    image: 'https://ui.shadcn.com/placeholder.svg',
    author: {
      name: 'Lewis Hamilton',
      role: 'Tech Lead',
      avatar: 'https://github.com/shadcn.png'
    }
  },
  {
    id: 4,
    title: 'The Future of Web Development in 2024',
    date: 'Mar 5, 2024',
    category: 'Insights',
    description:
      'Explore the latest trends and technologies shaping the future of web development this year and beyond.',
    image: 'https://ui.shadcn.com/placeholder.svg',
    author: {
      name: 'Max Verstappen',
      role: 'Software Architect',
      avatar: 'https://github.com/shadcn.png'
    }
  }
];

export default function Variant5() {
  return (
    <section
      className="bg-background py-16 md:py-24"
      aria-labelledby="blog-section-5-heading"
    >
      <div className="max-w-2xl px-6 mx-auto">
        <div className="flex flex-col items-start gap-12">
          {/* Section Header */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 sm:gap-5">
              {/* Category Tag */}
              <p className="text-sm font-semibold text-muted-foreground sm:text-base">
                Blog section
              </p>

              {/* Main Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Short and clear engaging headline for a blog section
              </h2>

              {/* Section Description */}
              <p className="text-base text-muted-foreground">
                Add a concise value statement that captures reader interest and
                previews content value. Focus on benefits while keeping it under
                two lines. Align with your blog categories.
              </p>
            </div>
          </div>

          {/* Blog List */}
          <div className="flex flex-col gap-10 md:gap-8 w-full" role="list">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                className="group flex flex-col md:flex-row gap-6 p-0 cursor-pointer"
                role="listitem"
              >
                {/* Image Container */}
                <div className="w-full md:w-[200px]">
                  <AspectRatio
                    ratio={1 / 1}
                    className="rounded-xl overflow-hidden"
                  >
                    <Image
                      src={post.image}
                      alt={`${post.title} thumbnail`}
                      fill={true}
                      className="object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                  </AspectRatio>
                </div>

                {/* Post Content */}
                <div className="flex flex-col justify-between flex-1 p-0">
                  {/* Post Info */}
                  <div className="flex flex-col gap-3">
                    {/* Post Meta */}
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-muted-foreground">
                        {post.date}
                      </p>
                      <span className="text-sm text-muted-foreground">·</span>
                      <p className="text-sm text-muted-foreground">
                        {post.category}
                      </p>
                    </div>

                    {/* Post Title */}
                    <h3 className="text-base font-semibold text-foreground hover:underline">
                      {post.title}
                    </h3>

                    {/* Post Description */}
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {post.description}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 mt-6 md:mt-0">
                    {/* Author Avatar */}
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={post.author.avatar}
                        alt={post.author.name}
                      />
                    </Avatar>
                    {/* Author Details */}
                    <div className="flex flex-col">
                      <p className="text-sm font-medium text-foreground">
                        {post.author.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {post.author.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
