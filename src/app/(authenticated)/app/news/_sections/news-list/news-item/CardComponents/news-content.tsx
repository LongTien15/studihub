import { CardContent } from '@/components/ui/card';
import React from 'react';

interface NewsContentProps {
  title: string;
  description: string;
  author: string;
}

export const NewsContent = ({ title, description, author }: NewsContentProps) => {
  return (
    <div className="flex w-full grow flex-col text-white max-md:max-w-full">
      <h2 className="text-ellipsis text-lg font-semibold leading-7 max-md:max-w-full">{title}</h2>
      <p className="mt-3 line-clamp-1 text-ellipsis text-sm leading-6 text-slate-300 max-md:max-w-full">
        {description}
      </p>
      <p className="mt-3 text-base leading-6 max-md:max-w-full">{author}</p>
    </div>
  );
};
