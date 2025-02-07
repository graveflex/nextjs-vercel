import type {
  CTAType,
  CollapsibleMenu,
  FlatMenu,
  IconNavItems,
  Image
} from '@mono/types/payload-types';
import NextLink from 'next/link';
import {
  Button,
  buttonVariants,
  type ButtonProps
} from '@mono/web/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuHoverTrigger
} from '@mono/web/components/ui/DropdownMenu';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent
} from '@mono/web/components/ui/NavigationMenu';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarSeparator
} from '@mono/web/components/ui/Sidebar';
import React, { useState } from 'react';
import styles from './Header.module.css';

export type HeaderType = {
  logo?: Image | number | null;
  collapsibleMenu?: CollapsibleMenu | null;
  flatMenu?: FlatMenu | null;
  iconItems?: IconNavItems | null;
  ctaButton?: {
    cta?: CTAType;
  };
};

type Link = {
  label?: string | null;
  href?: string;
  separator?: boolean;
  links?: Link[];
  variant?: ButtonProps['variant'];
};

const data: Link[] = [
  {
    label: 'Shallow Nested',
    links: [
      {
        label: 'Link one',
        href: '/link-one'
      },
      {
        label: 'Link two',
        href: '/link-two'
      }
    ]
  },
  {
    label: 'Deep Nested',
    links: [
      {
        label: 'My Account',
        href: '/account',
        links: [
          {
            label: 'Profile',
            href: '/profile'
          },
          {
            label: 'Billing',
            href: '/billing'
          },
          {
            label: 'Settings',
            href: '/settings'
          },
          {
            label: 'Invite Users',
            links: [
              {
                label: 'Email',
                href: '/email'
              },
              {
                label: 'Message',
                href: '/message'
              },
              {
                separator: true
              },
              {
                label: 'More...',
                links: [
                  {
                    label: 'Option 1',
                    href: '/option-1'
                  },
                  {
                    label: 'Option 2',
                    href: '/option-2'
                  },
                  {
                    separator: true
                  },
                  {
                    label: 'Even more...',
                    links: [
                      {
                        label: 'Option A',
                        href: '/option-a'
                      },
                      {
                        label: 'Option B',
                        href: '/option-b'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            label: 'Log out',
            href: '/logout'
          }
        ]
      },
      {
        separator: true
      },
      {
        label: 'Settings',
        href: '/settings'
      }
    ]
  },
  {
    label: 'Flat',
    href: '/flat'
  }
];

function SidebarLink({ href, label, separator }: Link) {
  if (separator) {
    return null;
  }

  const displayLabel = label || 'Untitled Link';

  if (href) {
    return <NextLink href={href}>{displayLabel}</NextLink>;
  }

  return <a>{displayLabel}</a>;
}

function TopLevelMobileDropdownContainer({
  links,
  level = 0
}: { links: Link[]; level?: number }) {
  return (
    <SidebarMenu>
      {links.map((link, i) =>
        link.separator ? (
          <SidebarSeparator key={`sidebar-separator-${level}-${i}`} />
        ) : (
          <SidebarMenuItem key={`sidebar-item-${level}-${i}`}>
            <SidebarMenuButton asChild={true}>
              <SidebarLink {...link} />
            </SidebarMenuButton>
            {link.links?.length ? (
              <RecurseMobileMenu links={link.links} level={level + 1} />
            ) : null}
          </SidebarMenuItem>
        )
      )}
    </SidebarMenu>
  );
}

function DesktopDropdownLink({
  href,
  label,
  separator,
  variant = 'link'
}: Link) {
  if (separator) {
    return <DropdownMenuSeparator />;
  }

  const displayLabel = label || 'Untitled Link';

  if (href) {
    return (
      <NextLink href={href} className={buttonVariants({ variant })}>
        {displayLabel}
      </NextLink>
    );
  }

  return <Button variant={variant}>{displayLabel}</Button>;
}

function TopLevelDesktopDropdownContainer({
  links,
  level
}: { links: Link[]; level: number }) {
  return links.map((link, i) =>
    link.links?.length ? (
      <DropdownMenu key={`menu-${level}-${i}`}>
        <DropdownMenuHoverTrigger asChild={true}>
          <DesktopDropdownLink variant="outline" {...link} />
        </DropdownMenuHoverTrigger>
        <DropdownMenuContent>
          <RecurseDesktopMenu links={link.links} level={1} />
        </DropdownMenuContent>
      </DropdownMenu>
    ) : (
      <DesktopDropdownLink
        key={`menu-link-${level}-${i}`}
        variant="link"
        {...link}
      />
    )
  );
}

function NestedDesktopDropdownContainer({
  links,
  level
}: { links: Link[]; level: number }) {
  return (
    <DropdownMenuGroup>
      {links.map((link, i) =>
        link.links?.length ? (
          <DropdownMenuSub key={`submenu-${level}-${i}`}>
            <DropdownMenuSubTrigger>{link.label}</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <RecurseDesktopMenu links={link.links} level={level + 1} />
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        ) : link.separator ? (
          <DropdownMenuSeparator key={`separator-${level}-${i}`} />
        ) : (
          <DropdownMenuItem key={`link-${level}-${i}`}>
            {link.label}
          </DropdownMenuItem>
        )
      )}
    </DropdownMenuGroup>
  );
}

function NestedMobileDropdownContainer({
  links,
  level
}: { links: Link[]; level: number }) {
  return (
    <SidebarMenuSub>
      {links.map((link, i) =>
        link.separator ? null : (
          <SidebarMenuSubItem key={`sidebar-subitem-${level}-${i}`}>
            <SidebarMenuSubButton asChild={true}>
              <SidebarLink {...link} />
            </SidebarMenuSubButton>
            {link.links?.length ? (
              <RecurseMobileMenu links={link.links} level={level + 1} />
            ) : null}
          </SidebarMenuSubItem>
        )
      )}
    </SidebarMenuSub>
  );
}

function RecurseMobileMenu({
  links = [],
  level = 0
}: { links: Link[]; level?: number }) {
  const Container =
    level === 0
      ? TopLevelMobileDropdownContainer
      : NestedMobileDropdownContainer;
  return <Container level={level} links={links} />;
}

function RecurseDesktopMenu({
  links = [],
  level = 0
}: { links: Link[]; level?: number }) {
  const Container =
    level === 0
      ? TopLevelDesktopDropdownContainer
      : NestedDesktopDropdownContainer;
  return <Container level={level} links={links} />;
}

function Header() {
  return (
    <header className={styles.container}>
      <RecurseDesktopMenu links={data} />
      <RecurseMobileMenu links={data} />
    </header>
  );
}

export default Header;
