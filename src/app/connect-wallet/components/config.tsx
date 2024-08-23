// App.tsx
'use client ';
import { createWeb3Modal, defaultSolanaConfig } from '@web3modal/solana/react';
import { solana, solanaTestnet, solanaDevnet } from '@web3modal/solana/chains';

// 0. Setup chains
const chains = [solana, solanaTestnet, solanaDevnet];

// 1. Get projectId from https://cloud.walletconnect.com
const projectId = '0236e48122ad716b2b7ba4a83a0d4ab8';

// 2. Create solanaConfig
const metadata = {
  name: 'AppKit',
  description: 'AppKit Solana Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const solanaConfig = defaultSolanaConfig({
  metadata,
  chains,
  projectId,
});

// 3. Create modal
createWeb3Modal({
  solanaConfig,
  chains,
  projectId,
});

export function Web3Modal({ children }: { children: any }) {
  return children;
}
