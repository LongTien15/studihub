import Image from 'next/image';
import Countdown from './components/countdown';
import BuyNowButton from './components/button';
import { ReactNode } from 'react';
import { Crown, OneHundred, Rocket } from './components/svg';
import { DetailDialog } from './components/DetailDialog';

export default function NftForSale() {
  return (
    <div>
      {/* top */}
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-20">
        <div className="h-[350px] md:h-[500px]">
          <div className="relative h-full">
            <div className="absolute h-full w-full">
              <Image
                src={'/images/nft_gif.gif'}
                alt=""
                width={1000}
                height={1000}
                style={{ objectFit: 'contain', width: '700px' }}
              />
            </div>
            <div
              className="absolute bottom-[10px] left-0 right-0 mx-auto w-[150px] rounded-[20px] py-[5px] pt-[16px] md:bottom-[-150px] md:w-[250px]"
              style={{
                background:
                  'linear-gradient(270deg, rgba(52, 32, 94, 0.4) 10.31%, rgba(129, 95, 145, 0.6) 104.49%)',
                border: '1px solid #F8FAFC',
              }}
            >
              <p className="text-[14px] font-light text-text md:text-[18px]">Price</p>
              <p className="text-[20px] font-bold text-text md:text-[48px]">0.5 SOL</p>
            </div>
            {/* <div
            className="absolute bottom-0 left-0 right-0 mx-auto w-fit px-2 py-1 text-2xl font-semibold uppercase text-text"
            style={{ background: 'linear-gradient(90deg, #171D41 0%, #4C1AB6 100%)' }}
          >
            only 12 left!!!
          </div> */}
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-center">
          <Countdown />
          <div className="mb-5 mt-5 md:mt-14">
            <p className="mb-6 text-lg font-extralight text-text md:text-start">
              StudiHub Genesis NFT Drop
            </p>
            <p className="text-xl font-extrabold text-[#fff] md:text-start md:text-4xl">
              Unlock the Future of Learning with StudiHub's First-Ever NFT Release!
            </p>
          </div>

          <div className="flex flex-col md:mb-5 md:mt-5">
            <div className="hidden items-center gap-3 md:flex">
              <DetailTag svgImage={<Crown />} title="VIP Course Access" />
              <DetailTag svgImage={<OneHundred />} title="Points Accumulation Mechanism" />
              <DetailTag svgImage={<Rocket />} title="VIP USDT Farming Pool" />
            </div>

            <DetailDialog />
          </div>

          <div className="hidden md:block">
            <BuyNowButton />
          </div>
        </div>
      </div>
      <div className="m-auto mt-[10%] flex justify-center md:hidden">
        <BuyNowButton />
      </div>

      {/*bottom */}
      <div className="hidden md:mt-[250px] md:block">
        <Image
          src={'/images/sponsors.png'}
          alt=""
          width={1000}
          height={1000}
          style={{ objectFit: 'contain', width: '1000px' }}
        />
      </div>
    </div>
  );
}

const DetailTag = ({ svgImage, title }: { svgImage: ReactNode; title: string }) => {
  return (
    <div
      className="flex gap-2 rounded-[20px] px-4 py-2 text-white"
      style={{ border: '1px solid  #334155', background: 'rgba(15, 23, 42, 0.50)' }}
    >
      {svgImage}
      <p className="text-sm">{title}</p>
    </div>
  );
};
