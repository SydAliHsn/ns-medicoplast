import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'NS Medicoplast',
  description: 'Created with NS Medicoplast',
  applicationName: 'NS Medicoplast',
  appleWebApp: {
    title: 'NS Medicoplast',
    capable: true,
  },
};

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={manrope.variable}
    >
      <body>{children}</body>
    </html>
  );
}
