import CtaSectionsBlock from '@mono/web/blocks/CtaSectionsBlock/CtaSectionsBlock.config';
import HeaderSectionBlock from '@mono/web/blocks/HeaderSectionBlock/HeaderSectionBlock.config';

export const allBlocks = (prefix: string) => [
  // InsertBlockConfigFields
  CtaSectionsBlock,
  HeaderSectionBlock(prefix)
];
