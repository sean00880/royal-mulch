import type { Metadata } from 'next';
import { Inter, Archivo, JetBrains_Mono, Roboto } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

// ============================================================================
// FONT CONFIGURATION - SOTA Typography System
// Following normie-tool and southern-haulers patterns
// Using thin/light weights (200) for professional, modern aesthetic
// ============================================================================

/** Inter - Primary sans-serif for body text */
const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', 'Arial', 'sans-serif'],
});

/** Archivo - Display font for headings (thin weight for elegant look) */
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-archivo',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

/** JetBrains Mono - Monospace for code and technical content */
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-mono',
  display: 'swap',
  fallback: ['Fira Code', 'Consolas', 'monospace'],
});

/** Roboto - Alternative sans for UI elements */
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
  fallback: ['system-ui', 'Arial', 'sans-serif'],
});

// ============================================================================
// METADATA
// ============================================================================

export const metadata: Metadata = {
  title: 'Royal Mulch | Premium Mulch Delivery & Pickup - Lancaster, OH',
  description: 'Premium triple ground mulch delivered to your door in Lancaster, OH and Fairfield County. Black, brown, and natural mulch available for delivery or pickup.',
  keywords: [
    'mulch delivery Lancaster Ohio',
    'mulch pickup Lancaster OH',
    'black mulch delivery',
    'brown mulch delivery',
    'natural mulch',
    'triple ground mulch',
    'bulk mulch delivery',
    'mulch near me',
    'Fairfield County mulch',
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
    title: 'Royal Mulch | Premium Mulch Delivery & Pickup - Lancaster, OH',
    description: 'Premium triple ground mulch delivered to your door in Lancaster, OH and Fairfield County. Black, brown, and natural mulch available for delivery or pickup.',
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
    title: 'Royal Mulch | Premium Mulch Delivery & Pickup - Lancaster, OH',
    description: 'Premium triple ground mulch delivered to your door in Lancaster, OH and Fairfield County. Black, brown, and natural mulch available for delivery or pickup.',
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

// ============================================================================
// ROOT LAYOUT
// ============================================================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${inter.variable}
          ${archivo.variable}
          ${jetbrainsMono.variable}
          ${roboto.variable}
          font-inter
          antialiased
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
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
