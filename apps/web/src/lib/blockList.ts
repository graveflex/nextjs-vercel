// InsertBlockConfigImports
import BlogSectionBlock from '@mono/web/blocks/BlogSection/BlogSection.config';
import CtaSectionsBlock from '@mono/web/blocks/CtaSectionsBlock/CtaSectionsBlock.config';
import FeatureSection from '@mono/web/blocks/FeatureSection/FeatureSection.config';
import HeaderSectionBlock from '@mono/web/blocks/HeaderSectionBlock/HeaderSectionBlock.config';
import HeaderSectionsBlock from '@mono/web/blocks/HeaderSectionsBlock/HeaderSectionsBlock.config';
import HeroSectionsBlock from '@mono/web/blocks/HeroSectionsBlock/HeroSectionsBlock.config';
import TestimonialsSectionsBlock from '@mono/web/blocks/TestimonialsSectionsBlock/TestimonialsSectionsBlock.config';

export const allBlocks = (prefix: string) => [
  // InsertBlockConfigFields
  TestimonialsSectionsBlock(prefix),
  HeaderSectionsBlock(prefix),
  CtaSectionsBlock,
  FeatureSection,
  HeaderSectionBlock(prefix),
  HeroSectionsBlock(prefix),
  BlogSectionBlock
];
