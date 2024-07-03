import { cardGridBlockSchema } from '@mono/web/blocks/CardGridBlock/CardGridBlockSeed';
import { faqBlockSchema } from '@mono/web/blocks/FAQBlock/FAQBlockSeed';
import { galleryGridBlockSchema } from '@mono/web/blocks/GalleryGridBlock/GalleryGridBlockSeed';
import { heroBlockSchema } from '@mono/web/blocks/HeroBlock/HeroBlockSeed';
import { markdownBlockSchema } from '@mono/web/blocks/MarkdownBlock/MarkdownBlockSeed';
import { sectionHeaderBlockSchema } from '@mono/web/blocks/SectionHeaderBlock/SectionHeaderSeed';
import { imageTextBlockSchema } from '@mono/web/blocks/TextImageBlock/TextImageBlockSeed';
import path from 'path';
import type { BasePayload } from 'payload';
import tmp from 'tmp';
import { tsImport } from 'tsx/esm/api';

interface SeedFnProps {
  payload: BasePayload;
}

const seedKitchenSinkPage = async ({ payload }: SeedFnProps) => {
  console.info(`@-->seeding the kitchenSink!`);

  const heroBlockBG = await heroBlockSchema({
    blockConfig: {
      contentWidth: 'xl'
    },
    blockName: 'Hero Block BG Image',
    layout: 'contentLeft'
  });
  const heroBlockCTA = await heroBlockSchema({
    blockName: 'Hero Block Image Right + CTA',
    blockConfig: {
      contentWidth: 'xl'
    },
    cta: {
      link: {
        type: 'external',
        label: 'Read More',
        externalHref: '/blog'
      }
    }
  });
  const heroBlockForm = await heroBlockSchema({
    blockName: 'Hero Block Image Left + Form',
    blockConfig: {
      contentWidth: 'xl'
    },
    layout: 'contentRight',
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
  });
  const cardGridBlock = await cardGridBlockSchema();
  const galleryGridBlock = await galleryGridBlockSchema();
  const imageTextBlockLeft = await imageTextBlockSchema(
    'imgLeft',
    'Text Image Block (image left)'
  );
  const imageTextBlockRight = await imageTextBlockSchema(
    'imgRight',
    'Text Image Block (image right)'
  );

  await payload.create({
    collection: 'pages',
    data: {
      pageTitle: 'Kitchen Sink',
      slug: 'kitchen-sink',
      blocks: [
        heroBlockBG,
        heroBlockCTA,
        sectionHeaderBlockSchema,
        heroBlockForm,
        imageTextBlockLeft,
        markdownBlockSchema,
        imageTextBlockRight,
        cardGridBlock,
        faqBlockSchema,
        galleryGridBlock
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
  await seedKitchenSinkPage({ payload });
  console.info('@-->successfully seeded the kitchen sink!');

  process.exit(0);
};

export default seed();
