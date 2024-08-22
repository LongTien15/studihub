import Image from 'next/image';

export default function Tokenomic() {
  return (
    <div className="flex flex-col gap-12">
      <p className="text-5xl font-extrabold uppercase text-white">Tokenomic</p>
      <Image
        src={'/images/chart.png'}
        alt=""
        width={1000}
        height={1000}
        style={{ objectFit: 'contain', height: '700px' }}
      />
    </div>
  );
}
