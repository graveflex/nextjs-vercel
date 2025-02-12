import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@mono/web/components/ui/Avatar';
import { Card, CardContent, CardFooter } from '@mono/web/components/ui/Card';
import { Separator } from '@mono/web/components/ui/Separator';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  authorImage: string;
  authorRole: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with shadcn/ui: A Complete Guide',
    description:
      "Learn how to set up and maximize your development workflow with shadcn/ui's powerful component library.",
    date: 'Mar 15, 2024',
    category: 'Tutorial',
    author: 'John Doe',
    authorImage: 'https://github.com/shadcn.png',
    authorRole: 'Developer'
  },
  {
    id: 2,
    title: 'Building Dark Mode with Next.js and Tailwind CSS',
    description:
      'Implement a seamless dark mode toggle in your Next.js application using Tailwind CSS and shadcn/ui.',
    date: 'Mar 12, 2024',
    category: 'Development',
    author: 'Jane Smith',
    authorImage: 'https://github.com/shadcn.png',
    authorRole: 'Designer'
  },
  {
    id: 3,
    title: 'Mastering React Server Components',
    description:
      "Deep dive into React Server Components and learn how they can improve your application's performance.",
    date: 'Mar 8, 2024',
    category: 'Advanced',
    author: 'Alice Johnson',
    authorImage: 'https://github.com/shadcn.png',
    authorRole: 'Developer'
  }
];

export default function Variant2() {
  return (
    <section
      className="bg-background py-16 md:py-24"
      aria-labelledby="blog-section-2-heading"
    >
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-start gap-12">
          {/* Section Header */}
          <div className="flex flex-col items-start gap-4 md:gap-5 max-w-xl text-left">
            {/* Category Tag */}
            <p className="text-base font-semibold text-muted-foreground md:text-sm">
              Blog section
            </p>

            {/* Main Title */}
            <h2
              id="blog-section-2-heading"
              className="text-foreground text-3xl font-bold leading-tight md:text-4xl"
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
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6"
            role="list"
          >
            {BLOG_POSTS.map((post, index) => (
              <>
                <Card
                  key={post.id}
                  className="group border-none shadow-none rounded-none cursor-pointer flex flex-col justify-between"
                  role="listitem"
                >
                  {/* Post Content */}
                  <CardContent className="flex flex-col gap-3 p-0">
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
                    <h3 className="text-base font-semibold leading-normal hover:underline">
                      {post.title}
                    </h3>

                    {/* Post Summary */}
                    <p className="text-sm text-muted-foreground leading-normal">
                      {post.description}
                    </p>
                  </CardContent>

                  {/* Author Info */}
                  <CardFooter className="flex items-center gap-2 p-0 mt-4 md:mt-6">
                    {/* Author Avatar */}
                    <Avatar>
                      <AvatarImage src={post.authorImage} />
                      <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>

                    {/* Author Details */}
                    <div className="flex flex-col items-start gap-0 flex-1">
                      <p className="text-sm text-foreground font-medium">
                        {post.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {post.authorRole}
                      </p>
                    </div>
                  </CardFooter>
                </Card>
                {index < BLOG_POSTS.length - 1 && (
                  <Separator className="lg:hidden" />
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
