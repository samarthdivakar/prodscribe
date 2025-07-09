import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prodscribe - AI Product Description Generator',
  description: 'AI-powered product description generator that helps businesses create compelling, SEO-optimized product descriptions.',
  keywords: ['AI', 'product description', 'generator', 'SEO', 'e-commerce'],
  authors: [{ name: 'Prodscribe Team' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
} 