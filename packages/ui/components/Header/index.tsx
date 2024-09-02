'use client';

import type {
  CTAType,
  CollapsibleMenu,
  FlatMenu,
  IconNavItems,
  Image
} from '@mono/types/payload-types';
import CtaButton from '@mono/ui/components/CtaButton';
import CtaLink from '@mono/ui/components/CtaLink';
import RenderIcon from '@mono/ui/components/RenderIcon';
import Link from '@mono/ui/components/primitives/PayloadLink';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import styled, { css } from '@refract-ui/sc';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import s from 'styled-components';

// UPDATE TO USE THEMECOLOR
const OuterHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  ${({ theme: { allColors } }) => css`
    color: ${allColors.dark};
    background-color: ${allColors.bg};
  `}
`;

const NavContainer = styled.div<{ $open: boolean; $scrolled: boolean }>`
  ${({ theme: { mq }, $open, $scrolled }) => css`
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-areas: 'nav nav';
    overflow-x: hidden;
    padding: 1rem 1.25rem;
    border-bottom: ${$scrolled ? '1px solid black' : 'none'};

    ${
      $open &&
      css`
      grid-template-areas: 'nav nav' 'mobileButtons mobileButtons';
    `
    }

    ${mq.lg`
      grid-template-areas: "nav buttons";
      gap: 0;
    `}
  `}
`;

const NextLinkStyled = styled(Link)`
  ${({ theme: { allColors } }) => css`
    && {
      position: relative;
      color: ${allColors.fg};
      letter-spacing: 0.3px;
      transition: all 0.3s ease;
      span {
        transition: 0.3s ease;
        border-bottom: 1px solid transparent;
      }
      text-decoration: none;
      &:hover {
        span {
          border-bottom: 1px solid ${allColors.fg};
        }
        color: ${allColors.fg};
      }
    }
  `}
`;

const Logo = styled(ResponsivePayloadImage)`
  width: 0;
  img {
    object-fit: contain;
    max-width: 122px;
  }
  grid-area: logo;
  ${({ theme: { mq } }) => mq.lg`
    display: block;
    img {
      max-width: unset;
    }
  `}
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  align-self: center;
  justify-self: end;
