import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ReactNode } from 'react';
import { Crown, OneHundred, Rocket } from './svg';

export const DetailDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="ml-5 flex cursor-pointer items-center justify-center gap-2 text-[#94A3B8] md:ml-2 md:mt-4 md:justify-start">
          <p>See detail</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              d="M3.49512 8.5H12.8285"
              stroke="#94A3B8"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.16162 3.83325L12.8283 8.49992L8.16162 13.1666"
              stroke="#94A3B8"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </DialogTrigger>
      <DialogContent
        className="text-white"
        style={{
          backdropFilter: 'blur(6px)',
          background:
            'linear-gradient(270deg, rgba(52, 32, 94, 0.40) 10.31%, rgba(129, 95, 145, 0.60) 104.49%)',
          borderRadius: '24px',
        }}
      >
        <DialogHeader className="mb-5">
          <DialogTitle className="text-lg">Distinguished Features</DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex flex-col gap-6">
          <Content
            svgImage={<Crown />}
            title="VIP Course Access"
            content={`The NFT VIP Pass - 1st Edition grants you unrestricted entry to Studihub's premium courses at no additional cost. This pass is your key to accessing high-quality educational content reserved for our most valued members.`}
          />

          <Content
            svgImage={<OneHundred />}
            title="Points Accumulation Mechanism"
            content={`Each NFT VIP Pass - 1st Edition entitles you to accumulate 50,000 Studihub Points daily. These points are stackable, allowing you to maximize your benefits with multiple NFTs.`}
          />
          <Content
            svgImage={<Rocket />}
            title="VIP USDT Farming Pool"
            content={`By staking your NFT VIP Pass - 1st Edition, you gain access to a daily USDT farming opportunity. This feature seamlessly integrates educational advancement with financial growth`}
          />
          <p className="font-semibold italic text-white">
            Embrace the opportunity to enrich both your knowledge and financial well-being with the
            Studihub NFT VIP Pass NOW!
          </p>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

const Content = ({
  svgImage,
  title,
  content,
}: {
  svgImage: ReactNode;
  title: string;
  content: string;
}) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        {svgImage}
        <p className="text-lg font-semibold text-white">{title}</p>
      </div>
      <p className="mt-2 text-sm font-normal text-text-2">{content}</p>
    </div>
  );
};
