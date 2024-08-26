import type { Image as PayloadImageProps } from '@mono/types/payload-types';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import styled, { css } from '@refract-ui/sc';
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

type WrapperContainerProps = {
  [K in keyof WrapperProps as `$${K}`]: WrapperProps[K];
};

const getBreakpointValueByName = (
  settings: DefaultTheme['settings'],
  name: DefaultTheme['settings']['breakpointNames'][number]
) => {
  const idx = settings.breakpointNames.indexOf(name);
  return settings.breakpointValues[idx];
};

const BackgroundImage = styled(ResponsivePayloadImage)`
  && {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 10;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-area: block-content;
  z-index: 20;
`;

const Container = styled.section<WrapperContainerProps>`
  display: grid;
  max-width: 100vw;
  justify-content: stretch;
  position: relative;

  ${({
    $gutter = 'blockH',
    $backgroundColor,
    $fullBleed = true,
    $contentWidth,
    $p,
    theme: { spacingTokens, box, settings, spacing, mq }
  }) => css`
    ${
      $p?.xs &&
      ($p?.xs?.paddingTop || $p?.xs?.paddingBottom) &&
      css`
      padding-top: ${$p?.xs?.paddingTop || 'initial'};
      padding-bottom: ${$p?.xs?.paddingBottom || 'initial'};
    `
    }

    ${mq.md`
      ${
        $p?.md &&
        ($p?.md?.paddingTop || $p?.md?.paddingBottom) &&
        css`
          padding-top: ${$p?.md?.paddingTop || 'initial'};
          padding-bottom: ${$p?.md?.paddingBottom || 'initial'};
        `
      }
    `}

    ${mq.lg`
      ${
        $p?.lg &&
        ($p?.lg?.paddingTop || $p?.lg?.paddingBottom) &&
        css`
          padding-top: ${$p?.lg?.paddingTop || 'initial'};
          padding-bottom: ${$p?.lg?.paddingBottom || 'initial'};
        `
      }
    `}

    ${mq.xl`
      ${
        $p?.xl &&
        ($p?.xl?.paddingTop || $p?.xl?.paddingBottom) &&
        css`
          padding-top: ${$p?.xl?.paddingTop || 'initial'};
          padding-bottom: ${$p?.xl?.paddingBottom || 'initial'};
        `
      }
    `}

    ${$backgroundColor && box.bg($backgroundColor)}

    ${
      typeof $gutter === 'string' &&
      css`
      gap: ${spacing[`${spacingTokens[$gutter]}` as keyof typeof spacing]}${settings.spacingUnits};
    `
    }

    ${
      $fullBleed &&
      css`
      justify-self: stretch;
    `
    }

    ${
      $contentWidth &&
      $contentWidth !== 'full' &&
      css`
      grid-template-areas: '. block-content .';
      grid-auto-columns: 1fr
        minmax(auto, ${getBreakpointValueByName(settings, $contentWidth)}px) 1fr;

      ${Content} {
        max-width: ${getBreakpointValueByName(settings, $contentWidth)}px;
      }
    `
    }

    ${
      $contentWidth &&
      $contentWidth === 'full' &&
      css`
      grid-template-areas: 'block-content';
      grid-auto-columns: 1fr;
      padding-right: 0;
      padding-left: 0;
    `
    }

    ${
      !$contentWidth &&
      css`
      grid-template-areas: 'block-content';
      grid-auto-columns: 1fr;

      ${
        typeof $gutter === 'string' &&
        css`
        padding-left: ${
          spacing[`${spacingTokens[$gutter]}` as keyof typeof spacing]
        }${settings.spacingUnits};
        padding-right: ${
          spacing[`${spacingTokens[$gutter]}` as keyof typeof spacing]
        }${settings.spacingUnits};
      `
      }
    `
    }
  `}
`;

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
    <Container className={className} {...componentProps}>
      {!!backgroundImage && (
        <BackgroundImage image={backgroundImage} className="backgroundImage" />
      )}
      <Content>{children}</Content>
    </Container>
  );
}

export default Wrapper;
