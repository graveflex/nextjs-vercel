import dynamic from 'next/dynamic';

import HeroSchema from './HeroBlock/schema';
import ImageWithContentBlockSchema from './ImageWithContentBlock/schema';

const schemas = {
  HeroSchema,
  ImageWithContentBlockSchema
};

export const HeroBlock = dynamic(() => import('./HeroBlock')) as React.FC;
export const ImageWithContentBlock = dynamic(
  () => import('./ImageWithContentBlock')
) as React.FC;

export default schemas;
