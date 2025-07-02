import type { Metadata } from 'next'
import { Inter, Playfair_Display, Lato } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})
const lato = Lato({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ln-reinigung.ch'),
  title: 'L&N Reinigung - Endreinigung, Büroreinigung, Umzugsreinigung Schweiz',
  description: 'L&N Reinigung - Ihr Spezialist für Endreinigung, Umzugsreinigung, Büroreinigung, Teppich- & Polsterreinigung. 650+ zufriedene Kunden. Gratis Offerte. Zürich, ganze Schweiz.',
  keywords: 'Reinigung, Endreinigung, Umzugsreinigung, Büroreinigung, Polsterreinigung, Teppichreinigung, Fensterreinigung, Zürich, Schweiz, Reinigungsfirma, Abgabegarantie, professionelle Reinigung, L&N Reinigung',
  authors: [{ name: 'L&N Reinigung' }],
  openGraph: {
    title: 'L&N Reinigung - Endreinigung, Büroreinigung, Umzugsreinigung Schweiz',
    description: 'L&N Reinigung - Ihr Spezialist für Endreinigung, Umzugsreinigung, Büroreinigung, Teppich- & Polsterreinigung. 650+ zufriedene Kunden. Gratis Offerte. Zürich, ganze Schweiz.',
    url: 'https://ln-reinigung.ch',
    siteName: 'L&N Reinigung',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'L&N Reinigung - Schweizer Reinigungsfirma',
      },
    ],
    locale: 'de_CH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@lnreinigung',
    title: 'L&N Reinigung - Endreinigung, Büroreinigung, Umzugsreinigung Schweiz',
    description: 'L&N Reinigung - Ihr Spezialist für Endreinigung, Umzugsreinigung, Büroreinigung, Teppich- & Polsterreinigung. 650+ zufriedene Kunden. Gratis Offerte. Zürich, ganze Schweiz.',
    images: ['/images/hero.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de-CH">
      <head>
        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'L&N Reinigung',
            image: 'https://ln-reinigung.ch/images/hero.jpg',
            '@id': 'https://ln-reinigung.ch',
            url: 'https://ln-reinigung.ch',
            telephone: '+41 76 123 45 67',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Zürich',
              addressLocality: 'Zürich',
              postalCode: '8000',
              addressCountry: 'CH',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 47.3769,
              longitude: 8.5417,
            },
            openingHoursSpecification: [{
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
              ],
              opens: '08:00',
              closes: '18:00',
            }],
            sameAs: [
              'https://www.facebook.com/lnreinigung',
              'https://www.instagram.com/lnreinigung',
            ],
            priceRange: '$$',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5',
              reviewCount: '650',
            },
          })
        }} />
      </head>
      <body className={`${inter.className} ${playfair.variable} ${lato.variable}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
} 