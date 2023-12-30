import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Versindito',
  description: 'Created By Gégény Benjamin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-slate-50 bg-gradient-to-r from-emerald-900 to-gray-800`}>
        <Header />
          {children}
      </body>
    </html>
  )
}
