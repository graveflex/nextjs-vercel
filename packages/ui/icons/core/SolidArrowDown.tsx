'use client';

import type { SVGProps } from 'react';
import React from 'react';

function SvgSolidArrowDown(props: SVGProps<SVGSVGElement>) {
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
        d="M28.2049 8L6.79372 8C6.35536 8 6 8.35536 6 8.79372C6 8.92899 6.03457 9.06202 6.10043 9.18017L16.9511 28.6463C17.0728 28.8647 17.3032 29 17.5532 29C17.8042 29 18.0353 28.8636 18.1566 28.6438L28.901 9.17937C28.9659 9.06171 29 8.92951 29 8.79512C29 8.35599 28.644 8 28.2049 8Z"
        fill={color || '#0C0E0F'}
      />
    </svg>
  );
}

export default SvgSolidArrowDown;
