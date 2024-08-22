'use client';

import {
  Pagination as UIPagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from '@/components/ui/pagination';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const onPageChange = (page: number) => {};

  return (
    <UIPagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </UIPagination>
  );
};

export default Pagination;
