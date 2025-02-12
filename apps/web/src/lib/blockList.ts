import CtaSectionsBlock from '@mono/web/blocks/CtaSectionsBlock/CtaSectionsBlock.config';
// InsertBlockConfigImports
import FaqSectionsBlock from '@mono/web/blocks/FaqSectionsBlock/FaqSectionsBlock.config';
import FeatureSection from '@mono/web/blocks/FeatureSection/FeatureSection.config';
import HeaderSectionBlock from '@mono/web/blocks/HeaderSectionBlock/HeaderSectionBlock.config';
import HeaderSectionsBlock from '@mono/web/blocks/HeaderSectionsBlock/HeaderSectionsBlock.config';
import HeroSectionsBlock from '@mono/web/blocks/HeroSectionsBlock/HeroSectionsBlock.config';

export const allBlocks = (prefix: string) => [
  // InsertBlockConfigFields
  HeaderSectionsBlock(prefix),
  FaqSectionsBlock(prefix),
  CtaSectionsBlock,
  FeatureSection,
  HeaderSectionBlock(prefix),
  HeroSectionsBlock(prefix)
];
