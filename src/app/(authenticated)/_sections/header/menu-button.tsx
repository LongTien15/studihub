import Link from 'next/link';
import { Menu } from 'lucide-react';
//
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NAV_ITEMS } from './constants';

type Props = {};

export const MenuButton = (_props: Props) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="h-6 w-6 sm:hidden" color="white" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] text-white">
        <SheetTitle className="hidden">Navigation bar on mobile</SheetTitle>
        <SheetDescription className="hidden">This is only shown on mobile</SheetDescription>
        <nav className="flex flex-col gap-4">
          {NAV_ITEMS.map((route) => (
            <Link
              key={route.label}
              href={{ pathname: route.href }}
              className="block px-2 py-1 text-lg"
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
