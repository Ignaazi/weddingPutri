import type { Metadata } from 'next';
import { Cinzel, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const sans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

const cinzel = Cinzel({ 
  subsets: ['latin'],
  variable: '--font-cinzel',
});

export const metadata: Metadata = {
  title: 'The Wedding of Putri & Azzakir',
  description: 'Undangan Pernikahan Putri Andini Wonte & Azzakir Fathul Arrafi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`scroll-smooth ${sans.variable} ${playfair.variable} ${cinzel.variable}`}>
      <body className="bg-[#120E0B] text-[#F5EBE6] font-sans antialiased selection:bg-amber-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}