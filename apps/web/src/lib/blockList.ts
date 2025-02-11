// InsertBlockConfigImports
import ContactSectionsBlock from '@mono/web/blocks/ContactSectionsBlock/ContactSectionsBlock.config';
import CtaSectionsBlock from '@mono/web/blocks/CtaSectionsBlock/CtaSectionsBlock.config';
import FeatureSection from '@mono/web/blocks/FeatureSection/FeatureSection.config';
import HeaderSectionBlock from '@mono/web/blocks/HeaderSectionBlock/HeaderSectionBlock.config';
import HeroSectionsBlock from '@mono/web/blocks/HeroSectionsBlock/HeroSectionsBlock.config';
// InsertBlockConfigImports

export const allBlocks = (prefix: string) => [
  // InsertBlockConfigFields
  ContactSectionsBlock(prefix),
  CtaSectionsBlock,
  FeatureSection,
  HeaderSectionBlock(prefix),
  HeroSectionsBlock(prefix)
];
