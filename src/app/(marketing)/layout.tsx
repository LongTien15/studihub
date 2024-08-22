import type { Metadata } from 'next';
import { cn } from '@/libs/utils';
import { ThemeProvider } from '@/components/theme-provider';
import '../globals.css';
import { raleway } from '../fonts';
import { Web3Modal } from '../connect-wallet/components/config';

export const metadata: Metadata = {
  title: 'Studihub - Online Learning Platform',
  description:
    'Studihub aims to transform education through cutting-edge technology, providing accessible and transparent learning opportunities for everyone, and helping learners realize their full potential',
  openGraph: {
    type: 'website',
    images: [
      {
        url: '/images/opengraph.png',
        alt: 'Open Graph Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: '/images/opengraph.png',
        alt: 'Twitter Image',
      },
    ],
  },
  icons: {
    icon: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn(raleway.className, 'lining-nums', "bg-[url('/images/bg.svg')] bg-cover")}>
        <div className="relative flex flex-col overflow-x-hidden">
          <Web3Modal>{children}</Web3Modal>
        </div>
      </body>
    </html>
  );
}
