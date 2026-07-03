'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="Hotel Neelagiri Heritage Logo" 
              width={160} 
              height={80} 
              style={{ objectFit: 'contain', width: '160px', height: 'auto' }}
              priority
            />
          </Link>
        </div>
        <nav className="nav-links">
          <Link href="/heritage">Our Heritage</Link>
          <Link href="/accommodation">Accommodation</Link>
          <Link href="/wellness">AVVVS Wellness</Link>
          <Link href="/kozhikode">Discover Kozhikode</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
          <div style={{ display: 'flex', gap: '10px', marginLeft: '0.5rem', whiteSpace: 'nowrap' }}>
            <Link href="/contact#enquiry">
              <button className={scrolled ? "btn-outline" : "btn-outline-gold"} style={{ padding: '8px 16px', fontSize: '0.75rem' }}>Enquire Now</button>
            </Link>
            <button className="btn-primary" style={{ padding: '8px 24px', fontSize: '0.75rem' }}>Book Your Stay</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
