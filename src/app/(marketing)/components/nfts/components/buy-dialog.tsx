import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {
  Connection,
  Keypair,
  PublicKey,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';
import Image from 'next/image';
import React, { Component, useState } from 'react';

const checkValidAddress = (input: string) => {
  try {
    const receiver = new PublicKey(input);
    return PublicKey.isOnCurve(receiver) ? receiver : false;
  } catch (error) {
    return false;
  }
};

const getConfirmation = async (connection: Connection, tx: string) => {
  const result = await connection.getSignatureStatus(tx, {
    searchTransactionHistory: true,
  });
  return result.value?.confirmationStatus;
};

export function BuyDialog({ children }: { children: React.ReactNode }) {
  const { sendTransaction, publicKey } = useWallet();
  const { connection } = useConnection();
  const [add, setAdd] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const createTransaction = async () => {
    const receiver = checkValidAddress(add);
    if (!receiver) {
      alert('Address not valid');
      return;
    }
    if (!publicKey) {
      alert('No Wallet Connected');
      return;
    }

    try {
      // 1 SOL = 1,000,000,0 = 10^9
      const txs = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: receiver,
          // 0.01 SOL
          lamports: 10000000,
        })
      );

      const signature = await sendTransaction(txs, connection);
      const latestBlockHash = await connection.getLatestBlockhash();

      const res = await connection.confirmTransaction({
        blockhash: latestBlockHash.blockhash,
        lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
        signature,
      });

      const result = await getConfirmation(connection, signature);
      console.log(result);

      if (result) {
        alert('Send Transaction successfully');
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
      alert('Error sending transactions');
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="rounded-3xl text-white sm:max-w-[800px]"
        style={{
          border: '1px solid var(--Stroke, #5F4A82)',
          background:
            'linear-gradient(270deg, rgba(52, 32, 94, 0.40) 10.31%, rgba(129, 95, 145, 0.60) 104.49%)',
          backdropFilter: 'blur(50px)',
        }}
      >
        <div className="grid grid-cols-2 gap-6 py-4">
          <Image
            src={'/images/nft_small.png'}
            alt=""
            width={500}
            height={400}
            style={{ objectFit: 'contain', height: '500px' }}
          />
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-3xl font-bold">
                Purchasing
                <span className="italic"> Name of the NFT 101</span>
              </p>
              <p className="mt-3">0.1 SOL</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold">Referral Code</p>
              <Input />
              <Input placeholder="input address" onChange={(v) => setAdd(v.target.value)} />
              <p className="text-sm font-normal text-[#64748B]">
                Referral code let us know who introduces you!
              </p>
            </div>
            <div style={{ borderTop: '1px solid #475569' }}>
              <div className="mt-2 flex justify-between">
                <p className="text-sm">Discount: </p>
                <p className="font-semibold">0 SOL</p>
              </div>
              <div className="mt-2 flex justify-between">
                <p className="text-sm">Total: </p>
                <p className="font-semibold">0.5 SOL</p>
              </div>
            </div>
            <Button
              onClick={createTransaction}
              className=""
              style={{ background: 'linear-gradient(90deg, #9747FF 0%, #EA1187 100%)' }}
            >
              Continue
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
