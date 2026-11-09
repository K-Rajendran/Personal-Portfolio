import type { Metadata, Viewport } from 'next';
import { fontDisplay, fontText } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rajendran K. — Backend Engineer',
  description: 'Backend engineer focused on distributed systems, cloud-native infrastructure, and measurable performance.',
};

export const viewport: Viewport = { themeColor: '#f7f7fc', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning><body className={`${fontDisplay.variable} ${fontText.variable}`}>{children}</body></html>;
}
