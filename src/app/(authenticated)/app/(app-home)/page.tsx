import { auth } from '~/auth';
import { MainContent } from '../_components/main-content';
import { CourseReviews } from './_sections/course-reviews';
import { PopularCourses } from './_sections/popular-courses';
import { RecommendedCourses } from './_sections/recd-courses';
import { ShortCourses } from './_sections/short-courses';
import { SliderBanner } from './_sections/slider-banner';

const AppHomePage = async () => {
  

  return (
    <MainContent className="sm:gap-[60px] sm:pb-[120px]">
      {/* <Banner /> */}
      <SliderBanner />
      <PopularCourses />
      <ShortCourses />
      <RecommendedCourses />
      <CourseReviews />
    </MainContent>
  );
};

export default AppHomePage;
