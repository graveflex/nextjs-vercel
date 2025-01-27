import type { Image as PayloadImageProps } from '@mono/types/payload-types';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import type React from 'react';

type paddingType = {
  paddingTop?: string | null;
  paddingBottom?: string | null;
};

export interface WrapperProps extends React.ComponentProps<'section'> {
  backgroundColor?: string | null;
  backgroundImage?: number | PayloadImageProps | null | undefined;
  contentWidth?: string | null;
  fullBleed?: boolean;
  gutter?: boolean | string | number;
  className?: string;
  p?: {
    xs?: paddingType;
    sm?: paddingType;
    md?: paddingType;
    lg?: paddingType;
    xl?: paddingType;
  };
}

function Wrapper({ children, backgroundImage, className }: WrapperProps) {
  return (
    <div className={className}>
      {!!backgroundImage && (
        <ResponsivePayloadImage
          image={backgroundImage}
          sizes="100%"
          className="backgroundImage"
        />
      )}
      <div>{children}</div>
    </div>
  );
}

export default Wrapper;
