import CtaSectionsBlock from '@mono/web/blocks/CtaSectionsBlock/CtaSectionsBlock.config';
// InsertBlockConfigImports
import FaqSectionsBlock from '@mono/web/blocks/FaqSectionsBlock/FaqSectionsBlock.config';
import FeatureSection from '@mono/web/blocks/FeatureSection/FeatureSection.config';
import HeaderSectionBlock from '@mono/web/blocks/HeaderSectionBlock/HeaderSectionBlock.config';
import HeroSectionsBlock from '@mono/web/blocks/HeroSectionsBlock/HeroSectionsBlock.config';
// InsertBlockConfigImports

export const allBlocks = (prefix: string) => [
  // InsertBlockConfigFields
  FaqSectionsBlock(prefix),
  CtaSectionsBlock,
  FeatureSection,
  HeaderSectionBlock(prefix),
  HeroSectionsBlock(prefix)
];
