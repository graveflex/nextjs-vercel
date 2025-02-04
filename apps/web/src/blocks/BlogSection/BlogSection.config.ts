// Types
import type { Block } from 'payload';

// Helpers
import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import MakeVariations from '@mono/web/payload/utils/makeVariations';

const BlogSection: Block = {
  slug: 'blogSection',
  interfaceName: 'BlogSectionT',
  fields: [BlockConfig(), MakeVariations(5)]
};

export default BlogSection;
