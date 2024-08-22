import { MainContent } from '../_components/main-content';
import { Banner } from './_sections/banner';
import { EarnList } from './_sections/earn-list';

const LearnToEarnPage = () => {
  return (
    <MainContent className="pb-[30px] sm:gap-[60px] sm:pb-[80px]">
      <Banner />
      <EarnList />
    </MainContent>
  );
};

export default LearnToEarnPage;
