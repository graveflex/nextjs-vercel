import { cardGridBlockSchema } from '@mono/web/blocks/CardGridBlock/CardGridBlockSeed';
// ImportBlockSchema
// import { CtaSectionsSchema } from '@mono/web/blocks/CtaSections/CtaSectionsSeed';
import { faqBlockSchema } from '@mono/web/blocks/FAQBlock/FAQBlockSeed';
import { galleryGridBlockSchema } from '@mono/web/blocks/GalleryGridBlock/GalleryGridBlockSeed';
import { heroBlockSchema } from '@mono/web/blocks/HeroBlock/HeroBlockSeed';
import { iconGridBlockSchema } from '@mono/web/blocks/IconGridBlock/IconGridSeed';
import { iFrameBlockSchema } from '@mono/web/blocks/IframeBlock/iframeSeed';
import { markdownBlockSchema } from '@mono/web/blocks/MarkdownBlock/MarkdownBlockSeed';
import { sectionHeaderBlockSchema } from '@mono/web/blocks/SectionHeaderBlock/SectionHeaderSeed';
import { imageTextBlockSchema } from '@mono/web/blocks/TextImageBlock/TextImageBlockSeed';
import configPromise from '@payload-config';
import type { BasePayload } from 'payload';
import { getPayload } from 'payload';

// interface SeedFnProps {
//   payload: BasePayload;
// }

// const seedKitchenSinkPage = async ({ payload }: SeedFnProps) => {
//   console.info(`@-->seeding the kitchenSink!`);

//   const heroBlockBG = await heroBlockSchema({
//     blockConfig: {
//       contentWidth: 'xl'
//     },
//     blockName: 'Hero Block BG Image',
//     layout: 'contentLeft'
//   });

//   const heroBlockCTA = await heroBlockSchema({
//     blockName: 'Hero Block Image Right + CTA',
//     blockConfig: {
//       contentWidth: 'xl'
//     },
//     cta: {
//       link: {
//         type: 'external',
//         label: 'Read More',
//         externalHref: '/blog'
//       }
//     }
//   });
//   const cardGridBlock = await cardGridBlockSchema();
//   const galleryGridBlock = await galleryGridBlockSchema();
//   const imageTextBlockLeft = await imageTextBlockSchema(
//     'imgLeft',
//     'Text Image Block (image left)'
//   );
//   const imageTextBlockRight = await imageTextBlockSchema(
//     'imgRight',
//     'Text Image Block (image right)'
//   );
//   const iconGridBlock = await iconGridBlockSchema({
//     blockName: 'Icon Grid Block',
//     blockConfig: {
//       contentWidth: 'xl'
//     }
//   });

//   const iFrameBlock = await iFrameBlockSchema({
//     blockName: 'iFrame Block',
//     blockConfig: {
//       contentWidth: 'xl'
//     }
//   });

//   // ResolveBlockSchema
//   // const ctaSections = await CtaSectionsSchema();

//   await payload.create({
//     collection: 'pages',
//     data: {
//       pageTitle: 'Kitchen Sink',
//       slug: 'kitchen-sink',
//       blocks: [
//         // AddBlock
//         // ctaSections,
//         heroBlockBG,
//         heroBlockCTA,
//         sectionHeaderBlockSchema,
//         imageTextBlockLeft,
//         markdownBlockSchema,
//         imageTextBlockRight,
//         cardGridBlock,
//         iconGridBlock,
//         iFrameBlock,
//         faqBlockSchema,
//         galleryGridBlock
//       ]
//     }
//   });
// };

const seed = async (): Promise<void> => {
  // const payload = await getPayload({ config: configPromise });
  // await seedKitchenSinkPage({ payload });
  console.info('@-->successfully seeded the kitchen sink!');

  process.exit(0);
};

export default seed();
