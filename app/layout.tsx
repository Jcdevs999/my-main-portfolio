import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: '300', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jan Christian Portfolio',
  description: 'Portfolio of Jan Christian, showcasing skills and projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
