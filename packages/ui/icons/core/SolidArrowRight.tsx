import type { SVGProps } from 'react';
import React from 'react';

function SvgSolidArrowRight(props: SVGProps<SVGSVGElement>) {
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
        d="M8 6.79512L8 28.2063C8 28.6446 8.35536 29 8.79372 29C8.92899 29 9.06202 28.9654 9.18017 28.8996L28.6463 18.0489C28.8647 17.9272 29 17.6968 29 17.4468C29 17.1958 28.8636 16.9647 28.6438 16.8434L9.17937 6.09901C9.06171 6.03406 8.92951 6 8.79512 6C8.35599 6 8 6.35599 8 6.79512Z"
        fill={color || '#0C0E0F'}
      />
    </svg>
  );
}

export default SvgSolidArrowRight;
