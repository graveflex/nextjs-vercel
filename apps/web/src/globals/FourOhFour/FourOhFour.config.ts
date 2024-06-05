import RichTextFields from '@mono/web/payload/fields/RichTextFields';
import type { GlobalConfig } from 'payload/types';

const FourOhFour: GlobalConfig = {
  slug: 'four-oh-four',
  label: '404',
  access: {
    read: () => true
  },
  fields: [...RichTextFields]
};
export default FourOhFour;
