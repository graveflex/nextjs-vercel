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
import RichText from '@mono/ui/components/primitives/RichText';
import RenderIcon from '@mono/ui/components/RenderIcon';
import styled, { css } from '@refract-ui/sc';
import { motion } from 'framer-motion';
import s from 'styled-components';

// UPDATE TO USE THEMECOLOR
const OuterHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  color: white;
`;

const NavContainer = styled.div<{ $open: boolean }>`
  ${({ theme: { mq }, $open }) => css`
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-areas: 'nav nav';
    overflow-x: hidden;

    ${$open &&
    css`
      grid-template-areas: 'nav nav' 'mobileButtons mobileButtons';
    `}

    ${mq.md`
      grid-template-areas: "nav buttons";
      padding: .5rem 1.875rem;
      gap: 0;
      background-color: currentColor;
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

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  align-self: end;
  justify-self: end;
`;

// UPDATE TO USE THEMECOLOR
const DesktopRow = styled.div`
  display: none;
  ${({ theme: { mq } }) => mq.md`
    grid-area: buttons;
    display: flex;
  `}
`;

const DrawerButton = styled.button`
  grid-area: openDrawer;
  background: none;
  border: none;
  font-size: 1.5rem;
  display: block;
  padding: 0.25rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: transparent;
    box-shadow: none;
  }

  &:focus {
    outline: none;
  }

  ${({ theme: { mq } }) => mq.md`
    display: none;
  `}
`;

const MobileColumn = s(motion.div)`
  ${({ theme: { mq } }) => css`
    position: absolute;
    top: 6rem;
    padding-top: 3rem;
    background-color: currentColor;
    width: 100%;
    height: 100svh;
    overflow-y: auto;

    ${mq.md`
      display: none;
    `}
  `}
`;

const Nav = styled.nav`
  padding: 0.5rem 1.5rem;
  display: grid;
  grid-area: nav;
  background-color: currentColor;
  align-items: center;
  grid-template-columns: min-content 1fr;
`;

const NavContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: currentColor;
  align-items: center;
  gap: 2rem;

  ${({ theme: { mq } }) => mq.md`
    flex-direction: row;
    gap: 1rem;
  `}
`;

const Banner = styled.div<{ $bgC: string }>`
  background-color: ${({ $bgC }) => $bgC};
  color: white;
  padding: 0.5rem 1.5rem;
  max-height: max-content;
  text-align: center;
`;

const DesktopIconLink = styled.a`
  display: none;
  ${({ theme: { mq } }) => mq.md`
    display: flex;
  `}
`;

const MobileIconLink = styled.a`
  display: flex;
  ${({ theme: { mq } }) => mq.md`
    display: none;
  `}
`;

type Buttons = {
  collapsibleMenu?: CollapsibleMenu | null;
  flatMenu?: FlatMenu | null;
  iconItems?: IconNavItems | null;
  ctaButton?: {
    cta?: CTAType;
  };
};

export type HeaderType = {
  logo?: Image | number | null;
  banner?: BannerContent | null;
  open: boolean;
  collapsibleMenu?: CollapsibleMenu | null;
  flatMenu?: FlatMenu | null;
  iconItems?: IconNavItems | null;
  ctaButton?: {
    cta?: CTAType;
  };
  setOpen: (open: boolean) => void;
};

function NavContent({
  collapsibleMenu,
  flatMenu,
  iconItems,
  ctaButton
}: Buttons) {
  return (
    <NavContentWrapper>
      {collapsibleMenu?.sections &&
        collapsibleMenu.sections.map((item) => {
          console.log('COLLAPSIBLE MENU ITEM: ', item);
          return null; // Replace this with the desired ReactNode
        })}
      {flatMenu &&
        flatMenu.map((item) => {
          return <CtaLink key={`flatmenu-${item.id}`} link={item?.link} />;
        })}
      {ctaButton && ctaButton?.cta && <CtaButton cta={ctaButton?.cta} />}
      {iconItems &&
        iconItems.map((item) => {
          return (
            <DesktopIconLink href={item.href as string} key={`icon-${item.id}`}>
              <RenderIcon {...item.icon} />
            </DesktopIconLink>
          );
        })}
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
  const openMenuVariants = {
    open: { right: '0%', display: 'block' },
    closed: { right: '-100%', display: 'none' }
  };
  return (
    <OuterHeader>
      {banner?.content && (
        <Banner $bgC={banner.background ?? 'currentColor'}>
          <RichText {...banner.content} />
        </Banner>
      )}
      <NavContainer $open={open}>
        <Nav>
          {logo && (
            <LinkStyled href="/" title="Home">
              <Logo image={logo} />
            </LinkStyled>
          )}
          <Row>
            {iconItems &&
              iconItems.map((item) => {
                return (
                  <MobileIconLink
                    href={item.href as string}
                    key={`icon-${item.id}`}
                  >
                    <RenderIcon {...item.icon} />
                  </MobileIconLink>
                );
              })}
            <DrawerButton onClick={() => setOpen(!open)} aria-label="Open Menu">
              {open ? (
                <RenderIcon name="Close" size="25" />
              ) : (
                <RenderIcon name="Hamburger" size="25" />
              )}
            </DrawerButton>
          </Row>
        </Nav>
        <DesktopRow>
          <NavContent
            collapsibleMenu={collapsibleMenu}
            flatMenu={flatMenu}
            iconItems={iconItems}
            ctaButton={ctaButton}
          />
        </DesktopRow>
        <MobileColumn
          initial={{ display: 'none' }}
          animate={open ? 'open' : 'closed'}
          variants={openMenuVariants}
          transition={{ duration: 0.25, ease: 'linear' }}
        >
          <NavContent
            collapsibleMenu={collapsibleMenu}
            flatMenu={flatMenu}
            iconItems={iconItems}
            ctaButton={ctaButton}
          />
        </MobileColumn>
      </NavContainer>
    </OuterHeader>
  );
}

export default Header;
