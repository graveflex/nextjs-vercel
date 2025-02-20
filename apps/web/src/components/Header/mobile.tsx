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
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetClose
} from '@mono/web/components/ui/Sheet';
import { MenuIcon } from 'lucide-react';
import Logo from '@mono/web/components/Logo';
import { Button } from '@mono/web/components/ui/Button';
import { Avatar, AvatarFallback } from '@mono/web/components/ui/Avatar';
import NextLink from 'next/link';
import type { Link } from './shared';
import styles from './Header.module.css';
import { SheetHeader } from '../ui/Sheet';

function SidebarLink({ href, label, separator }: Link) {
  if (separator) {
    return null;
  }

  const displayLabel = label || 'Untitled Link';

  if (href) {
    return <NextLink href={href}>{displayLabel}</NextLink>;
  }

  return displayLabel;
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

interface MobileMenuProps {
  links: Link[];
}

function MobileMenu({ links = [] }: MobileMenuProps) {
  return (
    <div className={styles.mobileNavContainer}>
      <Sheet>
        <SheetTrigger asChild={true}>
          <Button variant="ghost">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className={styles.sheetContent}>
          <SheetHeader className={styles.sheetHeader}>
            <SheetClose asChild={true}>
              <Button variant="ghost" className="mb-0">
                <MenuIcon />
              </Button>
            </SheetClose>
            <SheetTitle className="mb-0">
              <Logo />
            </SheetTitle>
            <Avatar>
              <AvatarFallback>LH</AvatarFallback>
            </Avatar>
          </SheetHeader>

          <div className={styles.mobileNavTree}>
            <RecurseMobileMenu links={links} />
          </div>
        </SheetContent>
      </Sheet>
      <Logo />
      <Avatar>
        <AvatarFallback>LH</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default MobileMenu;
