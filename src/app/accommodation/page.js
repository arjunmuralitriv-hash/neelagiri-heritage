'use client';

import styles from '../shared.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Wifi, Wind, BedDouble, Briefcase, Sparkles, Clock, Plane, Utensils, Presentation, Accessibility } from 'lucide-react';

export default function Accommodation() {
  return (
    <main>
      <header className={styles.pageHeader} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2000&auto=format&fit=crop')" }}>
        <div className={styles.pageOverlay}></div>
        <div className={styles.pageHeaderContent}>
          <h1 className={`${styles.pageTitle} fade-in delay-1`}>Thoughtfully Designed Spaces</h1>
          <p className={`${styles.pageSubtitle} fade-in delay-2`}>Discover accommodation that blends comfort, functionality, and understated elegance.</p>
        </div>
      </header>

      <section className="container">
        <div className={styles.grid} style={{ marginBottom: '80px' }}>
          <div className={styles.card}>
            <Image src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop" alt="Smart Room" width={800} height={500} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <div className={styles.cardContent}>
              <h3>Smart Rooms</h3>
              <p>Perfect for solo travellers and short business visits.</p>
              <br />
              <p>Ideal for guests seeking efficiency without compromising comfort.</p>
              <Link href="/accommodation/smart-rooms" className="btn-outline" style={{ marginTop: 'auto', width: '100%', padding: '10px', textAlign: 'center' }}>View More</Link>
            </div>
          </div>

          <div className={styles.card}>
            <Image src="/images/business-suite.jpg" alt="Business Suite" width={800} height={500} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <div className={styles.cardContent}>
              <h3>Business Suites</h3>
              <p>Created for professionals requiring additional space, privacy, and productivity during extended stays.</p>
              <Link href="/accommodation/business-suites" className="btn-outline" style={{ marginTop: 'auto', width: '100%', padding: '10px', textAlign: 'center' }}>View More</Link>
            </div>
          </div>

          <div className={styles.card}>
            <Image src="/images/premium-suite.jfif" alt="Premium Suite" width={800} height={500} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <div className={styles.cardContent}>
              <h3>Premium Suite</h3>
              <p>Our finest accommodation offers spacious interiors, elegant furnishings, and an elevated stay experience.</p>
              <Link href="/accommodation/premium-suite" className="btn-outline" style={{ marginTop: 'auto', width: '100%', padding: '10px', textAlign: 'center' }}>View More</Link>
            </div>
          </div>
        </div>

        <div className={styles.contentBlock}>
          <h2 className={styles.blockTitle}>Amenities & Guest Services</h2>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', listStyle: 'none', padding: 0, marginTop: '40px' }}>
            {[
              { name: 'Complimentary Wi-Fi', icon: <Wifi size={22} strokeWidth={1.5} color="var(--primary-violet)" /> },
              { name: 'Air Conditioning', icon: <Wind size={22} strokeWidth={1.5} color="var(--primary-violet)" /> },
              { name: 'Comfortable Bedding', icon: <BedDouble size={22} strokeWidth={1.5} color="var(--primary-violet)" /> },
              { name: 'Work Desk', icon: <Briefcase size={22} strokeWidth={1.5} color="var(--primary-violet)" /> },
              { name: 'Daily Housekeeping', icon: <Sparkles size={22} strokeWidth={1.5} color="var(--primary-violet)" /> },
              { name: '24-Hour Reception', icon: <Clock size={22} strokeWidth={1.5} color="var(--primary-violet)" /> },
              { name: 'Airport Transfers', icon: <Plane size={22} strokeWidth={1.5} color="var(--primary-violet)" /> },
              { name: 'Meal Arrangements', icon: <Utensils size={22} strokeWidth={1.5} color="var(--primary-violet)" /> },
              { name: 'Boardroom Access', icon: <Presentation size={22} strokeWidth={1.5} color="var(--primary-violet)" /> },
              { name: 'Accessibility Options', icon: <Accessibility size={22} strokeWidth={1.5} color="var(--primary-violet)" /> }
            ].map((item, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '18px 24px', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '4px', fontSize: '0.95rem', color: 'var(--text-dark)', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.05)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)'; }}>
                <div style={{ padding: '10px', backgroundColor: '#f8f8fa', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.icon}
                </div>
                <span style={{ fontWeight: '500' }}>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
