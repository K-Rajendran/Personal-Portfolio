import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const fontDisplay = Inter({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
export const fontText = Inter({ subsets: ['latin'], variable: '--font-text', display: 'swap' });

export const metadata: Metadata = {
  title: 'Rajendran K. — Backend Engineer',
  description: 'Backend engineer focused on distributed systems, cloud-native infrastructure, and measurable performance.',
};

export const viewport: Viewport = { themeColor: '#f7f7fc', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning><body className={`${fontDisplay.variable} ${fontText.variable}`}>{children}</body></html>;
}
