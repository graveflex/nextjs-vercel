'use client';

import React from 'react';
import type {
  BannerContent,
  CollapsibleMenu,
  CTAType,
  FlatMenu,
  IconNavItems,
  Image
} from '@mono/types/payload-types';
import CtaButton from '@mono/ui/components/CtaButton';
import CtaLink from '@mono/ui/components/CtaLink';
import Link from '@mono/ui/components/primitives/PayloadLink';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import styled, { css } from '@refract-ui/sc';

const OuterHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  max-height: 5rem;
`;

const NavContainer = styled.div<{ $open: boolean }>`
  ${({ theme: { mq }, $open }) => css`
    display: grid;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    grid-template-areas: 'logo buttons';
    padding: .5rem 2rem;
    gap: 2rem;

    ${$open &&
    css`
      grid-template-areas:
        'logo mobileClose'
        'buttons buttons';
      gap: 1rem;
    `}

    ${mq.md`
      grid-template-areas: "logo buttons";
      gap: 0;
    `}
  `}
`;

const LinkStyled = styled(Link)`
  position: relative;
`;

const Logo = styled(ResponsivePayloadImage)`
  width: 0;
  img {
    object-fit: contain;
  }
  grid-area: logo;
  ${({ theme: { mq } }) => mq.md`
    display: block;
  `}
`;

// UPDATE TO USE THEMECOLOR
const Row = styled.div`
  display: flex;
  gap: 1rem;
  grid-area: buttons;
  align-items: center;
  a {
    color: white;
  }
`;

export type HeaderType = {
  logo?: Image | number | null;
  banner?: BannerContent | null;
  collapsibleMenu?: CollapsibleMenu | null;
  flatMenu?: FlatMenu | null;
  iconItems?: IconNavItems | null;
  ctaButton?: {
    cta: CTAType;
  };
};

function Header({
  logo,
  banner,
  collapsibleMenu,
  flatMenu,
  iconItems,
  ctaButton
}: HeaderType) {
  return (
    <OuterHeader>
      <NavContainer $open={false}>
        {logo && (
          <LinkStyled href="/" title="Home">
            <Logo image={logo} />
          </LinkStyled>
        )}
        <Row>
          {collapsibleMenu?.sections &&
            collapsibleMenu.sections.map((item, index) => {
              // console.log('COLLAPSIBLE MENU ITEM: ', item);
              return null; // Replace this with the desired ReactNode
            })}
          {flatMenu &&
            flatMenu.map((item, index) => {
              return <CtaLink key={`flatmenu-${index}`} link={item.link} />;
            })}
          {iconItems &&
            iconItems.map((item, index) => {
              // console.log('ICON ITEM: ', item);
              return null; // Replace this with the desired ReactNode
            })}
          {ctaButton && ctaButton.cta && <CtaButton cta={ctaButton.cta} />}
        </Row>
      </NavContainer>
    </OuterHeader>
  );
}

export default Header;
