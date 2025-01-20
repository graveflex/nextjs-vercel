import type { SVGProps } from 'react';
import React from 'react';

function SvgCaretRight(props: SVGProps<SVGSVGElement>) {
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
        d="M16.8536 12.1465V12.8536L9.85359 19.8536L9.14648 19.1465L15.7929 12.5L9.14649 5.85359L9.85359 5.14648L16.8536 12.1465Z"
        fill={color || '#0C0E0F'}
      />
    </svg>
  );
}

export default SvgCaretRight;
