'use client';

import type { SVGProps } from 'react';
import React from 'react';

function SvgArrowUp(props: SVGProps<SVGSVGElement>) {
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
        d="M18.0001 5.20777L28.1463 15.3537L28.8534 14.6466L17.8531 3.6466L17.146 3.64661L6.14605 14.6466L6.85315 15.3537L17.0001 5.20675L17.0001 31.0001L18.0001 31.0001L18.0001 5.20777Z"
        fill={color || '#0C0E0F'}
      />
    </svg>
  );
}

export default SvgArrowUp;
