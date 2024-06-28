import { faker } from '@faker-js/faker';
import type {
  CardGridBlockT,
  FAQBlockT,
  GalleryGridBlockT,
  HeroBlockT,
  MarkdownBlockT,
  SectionHeaderBlockT,
  TextImageBlockT
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
  count?: number;
}

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

const markdownBlock = {
  id: '6669d7bd6d58e03f8e7c1077',
  blockName: 'Markdown Hero Block',
  blockType: 'markdownBlock',
  content: {
    ...genRichText([
      {
        type: 'heading',
        tag: 'h1',
        text: 'Welcome to the Kitchen Sink (h1)'
      },
      {
        type: 'paragraph',
        text: faker.lorem.sentence()
      },
      {
        type: 'heading',
        tag: 'h2',
        text: 'Welcome to the Kitchen Sink (h2)'
      },
      {
        type: 'heading',
        tag: 'h3',
        format: 'center',
        text: 'Welcome to the Kitchen Sink (h3 - center)'
      },
      {
        type: 'heading',
        tag: 'h4',
        format: 'right',
        text: 'Welcome to the Kitchen Sink (h4 - right)'
      },
      {
        type: 'heading',
        tag: 'h5',
        format: 'strikethrough',
        text: 'Welcome to the Kitchen Sink (h5 - strikethrough)'
      },
      {
        type: 'heading',
        tag: 'h6',
        text: 'Welcome to the Kitchen Sink (h6)'
      },
      {
        type: 'paragraph',
        format: 'bold',
        text: faker.lorem.sentence()
      },
      {
        type: 'paragraph',
        format: 'italic',
        text: faker.lorem.sentence()
      },
      {
        type: 'paragraph',
        format: 'underline',
        text: faker.lorem.sentence()
      }
    ])
  },
  maxWidth: null
};

const sectionHeaderBlock = {
  id: '6669d7bd6d58e03f8e7c1076',
  blockType: 'sectionHeaderBlock',
  eyebrow: 'SOME TAGLINE',
  content: {
    ...genRichText([
      {
        type: 'heading',
        tag: 'h1',
        text: 'Test Section Header Block'
      },
      {
        type: 'paragraph',
        text: faker.lorem.paragraph(2)
      }
    ])
  },
  alignment: 'center',
  cta: {
    link: {
      type: 'external',
      label: 'Read More',
      externalHref: '/blog'
    }
  }
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
        text: 'Test Hero Block'
      },
      {
        type: 'paragraph',
        text: faker.lorem.sentence()
      }
    ])
  }
};

const imageTextBlock = {
  id: '6669d7bd6d58e03f8e7c1079',
  blockType: 'textImageBlock',
  content: {
    ...genRichText([
      {
        type: 'heading',
        tag: 'h2',
        text: 'Test Image Text Block'
      },
      {
        type: 'paragraph',
        text: faker.lorem.sentence()
      }
    ])
  }
};

const cardGridBlock = {
  id: '6669d7bd6d58e03f8e7c107a',
  blockName: 'Card Grid Block',
  blockType: 'cardGridBlock',
  blockConfig: {
    contentWidth: 'xxl'
  }
};

const faqBlock = {
  id: '6669d7bd6d58e03f8e7c107b',
  blockName: 'FAQ Block',
  blockType: 'faqBlock',
  blockConfig: {
    contentWidth: 'xl'
  },
  header: {
    ...genRichText([
      {
        type: 'heading',
        tag: 'h2',
        text: 'Frequently Asked Questions'
      }
    ])
  },
  items: [
    {
      title: faker.lorem.sentence(),
      content: {
        ...genRichText([
          {
            type: 'paragraph',
            text: faker.lorem.paragraph()
          }
        ])
      }
    },
    {
      title: faker.lorem.sentence(),
      content: {
        ...genRichText([
          {
            type: 'paragraph',
            text: faker.lorem.paragraph()
          }
        ])
      }
    },
    {
      title: faker.lorem.sentence(),
      content: {
        ...genRichText([
          {
            type: 'paragraph',
            text: faker.lorem.paragraph()
          }
        ])
      }
    }
  ]
};

const galleryGridBlock = {
  id: '6669d7bd6d58e03f8e7c107c',
  blockName: 'Gallery Grid Block',
  blockType: 'galleryGridBlock'
};

const seedKitchenSinkPage = async ({ payload, count = 10 }: SeedFnProps) => {
  console.info(`@-->seeding the kitchenSink!`);

  const images = await seedImages({ payload, count, category: 'abstract' });

  await payload.create({
    collection: 'pages',
    data: {
      pageTitle: 'Kitchen Sink',
      slug: 'kitchen-sink',
      blocks: [
        {
          ...(heroBlock as HeroBlockT),
          blockName: 'Hero Block Bacground Image',
          blockConfig: {
            contentWidth: 'xxl',
            backgroundImage: images[0].id
          }
        },
        {
          ...(heroBlock as HeroBlockT),
          blockName: 'Hero Block Image Right + CTA',
          blockConfig: {
            contentWidth: 'xl'
          },
          image: images[5].id,
          cta: {
            link: {
              type: 'external',
              label: 'Read More',
              externalHref: '/blog'
            }
          }
        },
        sectionHeaderBlock as SectionHeaderBlockT,
        {
          ...(heroBlock as HeroBlockT),
          blockName: 'Hero Block Image Left + Form',
          blockConfig: {
            contentWidth: 'xl'
          },
          layout: 'contentRight',
          image: images[5].id,
          form: {
            textinput: {
              placeholder: 'email address'
            },

            cta: {
              link: {
                type: 'external',
                label: 'Learn more',
                externalHref: 'https://google.com',
                newTab: true
              }
            }
          }
        },
        {
          ...(imageTextBlock as TextImageBlockT),
          blockName: 'Text Image Block (image left)',
          layout: 'imgLeft',
          image: images[2].id
        },
        markdownBlock as MarkdownBlockT,
        {
          ...(imageTextBlock as TextImageBlockT),
          blockName: 'Text Image Block (image right)',
          layout: 'imgRight',
          image: images[1].id
        },
        {
          ...(cardGridBlock as CardGridBlockT),
          cards: [
            {
              id: '6669d7bd6d58e03f8e7c107b',
              card: {
                image: images[3].id,
                headline: 'Card 1',
                subHead: faker.lorem.sentence()
              }
            },
            {
              id: '6669d7bd6d58e03f8e7c10xx',
              card: {
                image: images[4].id,
                headline: 'Card 2',
                subHead: faker.lorem.sentence()
              }
            },
            {
              id: '6669d7bd6d58e03f8e7c1xxx',
              card: {
                image: images[0].id,
                headline: 'Card 3',
                subHead: faker.lorem.sentence()
              }
            }
          ]
        },
        faqBlock as FAQBlockT,
        {
          ...(galleryGridBlock as GalleryGridBlockT),
          blockName: 'Gallery Grid Block',
          blockConfig: {
            contentWidth: 'xxl'
          },
          galleryImages: [
            { id: '0', image: images[0].id },
            { id: '1', image: images[1].id },
            { id: '2', image: images[3].id },
            { id: '3', image: images[3].id }
          ]
        }
      ]
    }
  });
};

const seed = async (): Promise<void> => {
  const configPath = path.resolve(__dirname, '../payload.config.ts');
  const config = await importConfig(configPath);
  const payload = await getPayload({ config });
  // await seedImages({ payload });
  await seedKitchenSinkPage({ payload });
  console.info('@-->successfully seeded the kitchen sink!');

  process.exit(0);
};

export default seed();
