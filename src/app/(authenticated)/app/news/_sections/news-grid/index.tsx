import React from 'react';
import { NewsCard } from './news-card';

const mainNews = {
  imageSrc: '/images/app/news-page/news_1.png',
  title:
    "Don't miss the opportunity to increase your income and strive for financial independence with us! ⚡️💰🚀",
  author: 'Studihub Team',
  date: '26/07/2024',
  views: '1234',
};

const sideNews = [
  {
    imageSrc: '/images/app/news-page/news_2.png',
    title:
      "Don't miss the opportunity to increase your income and strive for financial independence with us!",
    author: 'Studihub Team',
    date: '26/07/2024',
    views: '1234',
  },
  {
    imageSrc: '/images/app/news-page/news_3.png',
    title:
      "Don't miss the opportunity to increase your income and strive for financial independence with us!",
    author: 'Studihub Team',
    date: '26/07/2024',
    views: '1234',
  },
];

export const NewsGrid = () => {
  return (
    <main className="flex gap-5 max-md:flex-col">
      <section className="flex w-[67%] flex-col max-md:ml-0 max-md:w-full">
        <div className="flex grow flex-col justify-center max-md:mt-8 max-md:max-w-full">
          <NewsCard {...mainNews} isLarge />
        </div>
      </section>
      <aside className="ml-5 flex w-[33%] flex-col max-md:ml-0 max-md:w-full">
        <div className="flex grow flex-col max-md:mt-8 max-md:max-w-full">
          {sideNews.map((news, index) => (
            <div key={index} className={index > 0 ? 'mt-6' : ''}>
              <NewsCard {...news} />
            </div>
          ))}
        </div>
      </aside>
    </main>
  );
};
