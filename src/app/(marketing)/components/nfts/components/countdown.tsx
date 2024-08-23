'use client';
import { useEffect, useState } from 'react';

function calculateTimeLeft() {
  const year = new Date().getFullYear();
  const difference = +new Date(`${year}-10-1`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}

const renderNumber = (num: number) => {
  return num < 10 ? '0' + num : num.toString();
};
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
      <DigitBox number={renderNumber(timeLeft?.days || 0)} />
      <Divider />
      <DigitBox number={renderNumber(timeLeft?.hours || 0)} />
      <Divider />
      <DigitBox number={renderNumber(timeLeft?.minutes || 0)} />
      <Divider />
      <DigitBox number={renderNumber(timeLeft?.seconds || 0)} />
    </div>
  );
}

const DigitBox = ({ number }: { number: string }) => {
  return (
    <div
      className="w-[90px] gap-6 rounded-2xl p-[24px] text-3xl font-semibold text-text-2"
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
