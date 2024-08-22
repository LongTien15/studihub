import React from 'react';

interface PaginationDotProps {
  isActive: boolean;
  ariaLabel: string;
  onClick: () => void;
}

export const PaginationDot = ({ isActive, ariaLabel, onClick }: PaginationDotProps) => {
  const baseClasses = 'shrink-0 w-2.5 h-2.5 rounded-full';
  const activeClasses = isActive
    ? 'bg-slate-50 rounded-[32px] w-[33px]'
    : 'bg-slate-300 bg-opacity-50';

  return (
    <span
      className={`${baseClasses} ${activeClasses}`}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
      onClick={onClick}
      onKeyDown={onClick}
    />
  );
};
