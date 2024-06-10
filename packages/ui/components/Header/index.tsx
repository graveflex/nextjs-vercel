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
  color: white;
`;

const NavContainer = styled.div`
  ${({ theme: { mq }}) => css`
    display: grid;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    grid-template-areas: 'nav nav' 'mobileButtons mobileButtons';
    background-color: currentColor;

    ${mq.md`
      grid-template-areas: "nav buttons";
      padding: .5rem 1.875rem;
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
const DesktopRow = styled.div`
  display: none;
  ${({ theme: { mq } }) => mq.md`
    grid-area: buttons;
    display: flex;
    a {
      color: black;
    }
  `}
`;

const DrawerButton = styled.button`
  grid-area: openDrawer;
  background: none;
  border: none;
  font-size: 1.5rem;
  display: block;

  ${({ theme: { mq } }) => mq.md`
    display: none;
  `}
`;

const MobileColumn = styled.div<{$open: boolean}>`
  ${({ theme: { mq }, $open }) => css`
    grid-area: mobileButtons;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: .5rem 1.5rem;
    background-color: white;

    ${$open &&
    css`
      height: 100vh;
    `}

    ${mq.md`
      display: none;
    `}
  `}
`;

const Nav = styled.nav`
  padding: .5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  grid-area: nav;
  background-color: currentColor;
  align-items: center;
`;

const NavContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: currentColor;
  align-items: center;
  gap: 1rem;

  ${({ theme: { mq } }) => mq.md`
    flex-direction: row;
  `}
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
  open: boolean;
  setOpen: (open: boolean) => void;
};

function NavContent({ collapsibleMenu, flatMenu, iconItems, ctaButton}: HeaderType) {
  return (
    <NavContentWrapper>
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
    </NavContentWrapper>
  );
}

function Header({
  logo,
  banner,
  collapsibleMenu,
  flatMenu,
  iconItems,
  ctaButton,
  open,
  setOpen
}: HeaderType) {
  return (
    <OuterHeader>
      <NavContainer>
        <Nav>
          {logo && (
            <LinkStyled href="/" title="Home">
              <Logo image={logo} />
            </LinkStyled>
          )}
          <DrawerButton onClick={() => setOpen(!open)} aria-label="Open Menu">
              {open ? "Close" : "Open"}
          </DrawerButton>
        </Nav>
        <DesktopRow>
          <NavContent
            collapsibleMenu={collapsibleMenu}
            flatMenu={flatMenu}
            iconItems={iconItems}
            ctaButton={ctaButton}
            open={open}
            setOpen={setOpen}
          />
        </DesktopRow>
        <MobileColumn $open={open}>
          {open && (
            <NavContent
              collapsibleMenu={collapsibleMenu}
              flatMenu={flatMenu}
              iconItems={iconItems}
              ctaButton={ctaButton}
              open={open}
              setOpen={setOpen}
            />
          )}
        </MobileColumn>
      </NavContainer>
    </OuterHeader>
  );
}

export default Header;
