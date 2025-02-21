import type { FooterItems } from '@mono/types/payload-types';
import CtaLink from '@mono/ui/components/CtaLink';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/ui/components/primitives/RichText';
import React from 'react';

export type FooterType = FooterItems & { className?: string };

function Footer({
  footerLogo,
  copyright,
  legalDisclaimer,
  footerMenu,
  className
}: FooterType) {
  return (
    <div className={className}>
      <div>This is the footer</div>
      <div>
        {footerLogo && (
          <ResponsivePayloadImage image={footerLogo} sizes="200px" />
        )}
        {footerMenu && (
          <div>
            {footerMenu?.map((item) => {
              return <CtaLink key={`footerLink-${item.id}`} {...item} />;
            })}
          </div>
        )}
        {copyright && (
          <div>
            <RichText {...copyright} />
          </div>
        )}
        {legalDisclaimer && (
          <div style={{ gridArea: 'copyright' }}>
            <RichText {...legalDisclaimer} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Footer;
