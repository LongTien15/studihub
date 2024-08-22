'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
//
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
//
import { cn } from '@/libs/utils';
//
import { NAV_ITEMS } from './constants';

export function NavigationBar() {
  const pathname = usePathname();
  return (
    <NavigationMenu className="hidden w-full max-w-full items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white backdrop-blur-[2.5px] max-md:px-5 md:flex">
      <NavigationMenuList className="space-x-8">
        {NAV_ITEMS.map((route) => (
          <NavigationMenuItem key={route.label}>
            <Link href={{ pathname: route.href }} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  route.href === pathname && 'bg-slate-600',
                  'text-base font-semibold'
                )}
              >
                {route.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
