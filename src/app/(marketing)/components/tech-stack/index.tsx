import Image from 'next/image';

export default function TechStack() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <p className="mb-8 font-extrabold uppercase text-text md:text-5xl">technology stack</p>
      <p className="font-normal text-text-2 md:text-lg">
        Users register, explore suitable courses, engage in interactive learning, and earn
        verifiable certificates upon course completion. They can also interact with a global
        learning community to enhance their educational experience
      </p>

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
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
      className="flex items-center gap-6 rounded-3xl px-4 py-8 md:flex-col"
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
      <div className="flex flex-col md:block">
        <p className="text-center font-semibold text-text md:text-2xl">{title}</p>
        <p className="text-center font-normal text-text-2 md:text-base">{content}</p>
      </div>
    </div>
  );
};
