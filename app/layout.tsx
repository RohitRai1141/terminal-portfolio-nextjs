import './globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rohit Rai - Developer Portfolio',
  description: 'Full-stack developer portfolio in terminal style',
  keywords: ['developer', 'portfolio', 'terminal', 'full-stack', 'React', 'Next.js'],
  authors: [{ name: 'Rohit Rai' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
        {children}
      </body>
    </html>
  );
}