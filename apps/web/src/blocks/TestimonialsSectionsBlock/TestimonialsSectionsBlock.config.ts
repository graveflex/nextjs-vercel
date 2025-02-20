import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import MakeVariations from '@mono/web/payload/utils/makeVariations';
import type { Block } from 'payload';

const TestimonialsSectionsBlock = (prefix: string): Block => ({
  slug: 'testimonialsSectionsBlock',
  interfaceName: 'TestimonialsSectionsBlockT',
  dbName: `${prefix}TestimonialsSectionsBlock`,
  fields: [
    BlockConfig(),
    MakeVariations(5, prefix, 'TestimonialsSectionsBlock')
  ]
});

export default TestimonialsSectionsBlock;
