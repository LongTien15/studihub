import Link from 'next/link';

interface LinkItem {
  text: string;
  href: string;
}

interface LinkColumnProps {
  title: string;
  links: LinkItem[];
}

export const LinkColumn = ({ title, links }: LinkColumnProps) => {
  return (
    <div className="flex w-full flex-col max-md:w-full sm:w-[33%]">
      <div className="flex grow flex-col items-center text-base leading-6 text-white sm:items-start">
        <h2 className="w-full text-center text-xl font-semibold leading-7 tracking-normal sm:text-left">
          {title}
        </h2>
        <nav className="w-full">
          <ul className="mt-4 list-none space-y-4 p-0 text-center sm:mt-8 sm:text-left">
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.href as any} className="text-white hover:underline">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
