import dynamic from 'next/dynamic';

const core = {
  // InsertIconDict
  PlusSign: dynamic(() => import('./PlusSign')),
  Quote: dynamic(() => import('./Quote'))
};

export default core;
