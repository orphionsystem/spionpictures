import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Spion Pictures | Sanat, ekranda bitmez',
    template: '%s | Spion Pictures'
  },
  description: 'Özgün dijital sanat eserleri. Fiziksel dünyada yaşamak için tasarlanmış koleksiyonlar.',
  keywords: ['dijital sanat', 'fine art baskı', 'sanat eseri', 'koleksiyon', 'contemporary art', 'limited edition'],
  authors: [{ name: 'Spion Pictures' }],
  creator: 'Spion Pictures',
  publisher: 'Spion Pictures',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
    languages: {
      'tr': '/tr',
      'en': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: 'en_US',
    url: '/',
    title: 'Spion Pictures | Sanat, ekranda bitmez',
    description: 'Özgün dijital sanat eserleri. Fiziksel dünyada yaşamak için tasarlanmış koleksiyonlar.',
    siteName: 'Spion Pictures',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spion Pictures | Sanat, ekranda bitmez',
    description: 'Özgün dijital sanat eserleri. Fiziksel dünyada yaşamak için tasarlanmış koleksiyonlar.',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
