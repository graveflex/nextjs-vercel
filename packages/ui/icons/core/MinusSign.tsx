import type { SVGProps } from 'react';
import React from 'react';

function SvgMinusSign(props: SVGProps<SVGSVGElement>) {
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
      <path d="M4 17H31V18H4V17Z" fill={color || '#0C0E0F'} />
    </svg>
  );
}

export default SvgMinusSign;
