import { Rating } from '@/components/rating';

export interface ReviewContentProps {
  courseName: string;
  rating: number;
  courseDescription: string;
}

const CourseContent = ({ courseName, rating, courseDescription }: ReviewContentProps) => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="mt-4 text-xl font-semibold leading-7 tracking-normal">{courseName}</h1>
      <Rating rating={rating} iconClassName="h-10 w-10" />
      <p className="text-xl leading-7">{courseDescription}</p>
    </section>
  );
};

export default CourseContent;
