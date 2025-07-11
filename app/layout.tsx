import type { Metadata } from 'next';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Manrope } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'NS Medicoplast',
  description: 'Delivering quality supplies for better healthcare outcomes',
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
      <body>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
