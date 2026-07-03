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
  title: 'Hotel Neelagiri Heritage | Luxury Retreat',
  description: 'Experience the ultimate luxury and heritage at Hotel Neelagiri by Citrine.',
  icons: {
    icon: '/favcon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
