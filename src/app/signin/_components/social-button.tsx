import React, { ReactNode } from 'react';
import { cn } from '@/libs/utils';
import Image from 'next/image';

interface SocialLoginButtonProps {
  icon: string;
  text: string | ReactNode;
  altText: string;
  className?: string;
}

const SocialButton = ({ icon, text, altText, className }: SocialLoginButtonProps) => (
  <button
    className={cn(
      'flex w-full justify-center gap-2 whitespace-nowrap rounded-xl border border-solid border-slate-400 bg-white bg-opacity-50 px-4 py-2 lining-nums max-md:px-5 sm:flex-1',
      className
    )}
    type="button"
  >
    <Image
      loading="lazy"
      src={icon}
      alt={altText}
      width={0}
      height={0}
      sizes="100%"
      className="my-auto aspect-square w-6 shrink-0"
    />
    <span>{text}</span>
  </button>
);

export const SocialLoginButtons = () => {
  const socialButtons = [
    {
      icon: '/images/icons/ic_c98.png',
      text: 'Log in with Coin98',
      altText: 'Coin98 icon',
      className: 'bg-main',
    },
    {
      icon: '/images/icons/ic_google.svg',
      text: 'Google',
      altText: 'Google icon',
    },
    {
      icon: '/images/icons/ic_apple.svg',
      text: 'Apple ID',
      altText: 'Apple icon',
    },
    {
      icon: '/images/icons/ic_facebook.svg',
      text: 'Facebook',
      altText: 'Facebook icon',
    },
  ];

  return (
    <>
      <div className="mt-6 flex items-center gap-2.5 whitespace-nowrap text-base leading-7 text-slate-300 max-md:flex-wrap">
        <div className="my-auto h-px flex-1 shrink-0 self-stretch border border-solid border-slate-300 bg-slate-300" />
        <div className="self-stretch">or</div>
        <div className="my-auto h-px flex-1 shrink-0 self-stretch border border-solid border-slate-300 bg-slate-300" />
      </div>
      <div className="mt-6 flex flex-col gap-4">
        <SocialButton
          {...socialButtons[0]}
          className="border-main bg-main bg-[linear-gradient(90deg,#9747FF_0%,#EA1187_100%)] text-white"
        />
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          {socialButtons.slice(1).map((button, index) => (
            <SocialButton key={index} {...button} />
          ))}
        </div>
      </div>
    </>
  );
};
