'use client';

import type { SVGProps } from 'react';
import React from 'react';

function SvgArrowLeft(props: SVGProps<SVGSVGElement>) {
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
        d="M5.20716 17.0002L15.3536 6.85358L14.6465 6.14648L3.64648 17.1467L3.64649 17.8538L14.6465 28.8538L15.3536 28.1467L5.20711 18.0002H31V17.0002H5.20716Z"
        fill={color || '#0C0E0F'}
      />
    </svg>
  );
}

export default SvgArrowLeft;
