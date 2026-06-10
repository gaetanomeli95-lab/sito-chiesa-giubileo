import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import { SITE_URL } from '@/lib/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Senza Misura — Corrado Salmè',
    template: '%s | Senza Misura',
  },
  description:
    'Materiali gratuiti: predicazioni, musica cristiana, libri e insegnamenti biblici. Ministero Senza Misura di Corrado Salmè.',
  keywords: [
    'Senza Misura',
    'Corrado Salmè',
    'predicazioni',
    'musica cristiana',
    'insegnamenti biblici',
    'Giubileo',
    'vangelo',
    'chiesa evangelica',
  ],
  authors: [{ name: 'Corrado Salmè', url: SITE_URL }],
  creator: 'Corrado Salmè',
  openGraph: {
    title: 'Senza Misura — Corrado Salmè',
    description: 'Predicazioni, Musica e Insegnamenti Biblici',
    type: 'website',
    locale: 'it_IT',
    siteName: 'Senza Misura',
    url: '/',
    images: [
      {
        url: '/hero/hero-4.jpg',
        width: 1200,
        height: 630,
        alt: 'Senza Misura — Ministero di Corrado Salmè',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senza Misura — Corrado Salmè',
    description: 'Predicazioni, Musica e Insegnamenti Biblici',
    images: ['/hero/hero-4.jpg'],
    creator: '@senzamisura',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        <a href="#main" className="skip-link">
          Salta al contenuto principale
        </a>
        {children}
      </body>
    </html>
  );
}
