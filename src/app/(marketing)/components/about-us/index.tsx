import Image from 'next/image';
import BuyNowButton from '../nfts/components/button';

export default function AboutUs() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <BuyNowButton text="Start learning today!" />
      </div>
      <div>
        {/* top */}
        <div className="mt-[5%] grid grid-cols-2 gap-20">
          <div className="flex flex-col justify-center align-middle">
            <p className="mb-7 text-start text-lg font-normal uppercase text-text">about us</p>
            <p className="text-start text-[84px] font-extrabold text-text">
              Learn, Prepare, and Thrive
              <span>
                <Image
                  className="ml-10 mt-5"
                  src={'/images/Idea.png'}
                  alt=""
                  width={100}
                  height={100}
                  style={{ width: '100px', scale: 3 }}
                />
              </span>
            </p>
            <p className="mt-7 text-start text-lg font-normal text-text-2">
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
                  style={{ scale: 1.1 }}
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
        </div>

        {/*bottom */}
        <div className="mt-16">
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
