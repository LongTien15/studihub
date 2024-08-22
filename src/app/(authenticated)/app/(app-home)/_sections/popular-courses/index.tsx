import { Gift } from 'lucide-react';
import { CourseCard, CourseCardProps } from '../../../_components/course-card';
import { SectionHeader } from '../../../_components/section-header';
import { CarouselWrapper, CarouselContent, CarouselItem } from '../../../_components/carousel-grid';

export const PopularCourses = () => {
  return (
    <section className="flex flex-col max-md:mt-10 max-md:max-w-full">
      <CarouselWrapper>
        <SectionHeader
          icon="/images/app/home-page/ic_popular_course.svg"
          title="Popular on Studihub Learning"
          shouldShowCarouselActions
        />
        <div className="mt-6 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <CarouselContent>
              {courses.map((cProps, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/4">
                  <CourseCard {...cProps} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </div>
      </CarouselWrapper>
    </section>
  );
};

const courses: Array<CourseCardProps> = Array(10).fill({
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
    text: 'Start Course for Free!',
    Icon: Gift,
  },
} as CourseCardProps);
