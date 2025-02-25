import type { SVGProps } from 'react';
import React from 'react';

function SvgError(props: SVGProps<SVGSVGElement>) {
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
      <g clipPath="url(#clip0_3211_13437)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25ZM14 4.92308C14 4.41328 13.5867 4 13.0769 4H11.9231C11.4133 4 11 4.41328 11 4.92308L11.955 15.502C11.9805 15.784 12.2169 16 12.5 16C12.7831 16 13.0195 15.784 13.045 15.502L14 4.92308ZM14 19.5C14 20.3284 13.3284 21 12.5 21C11.6716 21 11 20.3284 11 19.5C11 18.6716 11.6716 18 12.5 18C13.3284 18 14 18.6716 14 19.5Z"
          fill={color || '#0C0E0F'}
        />
      </g>
      <defs>
        <clipPath id="clip0_3211_13437">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgError;
