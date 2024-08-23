'use client';
import Image from 'next/image';
import './animation.css';
import { useEffect, useRef, useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { BuyDialog } from './buy-dialog';

export default function BuyNowButton({ text = 'Buy now' }: { text?: string }) {
  const { publicKey, connecting } = useWallet();

  const [domLoaded, setDomLoaded] = useState<boolean>(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      {domLoaded && !connecting && !publicKey ? (
        <WalletMultiButton
          style={{
            background: 'linear-gradient(90deg, #9747ff 0%, #ea1187 100%)',
            borderRadius: '50px',
          }}
          className=""
        >
          Connect Wallet
        </WalletMultiButton>
      ) : (
        <BuyDialog>
          <div className="relative cursor-pointer">
            <div className="fancy absolute z-10 mt-5">
              <div className="input mt-8 flex h-[60px] w-fit items-center justify-center gap-2 rounded-full">
                <div className="h-[25px] w-[26px]">
                  <Image src={'/images/star_button.png'} alt="" width={26} height={25} />
                </div>
                <p className="text-lg font-semibold text-[#fff]">
                  {true ? text : 'Connect Wallet'}
                </p>
              </div>
            </div>

            <Image
              src="/images/particle.gif"
              alt=""
              className="absolute left-0 top-0"
              width={240}
              height={60}
            />
          </div>
        </BuyDialog>
      )}
    </>
  );
}
