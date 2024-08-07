import Select from '@mono/web/payload/fields/Inputs/Select/Select';
import type { Block } from 'payload';

const SelectBlock: Block = {
  slug: 'select',
  interfaceName: 'SelectT',
  fields: [{ ...Select() }]
};

export default SelectBlock;
