import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const menuItems: { title: string; url: string }[] = [
    {
      title: 'Buy an NFT',
      url: '',
    },
    {
      title: 'About us',
      url: '',
    },
    {
      title: 'Techology Stack',
      url: '',
    },
    {
      title: 'Tokenomic',
      url: '',
    },
    {
      title: 'Creators',
      url: '',
    },
    {
      title: 'Testimonials',
      url: '',
    },
  ];

  return (
    <div className="text-white md:flex md:items-center md:p-8">
      <Image src={'/images/logo.png'} alt="" width={160} height={100} className="mr-8" />
      <div className="flex gap-3">
        {menuItems.map((item, index) => (
          <Link href={{ pathname: item.url }} key={index} className="font-semibold">
            <Button className="bg-transparent text-base"> {item.title}</Button>
          </Link>
        ))}
      </div>
      <div className="ml-auto flex gap-3">
        <Link href={{ pathname: '/' }} className="">
          <Button className="bg-transparent text-lg font-semibold text-[#94A3B8]">Log in</Button>
        </Link>
        <Button className="bg-[#4C1AB6]">Start for free</Button>
      </div>
    </div>
  );
}
