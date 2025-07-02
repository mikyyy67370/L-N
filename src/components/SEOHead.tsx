import Head from 'next/head';

export default function SEOHead() {
  return (
    <Head>
      <title>L&N Reinigung - Endreinigung, Büroreinigung, Umzugsreinigung Schweiz</title>
      <meta name="description" content="L&N Reinigung: Schweizer Reinigungsfirma für Endreinigung mit Abgabegarantie, Büroreinigung, Umzugsreinigung, Teppich- & Polsterreinigung. 650+ zufriedene Kunden. Gratis Offerte. Zürich, ganze Schweiz." />
      <meta name="keywords" content="Reinigung, Endreinigung, Umzugsreinigung, Büroreinigung, Polsterreinigung, Teppichreinigung, Fensterreinigung, Zürich, Schweiz, Reinigungsfirma, Abgabegarantie, professionelle Reinigung, L&N Reinigung" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="L&N Reinigung - Endreinigung, Büroreinigung, Umzugsreinigung Schweiz" />
      <meta property="og:description" content="L&N Reinigung: Schweizer Reinigungsfirma für Endreinigung mit Abgabegarantie, Büroreinigung, Umzugsreinigung, Teppich- & Polsterreinigung. 650+ zufriedene Kunden. Gratis Offerte. Zürich, ganze Schweiz." />
      <meta property="og:url" content="https://ln-reinigung.ch" />
      <meta property="og:site_name" content="L&N Reinigung" />
      <meta property="og:image" content="/images/hero.jpg" />
      <meta property="og:locale" content="de_CH" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@lnreinigung" />
      <meta name="twitter:title" content="L&N Reinigung - Endreinigung, Büroreinigung, Umzugsreinigung Schweiz" />
      <meta name="twitter:description" content="L&N Reinigung: Schweizer Reinigungsfirma für Endreinigung mit Abgabegarantie, Büroreinigung, Umzugsreinigung, Teppich- & Polsterreinigung. 650+ zufriedene Kunden. Gratis Offerte. Zürich, ganze Schweiz." />
      <meta name="twitter:image" content="/images/hero.jpg" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      {/* Schema.org LocalBusiness */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
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
    </Head>
  );
} 