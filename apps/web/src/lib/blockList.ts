// InsertBlockConfigImports
import ContactSectionsBlock from '@mono/web/blocks/ContactSectionsBlock/ContactSectionsBlock.config';
import CtaSectionsBlock from '@mono/web/blocks/CtaSectionsBlock/CtaSectionsBlock.config';
import HeaderSectionBlock from '@mono/web/blocks/HeaderSectionBlock/HeaderSectionBlock.config';
import HeroSectionsBlock from '@mono/web/blocks/HeroSectionsBlock/HeroSectionsBlock.config';

export const allBlocks = (prefix: string) => [
  // InsertBlockConfigFields
  ContactSectionsBlock(prefix),
  CtaSectionsBlock,
  HeaderSectionBlock(prefix),
  HeroSectionsBlock(prefix)
];
