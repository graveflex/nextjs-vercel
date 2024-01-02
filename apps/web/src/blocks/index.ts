import dynamic from 'next/dynamic';

import HeroSchema from './HeroBlock/schema';

const schemas = {
  HeroSchema
};

export const HeroBlock = dynamic(() => import('./HeroBlock')) as React.FC;

export default schemas;
