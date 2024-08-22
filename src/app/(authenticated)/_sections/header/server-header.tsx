import Image from 'next/image';
import { SearchIcon, Heart, Bell } from 'lucide-react';
import Link from 'next/link';
//
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/libs/utils';
//
import { NavigationBar } from './nav-bar-v2';
import { MenuButton } from './menu-button';
import { UserProfile } from './user-profile';
import { AuthSession } from '@/core/auth/types';

export type ServerHeaderProps = {
  logo: string;
  shouldHideHeader?: boolean;
  session: AuthSession;
};

export const ServerHeader = ({ logo, shouldHideHeader, session }: ServerHeaderProps) => {
  return (
    <header
      className={cn(
        'fixed left-0 top-0 z-20 flex w-full flex-col bg-[radial-gradient(50.01%_50.01%_at_50%_45.62%,rgba(42,66,106,0.30)_0%,rgba(17,16,16,0.30)_100%)] px-0 transition-all duration-75',
        shouldHideHeader && 'hidden h-0 py-0'
      )}
    >
      <div className="container flex h-[88px] w-full items-center justify-between gap-5 backdrop-blur-[2.5px] max-md:max-w-full max-md:flex-wrap">
        <div className="flex space-x-2">
          <MenuButton />
          <Link href="/">
            <Image
              loading="lazy"
              src={logo}
              alt="Company Logo"
              width={159}
              height={0}
              className="max-w-full shrink-0"
            />
          </Link>
        </div>
        <form className="hidden rounded-3xl bg-slate-500 px-3 py-1.5 text-base leading-7 text-slate-400 max-md:flex-wrap md:flex md:h-[40px] md:w-[778px] md:items-center md:gap-3">
          <SearchIcon size={20} color="white" />
          <Input
            type="search"
            placeholder="Search for Course"
            className="h-full w-full border-none bg-transparent pl-0 !outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            aria-label="Search for Course"
          />
        </form>
        <nav className="flex items-center gap-3">
          <Button
            aria-label="Notifications"
            variant="ghost"
            size="icon"
            className="hover:bg-transparent"
          >
            <Heart size={32} color="white" />
          </Button>
          <Button
            aria-label="Messages"
            variant="ghost"
            size="icon"
            className="hover:bg-transparent"
          >
            <Bell size={32} color="white" />
          </Button>
          <UserProfile user={session.user}/>
        </nav>
      </div>
      <hr className="w-full border-b border-slate-600" />
      <NavigationBar />
    </header>
  );
};
