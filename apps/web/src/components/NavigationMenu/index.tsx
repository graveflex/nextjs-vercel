import {
  NavigationMenu,
  NavigationMenuSub,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent
} from '@radix-ui/react-navigation-menu';
import type { ButtonProps } from '@mono/web/components/ui/Button';
import styles from './NavigationMenu.module.css';

export type Link = {
  label?: string | null;
  href?: string;
  separator?: boolean;
  links?: Link[];
  variant?: ButtonProps['variant'];
};

export interface NavigationMenuProps {
  link: Link;
}

const NestedNavigationMenu = (_props: NavigationMenuProps) => {
  return (
    <NavigationMenu className={styles.container}>
      <NavigationMenu className={styles.menu}>
        <NavigationMenuItem className={styles.item}>
          <NavigationMenuTrigger className={styles.trigger}>
            Item one
          </NavigationMenuTrigger>
          <NavigationMenuContent className={styles.content}>
            Item one content
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className={styles.item}>
          <NavigationMenuTrigger className={styles.trigger}>
            Item two
          </NavigationMenuTrigger>
          <NavigationMenuContent className={styles.content}>
            <NavigationMenuSub className={styles.sub} defaultValue="sub1">
              <NavigationMenuList className={styles.menu}>
                <NavigationMenuItem className={styles.item} value="sub1">
                  <NavigationMenuTrigger className={styles.trigger}>
                    Sub item one
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className={styles.content}>
                    Sub item one content
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className={styles.item} value="sub2">
                  <NavigationMenuTrigger className={styles.trigger}>
                    Sub item two
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className={styles.content}>
                    Sub item two content
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenuSub>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>
    </NavigationMenu>
  );
};

export default NestedNavigationMenu;
