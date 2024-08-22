import { Clock, Eye } from 'lucide-react';
import React from 'react';

interface NewsCardProps {
  imageSrc: string;
  title: string;
  author: string;
  date: string;
  views: string;
  isLarge?: boolean;
}

export const NewsCard = ({
  imageSrc,
  title,
  author,
  date,
  views,
  isLarge = false,
}: NewsCardProps) => {
  return (
    <article
      className={`relative flex flex-col overflow-hidden ${isLarge ? 'pt-20' : 'pt-16'} w-full ${isLarge ? 'min-h-[500px]' : 'h-[238px]'} max-md:max-w-full`}
    >
      <img
        loading="lazy"
        src={imageSrc}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className={`relative flex flex-col px-6 pb-8 pt-10 ${isLarge ? 'mt-40' : ''} max-md:px-5 ${isLarge ? 'max-md:mt-10' : ''} max-md:max-w-full`}
      >
        <h2
          className={`${isLarge ? 'text-3xl' : 'text-lg'} font-semibold ${isLarge ? 'leading-9 tracking-tight' : 'leading-7'} text-white ${isLarge ? 'max-md:max-w-full' : 'text-ellipsis'}`}
        >
          {title}
        </h2>
        {isLarge && (
          <p className="mt-4 text-base leading-7 text-white max-md:max-w-full">
            🚀 Embrace the future of education with our AI and blockchain-powered platform. Stay
            tuned for exciting updates!
            <br />
            Studihub: Building a transparent, secure, and accessible learning ecosystem. Explore
            today!
          </p>
        )}
        <div
          className={`flex gap-5 ${isLarge ? 'pr-20' : 'justify-between'} mt-4 ${isLarge ? 'max-md:flex-wrap max-md:pr-5' : ''} font-medium`}
        >
          <div
            className={`${isLarge ? 'text-base font-semibold leading-6' : 'text-sm leading-5'} text-white`}
          >
            {author}
          </div>
          <div className="flex justify-between gap-4 whitespace-nowrap text-xs leading-5 text-slate-400">
            <div className="flex gap-2">
              <Clock size={16} />
              <div className="text-ellipsis">{date}</div>
            </div>
            <div className="flex gap-2">
              <Eye size={16} />
              <div className="text-ellipsis">{views}</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
