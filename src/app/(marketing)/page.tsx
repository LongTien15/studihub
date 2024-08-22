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
        <div className="px-[10%] pt-[100px]">
          <NftForSale />
        </div>
        <div className="px-[10%]">
          <AboutUs />
        </div>
        <div className="h-full px-[10%]">
          <TechStack />
        </div>
        <div className="px-[10%] pt-[8%]">
          <Tokenomic />
        </div>
        <div className="px-[10%] pt-[8%]">
          <Creators />
        </div>
        <div className="px-[10%] pt-[8%]">
          <Testimonials />
        </div>
      </Carousel>
    </div>
  );
}