`;

// UPDATE TO USE THEMECOLOR
const DesktopRow = styled.div`
  display: none;
  ${({ theme: { mq } }) => mq.lg`
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
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: transparent !important;
    box-shadow: none !important;
  }

  &:focus {
    outline: none;
    background-color: transparent !important;
    box-shadow: none !important;
  }
`;

const DrawerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  ${({ theme: { mq } }) => mq.lg`
    display: none;
  `}
`;

const CtaWrapper = styled.div`
  display: none;
  margin: 0 1rem;
  ${({ theme: { mq } }) => mq.lg`
    display: flex;
  `}
`;

const MobileColumn = s(motion.div)`
  ${({ theme: { mq, allColors } }) => css`
    position: absolute;
    top: 5.25rem;
    padding-top: 2rem;
    width: 100%;
    //Height of header subtracted from height of page
    height: calc(100svh - 84px);
    overflow-y: auto;
    background-color: ${allColors.bg};

    ${mq.lg`
      // Need to use '!important' here to get specificity over inline styles loaded through 'variants' 
      display: none !important;
    `}
  `}
`;

const Nav = styled.nav`
  margin: auto;
  width: 100%;
  display: grid;
  grid-area: nav;
  align-items: center;
  grid-template-columns: min-content 1fr;
`;

const NavContentWrapper = styled.div`
  ${({ theme: { mq } }) => css`
    width: 100%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 0 1.25rem;

    ${mq.lg`
      flex-direction: row;
      align-items: center;
      gap: 1.5rem;
    `}
  `}
`;

const DesktopIconLink = styled.a`
  display: none;
  ${({ theme: { mq } }) => mq.lg`
    display: flex;
  `}
`;

const MobileIconLink = styled.a`
  display: flex;
  ${({ theme: { mq } }) => mq.lg`
    display: none;
  `}
`;

const ItemWrapper = styled.div`
  ${({ theme: { mq } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    ${mq.lg`
      gap: 0.5rem;
    `}
  `}
`;

const NavDropdownWrapper = styled.div`
  display: none;
  ${({ theme: { mq, allColors } }) => mq.lg`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    background-color: ${allColors.bg};
    padding: 1.5rem 1.63rem;
    align-items: center;
    z-index: 5;
    position: absolute;
    top: 4rem;
  `}
`;

const MobileNavDropdownWrapper = styled.div<{ $open: boolean }>`
  ${({ theme: { mq }, $open }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
    transition: 0.3s ease;

    opacity: ${$open ? '1' : '0'};
    visibility: ${$open ? 'visible' : 'hidden'};
    height: ${$open ? 'auto' : '0'};
    overflow: hidden;

    ${mq.lg`
      display: none;
    `}
  `}
`;

const ItemLabel = styled.div`
  display: none;
  font-weight: 600;
  transition: 0.3s ease;
  ${({ theme: { mq, allColors } }) => mq.lg`
    display: flex;
    gap: 0.5rem;
    letter-spacing: 0.3px;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid transparent;
    &:hover {
      cursor: pointer;
      color: ${allColors.fg};
    }
  `}
`;

const LocaleLabel = styled.div`
  display: none;
  transition: 0.3s ease;
  ${({ theme: { mq, allColors } }) => mq.lg`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid transparent;
    &:hover {
      cursor: pointer;
      color: ${allColors.fg};
    }
  `}
`;

const MobileItemLabel = s(ItemLabel)`
  ${({ theme: { allColors, box } }) => css`
    && {
      display: grid;
      font-weight: 400;
      transition: 0.3s ease;
    }
    svg {
      margin-top: -0.25rem;
    }
    grid-template-columns: 1fr min-content;
    width: 100%;
    justify-content: space-around;
    border-bottom: 1px solid currentColor;
    &:hover {
      cursor: pointer;
      border-bottom: 1px solid currentColor;
      color: ${allColors.fg};
    }
    ${box.t('h4')};
    padding-bottom: 2rem;
    ${({ theme: { mq } }) => mq.lg`
      && {
        display: none;
      }
    `}
  `}
`;

const MenuLink = s(CtaLink)`
  ${({ theme: { mq, box } }) => css`
    && {
      font-weight: 400;
      ${box.t('h4')};
      ${mq.lg`
      ${box.t('menuLink')};
      letter-spacing: 0.3px;
    `}
    }
  `}
`;

const MenuNavLink = s(CtaLink)`
  ${({ theme: { mq, box } }) => css`
    && {
      font-weight: 400;
      ${box.t('h4')};
      ${mq.lg`
      ${box.t('menuLink')};
      letter-spacing: 0.3px;
      border-bottom: none;
      &:hover {
        border-bottom: none;
      }
    `}
    }
  `}
`;

const MenuLinkMobile = s(CtaLink)`
  font-weight: 600;
`;

const NavDropdownItem = styled.div<{ $open: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem 0;
  transition: 0.3s ease;
  &:last-child {
    margin-top: auto;
  }
  ${({ $open }) => css`
    ${
      $open &&
      css`
      .mobileItemLabel {
        display: grid;
        border-bottom: none;
        svg {
          transform: rotate(180deg);
          transition: transform 0.25s;
        }
      }

      .mobileNavDropdownWrapper {
        border-bottom: 1px solid currentColor;
        padding-bottom: 1.5rem;
      }

      .mobileLocaleLabel {
        margin-top: auto;
        svg {
          transform: rotate(180deg);
          transition: transform 0.25s;
        }
      }
    `
    }
  `}

  ${({ theme: { mq } }) => mq.lg`
    width: unset;
    height: 100%;
    justify-content: center;
    &:last-child {
      margin-top: unset;
      min-width: 4.875rem;
    }

    ${NavDropdownWrapper} {
      visibility: hidden;
      opacity: 0;
      transition: 0.3s ease;
    }

    &:hover ${NavDropdownWrapper} {
      visibility: visible;
      opacity: 1;
    }

    &:hover ${ItemLabel} {
      svg {
        transform: rotate(180deg);
        transition: transform 0.25s;
      }
    }

    &:hover ${LocaleLabel} {
      & > svg {
        transform: rotate(180deg);
        transition: transform 0.25s;
      }
    }
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
  const [curr, setCurr] = useState<string | null | undefined>('');
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <NavContentWrapper>
      {collapsibleMenu?.sections &&
        collapsibleMenu.sections.map((item) => {
          const itemIsOpen = !!openDropdown && item.id === curr;
          return (
            <NavDropdownItem
              key={`collapsible-${item.id}`}
              $open={!!itemIsOpen}
            >
              <ItemWrapper>
                <ItemLabel>
                  <p>{item.label}</p>
                  <RenderIcon name="CaretDown" size="20" />
                </ItemLabel>
                <MobileItemLabel
                  className="mobileItemLabel"
                  onClick={() => {
                    setOpenDropdown(
                      !openDropdown ? !openDropdown : openDropdown
                    );
                    setCurr(item.id === curr ? '' : item.id);
                  }}
                >
                  <p>{item.label}</p>
                  <RenderIcon name="CaretDown" size="30" />
                </MobileItemLabel>
                <NavDropdownWrapper className="dropdown-content">
                  {item?.links &&
                    item.links.map((link) => {
                      return (
                        <MenuLink key={`link-${link.id}`} link={link.link} />
                      );
                    })}
                </NavDropdownWrapper>
                <MobileNavDropdownWrapper
                  className="mobileNavDropdownWrapper"
                  $open={!!itemIsOpen}
                >
                  {item?.links &&
                    item.links.map((link) => {
                      return (
                        <MenuLinkMobile
                          key={`link-${link.id}`}
                          link={link.link}
                        />
                      );
                    })}
                </MobileNavDropdownWrapper>
              </ItemWrapper>
            </NavDropdownItem>
          );
        })}
      {flatMenu &&
        flatMenu.map((item) => {
          return <MenuNavLink key={`flatmenu-${item.id}`} link={item?.link} />;
        })}
      <CtaWrapper>
        {ctaButton && ctaButton?.cta && <CtaButton cta={ctaButton?.cta} />}
      </CtaWrapper>
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
  collapsibleMenu,
  flatMenu,
  iconItems,
  ctaButton
}: HeaderType) {
  const openMenuVariants = {
    open: { right: '0%', display: 'block' },
    closed: { right: '-100%', display: 'none' }
  };

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <OuterHeader>
      <NavContainer $open={open} $scrolled={scrolled}>
        <Nav>
          {logo && (
            <NextLinkStyled href="/" prefetch={false} title="Home">
              <Logo image={logo} />
            </NextLinkStyled>
          )}
          <Row>
            {iconItems &&
              iconItems.map((item) => {
                return (
                  <MobileIconLink
                    href={item.href as string}
                    key={`mobileicon-${item.id}`}
                  >
                    <RenderIcon {...item.icon} />
                  </MobileIconLink>
                );
              })}

            <DrawerWrapper>
              {ctaButton && ctaButton?.cta && (
                <CtaButton cta={ctaButton?.cta} />
              )}
              <DrawerButton
                onClick={() => setOpen(!open)}
                aria-label="Open Menu"
              >
                {open ? (
                  <RenderIcon name="Close" size="25" />
                ) : (
                  <RenderIcon name="Hamburger" size="25" />
                )}
              </DrawerButton>
            </DrawerWrapper>
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
