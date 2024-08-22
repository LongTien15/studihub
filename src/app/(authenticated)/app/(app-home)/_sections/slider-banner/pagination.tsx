'use client';

import { useCarousel } from '@/components/ui/carousel';
import { PaginationDot } from './pagination-dot';

interface PaginationProps {
  totalDots: number;
}

export const Pagination = ({ totalDots }: PaginationProps) => {
  const { api } = useCarousel();

  return (
    <nav className="flex gap-2" aria-label="Pagination">
      {Array.from({ length: totalDots }).map((_, index) => (
        <PaginationDot
          key={index}
          isActive={index === api?.selectedScrollSnap()}
          ariaLabel={`Page ${index + 1}`}
          onClick={() => api!.scrollTo(index)}
        />
      ))}
    </nav>
  );
};
