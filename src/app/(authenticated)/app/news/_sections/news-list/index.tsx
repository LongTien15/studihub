import { NewsItem, NewsItemProps } from './news-item/CardComponents';
import Pagination from '../../../_components/pagination';
import { SectionHeader } from '../../../_components/section-header';

export const NewsList = () => {
  return (
    <section className="flex flex-col max-md:mt-10 max-md:max-w-full">
      <SectionHeader
        icon="/images/icons/ic_studihub_50x40.png"
        title="News from Studihub"
        showSeeAll={false}
      />
      <div className="mt-6 max-md:max-w-full">
        <div className="flex flex-col gap-6">
          {news.map((cProps, idx) => (
            <div key={idx}>
              <NewsItem {...cProps} />
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

const news: Array<NewsItemProps> = Array(12).fill({
  imageSrc: '/images/app/news-page/news_avt.png',
  title:
    'Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
  description:
    'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.',
  author: 'Studiohub',
  date: '26/07/2024',
  views: 1234,
});
