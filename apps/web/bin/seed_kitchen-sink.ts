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
import { cardGridBlockSchema } from '@mono/web/blocks/CardGridBlock/CardGridBlockSeed';
import { faqBlockSchema } from '@mono/web/blocks/FAQBlock/FAQBlockSeed';
import { galleryGridBlockSchema } from '@mono/web/blocks/GalleryGridBlock/GalleryGridBlockSeed';
import { heroBlockSchema } from '@mono/web/blocks/HeroBlock/HeroBlockSeed';
import { markdownBlockSchema } from '@mono/web/blocks/MarkdownBlock/MarkdownBlockSeed';
import { sectionHeaderBlockSchema } from '@mono/web/blocks/SectionHeaderBlock/SectionHeaderSeed';
import { imageTextBlockSchema } from '@mono/web/blocks/TextImageBlock/TextImageBlockSeed';
import fs from 'fs';
import path from 'path';
import type { BasePayload } from 'payload';
import tmp from 'tmp';
import { tsImport } from 'tsx/esm/api';

interface SeedFnProps {
  payload: BasePayload;
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
          ...(heroBlockSchema as HeroBlockT),
          blockName: 'Hero Block Bacground Image',
          blockConfig: {
            contentWidth: 'xxl',
            backgroundImage: images[0].id
          }
        },
        {
          ...(heroBlockSchema as HeroBlockT),
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
        sectionHeaderBlockSchema as SectionHeaderBlockT,
        {
          ...(heroBlockSchema as HeroBlockT),
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
          ...(imageTextBlockSchema as TextImageBlockT),
          blockName: 'Text Image Block (image left)',
          layout: 'imgLeft',
          image: images[2].id
        },
        markdownBlockSchema as MarkdownBlockT,
        {
          ...(imageTextBlockSchema as TextImageBlockT),
          blockName: 'Text Image Block (image right)',
          layout: 'imgRight',
          image: images[1].id
        },
        {
          ...(cardGridBlockSchema as CardGridBlockT),
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
        faqBlockSchema as FAQBlockT,
        {
          ...(galleryGridBlockSchema as GalleryGridBlockT),
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
  const { getPayload } = await tsImport('payload', import.meta.url);
  const { importConfig } = await tsImport('payload/node', import.meta.url);

  const configPath = path.resolve(__dirname, '../payload.config.ts');
  const config = await importConfig(configPath);
  const payload = await getPayload({ config });
  // await seedImages({ payload });
  await seedKitchenSinkPage({ payload });
  console.info('@-->successfully seeded the kitchen sink!');

  process.exit(0);
};

export default seed();
