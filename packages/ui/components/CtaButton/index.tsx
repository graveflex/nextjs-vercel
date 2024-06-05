'use client';

import React from 'react';
import type { CTAType, File, Page } from '@mono/types/payload-types';
import Button from '@mono/ui/components/Button';
import PayloadLink from '@mono/ui/components/primitives/PayloadLink';
import type { IconProps } from '@mono/ui/components/RenderIcon';
import type { DefaultTheme } from 'styled-components';

type colorProps = keyof DefaultTheme['allColors'];
type colorTokenProps = keyof DefaultTheme['colorTokens'];

export type CtaButtonType = {
  cta: CTAType;
  linkType?: 'button' | 'link';
  color?: colorProps | colorTokenProps;
};

function CtaButton({ cta, color, linkType = 'button' }: CtaButtonType) {
  const evalHref = () => {
    switch (cta.type) {
      case 'internal':
        return (cta?.internalHref as Page)?.slug;
      case 'external':
        return cta.externalHref;
      case 'email':
        return `mailto:${cta.emailHref}`;
      case 'phone':
        return `tel:${cta.phoneHref}`;
      case 'file':
        return (cta?.fileHref as File)?.url;
      default:
        return `/`;
    }
  };
  const icon: IconProps = { ...cta.icon, color: 'currentColor' };

  if (cta.variant === 'link' && linkType === 'button') {
    return (
      <PayloadLink href={evalHref() as string} newTab={cta?.newTab as boolean}>
        <Button
          $color={color || 'secondary'}
          $variant={cta?.variant || 'link'}
          icon={icon}
        >
          {cta?.label || 'Call to Action'}
        </Button>
      </PayloadLink>
    );
  }

  if (cta.variant === 'link' && linkType === 'link') {
    return (
      <PayloadLink href={evalHref() as string} newTab={cta?.newTab as boolean}>
        {cta?.label || 'Call to Action'}
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
        href={evalHref() as string}
        target={cta?.newTab ? '_blank' : ''}
        rel="noreferrer"
      >
        {cta?.label || 'Call to Action'}
      </a>
    </Button>
  );
}

export default CtaButton;
