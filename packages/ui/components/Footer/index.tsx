'use client';

import React from 'react';
import styled from '@refract-ui/sc';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from "@mono/ui/components/primitives/RichText";
import CtaLink from '@mono/ui/components/CtaLink';
import { FooterItems } from "@mono/types/payload-types";

const Container = styled.footer`
    background: white;
    width: 100%;
    position: relative;
    bottom: 0;
    align-self: end;
`;

const ContentWrapper = styled.div`
  justify-content: center;
  justify-items: center;
  align-items: center;
  display: grid;
  gap: 2.25rem;
  grid-template-areas:
    'logo'
    'flatLinks'
    'copyright';
  padding: 1.5rem 1.875rem;

  ${({ theme: { mq } }) => mq.md`
    justify-content: space-between;
    grid-template-areas: 'logo flatLinks copyright';
  `}
`;

const Logo = styled(ResponsivePayloadImage)`
  grid-area: logo;
`;

const Copyright = styled.div`
  grid-area: copyright;
  color: black;
`;

const FlatLinkSection = styled.div`
  display: flex;
  grid-area: flatLinks;
  gap: 1.5rem;
`;

export type FooterType = FooterItems

function Footer({ footerLogo, copyright, legalDisclaimer, footerMenu }: FooterItems) {
  return <Container>
    <ContentWrapper>
      {footerLogo && <Logo image={footerLogo} />}
      {footerMenu && <FlatLinkSection>
        {footerMenu?.map((item, index) => {
          return (
            <CtaLink key={`footerLink-${index}`} {...item} />
          );
        })}
      </FlatLinkSection>}
      {copyright && <Copyright>
        <RichText {...copyright} />
      </Copyright>}
      {legalDisclaimer && <div style={{ gridArea: 'copyright' }}>
        <RichText {...legalDisclaimer} />
      </div>}
    </ContentWrapper>
  </Container>;
}

export default Footer;
