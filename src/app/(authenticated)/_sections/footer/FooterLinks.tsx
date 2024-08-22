import { LinkColumn } from './LinkColumn';

const officialLinks = [
  { text: 'About Us', href: '#' },
  { text: 'Roadmap', href: '#' },
  { text: 'Technology Stack', href: '#' },
  { text: 'Platform', href: '#' },
];

const communityLinks = [
  { text: 'Twitter', href: '#' },
  { text: 'Telegram Channel', href: '#' },
  { text: 'Telegram Chat', href: '#' },
  { text: 'Discord', href: '#' },
];

const sourceLinks = [
  { text: 'Docs', href: '#' },
  { text: 'Media Kit', href: '#' },
  { text: 'Terms and Conditions', href: '#' },
];

export const FooterLinks = () => {
  return (
    <div className="flex gap-y-8 max-md:flex-col sm:gap-5">
      <LinkColumn title="Official Links" links={officialLinks} />
      <LinkColumn title="Community" links={communityLinks} />
      <LinkColumn title="Sources" links={sourceLinks} />
    </div>
  );
};
