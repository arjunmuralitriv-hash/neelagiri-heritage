import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Hotel Neelagiri Heritage | A Smart Business Hotel in Kozhikode',
  description: 'Experience the ultimate luxury and heritage at Hotel Neelagiri by Citrine.',
  icons: {
    icon: '/favcon.png',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Hotel Neelagiri Heritage",
  "description": "Experience the ultimate luxury and heritage at Hotel Neelagiri Heritage. A Smart Business Hotel located in Kozhikode.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Opposite Kozhikode Railway Station, Annie Hall Road, Palayam",
    "addressLocality": "Kozhikode",
    "addressRegion": "Kerala",
    "postalCode": "673002",
    "addressCountry": "IN"
  },
  "telephone": "+918075838228",
  "email": "info@neelagiriheritage.com",
  "url": "https://neelagiriheritage.com",
  "image": "https://neelagiriheritage.com/images/hero.jpg",
  "checkinTime": "14:00",
  "checkoutTime": "12:00",
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Ayurveda Wellness",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Boardroom",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Air Conditioning",
      "value": true
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
