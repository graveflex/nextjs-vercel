// Types
import type { Block } from 'payload';

// Helpers
import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import MakeVariations from '@mono/web/payload/utils/makeVariations';

const FeatureSection: Block = {
  slug: 'featureSection',
  interfaceName: 'FeatureSection',
  fields: [BlockConfig(), MakeVariations(14)]
};

export default FeatureSection;
