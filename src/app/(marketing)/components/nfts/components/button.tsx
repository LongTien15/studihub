'use client';
import Image from 'next/image';
import './animation.css';
import {
  useWalletInfo,
  useWeb3Modal,
  useWeb3ModalAccount,
  useWeb3ModalState,
} from '@web3modal/ethers/react';
import { useEffect, useState } from 'react';

export default function BuyNowButton({ text = 'Buy now' }: { text?: string }) {
  const { open: openWallet, close } = useWeb3Modal();
  const { address, chainId, isConnected, status } = useWeb3ModalAccount();
  const [domLoaded, setDomLoaded] = useState<boolean>(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    domLoaded && (
      <div
        className="relative"
        onClick={() => {
          if (!isConnected) openWallet();
          else {
            alert('buying nfts');
            openWallet();
          }
        }}
      >
        <div className="fancy absolute z-10 mt-5">
          <div className="input mt-8 flex h-[60px] w-fit items-center justify-center gap-2 rounded-full">
            <div className="h-[25px] w-[26px]">
              <Image src={'/images/star_button.png'} alt="" width={26} height={25} />
            </div>
            <p className="text-lg font-semibold text-[#fff]">
              {isConnected ? text : 'Connect Wallet'}
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
    )
  );
}
