import RichTextFields from '@mono/web/payload/fields/RichTextFields';
import type { GlobalConfig } from 'payload';
import { invalidateCache } from '../../hooks/invalidateCache';

const FourOhFour: GlobalConfig = {
  slug: 'four-oh-four',
  label: '404',
  access: {
    read: () => true
  },
  fields: [...RichTextFields],
  hooks: {
    afterChange: [invalidateCache]
  }
};
export default FourOhFour;
