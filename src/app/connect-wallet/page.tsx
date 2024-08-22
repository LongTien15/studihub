'use client';

import { useWeb3Modal } from '@web3modal/ethers/react';
import SolanaWeb3 from './components/solanaWeb3';

export default function ConnectWallet() {
  const { open } = useWeb3Modal();
  return (
    <div>
      <p> CONNECT WALLET</p>
      <div className="flex gap-3">
        <button onClick={() => open()}>Open Connect Modal</button>

        <SolanaWeb3 />
      </div>
    </div>
  );
}
