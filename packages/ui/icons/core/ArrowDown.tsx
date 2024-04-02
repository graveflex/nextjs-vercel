'use client';

import type { SVGProps } from 'react';
import React from 'react';

function SvgArrowDown(props: SVGProps<SVGSVGElement>) {
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
        d="M16.9998 29.7921L6.85371 19.6463L6.14661 20.3534L17.1469 31.3534L17.854 31.3534L28.854 20.3534L28.1468 19.6463L17.9998 29.7934L17.9998 3.99976L16.9998 3.99976L16.9998 29.7921Z"
        fill={color || '#0C0E0F'}
      />
    </svg>
  );
}

export default SvgArrowDown;
