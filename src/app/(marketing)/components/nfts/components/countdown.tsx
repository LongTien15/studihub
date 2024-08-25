'use client';
import { useEffect, useState } from 'react';

export const coundownDate = '2024-08-26T19:00:00';

function calculateTimeLeft() {
  const year = new Date().getFullYear();
  const difference = +new Date(coundownDate) - +new Date();
  let timeLeft = { days: '0d', hours: '0h', minutes: '0m', seconds: '0s' };

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    timeLeft = {
      days: (days < 10 ? '0' + days : days) + 'd',
      hours: (hours < 10 ? '0' + hours : hours) + 'h',
      minutes: (minutes < 10 ? '0' + minutes : minutes) + 'm',
      seconds: (seconds < 10 ? '0' + seconds : seconds) + 's',
    };
  }

  return timeLeft;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div className="flex w-full items-center justify-center gap-4 md:justify-start">
      <DigitBox number={timeLeft?.days} />
      <Divider />
      <DigitBox number={timeLeft?.hours} />
      <Divider />
      <DigitBox number={timeLeft?.minutes} />
      <Divider />
      <DigitBox number={timeLeft?.seconds} />
    </div>
  );
}

const DigitBox = ({ number }: { number: string }) => {
  return (
    <div
      className="gap-6 rounded-md px-2 py-2 font-semibold text-text-2 md:w-[100px] md:rounded-2xl md:px-[14px] md:py-[26px] md:text-3xl"
      style={{
        background:
          'radial-gradient(50.01% 50.01% at 50% 45.62%, rgba(42, 66, 106, 0.3) 0%, rgba(17, 16, 16, 0.3) 100%)',
      }}
    >
      {number}
    </div>
  );
};

const Divider = () => {
  return <h1 className="font-extrabold text-[#64748B] md:text-5xl">:</h1>;
};
