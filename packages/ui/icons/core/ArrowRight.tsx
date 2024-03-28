'use client';

import type { SVGProps } from 'react';
import React from 'react';

function SvgArrowRight(props: SVGProps<SVGSVGElement>) {
  const { color, width, height, viewBox } = props;
  return (
    <svg
      width={width || '25'}
      height={height || '25'}
      viewBox={viewBox || '0 0 35 35'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.7927 17.0001L19.6465 6.85371L20.3536 6.14661L31.3536 17.1469L31.3536 17.854L20.3536 28.854L19.6465 28.1468L29.7933 18.0001H3.99988V17.0001H29.7927Z"
        fill={color || '#0C0E0F'}
      />
    </svg>
  );
}

export default SvgArrowRight;
