import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
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
  title: 'Senza Misura — Corrado Salmè | Predicazioni, Musica, Insegnamenti',
  description:
    'Perché colui che Dio ha mandato, proferisce le parole di Dio, perché Dio non dà lo Spirito con misura. Giovanni 3:34. Materiali gratuiti: predicazioni, musica, libri e insegnamenti.',
  keywords: ['Senza Misura', 'Corrado Salmè', 'predicazioni', 'musica cristiana', 'insegnamenti biblici', 'Giubileo'],
  authors: [{ name: 'Corrado Salmè' }],
  openGraph: {
    title: 'Senza Misura — Corrado Salmè',
    description: 'Predicazioni, Musica e Insegnamenti Biblici',
    type: 'website',
    locale: 'it_IT',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
