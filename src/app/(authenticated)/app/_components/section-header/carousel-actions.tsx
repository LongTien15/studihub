'use client ';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselNext, CarouselPrevious, useCarousel } from '@/components/ui/carousel';

export const CarouselActions = () => {
  const { canScrollNext, canScrollPrev } = useCarousel();
  return canScrollNext || canScrollPrev ? (
    <div className="flex gap-3">
      <CarouselPrevious className={carouselBtnClasses} icon={<ChevronLeft size={16} />} />
      <CarouselNext className={carouselBtnClasses} icon={<ChevronRight size={16} />} />
    </div>
  ) : null;
};

const carouselBtnClasses =
  'static flex h-10 w-10 translate-x-0 translate-y-0 items-center justify-center rounded-[96px] border border-solid border-slate-600 bg-gray-700 p-3 text-gray-400 hover:bg-[#4C1AB6] hover:text-gray-50';
