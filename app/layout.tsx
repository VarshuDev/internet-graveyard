import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Cinzel } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CommandPalette } from '@/components/CommandPalette';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cinzel',
  weight: ['400', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://internet-graveyard-seven.vercel.app'),
  title: 'Internet Graveyard — We Archive What Disappeared',
  description: 'A digital archaeology platform documenting, verifying, and preserving websites, apps, online services, games, and communities that have died, been abandoned, or turned into zombie platforms.',
  keywords: [
    'internet graveyard',
    'dead websites',
    'defunct services',
    'digital archaeology',
    'internet history',
    'vine memorial',
    'google reader shutdown',
    'abandoned apps'
  ],
  authors: [
    { name: 'Varshan (VarshuDev)', url: 'https://github.com/VarshuDev' },
    { name: 'Internet Graveyard Preservation Guild' }
  ],
  creator: 'Varshan (VarshuDev)',
  openGraph: {
    title: 'Internet Graveyard — We Archive What Disappeared',
    description: 'The internet forgets. We archive what disappeared. Explore memorials, death causes, evidence dossiers, and the decade timeline of defunct internet services.',
    type: 'website',
    siteName: 'Internet Graveyard',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Internet Graveyard — We Archive What Disappeared'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Internet Graveyard — We Archive What Disappeared',
    description: 'The internet forgets. We archive what disappeared.',
    images: ['/api/og']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`dark scroll-smooth ${inter.variable} ${jetbrainsMono.variable} ${cinzel.variable}`}
    >
      <body className="bg-graveyard-900 text-zinc-100 font-sans min-h-screen flex flex-col antialiased selection:bg-red-500/30 selection:text-white bg-archival-grid">
        <CommandPalette />
        <Navbar />
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
