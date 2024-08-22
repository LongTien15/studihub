'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
//
import { Button } from '@/components/ui/button';
import { CarouselActions } from './carousel-actions';

type SectionHeaderProps = {
  icon: string;
  title: string;
  showSeeAll?: boolean;
  shouldShowCarouselActions?: boolean;
};

export const SectionHeader = ({
  icon,
  title,
  showSeeAll = true,
  shouldShowCarouselActions = false,
}: SectionHeaderProps) => {
  return (
    <div className="flex w-full items-center justify-between gap-2 max-md:max-w-full max-md:flex-wrap">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-4 self-start text-3xl font-semibold leading-9 tracking-tight text-slate-50">
          <Image
            loading="lazy"
            src={icon}
            width={0}
            height={0}
            sizes="100%"
            alt={`${title}'s icon`}
            className="aspect-square w-10 shrink-0"
          />
          <div>{title}</div>
        </div>
        {showSeeAll && (
          <Button
            variant="ghost"
            className="flex justify-center gap-2.5 rounded-md bg-opacity-0 from-[#9747FF] to-[#EA1187] px-4 py-2 text-sm font-medium leading-6 text-white hover:bg-gradient-to-r"
          >
            <span>See all</span>
            <ArrowRight size={16} />
          </Button>
        )}
      </div>
      {shouldShowCarouselActions ? <CarouselActions /> : null}
    </div>
  );
};
