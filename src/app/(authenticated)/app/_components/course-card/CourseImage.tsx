import { Heart } from 'lucide-react';
import Image from 'next/image';

interface CourseImageProps {
  imageUrl: string;
  duration: string;
}

export const CourseImage = ({ imageUrl, duration }: CourseImageProps) => {
  return (
    <div className="relative flex aspect-[1.64] cursor-pointer flex-col overflow-hidden rounded-xl px-2 py-2">
      <Image
        loading="lazy"
        src={imageUrl}
        width={0}
        height={0}
        sizes="100%"
        alt="Course cover"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative flex w-[34px] items-center justify-center self-end rounded-lg p-1">
        <Heart size={26} fill="#D9D9D9" stroke="white" />
      </div>
      <div className="absolute bottom-[12px] left-[12px] mt-24 self-start rounded-lg bg-violet-950 bg-opacity-50 px-3 py-1 text-sm font-medium leading-6 text-slate-50">
        {duration}
      </div>
    </div>
  );
};
