'use client';

import { Metaplex, keypairIdentity } from '@metaplex-foundation/js';
import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function SolanaWeb3() {
  const [nfts, setNfts] = useState<any[]>([]);

  const getAllNfts = async () => {
    try {
      const connection = new Connection(
        'https://solana-mainnet.core.chainstack.com/5fe2daa7a5ffe17a1c5395cfd5ae9f5e',
        'confirmed'
      );
      const keypair = Keypair.generate();
      const metaplex = new Metaplex(connection);
      metaplex.use(keypairIdentity(keypair));
      const owner = new PublicKey('5gDcwXDhmb7svoLkN2aLdN692ybN2vFz75TQJSuauQKM');
      const allNFTs = await metaplex.nfts().findAllByOwner({ owner });
      console.log(allNFTs);

      // const res = await axios.post(
      //   'https://solana-mainnet.rpc.extrnode.com/e1906834-0af2-4307-b745-a78d048e7b25',
      //   {
      //     jsonrpc: '2.0',
      //     method: 'searchAssets',
      //     params: {
      //       ownerAddress: '2k5AXX4guW9XwRQ1AKCpAuUqgWDpQpwFfpVFh3hnm2Ha',
      //       grouping: ['collection', 'DRiP2Pn2K6fuMLKQmt5rZWyHiUZ6WK3GChEySUpHSS4x'],
      //       page: 1,
      //     },
      //     id: 0,
      //   },
      //   {
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   }
      // );

      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(nfts);
  useEffect(() => {
    getAllNfts();
  }, []);

  return <div>hello</div>;
}
