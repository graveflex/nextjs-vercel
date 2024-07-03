import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import CTA from '@mono/web/payload/fields/CTA';
import type { Block } from 'payload';

const GalleryGridBlock: Block = {
  slug: 'galleryGridBlock',
  interfaceName: 'GalleryGridBlockT',
  fields: [
    BlockConfig(),
    {
      type: 'array',
      name: 'galleryImages',
      label: 'Gallery Images',
      minRows: 4,
      maxRows: 8,
      fields: [
        {
          type: 'upload',
          name: 'image',
          relationTo: 'images',
          label: 'Image'
        }
      ]
    },
    CTA()
  ]
};

export default GalleryGridBlock;
