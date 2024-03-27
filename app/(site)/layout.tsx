import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import localFont from 'next/font/local';

import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';

import metaInfo from '@/data/meta/home.json';
import footer from '@/data/footer.json';

import './globals.css';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

const {
  title,
  description,
  keywords,
  manifest,
  twitter,
  openGraph,
  icons,
  robots,
} = metaInfo;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: baseUrl,
  },
  manifest,
  keywords,
  twitter,
  openGraph: { ...openGraph, url: `${baseUrl}` },
  icons,
  robots,
};

const mulish = Mulish({
  subsets: ['cyrillic'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-mulish',
});

const fixelDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/fixelDisplay-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/fixelDisplay-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/fixelDisplay-semiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/fixelDisplay-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-fixelDisplay',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fixelDisplay.variable} ${mulish.variable} bg-customBackground box-border`}
      >
        <Header className="fixed w-full h-10 md:h-[68px] xl:h-20 z-10 bg-white font-fixel" />

        <main className="flex min-h-screen flex-col pt-[40px] md:pt-[68px] xl:pt-[80px]">
          {children}
        </main>
        <Footer footer={footer} sheet={'main'} />
      </body>
    </html>
  );
}
