import { ShoppingBag } from 'lucide-react';
import { CourseCard, CourseCardProps } from '../../../_components/course-card';
import { SectionHeader } from '../../../_components/section-header';
import { CarouselWrapper, CarouselContent, CarouselItem } from '../../../_components/carousel-grid';

export const ShortCourses = () => {
  return (
    <section className="flex flex-col max-md:mt-10 max-md:max-w-full">
      <CarouselWrapper>
        <SectionHeader
          icon="/images/app/home-page/ic_short_course.svg"
          title="30 minutes or less"
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

const courses: Array<CourseCardProps> = Array(4).fill({
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
    text: 'Buy Now',
    Icon: ShoppingBag,
  },
});
