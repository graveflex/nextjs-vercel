import CtaSectionsBlock from '@mono/web/blocks/CtaSectionsBlock/CtaSectionsBlock.config';
import FeatureSection from '@mono/web/blocks/FeatureSection/FeatureSection.config';
// InsertBlockConfigImports
import FourOhFourBlock from '@mono/web/blocks/FourOhFourBlock/FourOhFourBlock.config';
import HeaderSectionBlock from '@mono/web/blocks/HeaderSectionBlock/HeaderSectionBlock.config';
// InsertBlockConfigImports
import HeaderSectionsBlock from '@mono/web/blocks/HeaderSectionsBlock/HeaderSectionsBlock.config';
import HeroSectionsBlock from '@mono/web/blocks/HeroSectionsBlock/HeroSectionsBlock.config';
// InsertBlockConfigImports

export const allBlocks = (prefix: string) => [
  // InsertBlockConfigFields
  FourOhFourBlock(prefix),
  HeaderSectionsBlock(prefix),
  CtaSectionsBlock,
  FeatureSection,
  HeaderSectionBlock(prefix),
  HeroSectionsBlock(prefix)
];
