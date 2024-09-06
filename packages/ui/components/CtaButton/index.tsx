'use client';

import type { CTAType } from '@mono/types/payload-types';
import Button from '@mono/ui/components/Button';
import type { IconProps } from '@mono/ui/components/RenderIcon';
import PayloadLink from '@mono/ui/components/primitives/PayloadLink';
import { ctaEvalHref } from '@mono/ui/utils/ctaEvalHref';
import React from 'react';
import type { DefaultTheme } from 'styled-components';

type colorProps = keyof DefaultTheme['allColors'];
type colorTokenProps = keyof DefaultTheme['colorTokens'];

export type CtaButtonType = {
  cta: CTAType;
  submit?: boolean;
  linkType?: 'button' | 'link';
  color?: colorProps | colorTokenProps;
  form?: string;
};

function CtaButton({
  cta,
  form,
  color,
  submit,
  linkType = 'button'
}: CtaButtonType) {
  const icon: IconProps = { ...cta?.link?.icon, color: 'currentColor' };
  const { link } = cta;
  if (cta.variant === 'link' && linkType === 'button') {
    return (
      <PayloadLink
        href={link ? (ctaEvalHref(link) as string) : ''}
        newTab={cta?.link?.newTab as boolean}
      >
        <Button
          $color={color || 'primary'}
          $variant={cta?.variant || 'link'}
          icon={icon}
        >
          {cta?.link?.label ?? cta?.link?.label}
        </Button>
      </PayloadLink>
    );
  }

  if (cta.variant === 'link' && linkType === 'link') {
    return (
      <PayloadLink
        href={link ? (ctaEvalHref(link) as string) : ''}
        newTab={cta?.link?.newTab as boolean}
      >
        {cta?.link?.label ?? cta?.link?.label}
      </PayloadLink>
    );
  }

  return (
    <a
      href={link ? (ctaEvalHref(link) as string) : ''}
      target={cta?.link?.newTab ? '_blank' : ''}
      rel="noreferrer"
    >
      <Button
        $color={color || 'primary'}
        $variant={cta?.variant || 'solid'}
        $form={form}
        icon={icon}
        element="button"
        type={submit ? 'submit' : undefined}
      >
        {cta?.link?.label ? cta?.link?.label : undefined}
      </Button>
    </a>
  );
}

export default CtaButton;
