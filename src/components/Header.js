'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu when clicking a link
  const closeMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled || mobileMenuOpen ? 'scrolled' : ''}`}>
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
        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link href="/heritage" onClick={closeMenu}>Our Heritage</Link>
          <Link href="/accommodation" onClick={closeMenu}>Accommodation</Link>
          <Link href="/wellness" onClick={closeMenu}>Wellness</Link>
          <Link href="/kozhikode" onClick={closeMenu}>Discover Kozhikode</Link>
          <Link href="/gallery" onClick={closeMenu}>Gallery</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
          <div className="nav-buttons">
            <Link href="/contact#enquiry" onClick={closeMenu}>
              <button className={scrolled || mobileMenuOpen ? "btn-outline" : "btn-outline-gold"} style={{ padding: '8px 16px', fontSize: '0.75rem' }}>Enquire Now</button>
            </Link>
            <Link href="/contact#enquiry" onClick={closeMenu}>
              <button className="btn-primary" style={{ padding: '8px 24px', fontSize: '0.75rem' }}>Book Your Stay</button>
            </Link>
          </div>
        </nav>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
    </header>
  );
}
