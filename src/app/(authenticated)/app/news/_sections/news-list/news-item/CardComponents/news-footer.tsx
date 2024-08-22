import { Clock, Eye } from 'lucide-react';

interface NewsFooterProps {
  date: string;
  views: number;
}

export const NewsFooter = ({ date, views }: NewsFooterProps) => {
  return (
    <div className="mt-3 flex gap-5 whitespace-nowrap pr-20 text-xs font-medium leading-5 text-slate-400 max-md:flex-wrap max-md:pr-5">
      <div className="flex items-center gap-2">
        <Clock size={16} />
        <div className="text-ellipsis">{date}</div>
      </div>
      <div className="flex items-center gap-2">
        <Eye size={16} />
        <div className="text-ellipsis">{views}</div>
      </div>
    </div>
  );
};
