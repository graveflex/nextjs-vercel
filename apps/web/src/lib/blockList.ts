import CtaSectionsBlock from '@mono/web/blocks/CtaSectionsBlock/CtaSectionsBlock.config';
import HeaderSectionBlock from '@mono/web/blocks/HeaderSectionBlock/HeaderSectionBlock.config';
import HeroSectionsBlock from '@mono/web/blocks/HeroSectionsBlock/HeroSectionsBlock.config';
// InsertBlockConfigImports
import PricingSectionsBlock from '@mono/web/blocks/PricingSectionsBlock/PricingSectionsBlock.config';

export const allBlocks = (prefix: string) => [
  // InsertBlockConfigFields
  PricingSectionsBlock(prefix),
  CtaSectionsBlock,
  HeaderSectionBlock(prefix),
  HeroSectionsBlock(prefix)
];
