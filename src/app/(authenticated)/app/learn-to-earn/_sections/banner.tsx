import Image from 'next/image';
import Link from 'next/link';

export const Banner = () => (
  <Link
    href="#"
    className="flex flex-col justify-center overflow-hidden rounded-2xl max-md:max-w-full sm:rounded-[32px]"
  >
    <Image
      loading="lazy"
      src="/images/app/lte-page/banner.png"
      alt="Banner"
      width={0}
      height={0}
      sizes="100%"
      className="z-10 w-full max-md:max-w-full"
    />
  </Link>
);
