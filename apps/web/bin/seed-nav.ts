import fs from 'fs';
import { faker } from '@faker-js/faker';
import type {
  CTAType,
  HeroBlockT,
  IconSelect,
  MarkdownBlockT,
  PayLoadLink
} from '@mono/types/payload-types';
import genRichText from '@mono/ui/utils/genRichText';
import configPromise from '@payload-config';
import type { BasePayload } from 'payload';
import { getPayload } from 'payload';
import tmp from 'tmp';

interface SeedFnProps {
  payload: BasePayload;
  count?: number;
}

type linkEnum = PayLoadLink['type'];
type variantEnum = CTAType['variant'];
type iconEnum = IconSelect['name'];

const flatMenu = [
  {
    id: '666726dc5d637954321c2673',
    link: {
      type: 'external' as linkEnum,
      label: 'What we do',
      externalHref: '/about'
    }
  },
  {
    id: '666726dc5d637954321c2601',
    link: {
      type: 'external' as linkEnum,
      label: 'Services',
      externalHref: '/about'
    }
  },
  {
    id: '666726dc5d637954321c2605',
    link: {
      type: 'external' as linkEnum,
      label: 'Contact',
      externalHref: '/about'
    }
  },
  {
    id: '666726dc5d637954321c2609',
    link: {
      type: 'external' as linkEnum,
      label: 'Prices',
      externalHref: '/about'
    }
  }
];

const sections = [
  {
    label: 'About Us',
    links: [
      {
        id: '666726dc5d637954321c2673',
        link: {
          type: 'external' as linkEnum,
          label: 'What we are',
          externalHref: '/about'
        }
      },
      {
        id: '666726dc5d637951c382933',
        link: {
          type: 'external' as linkEnum,
          label: 'Leadership',
          externalHref: '/about'
        }
      }
    ]
  }
];

const footerItems = [
  {
    id: '6667294f5d637954321c267a',
    link: {
      type: 'external' as linkEnum,
      label: 'Privacy Policy',
      externalHref: '/policy'
    }
  },
  {
    id: '6667295e5d637954321c267c',
    link: {
      type: 'external' as linkEnum,
      label: 'legal',
      externalHref: '/legal'
    }
  },
  {
    id: '6667296b5d637954321c267e',
    link: {
      type: 'external' as linkEnum,
      label: 'Terms of Service',
      externalHref: '/terms'
    }
  }
];

const cta = {
  cta: {
    link: {
      type: 'external' as linkEnum,
      label: 'Get a Demo',
      externalHref: '/demo'
    },
    variant: 'solid' as variantEnum
  }
};

const iconItems = [
  {
    id: '66686fc350e70cef0fbda9b4',
    href: '/shop',
    newTab: null,
    icon: {
      name: 'Person' as iconEnum,
      size: '25' as IconSelect['size'],
      color: null
    }
  },
  {
    id: '66686fad50e70cef0fbda9b3',
    href: '/test',
    newTab: null,
    icon: {
      name: 'Search' as iconEnum,
      size: '25' as IconSelect['size'],
      color: null
    }
  }
];

async function downloadImage(url: string): Promise<string> {
  try {
    // Fetch the image
    const response = await fetch(url);

    // Check if response is ok
    if (!response.ok) {
      throw new Error(`Failed to fetch image. Status: ${response.status}`);
    }

    // Convert response body to buffer
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Create a temporary file
    const tempFile = tmp.fileSync({ postfix: '.jpg' });

    // Write image data to the temporary file
    fs.writeFileSync(tempFile.name, buffer);

    // Return the path to the temporary file
    return tempFile.name;
  } catch (error) {
    console.error('Error downloading image:', error);
    throw error;
  }
}

const downloadImages = ({
  count = 10,
  category = 'abstract',
  width = 640,
  height = 480
}) => {
  const promises = [];
  for (let i = 0; i < count; i += 1) {
    promises.push(
      downloadImage(
        faker.image.urlLoremFlickr({
          category,
          width,
          height
        })
      )
    );
  }

  return Promise.all(promises);
};

const seedImages = async ({
  payload,
  count = 10,
  category = 'abstract',
  width = 640,
  height = 480
}: SeedFnProps & { category?: string; width?: number; height?: number }) => {
  console.info(`@-->seeding ${count} ${category} images`);
  const promises = [];

  const images = await downloadImages({ count, category, width, height });

  for (let i = 0; i < count; i += 1) {
    promises.push(
      payload.create({
        collection: 'images',
        data: {
          alt: faker.lorem.sentence()
        },
        filePath: images[i]
      })
    );
  }

  return Promise.all(promises);
};

const heroBlock = {
  id: '6669d7bd6d58e03f8e7c1078',
  blockType: 'heroBlock',
  layout: 'contentLeft',
  eyebrow: 'SOME TAGLINE',
  content: {
    ...genRichText([
      {
        type: 'heading',
        tag: 'h1',
        text: 'Welcome to our Demo Repo'
      },
      {
        type: 'paragraph',
        text: faker.lorem.sentence()
      }
    ])
  }
};

const markdownBlock = {
  id: '6669d7bd6d58e03f8e7c1077',
  blockName: 'Markdown Hero Block',
  blockType: 'markdownBlock',
  content: {
    ...genRichText([
      {
        type: 'paragraph',
        text: 'Whether you are looking to advance your career, learn new skills, or connect with like-minded individuals, we got you covered. Join us on this journey and see where your potential can take you.'
      }
    ])
  },
  maxWidth: null
};

const seedHomePage = async ({ payload, count = 1 }: SeedFnProps) => {
  console.info(`@-->seeding homepage!`);
  const images = await seedImages({ payload, count, category: 'abstract' });

  await payload.create({
    collection: 'pages',
    data: {
      pageTitle: 'Home',
      slug: '/',
      blocks: [
        {
          ...(heroBlock as HeroBlockT),
          blockConfig: {
            contentWidth: 'xxl',
            backgroundImage: images[0].id
          }
        },
        markdownBlock as MarkdownBlockT
      ]
    }
  });
};

const seedNavUsingPayload = async ({ payload, count = 2 }: SeedFnProps) => {
  console.info(`@-->seeding nav!`);
  const images = await seedImages({
    payload,
    count,
    category: 'abstract',
    width: 80,
    height: 42
  });

  await payload.updateGlobal({
    slug: 'nav', // required
    data: {
      header: {
        logo: images[0].id,
        flatMenu,
        collapsibleMenu: { sections },
        hasCta: true,
        ctaButton: cta,
        iconItems,
        banner: {
          // @ts-expect-error/false-flag
          content: {
            ...genRichText([
              { type: 'paragraph', text: 'Welcome to our Demo Repo' }
            ])
          },
          background: 'gray'
        }
      },
      footer: {
        footerItems: {
          logo: images[1].id,
          // @ts-expect-error/false-flag
          copyright: {
            ...genRichText([
              { type: 'paragraph', text: '© 2024 Mono. All rights reserved.' }
            ])
          },
          footerMenu: footerItems
        }
      }
    },
    depth: 2
  });
};

const seed = async (): Promise<void> => {
  const payload = await getPayload({ config: configPromise });
  await seedHomePage({ payload });
  await seedNavUsingPayload({ payload });
  console.info('@-->successfully seeded the nav and homepage!');

  process.exit(0);
};

export default seed();
