'use client';
import './home.module.css';
import NftForSale from './components/nfts';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { cn } from '@/libs/utils';
import AboutUs from './components/about-us';
import TechStack from './components/tech-stack';
import Tokenomic from './components/tokenomic';
import Creators from './components/creators';
import Testimonials from './components/testimonials';

export default function HomePage() {
  return (
    <div className={cn("bg-[url('/images/bubble-bg.png')] bg-contain")}>
      <Carousel
        emulateTouch={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        // autoPlay
        interval={5000}
        infiniteLoop
      >
        <div className="w-full px-4 pt-8 md:px-[100px]">
          <NftForSale />
        </div>
        <div className="px-6 pt-7 md:px-[100px] md:pt-[50px]">
          <AboutUs />
        </div>
        <div className="h-full px-6 pt-[100px] md:px-[100px] md:pt-0">
          <TechStack />
        </div>
        <div className="pt-[8%] md:px-[100px]">
          <Tokenomic />
        </div>
        <div className="pt-[8%] md:px-[100px]">
          <Creators />
        </div>
        <div className="px-6 pt-[8%] md:px-[100px]">
          <Testimonials />
        </div>
      </Carousel>
    </div>
  );
}
