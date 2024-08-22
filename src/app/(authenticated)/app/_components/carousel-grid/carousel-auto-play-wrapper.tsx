'use client';

import { PropsWithChildren } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { CarouselProps } from '@/components/ui/carousel';
import { CarouselWrapper } from '.';

const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });

export const CarouselAPWrapper = ({ children, ...others }: PropsWithChildren<CarouselProps>) => {
  return (
    <CarouselWrapper
      {...others}
      plugins={[plugin]}
      onMouseEnter={plugin.stop}
      onMouseLeave={plugin.reset}
    >
      {children}
    </CarouselWrapper>
  );
};
