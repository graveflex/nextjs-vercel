'use client';

import React from 'react';
import type { CTAType } from '@mono/types/payload-types';
import Button from '@mono/ui/components/Button';
import PayloadLink from '@mono/ui/components/primitives/PayloadLink';
import type { IconProps } from '@mono/ui/components/RenderIcon';
import { ctaEvalHref } from '@mono/ui/utils/ctaEvalHref';
import type { DefaultTheme } from 'styled-components';

type colorProps = keyof DefaultTheme['allColors'];
type colorTokenProps = keyof DefaultTheme['colorTokens'];

export type CtaButtonType = {
  cta: CTAType;
  linkType?: 'button' | 'link';
  color?: colorProps | colorTokenProps;
};

function CtaButton({ cta, color, linkType = 'button' }: CtaButtonType) {
  const icon: IconProps = { ...cta.link.icon, color: 'currentColor' };
  const { link } = cta;
  if (cta.variant === 'link' && linkType === 'button') {
    return (
      <PayloadLink
        href={ctaEvalHref(link) as string}
        newTab={cta?.link.newTab as boolean}
      >
        <Button
          $color={color || 'secondary'}
          $variant={cta?.variant || 'link'}
          icon={icon}
        >
          {cta?.link.label || 'Call to Action'}
        </Button>
      </PayloadLink>
    );
  }

  if (cta.variant === 'link' && linkType === 'link') {
    return (
      <PayloadLink
        href={ctaEvalHref(link) as string}
        newTab={cta?.link.newTab as boolean}
      >
        {cta?.link.label || 'Call to Action'}
      </PayloadLink>
    );
  }

  return (
    <Button
      $color={color || 'secondary'}
      $variant={cta?.variant || 'rounded-outline'}
      icon={icon}
    >
      <a
        href={ctaEvalHref(link) as string}
        target={cta?.link.newTab ? '_blank' : ''}
        rel="noreferrer"
      >
        {cta?.link.label || 'Call to Action'}
      </a>
    </Button>
  );
}

export default CtaButton;
