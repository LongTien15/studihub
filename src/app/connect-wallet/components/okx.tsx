'use client';

import { useEffect, useState } from 'react';
declare const window: any;
export default function OKXConnectButton() {
  const [installed, setInstalled] = useState<boolean>(true);
  const [connected, setConnected] = useState<boolean>(false);
  const [address, setAddress] = useState<string>('');
  useEffect(() => {
    if (typeof window.okxwallet !== 'undefined') {
      console.log('OKX is installed!');
    } else {
      console.log('OKX not installed');
      setInstalled(false);
    }
  }, []);

  useEffect(() => {
    window.okxwallet.solana.on('accountChanged', (publicKey: any) => {
      if (publicKey) {
        // Set new public key and continue as usual
        console.log(`Switched to account ${publicKey.toBase58()}`);
        setAddress(publicKey.toBase58());
      }
    });
  });

  const connectWallet = async () => {
    const provider = window.okxwallet.solana;
    if (connected) {
      await provider.disconnect();
      setAddress('');
      setConnected(false);
    } else {
      try {
        const resp = await provider.connect();
        setAddress(resp.publicKey.toBase58());
        setConnected(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return installed ? (
    <button onClick={connectWallet}>{connected ? `${address}` : 'Connect OKX'}</button>
  ) : (
    <p>OKX not installed</p>
  );
}
