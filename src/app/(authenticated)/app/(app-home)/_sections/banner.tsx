import Image from 'next/image';

export const Banner = () => (
  <section className="flex flex-col justify-center overflow-hidden rounded-[32px] max-md:max-w-full">
    <Image
      loading="lazy"
      src="/images/app/home-page/banner.png"
      alt="Banner"
      width={0}
      height={0}
      sizes="100%"
      className="z-10 h-full w-full max-md:max-w-full"
    />
  </section>
);
