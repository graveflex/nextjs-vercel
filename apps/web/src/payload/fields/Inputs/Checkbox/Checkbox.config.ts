import Checkbox from '@mono/web/payload/fields/Inputs/Checkbox/Checkbox';
import type { Block } from 'payload';

const CheckboxBlock: Block = {
  slug: 'checkbox',
  interfaceName: 'CheckboxT',
  fields: [{ ...Checkbox() }]
};

export default CheckboxBlock;
