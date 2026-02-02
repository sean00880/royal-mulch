import type { Metadata } from 'next';
import { Inter, Roboto_Condensed } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Royal Mulch | Premium Landscaping & Mulch Services - Lancaster, OH',
  description: 'Lancaster, OH\'s premier landscaping supply and service provider. Quality mulch, stone, soil products, and professional landscape services since 1995.',
  keywords: [
    'mulch',
    'landscaping',
    'Lancaster Ohio',
    'landscape design',
    'mulch delivery',
    'decorative stone',
    'topsoil',
    'tree services',
    'hardscaping',
    'Royal Mulch',
  ],
  authors: [{ name: 'Royal Mulch' }],
  creator: 'Royal Mulch',
  publisher: 'Royal Mulch',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://royalmulch.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://royalmulch.com',
    title: 'Royal Mulch | Premium Landscaping & Mulch Services - Lancaster, OH',
    description: 'Lancaster, OH\'s premier landscaping supply and service provider. Quality mulch, stone, soil products, and professional landscape services since 1995.',
    siteName: 'Royal Mulch',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Royal Mulch - Premium Landscaping Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Royal Mulch | Premium Landscaping & Mulch Services - Lancaster, OH',
    description: 'Lancaster, OH\'s premier landscaping supply and service provider. Quality mulch, stone, soil products, and professional landscape services since 1995.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoCondensed.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          storageKey="royal-mulch-theme"
          themes={['light', 'dark']}
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
