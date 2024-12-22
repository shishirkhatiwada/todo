import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { TrpcProvider } from '@/lib/providers/trpc';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'T3 Todo App',
  description: 'A todo app built with the T3 stack',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TrpcProvider>{children}</TrpcProvider>
      </body>
    </html>
  );
}