'use client';

import { ComponentProps } from 'react';
import {
  Carousel,
  CarouselContent as UICarouselContent,
  CarouselItem as UICarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/libs/utils';

export const CarouselWrapper = ({children, ...others}: ComponentProps<typeof Carousel>) => {
  return (
    <Carousel
      {...others}
      className={cn('w-full')}
      opts={{
        align: 'end',
        ...others.opts,
      }}
    >
      {children}
    </Carousel>
  );
};

export const CarouselContent = ({
  className,
  children,
  ...others
}: ComponentProps<typeof UICarouselContent>) => {
  return (
    <UICarouselContent {...others} className={cn('-ml-8', className)}>
      {children}
    </UICarouselContent>
  );
};

export const CarouselItem = ({
  className,
  children,
  ...others
}: ComponentProps<typeof UICarouselItem> & {}) => {
  return (
    <UICarouselItem {...others} className={cn('basis-full pl-8', className)}>
      {children}
    </UICarouselItem>
  );
};
