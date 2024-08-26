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
import { BuySuccess } from './BuySuccess';
import { coundownDate } from './countdown';

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
  const isOpen = new Date(coundownDate).getTime() - new Date().getTime() < 0;
  const { sendTransaction, publicKey } = useWallet();
  const { connection } = useConnection();
  const [add, setAdd] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [openSuccess, setOpenSuccess] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const createTransaction = async () => {
    if (total <= 0) {
      alert('Total must be one or more');
      return;
    }
    if (!publicKey) {
      alert('No Wallet Connected');
      return;
    }

    try {
      setLoading(true);

      // 1 SOL = 1,000,000,0 = 10^9
      const txs = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey('Hi4w39PDHGTT3WWD34KJHTcw4AhHuAcexWDwZR3Vs9YS'),
          // 0.01 SOL
          lamports: 50000000 * total,
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
      setLoading(false);
      if (result) {
        // alert('Send Transaction successfully');

        setOpen(false);

        setOpenSuccess(true);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      // alert('Error sending transactions');
    }
  };
  return false ? (
    <div className="relative cursor-pointer">
      <div className="fancy absolute z-10 mt-5">
        <div className="input mt-8 flex h-[60px] w-fit items-center justify-center gap-2 rounded-full">
          <div className="h-[25px] w-[26px]">
            <Image src={'/images/star_button.png'} alt="" width={26} height={25} />
          </div>
          <p className="text-lg font-semibold text-[#fff]">{'Incoming'}</p>
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
  ) : (
    <>
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
          <div className="flex flex-col gap-6 py-4 md:grid md:grid-cols-2">
            <Image
              src={'/images/nft_img.png'}
              alt=""
              width={500}
              height={400}
              style={{ objectFit: 'contain', height: '300px' }}
            />
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-3xl font-bold">
                  Purchasing
                  <span> StudiHub's First-Ever NFT Release!</span>
                </p>
                <p className="mt-3">0.5 SOL</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-lg font-semibold">Referral Code</p>
                <Input />
                {/* <Input placeholder="input address" onChange={(v) => setAdd(v.target.value)} /> */}
                <Input
                  value={total}
                  onChange={(v) => setTotal(Number(v.target.value))}
                  placeholder="Number of NFTS"
                  type="number"
                  className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
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
                  <p className="font-semibold">{0.5 * total} SOL</p>
                </div>
              </div>
              <Button
                onClick={createTransaction}
                disabled={loading}
                className=""
                style={{ background: 'linear-gradient(90deg, #9747FF 0%, #EA1187 100%)' }}
              >
                Continue
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <BuySuccess open={openSuccess} setOpen={setOpenSuccess} />
    </>
  );
}
