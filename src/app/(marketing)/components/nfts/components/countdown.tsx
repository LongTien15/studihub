'use client';
import { useEffect, useState } from 'react';

function calculateTimeLeft() {
  const year = new Date().getFullYear();
  const difference = +new Date(`${year}-10-1`) - +new Date();
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
    <div className="flex items-center gap-4">
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
      className="w-[100px] gap-6 rounded-2xl px-[14px] py-[26px] text-3xl font-semibold text-text-2"
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
  return <h1 className="text-5xl font-extrabold text-[#64748B]">:</h1>;
};
