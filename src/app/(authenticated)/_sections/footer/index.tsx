import Image from 'next/image';
import { FooterLinks } from './FooterLinks';

export const Footer = () => {
  return (
    <footer className="mt-auto bg-[radial-gradient(50.01%_50.01%_at_50%_45.62%,rgba(42,66,106,0.30)_0%,rgba(17,16,16,0.30)_100%)] backdrop-blur-[5px]">
      <div className="container py-8 sm:py-16">
        <div className="flex justify-between gap-8 max-md:flex-col sm:gap-5">
          <div className="flex w-[35%] max-w-full flex-col max-md:w-full sm:max-w-[320px]">
            <div className="flex grow flex-col items-center text-base leading-6 text-white sm:items-start">
              <Image
                src="/images/app/home-page/studihub_qr.png"
                alt="Company's QR code"
                width={82}
                height={82}
                className="aspect-square"
              />
              <Image
                loading="lazy"
                src="/images/app/home-page/footer_logo.png"
                alt="Company logo"
                width={270}
                height={50}
                className="mt-6 max-w-full"
              />
              <p className="mt-6 self-stretch text-center sm:text-left">
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                velit interdum, ac aliquet odio mattis.{' '}
              </p>
            </div>
          </div>
          <div className="ml-5 flex w-[65%] flex-col max-md:ml-0 max-md:w-full">
            <FooterLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};
