'use client';

import type { SVGProps } from 'react';
import React from 'react';

function SvgArrowNesting(props: SVGProps<SVGSVGElement>) {
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
        d="M5 6H4V17V18H5H29.7934L19.6466 28.1467L20.3538 28.8538L31.3538 17.8538L31.3538 17.1467L20.3538 6.14648L19.6466 6.85358L29.7928 17H5V6Z"
        fill={color || '#3E660A'}
      />
    </svg>
  );
}

export default SvgArrowNesting;
