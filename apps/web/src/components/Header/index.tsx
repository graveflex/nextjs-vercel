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
import { DropdownMenuSeparator } from '@mono/web/components/ui/DropdownMenu';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuItem
} from '@mono/web/components/ui/NavigationMenu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarSeparator
} from '@mono/web/components/ui/Sidebar';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@mono/web/components/ui/HoverCard';
import type React from 'react';
import { ChevronRight } from 'lucide-react';
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
    label: 'Flat-1',
    href: '/flat-1'
  },
  {
    label: 'Flat-2',
    href: '/flat-2'
  },
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
}: Link & { children?: React.ReactNode }) {
  if (separator) {
    return <DropdownMenuSeparator className={styles.separator} />;
  }

  const displayLabel = label || 'Untitled Link';

  if (href) {
    return (
      <NextLink href={href} className={`${buttonVariants({ variant })} px-0`}>
        {displayLabel}
      </NextLink>
    );
  }

  return displayLabel;
}

function TopLevelDesktopDropdownContainer({
  links,
  level
}: { links: Link[]; level: number }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {links.map((link, i) =>
          link.links?.length ? (
            <NavigationMenuItem key={`menu-${level}-${i}`} className="relative">
              <NavigationMenuTrigger>
                <DesktopDropdownLink
                  variant="link"
                  {...link}
                ></DesktopDropdownLink>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <RecurseDesktopMenu links={link.links} level={1} />
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={`menu-${level}-${i}`}>
              <DesktopDropdownLink
                key={`menu-link-${level}-${i}`}
                variant="link"
                {...link}
              />
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function NestedDesktopDropdownContainer({
  links,
  level
}: { links: Link[]; level: number }) {
  return (
    <ul className={styles.list}>
      {links.map((link, i) => (
        <li
          key={`submenu-${level}-${i}`}
          className={link.separator ? '' : styles.item}
        >
          {link.links?.length ? (
            <HoverCard openDelay={0}>
              <HoverCardTrigger className={styles.trigger}>
                <div className="flex items-center gap-2 justify-between">
                  {link.label} <ChevronRight size={12} />
                </div>
              </HoverCardTrigger>
              <HoverCardContent
                side="right"
                className={styles.hoverCard}
                sideOffset={20}
              >
                <RecurseDesktopMenu links={link.links} level={level + 1} />
              </HoverCardContent>
            </HoverCard>
          ) : link.separator ? (
            <DropdownMenuSeparator className={styles.separator} />
          ) : (
            link.label
          )}
        </li>
      ))}
    </ul>
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
