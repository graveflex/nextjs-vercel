import TextInput from '@mono/web/payload/fields/Inputs/TextInput/TextInput';
import type { Block } from 'payload';

const TextInputBlock: Block = {
  slug: 'textInput',
  interfaceName: 'TextInputT',
  fields: [{ ...TextInput() }]
};

export default TextInputBlock;
