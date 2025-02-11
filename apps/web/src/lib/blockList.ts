// InsertBlockConfigImports
import CtaSectionsBlock from '@mono/web/blocks/CtaSectionsBlock/CtaSectionsBlock.config';
import FeatureSection from '@mono/web/blocks/FeatureSection/FeatureSection.config';
import HeaderSectionBlock from '@mono/web/blocks/HeaderSectionBlock/HeaderSectionBlock.config';
import HeaderSectionsBlock from '@mono/web/blocks/HeaderSectionsBlock/HeaderSectionsBlock.config';
import HeroSectionsBlock from '@mono/web/blocks/HeroSectionsBlock/HeroSectionsBlock.config';
import PricingSectionsBlock from '@mono/web/blocks/PricingSectionsBlock/PricingSectionsBlock.config';

export const allBlocks = (prefix: string) => [
  // InsertBlockConfigFields
  PricingSectionsBlock(prefix),
  HeaderSectionsBlock(prefix),
  CtaSectionsBlock,
  FeatureSection,
  HeaderSectionBlock(prefix),
  HeroSectionsBlock(prefix)
];
