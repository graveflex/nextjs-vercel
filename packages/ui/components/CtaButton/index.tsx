import type { CTAType } from '@mono/types/payload-types';
import PayloadLink from '@mono/ui/components/primitives/PayloadLink';
import { ctaEvalHref } from '@mono/ui/utils/ctaEvalHref';
import React from 'react';

export type CtaButtonType = {
  cta: CTAType;
  submit?: boolean;
  linkType?: 'button' | 'link';
  form?: string;
};

function CtaButton({ cta, submit, linkType = 'button' }: CtaButtonType) {
  const { link } = cta;
  if (cta.variant === 'link' && linkType === 'button') {
    return (
      <PayloadLink
        href={link ? (ctaEvalHref(link) as string) : ''}
        newTab={cta?.link?.newTab as boolean}
      >
        <button type="button">{cta?.link?.label ?? cta?.link?.label}</button>
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
      <button type={submit ? 'submit' : undefined}>
        {cta?.link?.label ? cta?.link?.label : undefined}
      </button>
    </a>
  );
}

export default CtaButton;
