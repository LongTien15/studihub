'use client';

import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';
import { Pagination } from './pagination';

const plugin = Autoplay({
  delay: 3000,
  stopOnFocusIn: false,
  stopOnMouseEnter: false,
  stopOnInteraction: false,
});

export function SliderBanner() {
  return (
    <Carousel
      className="w-full"
      plugins={[plugin]}
      onMouseEnter={plugin.stop}
      onMouseLeave={plugin.reset}
    >
      <CarouselContent>
        {banners.map(({ image, link }, index) => (
          <CarouselItem key={index}>
            <Link href={link as any} className="inline-block h-full w-full">
              <div className="w-full overflow-hidden rounded-2xl sm:rounded-[32px]">
                <Image
                  src={image}
                  alt={`banner ${index + 1}`}
                  width={0}
                  height={0}
                  sizes="100%"
                  className="h-full w-full"
                />
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-8 flex w-full justify-center">
        <Pagination totalDots={banners.length} />
      </div>
    </Carousel>
  );
}

const banners: Array<{ image: string; link: string }> = [
  {
    image: '/images/app/home-page/slide_banner_1.png',
    link: '#',
  },
  {
    image: '/images/app/home-page/slide_banner_2.png',
    link: '#',
  },
  {
    image: '/images/app/home-page/slide_banner_1.png',
    link: '#',
  },
];
