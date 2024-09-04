import RichTextFields from '@mono/web/payload/fields/RichTextFields';
import type { GlobalConfig } from 'payload';
import { globalInvalidateCache } from '../../hooks/globalInvalidateCache';

const FourOhFour: GlobalConfig = {
  slug: 'four-oh-four',
  label: '404',
  access: {
    read: () => true
  },
  fields: [...RichTextFields],
    hooks: {
      afterChange: [globalInvalidateCache]
  }
};
export default FourOhFour;
