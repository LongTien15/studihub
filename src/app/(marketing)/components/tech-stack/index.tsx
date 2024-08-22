import Image from 'next/image';

export default function TechStack() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <p className="text-text mb-8 text-5xl font-extrabold uppercase">technology stack</p>
      <p className="text-text-2 text-lg font-normal">
        Users register, explore suitable courses, engage in interactive learning, and earn
        verifiable certificates upon course completion. They can also interact with a global
        learning community to enhance their educational experience
      </p>

      <div className="mt-16 grid grid-cols-3 gap-12">
        <Item
          image="/images/ai.png"
          title="Artificial Intelligence (AI)"
          content="AI-driven customization of learning content based on individual needs and goals"
        ></Item>
        <Item
          image="/images/blockchain.png"
          title="Blockchain and Non-Fungible 
Tokens (NFTs)"
          content="AI-driven customization of learning content based on individual needs and goals"
        ></Item>
        <Item
          image="/images/cert.png"
          title="Interactive Learning Tools"
          content="Blockchain technology ensures data and transaction security, fostering trust in the learning environment"
        ></Item>
      </div>
    </div>
  );
}

const Item = ({ image, title, content }: { image: string; title: string; content: string }) => {
  return (
    <div
      className="flex flex-col items-center gap-6 rounded-3xl px-4 py-8"
      style={{
        border: '1px solid white',
        boxShadow: ' 0px 4px 6px 0px #00000017',
        background:
          'linear-gradient(270deg, rgba(52, 32, 94, 0.4) 10.31%, rgba(129, 95, 145, 0.6) 104.49%)',
      }}
    >
      <div className="h-[182px] w-auto">
        <Image
          src={image}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: 'auto', height: '182px' }}
        />
      </div>
      <p className="text-text text-center text-2xl font-semibold">{title}</p>
      <p className="text-text-2 text-center text-base font-normal">{content}</p>
    </div>
  );
};
