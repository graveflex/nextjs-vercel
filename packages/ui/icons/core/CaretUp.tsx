import type { SVGProps } from 'react';
import React from 'react';

function SvgCaretUp(props: SVGProps<SVGSVGElement>) {
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
        d="M12.1465 9H12.8536L19.8536 16L19.1465 16.7071L12.5 10.0607L5.85359 16.7071L5.14648 16L12.1465 9Z"
        fill={color || '#0C0E0F'}
      />
    </svg>
  );
}

export default SvgCaretUp;
