'use client';

import type { SVGProps } from 'react';
import React from 'react';

function SvgSolidArrowUp(props: SVGProps<SVGSVGElement>) {
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
        d="M6.79512 27L28.2063 27C28.6446 27 29 26.6446 29 26.2063C29 26.071 28.9654 25.938 28.8996 25.8198L18.0489 6.35369C17.9272 6.13534 17.6968 6 17.4468 6C17.1958 6 16.9647 6.13644 16.8434 6.35618L6.09901 25.8206C6.03406 25.9383 6 26.0705 6 26.2049C6 26.644 6.35599 27 6.79512 27Z"
        fill={color || '#3E660A'}
      />
    </svg>
  );
}

export default SvgSolidArrowUp;
