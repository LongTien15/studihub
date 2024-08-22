import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
//
import { auth } from '~/auth';
//
import { cn } from '@/libs/utils';
import { ThemeProvider } from '@/components/theme-provider';
//
import '../globals.css';
import { raleway } from '../fonts';
import { Header } from './_sections/header';
import { Footer } from './_sections/footer';

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (!session) {
    return redirect('/signin');
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          raleway.className,
          "flex min-h-svh flex-col bg-[url('/images/bg.svg')] bg-cover !pt-[88px] lining-nums sm:!pt-[154px]"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header logo="/images/app/home-page/logo.png" session={session} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
