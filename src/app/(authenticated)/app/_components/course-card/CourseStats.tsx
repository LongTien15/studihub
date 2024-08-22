import { Eye, Heart, Star } from 'lucide-react';
import { ReactNode } from 'react';

interface CourseStatsProps {
  stats: {
    views: number;
    likes: number;
    rating: number;
  };
}

export const CourseStats: React.FC<CourseStatsProps> = ({ stats }) => {
  const statItems = [
    { Icon: <Eye />, value: stats.views },
    { Icon: <Heart />, value: stats.likes },
    { icon: <Star />, value: stats.rating },
  ] as Array<{ Icon: ReactNode; value: number }>;

  return (
    <div className="mt-4 flex justify-between gap-4 whitespace-nowrap px-2 text-sm leading-6 text-slate-300">
      {statItems.map(({ Icon, value }, index) => (
        <div key={index} className="flex justify-center gap-2 px-2">
          {Icon}
          <div className="text-ellipsis">{value.toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
};
