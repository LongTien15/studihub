import { MainContent } from '../_components/main-content';
import { NewsList } from './_sections/news-list';
import { NewsGrid } from './_sections/news-grid';

const NewsPage = () => {
  return (
    <MainContent className="pb-[30px] sm:gap-[60px] sm:pb-[80px]">
      <NewsGrid />
      <NewsList />
    </MainContent>
  );
};

export default NewsPage;
