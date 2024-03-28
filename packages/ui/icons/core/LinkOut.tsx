'use client';

import type { SVGProps } from 'react';
import React from 'react';

function SvgLinkOut(props: SVGProps<SVGSVGElement>) {
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
        d="M30.5001 4L31.0001 4.5L31.0001 17.9997H30.0001L30.0001 5.70713L10.3537 25.3536L9.64656 24.6464L29.293 5H17.0003V4H30.5001ZM23 30.5001V21.0001H22V30.0001H5L5 13.0001H14V12.0001H4.5L4 12.5001V30.5001L4.5 31.0001H22.5L23 30.5001Z"
        fill={color || '#0C0E0F'}
      />
    </svg>
  );
}

export default SvgLinkOut;
