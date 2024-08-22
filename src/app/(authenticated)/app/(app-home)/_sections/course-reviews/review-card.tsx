import UserInfo from './user-info';
import ReviewContent, { ReviewContentProps } from './review-content';

export type ReviewCardProps = ReviewContentProps & {
  username: string;
  location: string;
  userAvatar: string;
};

export const ReviewCard = ({
  username,
  userAvatar,
  location,
  courseName,
  rating,
  courseDescription,
}: ReviewCardProps) => {
  return (
    <article className="flex max-w-[437px] flex-col rounded-[32px] bg-[linear-gradient(270deg,rgba(52,32,94,0.40)_10.31%,rgba(129,95,145,0.60)_104.49%)] p-4 px-4 py-5 text-slate-50 shadow-sm">
      <UserInfo username={username} location={location} avatarUrl={userAvatar} />
      <ReviewContent
        courseName={courseName}
        rating={rating}
        courseDescription={courseDescription}
      />
    </article>
  );
};
