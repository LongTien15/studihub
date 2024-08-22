import Image from 'next/image';
import React from 'react';

interface NewsImageProps {
  src: string;
}

export const NewsImage = ({ src }: NewsImageProps) => {
  return (
    <Image
      loading="lazy"
      src={src}
      alt="news avatar"
      width={0}
      height={0}
      sizes="100"
      objectFit="cover"
      className="w-full shrink-0 grow rounded-t-xl sm:w-60 sm:!rounded-r-none sm:rounded-l-xl"
    />
  );
};
