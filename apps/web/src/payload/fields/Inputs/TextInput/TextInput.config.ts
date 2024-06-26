import TextInput from '@mono/web/payload/fields/Inputs/TextInput/TextInput';
import type { Block } from 'payload/types';

const TextInputBlock: Block = {
  slug: 'textInputBlock',
  interfaceName: 'TextInputBlockT',
  fields: [{ ...TextInput() }]
};

export default TextInputBlock;
