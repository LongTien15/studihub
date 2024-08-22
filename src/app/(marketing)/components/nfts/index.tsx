import Image from 'next/image';
import Countdown from './components/countdown';
import BuyNowButton from './components/button';

export default function NftForSale() {
  return (
    <div>
      {/* top */}
      <div className="grid grid-cols-2 gap-20">
        <div className="relative">
          <div className="relative h-[700px] w-full">
            <Image
              src={'/images/nft_img.png'}
              alt=""
              width={600}
              height={600}
              style={{ objectFit: 'contain', width: '700px' }}
            />
          </div>
          <div
            className="border-1 absolute bottom-12 left-0 right-0 mx-auto w-[250px] rounded-[20px] py-[5px] pb-[20px] pt-[16px]"
            style={{
              background:
                'linear-gradient(270deg, rgba(52, 32, 94, 0.4) 10.31%, rgba(129, 95, 145, 0.6) 104.49%)',
              border: '1px solid #F8FAFC',
            }}
          >
            <p className="text-[18px] font-light text-text">Price</p>
            <p className="text-[48px] font-bold text-text">6.25 ETH</p>
          </div>
          {/* <div
            className="absolute bottom-0 left-0 right-0 mx-auto w-fit px-2 py-1 text-2xl font-semibold uppercase text-text"
            style={{ background: 'linear-gradient(90deg, #171D41 0%, #4C1AB6 100%)' }}
          >
            only 12 left!!!
          </div> */}
        </div>
        <div className="flex flex-col items-start justify-center">
          <Countdown />
          <div className="mt-14">
            <p className="mb-6 text-start text-lg font-extralight uppercase text-text">
              buy an nft
            </p>
            <p className="text-start text-[84px] font-extrabold text-[#fff]">Name of the NFT 100</p>
          </div>
          <BuyNowButton />
        </div>
      </div>

      {/*bottom */}
      <div className="mt-[3%]">
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
