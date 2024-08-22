import { CarouselContent, CarouselItem } from '../../../_components/carousel-grid';
import { CarouselAPWrapper } from '../../../_components/carousel-grid/carousel-auto-play-wrapper';
import { SectionHeader } from '../../../_components/section-header';
import { ReviewCard, ReviewCardProps } from './review-card';

export const CourseReviews = () => {
  return (
    <section className="flex flex-col max-md:mt-10 max-md:max-w-full">
      <CarouselAPWrapper>
        <SectionHeader
          icon="/images/app/home-page/ic_learner.svg"
          title="Learners' reviews"
          showSeeAll={false}
        />
        <div className="mt-6 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <CarouselContent>
              {reviews.map((rProps, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <ReviewCard {...rProps} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </div>
      </CarouselAPWrapper>
    </section>
  );
};

const reviews: Array<ReviewCardProps> = Array(4).fill({
  userAvatar: '/images/app/home-page/learner_avt.png',
  username: 'Username',
  location: 'Vietnam',
  courseName: 'Course Name',
  courseDescription:
    'Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis',
  rating: 4,
} as ReviewCardProps);
