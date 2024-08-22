import { NewsImage } from './news-image';
import { NewsContent } from './news-content';
import { NewsFooter } from './news-footer';

export interface NewsItemProps {
  imageSrc: string;
  title: string;
  description: string;
  author: string;
  date: string;
  views: number;
}

export const NewsItem = ({ imageSrc, title, description, author, date, views }: NewsItemProps) => {
  return (
    <article className="self-stretch rounded-xl border border-solid border-slate-600 bg-[linear-gradient(270deg,rgba(52,32,94,0.40)_10.31%,rgba(129,95,145,0.60)_104.49%)]">
      <div className="flex max-md:flex-col">
        <NewsImage src={imageSrc} />
        <div className="flex flex-col px-4 py-3 max-md:ml-0 max-md:w-full">
          <NewsContent title={title} description={description} author={author} />
          <NewsFooter date={date} views={views} />
        </div>
      </div>
    </article>
  );
};
