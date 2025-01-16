import '../styles/globals.css';

import type { Metadata } from 'next';
import { Mulish, Poppins } from 'next/font/google';

import Analytics from './Analytics';
import Providers from './Providers';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Nishchay',
    default: 'ClipSwift | AI-powered All-in-One brand manager for social media',
  },
  description: 'AI-powered All-in-One brand manager for social media',
  icons: ['/svg/symbol.svg'],
  keywords: ['social media', 'brand manager', 'motion design', 'video editing', 'video ads'],
  authors: [
    {
      name: 'ClipSwift',
    },
  ],
  creator: 'ClipSwift',
  metadataBase: new URL('https://www.clip-swift.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.clip-swift.com',
    title: 'ClipSwift | AI-powered All-in-One brand manager for social media',
    description: 'AI-powered All-in-One brand manager for social media',
    siteName: 'AI-powered All-in-One brand manager',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <Analytics />
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
