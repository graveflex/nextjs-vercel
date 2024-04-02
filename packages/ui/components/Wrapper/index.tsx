import React, { useMemo } from 'react';
import Image from 'next/image';
import styled, { css } from '@refract-ui/sc';
import type { DefaultTheme } from 'styled-components';

export interface WrapperProps extends React.ComponentProps<'section'> {
  backgroundColor?: keyof DefaultTheme['allColors'];
  backgroundImage?: string;
  contentWidth?: DefaultTheme['settings']['breakpointNames'][number];
  fullBleed?: boolean;
  gutter?: boolean | keyof DefaultTheme['spacingTokens'];
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

export const BackgroundImage = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

export const Content = styled.div`
  display: grid;
  grid-area: block-content;
  z-index: 1;
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
    theme: { spacingTokens, box, settings, spacing }
  }) => css`
    ${$backgroundColor && box.bg($backgroundColor)}

    ${typeof $gutter === 'string' &&
    css`
      gap: ${spacing[`${spacingTokens[$gutter]}` as keyof typeof spacing]}${settings.spacingUnits};
    `}

    ${$fullBleed &&
    css`
      justify-self: stretch;
    `}

    ${$contentWidth &&
    css`
      grid-template-areas: '. block-content .';
      grid-auto-columns: 1fr
        minmax(auto, ${getBreakpointValueByName(settings, $contentWidth)}px) 1fr;

      ${Content} {
        max-width: ${getBreakpointValueByName(settings, $contentWidth)}px;
      }
    `}

    ${!$contentWidth &&
    css`
      grid-template-areas: 'block-content';
      grid-auto-columns: 1fr;

      ${typeof $gutter === 'string' &&
      css`
        padding-left: ${spacing[
            `${spacingTokens[$gutter]}` as keyof typeof spacing
          ]}${settings.spacingUnits};
        padding-right: ${spacing[
            `${spacingTokens[$gutter]}` as keyof typeof spacing
          ]}${settings.spacingUnits};
      `}
    `}
  `}
`;

function Wrapper({ children, backgroundImage, ...props }: WrapperProps) {
  const componentProps = useMemo(() => {
    return Object.keys(props).reduce<WrapperContainerProps>(
      (coll, key) => ({
        ...coll,
        [`$${key as keyof typeof props}`]: props[key as keyof typeof props]
      }),
      {}
    );
  }, [props]);

  console.log('@-->backgroundImage', backgroundImage);

  return (
    <Container {...componentProps}>
      {!!backgroundImage && (
        <BackgroundImage
          src={backgroundImage}
          alt="background image"
          fill
          quality={80}
        />
      )}
      <Content>{children}</Content>
    </Container>
  );
}

export default Wrapper;
