import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import type { Block } from 'payload';

const AuthBlock: Block = {
  slug: 'authBlock',
  interfaceName: 'AuthBlockT',
  fields: [BlockConfig()]
};

export default AuthBlock;
