'use client';

import type { SVGProps } from 'react';
import React from 'react';

function SvgPlusSign(props: SVGProps<SVGSVGElement>) {
  const { color, width, height, viewBox } = props;
  return (
    <svg
      width={width || '25'}
      height={height || '25'}
      viewBox={viewBox || '0 0 35 35'}
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 4H17V17H4V18H17V31H18V18H31V17H18V4Z"
        fill={color || '#0C0E0F'}
      />
    </svg>
  );
}

export default SvgPlusSign;
