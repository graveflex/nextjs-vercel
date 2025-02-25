import type { SVGProps } from 'react';
import React from 'react';

function SvgCaretLeft(props: SVGProps<SVGSVGElement>) {
  const { color, width, height, viewBox } = props;
  return (
    <svg
      width={width || '25'}
      height={height || '25'}
      viewBox={viewBox || '0 0 25 25'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.14648 12.8536V12.1465L15.1465 5.14648L15.8536 5.85359L9.20714 12.5L15.8536 19.1465L15.1465 19.8536L8.14648 12.8536Z"
        fill={color || '#0C0E0F'}
      />
    </svg>
  );
}

export default SvgCaretLeft;
