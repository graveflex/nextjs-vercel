import { cardGridBlockSchema } from '@mono/web/blocks/CardGridBlock/CardGridBlockSeed';
import { faqBlockSchema } from '@mono/web/blocks/FAQBlock/FAQBlockSeed';
import { galleryGridBlockSchema } from '@mono/web/blocks/GalleryGridBlock/GalleryGridBlockSeed';
import { heroBlockSchema } from '@mono/web/blocks/HeroBlock/HeroBlockSeed';
import { iconGridBlockSchema } from '@mono/web/blocks/IconGridBlock/IconGridSeed';
import { iFrameBlockSchema } from '@mono/web/blocks/IframeBlock/iframeSeed';
import { markdownBlockSchema } from '@mono/web/blocks/MarkdownBlock/MarkdownBlockSeed';
import { sectionHeaderBlockSchema } from '@mono/web/blocks/SectionHeaderBlock/SectionHeaderSeed';
// ImportBlockSchema
import { imageTextBlockSchema } from '@mono/web/blocks/TextImageBlock/TextImageBlockSeed';
import path from 'path';
import type { BasePayload } from 'payload';
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
  const iconGridBlock = await iconGridBlockSchema({
    blockName: 'Icon Grid Block',
    blockConfig: {
      contentWidth: 'xl'
    }
  });

  const iFrameBlock = await iFrameBlockSchema({
    blockName: 'iFrame Block',
    blockConfig: {
      contentWidth: 'xl'
    }
  });

  // ResolveBlockSchema

  await payload.create({
    collection: 'pages',
    data: {
      pageTitle: 'Kitchen Sink',
      slug: 'kitchen-sink',
      blocks: [
        // AddBlock
        heroBlockBG,
        heroBlockCTA,
        sectionHeaderBlockSchema,
        imageTextBlockLeft,
        markdownBlockSchema,
        imageTextBlockRight,
        cardGridBlock,
        iconGridBlock,
        iFrameBlock,
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
