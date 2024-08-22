import { Menubar, MenubarMenu, MenubarTrigger } from '@radix-ui/react-menubar';

export const HorizontalNavbar = () => {
  return (
    <Menubar className="hidden w-full items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white backdrop-blur-[2.5px] max-md:max-w-full max-md:px-5 md:flex">
      <MenubarMenu>
        <MenubarTrigger className="whitespace-nowrap rounded bg-slate-900 px-4 py-2">
          Explore
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="px-4 py-2">Course Category</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="whitespace-nowrap px-4 py-2">News</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="px-4 py-2">Learn to Earn</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="px-4 py-2">Earn a Certificate</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};
