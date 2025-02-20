import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarSeparator
} from '@mono/web/components/ui/Sidebar';
import NextLink from 'next/link';
import type { Link } from './shared';
import styles from './Header.module.css';

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
              <MobileMenu links={link.links} level={level + 1} />
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
              <MobileMenu links={link.links} level={level + 1} />
            ) : null}
          </SidebarMenuSubItem>
        )
      )}
    </SidebarMenuSub>
  );
}

function MobileMenu({
  links = [],
  level = 0
}: { links: Link[]; level?: number }) {
  const Container =
    level === 0
      ? TopLevelMobileDropdownContainer
      : NestedMobileDropdownContainer;

  return (
    <div className={styles.mobileNavContainer}>
      <Container level={level} links={links} />
    </div>
  );
}

export default MobileMenu;
