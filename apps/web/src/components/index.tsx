import dynamic from 'next/dynamic';

export const ImageWithContent = dynamic(
  () => import('./ImageWithContent')
) as React.FC;

// CODE INJECTION COMMENT
export const Hero = dynamic(() => import('./Hero')) as React.FC;
