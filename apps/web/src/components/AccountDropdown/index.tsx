'use client';

import { signOut } from 'next-auth/react';
import { useDeleteCookie } from 'cookies-next';
import { useCookieValue } from '@mono/web/lib/useCookieValue';
import { useEffect, useState } from 'react';
import type { User } from '@mono/types/payload-types';
import Link from 'next/link';
import { PAYLOAD_USER_TYPE_COOKIE_NAME } from '@mono/web/lib/constants';
import styles from './AccountDropdown.module.css';
import { LoaderIcon } from 'lucide-react';
import { Button } from '@mono/web/components/ui/Button';
import { Avatar, AvatarFallback } from '@mono/web/components/ui/Avatar';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from '@mono/web/components/ui/NavigationMenu';

async function loadUserData() {
  const meUserReq = await fetch('/api/users/me');
  const { user } = await meUserReq.json();
  return user;
}

function AccountDropdown() {
  const deleteCookie = useDeleteCookie();
  const userType = useCookieValue(PAYLOAD_USER_TYPE_COOKIE_NAME);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (userType) {
      setLoading(true);

      (async () => {
        const nextUser = await loadUserData();
        setUser(nextUser);
        setLoading(false);
      })();
    } else {
      setUser(null);
      setLoading(false);
    }
  }, [userType]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <LoaderIcon size="1.5rem" className="animate-spin" />
      </div>
    );
  }

  if (user) {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger disableHoverStyles={true}>
              <Avatar className={styles.avatar}>
                <AvatarFallback>{user.email.substring(0, 2)}</AvatarFallback>
              </Avatar>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <Link href="/account" legacyBehavior={true} passHref={true}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Account
                </NavigationMenuLink>
              </Link>

              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                onClick={async () => {
                  await signOut();
                  deleteCookie(PAYLOAD_USER_TYPE_COOKIE_NAME);
                }}
              >
                Sign Out
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }

  return (
    <Button className={styles.signIn} type="button" asChild={true}>
      <Link href="/login">Sign In</Link>
    </Button>
  );
}

export default AccountDropdown;
