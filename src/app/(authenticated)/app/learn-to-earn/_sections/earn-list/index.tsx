import { Gift } from 'lucide-react';
import { CourseCard, CourseCardProps } from '../../../_components/course-card';
import Pagination from '../../../_components/pagination';
import { SectionHeader } from '../../../_components/section-header';

export const EarnList = () => {
  return (
    <section className="flex flex-col max-md:mt-10 max-md:max-w-full">
      <SectionHeader
        icon="/images/icons/ic_studihub_50x40.png"
        title="Earn your Studihubs"
        showSeeAll={false}
      />
      <div className="mt-6 max-md:max-w-full">
        <div className="flex flex-wrap gap-x-5 gap-y-3 max-md:flex-col sm:gap-x-8 sm:gap-y-6">
          {courses.map((cProps, idx) => (
            <div key={idx} className="max-w-[320px] basis-full md:basis-1/2 lg:basis-1/4">
              <CourseCard {...cProps} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 sm:mt-[60px]">
        <Pagination currentPage={1} totalPages={10} />
      </div>
    </section>
  );
};

const courses: Array<CourseCardProps> = Array(12).fill({
  title: 'Blockchain 101: Learn about blockchain for beginners',
  imageUrl: '/images/app/home-page/course_avt.png',
  duration: '12h 30m',
  price: '4.52 STH',
  progress: 50,
  stats: {
    views: 1234,
    likes: 1123,
    rating: 4.5,
  },
  teacher: {
    name: 'Teacher',
    avatarUrl: 'https://github.com/shadcn.png',
  },
  actionBtnCfg: {
    text: 'Earn 12 Points',
    Icon: Gift,
  },
});
