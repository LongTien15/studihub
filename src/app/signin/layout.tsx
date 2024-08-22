import type { Metadata } from 'next';
import { cn } from '@/libs/utils';
import '../globals.css';
import { raleway } from '../fonts';


export const metadata: Metadata = {
  title: 'Studihub - Authenticated',
  description: 'Web3 ELearning application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(raleway.className, 'lining-nums')}>{children}</body>
    </html>
  );
}
