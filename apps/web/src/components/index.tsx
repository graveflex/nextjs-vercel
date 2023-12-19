import dynamic from 'next/dynamic';

export const ImageWithContent = dynamic(() => import('./ImageWithContent'), {
  ssr: true
}) as React.FC;

// CODE INJECTION COMMENT
export const Hero = dynamic(() => import('./Hero'), {
  ssr: true
}) as React.FC;
