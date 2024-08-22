import React from 'react';
//
import { BackButton } from './_components/back-button';
import { SocialLoginButtons } from './_components/social-button';
import { SignInForm } from './_components/signin-form';

const SingInPage = () => {
  return (
    <main className="relative flex h-auto min-h-screen flex-col justify-center bg-slate-800 py-2 sm:py-5">
      <img
        loading="lazy"
        srcSet="/images/sign-in/background.png, /images/sign-in/background@2x.png 2x"
        alt="background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="my-5max-md:max-w-full container relative flex h-full flex-col items-center max-md:px-5">
        <BackButton />
        <section className="relative mt-8 w-full max-w-[1221px] rounded-2xl bg-gradient-to-r from-[#2A426A]/30 to-[#111010]/30 p-4 backdrop-blur-[5px] max-md:max-w-full max-md:px-5 sm:p-8">
          <div className="flex gap-5 max-md:flex-col">
            <div className="hidden w-6/12 flex-col max-md:ml-0 max-md:w-full sm:flex">
              <article className="relative flex grow flex-col justify-center rounded-2xl text-white max-md:mt-10 max-md:max-w-full">
                <div className="relative flex min-h-[752px] w-full flex-col overflow-hidden pt-20 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="/images/sign-in/side_hero.png"
                    alt="sign-in side hero"
                    className="absolute inset-0 size-full object-cover"
                  />
                  <div className="relative mt-96 flex flex-col px-6 pb-6 pt-12 max-md:mt-10 max-md:max-w-full max-md:px-5">
                    <h2 className="text-3xl font-semibold leading-9 tracking-tight max-md:max-w-full">
                      Learn, prepare, and thrive
                    </h2>
                    <p className="mt-3.5 text-base leading-7 max-md:max-w-full">
                      Studihub aims to transform education through cutting-edge technology,
                      providing accessible and transparent learning opportunities for everyone, and
                      helping learners realize their full potential
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="ml-5 flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
              <div className="relative my-auto flex flex-col self-stretch text-lg font-semibold leading-7 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="/images/sign-in/logo.png"
                  alt="Studihub logo"
                  className="aspect-[3.57] w-[283px] max-w-full self-center"
                />
                <SignInForm />
                <SocialLoginButtons />
                <p className="relative mt-3 flex justify-center gap-2 text-sm">
                  <span className="my-auto font-semibold leading-[143%] text-slate-50">
                    Don&apos;t have an account?{' '}
                  </span>
                  <a
                    href="#signup"
                    className="rounded-md bg-white bg-opacity-0 py-2 font-medium leading-6 text-purple-400"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SingInPage;
