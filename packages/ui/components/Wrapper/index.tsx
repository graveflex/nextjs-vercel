import type { Image as PayloadImageProps } from '@mono/types/payload-types';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import type React from 'react';
import { useMemo } from 'react';
import type { DefaultTheme } from 'styled-components';

type paddingType = {
  paddingTop?: string | null;
  paddingBottom?: string | null;
};

export interface WrapperProps extends React.ComponentProps<'section'> {
  backgroundColor?:
    | keyof DefaultTheme['allColors']
    | keyof DefaultTheme['themeColors']
    | keyof DefaultTheme['colorTokens']
    | null;
  backgroundImage?: number | PayloadImageProps | null | undefined;
  contentWidth?:
    | DefaultTheme['settings']['breakpointNames'][number]
    | 'full'
    | null;
  fullBleed?: boolean;
  gutter?: boolean | keyof DefaultTheme['spacingTokens'];
  className?: string;
  p?: {
    xs?: paddingType;
    sm?: paddingType;
    md?: paddingType;
    lg?: paddingType;
    xl?: paddingType;
  };
}

function Wrapper({
  children,
  backgroundImage,
  className,
  gutter,
  backgroundColor,
  fullBleed,
  contentWidth,
  p
}: WrapperProps) {
  const componentProps = useMemo(() => {
    return {
      $gutter: gutter,
      $backgroundColor: backgroundColor,
      $fullBleed: fullBleed,
      $contentWidth: contentWidth,
      $p: p
    };
  }, [gutter, backgroundColor, fullBleed, contentWidth, p]);

  return (
    <div className={className} {...componentProps}>
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
