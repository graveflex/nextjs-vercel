import { faker } from '@faker-js/faker';
import type {
  CTAType,
  IconSelect,
  MarkdownBlockT,
  PayLoadLink
} from '@mono/types/payload-types';
import genRichText from '@mono/ui/utils/genRichText';
import fs from 'fs';
import path from 'path';
import type { BasePayload, GeneratedTypes } from 'payload';
import { getPayload } from 'payload';
import { importConfig } from 'payload/node';
import tmp from 'tmp';

interface SeedFnProps {
  payload: BasePayload<GeneratedTypes>;
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

const seedLogo = async ({ payload }: SeedFnProps) => {
  console.info(`@-->seeding logo image`);

  const image = await downloadImage(
    faker.image.urlLoremFlickr({ category: 'business', width: 80, height: 42 })
  );
  console.log('image:', image);
  await payload.create({
    collection: 'images',
    data: {
      alt: 'faker placeholder logo'
    },
    filePath: image
  });
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

const seedHomePage = async ({ payload }: SeedFnProps) => {
  console.info(`@-->seeding homepage!`);

  await payload.create({
    collection: 'pages',
    data: {
      pageTitle: 'Home',
      slug: '/',
      blocks: [markdownBlock as MarkdownBlockT]
    }
  });
};

const seedNavUsingPayload = async ({ payload }: SeedFnProps) => {
  console.info(`@-->seeding nav!`);

  await payload.updateGlobal({
    slug: 'nav', // required
    data: {
      header: {
        flatMenu,
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
          background: 'black'
        }
      },
      footer: {
        footerItems: {
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
  const configPath = path.resolve(__dirname, '../payload.config.ts');
  const config = await importConfig(configPath);
  const payload = await getPayload({ config });
  await seedHomePage({ payload });
  await seedLogo({ payload });
  await seedNavUsingPayload({ payload });
  console.info('@-->successfully seeded the nav and homepage!');

  process.exit(0);
};

export default seed();
