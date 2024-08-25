import Image from 'next/image';
import BuyNowButton from '../nfts/components/button';

export default function AboutUs() {
  return (
    <div className="flex w-full flex-col">
      <div className="hidden md:flex">
        <BuyNowButton text="Start learning today!" />
      </div>
      <div>
        {/* top */}
        <div className="mt-[5%] flex grid-cols-2 flex-col md:grid md:gap-20">
          <div className="flex flex-col justify-center align-middle">
            <p className="mb-3 text-start text-sm font-normal uppercase text-text md:mb-7 md:text-lg">
              about us
            </p>
            <p className="text-start text-5xl font-extrabold text-text md:text-[84px]">
              Learn, Prepare, and Thrive
              <span className="hidden md:inline-block">
                <Image
                  className="ml-6"
                  src={'/images/Idea.png'}
                  alt=""
                  width={1000}
                  height={1000}
                  style={{ width: '100px', scale: 3 }}
                />
              </span>
            </p>
            <p className="mt-7 text-start text-xs font-normal text-text-2 md:text-lg">
              Studihub aims to transform education through cutting-edge technology, providing
              accessible and transparent learning opportunities for everyone, and helping learners
              realize their full potential.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div>
                <Image
                  src={'/images/about-us.png'}
                  alt=""
                  width={500}
                  height={500}
                  style={{ objectFit: 'contain', width: '500px' }}
                />
              </div>
              {/* <div className="absolute left-[-30%] top-[-30%]">
                <Image src={'/images/hat.png'} alt="" width={200} height={200} />
              </div>

              <div className="absolute bottom-[-30%] right-[-30%]">
                <Image src={'/images/coin.png'} alt="" width={200} height={200} />
              </div> */}
            </div>
          </div>
          <div className="flex justify-center md:hidden">
            <BuyNowButton text="Start learning today!" />
          </div>
        </div>

        {/*bottom */}
        <div className="mt-[8%] hidden md:block">
          <Image
            src={'/images/sponsors.png'}
            alt=""
            width={1000}
            height={1000}
            style={{ objectFit: 'contain', width: '1000px' }}
          />
        </div>
      </div>
    </div>
  );
}
