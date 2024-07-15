import type { GalleryGridBlockT } from '@mono/types/payload-types';

import imageFn from '../../../bin/seed_images';

export const galleryGridBlockSchema = async () => {
  const images = await imageFn();
  return {
    id: '6669d7bd6d58e03f8e7c107c',
    blockName: 'Gallery Grid Block',
    blockType: 'galleryGridBlock',
    blockConfig: {
      contentWidth: 'xxl'
    },
    galleryImages: [
      { id: '0', image: images[0].id },
      { id: '1', image: images[1].id },
      { id: '2', image: images[3].id },
      { id: '3', image: images[3].id }
    ]
  } as GalleryGridBlockT;
};
