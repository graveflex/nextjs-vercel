import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import MakeVariations from '@mono/web/payload/utils/makeVariations';
import type { Block } from 'payload';

const ContactSectionsBlock = (prefix: string): Block => ({
  slug: 'contactSectionsBlock',
  interfaceName: 'ContactSectionsBlockT',
  dbName: `${prefix}ContactSectionsBlock`,
  fields: [BlockConfig(), MakeVariations(6, prefix, 'ContactSectionsBlock')]
});

export default ContactSectionsBlock;
