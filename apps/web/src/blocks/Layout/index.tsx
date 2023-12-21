"use client";

import React, { PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import { css, styled } from "styled-components";

import Button from "ui/components/Button";

import isExpandedDoc from "@web/lib/isExpandedDoc";
import { Layout, Media } from "@web/payload/payload-types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  ${({
    theme: {
      mq: { lg },
    },
  }) => lg`
    flex-direction: row;
    gap: unset;
  `}
`;

const MenuLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const MenuLink = styled.p`
  ${({ theme: { colors } }) => css`
    color: ${colors.white};
  `}
  && {
    font-size: 17px;
    font-style: normal;
    text-decoration: none;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.17px;
    margin: 0;
    padding: 0;
  }
`;

function MenuLinks({ links }: { links: Layout["headerItems"] }) {
  return (
    <MenuLinksContainer>
      {links?.map((link) =>
        link?.type === "button" ? (
          <Button key={`FooterLink-${link?.title}`}>{link?.title}</Button>
        ) : (
          <Link key="MenuLink" href={link?.url}>
            <MenuLink>{link?.title}</MenuLink>
          </Link>
        )
      )}
    </MenuLinksContainer>
  );
}

function Layout({
  logo,
  footerItems,
  headerItems,
  children,
}: PropsWithChildren<Layout>) {
  return (
    <>
      <Wrapper>
        {isExpandedDoc<Media>(logo) && (
          <Image width={193} height={17} src={logo?.url || ""} alt="Logo" />
        )}

        <MenuLinks links={headerItems} />
      </Wrapper>
      {children}
      <Wrapper>
        <MenuLinks links={footerItems} />
        <MenuLink>{new Date().getFullYear()} All rights reserved</MenuLink>
      </Wrapper>
    </>
  );
}

export default Layout;
