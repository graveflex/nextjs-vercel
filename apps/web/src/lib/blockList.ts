import CtaSectionsBlock from '@mono/web/blocks/CtaSectionsBlock/CtaSectionsBlock.config';
import HeaderSectionBlock from '@mono/web/blocks/HeaderSectionBlock/HeaderSectionBlock.config';
import HeroSectionsBlock from '@mono/web/blocks/HeroSectionsBlock/HeroSectionsBlock.config';
// InsertBlockConfigImports
import TestimonialsSectionsBlock from '@mono/web/blocks/TestimonialsSectionsBlock/TestimonialsSectionsBlock.config';

export const allBlocks = (prefix: string) => [
  // InsertBlockConfigFields
  TestimonialsSectionsBlock(prefix),
  CtaSectionsBlock,
  HeaderSectionBlock(prefix),
  HeroSectionsBlock(prefix)
];
