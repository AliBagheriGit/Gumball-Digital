import type { Metadata } from 'next';
import { Montserrat, Open_Sans, Vazirmatn } from 'next/font/google';
import './globals.css';
import './gumball.css';
import { LanguageProvider } from '@/lib/LanguageContext';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-opensans',
  display: 'swap',
});

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gumball Digital',
  description: 'Flavorful Marketing for Serious Growth - Decades of Experience and Innovative Minds: Fueling Your Growth with Our Passion for Excellence',
  icons: {
    icon: '/assets/65dd05d6ffc04798b2d5d124_favicon.png',
    apple: '/assets/65dd05dd4913db84d23e09eb_Icon.png',
  },
  openGraph: {
    title: 'Gumball Digital',
    description: 'Flavorful Marketing for Serious Growth',
    url: 'https://www.gumball.io',
    siteName: 'Gumball Digital',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gumball Digital',
    description: 'Flavorful Marketing for Serious Growth',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} ${vazirmatn.variable}`}
      suppressHydrationWarning
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
