import React, { PropsWithChildren } from 'react';
import { cn } from '@/libs/utils';

export const MainContent = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  return (
    <main
      className={cn(
        'container mt-8 flex w-full flex-col gap-8 self-center pb-[60px] max-md:max-w-full',
        className
      )}
    >
      {children}
    </main>
  );
};
