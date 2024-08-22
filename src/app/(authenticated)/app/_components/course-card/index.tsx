import { Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CourseImage } from './CourseImage';
import { CourseInfo } from './CourseInfo';
import { TeacherInfo } from './TeacherInfo';
import { CourseStats } from './CourseStats';

export interface CourseCardProps {
  imageUrl: string;
  duration: string;
  title: string;
  progress: number;
  teacher: {
    name: string;
    avatarUrl: string;
  };
  price: string;
  stats: {
    views: number;
    likes: number;
    rating: number;
  };
  actionBtnCfg: {
    text: string;
    Icon?: typeof Gift;
  };
}

export const CourseCard = ({
  imageUrl,
  duration,
  title,
  progress,
  teacher,
  price,
  stats,
  actionBtnCfg,
}: CourseCardProps) => {
  return (
    <article className="flex shrink-0 flex-col justify-between rounded-2xl border border-solid border-slate-600 bg-[linear-gradient(270deg,rgba(52,32,94,0.40)_10.31%,rgba(129,95,145,0.60)_104.49%)] px-4 py-5 shadow-[var(--sds-size-depth-0)_var(--sds-size-depth-100)_8px_var(--sds-size-depth-negative-025)_var(--sds-color-black-200)]">
      <CourseImage imageUrl={imageUrl} duration={duration} />
      <CourseInfo title={title} progress={progress} />
      <TeacherInfo teacher={teacher} price={price} />
      <CourseStats stats={stats} />
      <Button className="mt-6 flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#9747FF] to-[#EA1187] text-white">
        {actionBtnCfg.Icon ? <actionBtnCfg.Icon color="white" size={20} /> : null}
        {actionBtnCfg.text}
      </Button>
    </article>
  );
};
